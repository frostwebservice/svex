import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
  Divider,
  IconButton,
  Dialog,
  DialogContent,
  Button,
  Switch
} from '@mui/material';
import { Link } from 'react-router-dom';
import { RouterLink } from '@/components/router-link';
// import './manage.css';
import { getJobs } from '@/actions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const JobListCard = (props) => {
  const {
    onClose,
    userinfo,
    jobs,
    currentTab = '',
    infID = 0,
    groupID = 0,
    order = 0,
    isGroup = false,
    open = false,
    ...other
  } = props;
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem('email'));
  useEffect(() => {
    dispatch(getJobs(email, 1));
  }, []);
  const timeSince = (date1, date2) => {
    var seconds = Math.floor(
      (new Date(date2) - new Date(date1).getTime()) / 1000
    );
    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + ' years';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + ' months';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + ' days';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + ' hours';
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  };
  const inviteProject = (jobID) => {
    axios
      .post('/api/invite_influencer', {
        job_id: jobID,
        inf_id: infID,
        tab: currentTab
      })
      .then((response) => {
        toast.success('Invited to project successfuly!');
        onClose();
      })
      .catch((e) => {});
  };
  const inviteGroup = (jobID) => {
    if (order != '0') {
      axios
        .post('/api/invite_group', {
          job_id: jobID,
          group_id: groupID
        })
        .then((response) => {
          onClose();
        })
        .catch((e) => {});
    } else {
      axios
        .post('/api/invite_group', {
          job_id: jobID,
          email: email,
          group_id: 0
        })
        .then((response) => {
          onClose();
        })
        .catch((e) => {});
    }
  };
  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={onClose}>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={3}
        sx={{
          px: 3,
          py: 2
        }}
      >
        <Typography variant="h6">Select a Job</Typography>
        <IconButton color="inherit" onClick={onClose}>
          <SvgIcon>
            <XIcon />
          </SvgIcon>
        </IconButton>
      </Stack>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          {jobs?.filter((job) => job.is_active == '1').length == 0 && (
            <Card sx={{ mb: 3 }}>
              <Stack divider={<Divider />}>
                <Stack
                  alignItems="flex-start"
                  direction="row"
                  flexWrap="wrap"
                  justifyContent="space-between"
                  sx={{
                    px: 2,
                    py: 1.5
                  }}
                >
                  <Stack
                    alignItems="center"
                    direction="row"
                    spacing={2}
                    // className='right-panel'
                  >
                    <Box
                      component="span"
                      sx={{
                        flexGrow: 1,
                        fontFamily: (theme) => theme.typography.fontFamily,
                        fontSize: 14,
                        fontWeight: 600,
                        ml: 1
                      }}
                    >
                      There are no active jobs. Please click this link if you
                      want to create a new job.
                      <Link
                        style={{ marginLeft: 9 }}
                        to="/dashboard/jobs/create"
                        underline="always"
                      >
                        Create a Job
                      </Link>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          )}
          {jobs?.map((job) => {
            return job.is_active == '1' ? (
              <Card sx={{ mb: 3 }}>
                <Stack divider={<Divider />}>
                  <Stack
                    alignItems="flex-start"
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    sx={{
                      px: 2,
                      pt: 2
                    }}
                  >
                    {/* <div className='top'> */}
                    <Typography variant="subtitle1" sx={{ fontSize: 16 }}>
                      Job Title: {job.title}
                    </Typography>
                    <Stack
                      alignItems="center"
                      direction="row"
                      spacing={2}

                      // className='right-panel'
                    >
                      <Typography
                        color="text.secondary"
                        variant="caption"
                        style={{ fontSize: 12 }}
                      >
                        {timeSince(job.created_at, job.time)} ago
                      </Typography>
                      {isGroup ? (
                        <Button
                          onClick={() => inviteGroup(job.id)}
                          variant="contained"
                          size="small"
                          style={{ fontSize: 14 }}
                        >
                          Invite To this Project
                        </Button>
                      ) : (
                        <Button
                          onClick={() => inviteProject(job.id)}
                          variant="contained"
                          size="small"
                          style={{ fontSize: 14 }}
                        >
                          Invite To this Project
                        </Button>
                      )}
                    </Stack>

                    {/* </div> */}
                  </Stack>
                  <Typography
                    variant="inherit"
                    sx={{ fontSize: 14, px: 2, pb: 2 }}
                  >
                    Job Brief: {job.brief}
                  </Typography>
                </Stack>
              </Card>
            ) : (
              <></>
            );
          })}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo,
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(JobListCard);
