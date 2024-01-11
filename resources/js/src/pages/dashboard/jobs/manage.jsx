import { useCallback, useEffect, useState } from 'react';
import ChevronLeftIcon from '@untitled-ui/icons-react/build/esm/ChevronLeft';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  SvgIcon,
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
import { SimpleJobCard } from '@/sections/dashboard/jobs/simplejobcard';
import { AppCard } from './app_card';
import { JobListSearch } from '@/sections/dashboard/jobs/job-list-search';
import { useSettings } from '@/hooks/use-settings';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import EmptyInvited from './empty_invited';
import "./manage.css";
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

  useEffect(() => {
    handleCompaniesGet();
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return companies;
};
const tabs = [
  { label: "Applicants", value: "applicants" },
  { label: "Job listing", value: "joblisting" },
  { label: "Offer", value: "offer" },
  { label: "Invited Influencers", value: "invitedinfluencers" },
] 
const Page = () => {
  const companies = useCompanies();
  const settings = useSettings();
  const [currentTab, setCurrentTab] = useState("applicants");
  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);
  usePageView();

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
        <Container  maxWidth={settings.stretch ? false : 'xl'}>
          <Typography variant="h4">
            Manage Jobs
          </Typography>
          <Typography variant="text.secondary" sx={{mt:20}}>
            Back
          </Typography>
          <SimpleJobCard
            company={companies.length>0?companies[0]:{}}
            />
          <div className='top'>
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
                  className='custom-tab'
                  sx={{ fontSize: 18 }}
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
            <Box>
              {currentTab == 'applicants' && (
                <>
                {/* <AppCard /> */}
                </>
              )}
              {currentTab == 'joblisting' && (
                <></>
              )}
              {currentTab == 'offer' && (
                <></>
              )}
              {currentTab == 'invitedinfluencers' && (
                <>
                    <EmptyInvited />
                </>
              )}
            </Box>

          </div>
          <Stack
            spacing={4}
            sx={{ mt: 4 }}
          >

            <Stack
              alignItems="center"
              direction="row"
              justifyContent="flex-end"
              spacing={2}
              sx={{
                px: 3,
                py: 2
              }}
            >
              <IconButton disabled>
                <SvgIcon fontSize="small">
                  <ChevronLeftIcon />
                </SvgIcon>
              </IconButton>
              <IconButton>
                <SvgIcon fontSize="small">
                  <ChevronRightIcon />
                </SvgIcon>
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Page;
