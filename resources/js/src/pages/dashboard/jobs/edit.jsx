import { useCallback, useEffect, useState } from 'react';
import { Box, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Seo } from '@/components/seo';
import { usePageView } from '@/hooks/use-page-view';
import  JobCreateForm  from '@/sections/dashboard/jobs/job-create-form';
import { getCurrentJob } from '@/actions';
import { useDispatch } from 'react-redux';

const Page = () => {
  usePageView();
  const dispatch= useDispatch();
  const jobID = window.location.pathname.split("/")[window.location.pathname.split("/").length-1];

  useEffect(() =>{
    dispatch(getCurrentJob(jobID));
  },[])
  return (
    <>
      <Seo title="Dashboard: Job Create" />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexGrow: 1
        }}
      >
        <Grid
          container
          sx={{ flexGrow: 1 }}
        >
          <Grid
            xs={12}
            md={4}
            sx={{
              backgroundImage: 'url(/assets/people-talking.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: {
                xs: 'none',
                md: 'block'
              }
            }}
          />
          <Grid
            xs={12}
            md={8}
            sx={{
              p: {
                xs: 4,
                sm: 6,
                md: 8
              }
            }}
          >
            <Stack
              // maxWidth="sm"
              spacing={3}
            >
              <Typography variant="h4">
                Edit Job Listing
              </Typography>
              <JobCreateForm isEdit={true} jobID = {jobID}/>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Page;
