import { useCallback, useEffect, useState, useRef } from 'react';
import ChevronLeftIcon from '@untitled-ui/icons-react/build/esm/ChevronLeft';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  SvgIcon,
  InputAdornment,
  OutlinedInput,
  Tabs,
  Tab,
  Card,
  Input,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { jobsApi } from '@/api/jobs';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { useMounted } from '@/hooks/use-mounted';
import { usePageView } from '@/hooks/use-page-view';
import { paths } from '@/paths';
import JobCard from '@/sections/dashboard/jobs/company-card';
import { JobListSearch } from '@/sections/dashboard/jobs/job-list-search';
import { useSettings } from '@/hooks/use-settings';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import { getJobs } from '@/actions';
import { useDispatch } from 'react-redux';
import './manage.css';
import { connect } from 'react-redux';
const useCompanies = () => {
  const isMounted = useMounted();
  const [companies, setCompanies] = useState([]);

  const handleCompaniesGet = useCallback(async () => {
    try {
      const response = await jobsApi.getCompanies();

      if (isMounted()) {
        setCompanies(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);
  useEffect(
    () => {
      handleCompaniesGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return companies;
};
const tabs = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Archived', value: 'archived' }
];
const Page = (props) => {
  let obj = {
    time: new Date().getTime(),
    value: 'email',
    expire: 3000000
  };
  // You can only store strings
  let objStr = JSON.stringify(obj);
  localStorage.setItem('time_token', objStr);
  const { jobs } = props;
  const [viewJobs, setviewJobs] = useState([]);
  const companies = useCompanies();
  const settings = useSettings();
  const email = JSON.parse(localStorage.getItem('email'));
  const [currentTab, setCurrentTab] = useState('all');
  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);
  const dispatch = useDispatch();
  usePageView();
  useEffect(() => {
    setviewJobs(jobs);
  }, [jobs]);
  useEffect(() => {
    dispatch(getJobs(email, 1));
  }, []);
  const queryRef = useRef(null);
  const handleQueryChange = useCallback((event) => {
    event.preventDefault();
    const query = queryRef.current?.value || '';
    let data = jobs.filter((job) => {
      if (typeof query !== 'undefined' && query !== '') {
        const containsQuery = (job.title || '')
          .toLowerCase()
          .includes(query.toLowerCase());

        if (!containsQuery) {
          return false;
        }
      }
      return true;
    });
    setviewJobs(data);
  }, []);
  return (
    <>
      <Seo title="Dashboard: Job Browse" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Typography variant="h4">Manage Jobs</Typography>
          <Stack
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            direction={{
              xs: 'column',
              sm: 'row'
            }}
          >
            <Stack alignItems="center" direction="row" spacing={3}>
              <Tabs
                indicatorColor="primary"
                onChange={handleTabsChange}
                scrollButtons="auto"
                textColor="primary"
                sx={{
                  p: 3
                }}
                value={currentTab}
                variant="scrollable"
              >
                {tabs.map((tab) => (
                  <Tab
                    className="custom-tab"
                    sx={{ fontSize: 18 }}
                    key={tab.value}
                    label={tab.label}
                    value={tab.value}
                  />
                ))}
              </Tabs>
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              className="part"
              spacing={2}
              sx={{ p: 1 }}
            >
              <Box
                component="form"
                onSubmit={handleQueryChange}
                sx={{ flexGrow: 1 }}
              >
                <OutlinedInput
                  defaultValue=""
                  fullWidth
                  inputProps={{ ref: queryRef }}
                  name="jobtitle"
                  placeholder="Search any of the jobs you have posted..."
                  startAdornment={
                    <InputAdornment position="start">
                      <SvgIcon>
                        <SearchMdIcon />
                      </SvgIcon>
                    </InputAdornment>
                  }
                />
              </Box>
            </Stack>
          </Stack>
          <Box>
            {currentTab == 'all' && (
              <>
                <Stack spacing={4}>
                  {viewJobs?.map((job) => (
                    <JobCard
                      key={job.id}
                      job={job}
                      active="all"
                      openBar={true}
                    />
                  ))}
                </Stack>
              </>
            )}
            {currentTab == 'active' && (
              <>
                <Stack spacing={4}>
                  {viewJobs?.map((job) =>
                    job.is_active == 1 ? (
                      <JobCard
                        key={job.id}
                        job={job}
                        openBar={true}
                        active="active"
                      />
                    ) : (
                      <></>
                    )
                  )}
                </Stack>
              </>
            )}
            {currentTab == 'archived' && (
              <>
                <Stack spacing={4}>
                  {viewJobs?.map((job) =>
                    job.is_active == 0 ? (
                      <JobCard
                        key={job.id}
                        job={job}
                        openBar={true}
                        active="archived"
                      />
                    ) : (
                      <></>
                    )
                  )}
                </Stack>
              </>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(Page);
