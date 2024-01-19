import { useCallback, useEffect, useState } from 'react';
import ChevronLeftIcon from '@untitled-ui/icons-react/build/esm/ChevronLeft';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import {
  Box,
  Button,
  Container,
  IconButton,
  Switch,
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
import SimpleJobCard  from '@/sections/dashboard/jobs/simplejobcard';
import { AppCard } from './app_card';
import { JobListSearch } from '@/sections/dashboard/jobs/job-list-search';
import { useSettings } from '@/hooks/use-settings';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import EmptyInvited from './empty_invited';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import { connect } from 'react-redux';
import { InfCard } from './inf_card';
import  JobCard  from '@/sections/dashboard/jobs/company-card';

import "./manage.css";
import "./inf_finder.css"
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
  { label: "Job listing", value: "joblisting" },
  { label: "Review Offers", value: "applicants" },
  { label: "Invited Influencers", value: "invitedinfluencers" },
  { label: "Hired", value: "hired" },
  
] 
const Page = (props) => {
  const {jobs} = props
  const companies = useCompanies();
  const settings = useSettings();
  const [currentTab, setCurrentTab] = useState("joblisting");
  const [applicants,setApplicants] = useState([])
  const [invited,setInvited] = useState([])
  const [hired,setHired] = useState([])
  const [rendered,setRendered] = useState(0)
  const [renderedhired,setRenderedHired] = useState(0)
  const [renderedinvited,setRenderedInvited] = useState(0)
  const email = JSON.parse(localStorage.getItem('email'));
  const onRerender = () => {
    setRendered(0);
    setRenderedHired(0);
    setRenderedInvited(0);
  }
  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);
  usePageView();
  const jobID = window.location.pathname.split("/")[window.location.pathname.split("/").length-1];
  const job = jobs?.filter(obj => {
    return obj.id == jobID
  })
  const handleChange = () => {
    // axios.post('/api/update_jobactivity', {jobID:jobID,isActive:job[0]?.is_active})
    axios.post('/api/update_jobactivity', {jobID:jobID,isActive:"1"})
    .then((response) => {
      dispatch(getJobs(email,1));
    }).catch(e => {
    });
  }
  if(rendered<1){
    axios.post('/api/get_applicants', {jobID:jobID,email:email})
    .then((response) => {
      setApplicants(response.data);
      setRendered(rendered+1);
    }).catch(e => {
    });
  }
  if(renderedhired<1){
    axios.post('/api/get_hired', {jobID:jobID,email:email})
    .then((response) => {
      setHired(response.data);
      setRenderedHired(renderedhired+1);
    }).catch(e => {
    });
  }
  if(renderedinvited<1){
    axios.post('/api/get_invited', {jobID:jobID,email:email})
    .then((response) => {
      setInvited(response.data);
     setRenderedInvited(renderedinvited+1);
    }).catch(e => {
    });
  }
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
            Manage Job
          </Typography>
          <Button size="small"
            sx={{py:3}}
            component={RouterLink}
            href={"/dashboard/jobs"}
            style={{ fontSize: 14 }}
          >
            <SvgIcon fontSize='2'>
                <ArrowLeftIcon />
              </SvgIcon>
            Back
          </Button>

          <SimpleJobCard
            order = {window.location.pathname.split("/")[window.location.pathname.split("/").length-1]}
            offer={false}
            />
          <div className='right-parent'>
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              textColor="primary"
              sx={{
                py: 3
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
            {currentTab == 'joblisting' && (
            <Stack direction="row" className="right-edit">
              <Stack direction="row">
                <Typography variant="text.secondary" sx={{fontSize:16,pt:0.8}}>
                  Close the job
                </Typography> 
                <Switch
                  checked={true}
                  onChange={handleChange}
                />
              </Stack>
              <Stack>
              <Button
                className='right-alone-btn'
                component={RouterLink}
                href={"/dashboard/jobs/edit/"+jobID}
                sx={{fontSize:15}}
                variant="contained"
              >
                Edit This Job Listing
              </Button>
              </Stack>
              
            </Stack>   
            )}
            <Box>
              {currentTab == 'applicants' && (
                <>
                {applicants?.map((applicant)=>{
                  return (
                  <InfCard 
                    key={applicant.id}
                    offer={false}
                    influencer={applicant.inf}
                    currentTab={applicant.tab}
                    onRerender = {onRerender}
                    invited = "0"
                  />
                  )
                })}
                
                </>
              )}
              {currentTab == 'joblisting' && (
                <>
                {job&&job[0]?(
                  <JobCard
                    job={job[0]}
                    openBar={false}
                    active="all"
                  />
                ):(<></>)}
                  
                </>
              )}
              {currentTab == 'hired' && (
                <>
                {hired?.map((hire)=>{
                  return (
                  <InfCard 
                    key={hire.id}
                    offer={false}
                    influencer={hire.inf}
                    onRerender = {onRerender}
                    currentTab={hire.tab}
                    invited="0"
                  />
                  )
                })}
                
                </>
              )}
              {currentTab == 'invitedinfluencers' && (
                <>
                {invited.length==0?(
                  <>
                      <EmptyInvited />
                  </>
                ):(
                  <>
                  {invited?.map((applicant)=>{
                  return (
                  <InfCard 
                    key={applicant.id}
                    influencer={applicant.inf}
                    onRerender = {onRerender}
                    currentTab={applicant.tab}
                    createdAt = {applicant.updated_at}
                    invited = "1"
                    offer={false}
                  />
                  )
                })}
                  </>
                )}
                </>

              )}
            </Box>

          </div>
          <Stack
            spacing={4}
            sx={{ mt: 4 }}
          >

            {/* <Stack
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
            </Stack> */}
          </Stack>
        </Container>
      </Box>
    </>
  );
};


const mapStateToProps = state => ({
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(Page);