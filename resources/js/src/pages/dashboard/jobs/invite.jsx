import { useCallback, useEffect, useState } from 'react';
import ChevronLeftIcon from '@untitled-ui/icons-react/build/esm/ChevronLeft';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';

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
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { usePageView } from '@/hooks/use-page-view';
import  JobCard  from '@/sections/dashboard/jobs/company-card';
import { useSettings } from '@/hooks/use-settings';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import { getJobs } from '@/actions';
import { useDispatch } from 'react-redux';
import "./manage.css";
import { connect } from 'react-redux';

const Page = (props) => {
  const {jobs} = props;
  const settings = useSettings();
  const email = JSON.parse(localStorage.getItem('email'))
  const dispatch = useDispatch();
  usePageView();
  useEffect(() => {
    dispatch(getJobs(email,1));
  }, []);
  return (
    <>
      <Seo title="Dashboard: Invite To Project" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container  maxWidth={settings.stretch ? false : 'xl'}>
          <Typography variant="h4">
            Invite to Project
          </Typography>
          <Stack
            justifyContent="space-between"
            spacing={2}
            direction={{
              xs: 'column',
              sm: 'row'
            }}
          >
            <Stack  alignItems="center" direction="row" spacing={3}>
                <Typography variant="h6" sx={{py:3}} color="primary">
                    <SvgIcon fontSize='2'>
                        <ArrowRightIcon />
                    </SvgIcon>
                    Active Jobs
                </Typography>
            </Stack>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{ p: 1 }}
              className='part'
            >
              <SvgIcon>
                <SearchMdIcon />
              </SvgIcon>
              <Box sx={{ flexGrow: 1 }}>
                <Input
                  disableUnderline
                  fullWidth
                  placeholder="Search any of the jobs you have posted..."
                />
              </Box>
            </Stack>
          </Stack>

          {/* <Button size="small"
            
            // component={RouterLink}
            // href={"/dashboard/jobs"}
            style={{ fontSize: 14 }}
          >
            
            
          </Button> */}
          {jobs?.length==0?(
            <>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 6
                        }}
                    >
                        <Box
                            alt="Internal server error"
                            component="img"
                            src="/assets/errors/timex.png"
                            sx={{
                            height: 'auto',
                            maxWidth: '100%',
                            width: 145
                            }}
                        />
                    </Box>
                    <Typography
                    align="center"
                    sx={{fontWeight:700,fontSize:28}}
                    >
                   No Current Active Job Listings
                    </Typography>
                    <Typography
                    align="center"
                    color="text.secondary"
                    sx={{ mt: 0.5,fontSize:16 }}
                    >
                    To proceed with inviting influencers, we kindly request that you first create a new job listing
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 2
                        }}
                    >
                        <Button
                            endIcon={(
                            <SvgIcon>
                                <ArrowRightIcon />
                            </SvgIcon>
                            )}
                            component={RouterLink}
                            variant="contained"
                            href="/dashboard/jobs/create"
                        >
                            Create a new job listing
                        </Button>
                    </Box>
                </Container>

            </>
          ):(
          <div className='top'>
          <Box>
              <Stack
              spacing={4}
              sx={{ mt: 4 }}
              >
              {jobs?.map((job) => job.is_active==1?(
                  <JobCard
                      key={job.id}
                      job={job}
                      openBar={false}
                      invite={true}
                      active="active"
                  />
              ):(<></>))}
              </Stack>
          </Box>

        </div>
          )}


        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = state => ({
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(Page);