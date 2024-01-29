import {
  Card,
  CardContent,
  Divider,
  Stack,
  Switch,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
var once = false;
// console.log("called")
var tmpData = {
  app_message: 0,
  app_job: 0,
  app_add: 0,
  app_signup: 0,
  app_membership: 0,
  mail_membership: 0,
  mail_message: 0,
  mail_add: 0,
  mail_signup: 0,
  mail_job: 0
};
export const AccountNotificationsSettings = () => {
  console.log('basic', tmpData);
  const [notifysettings, SetNotifysettings] = useState(tmpData);
  if (!once) {
    axios
      .post('/api/get_notifysettings', {
        user_email: JSON.parse(localStorage.getItem('email'))
      })
      .then((response) => {
        console.log('tmpData', tmpData);
        console.log('res', response.data.data);

        const res = response.data.data;
        if (
          res.app_message != tmpData.app_message ||
          res.app_add != tmpData.app_add ||
          res.app_membership != tmpData.app_membership ||
          res.app_job != tmpData.app_job ||
          res.app_signup != tmpData.app_signup ||
          res.mail_message != tmpData.mail_message ||
          res.mail_add != tmpData.mail_add ||
          res.mail_membership != tmpData.mail_membership ||
          res.mail_job != tmpData.mail_job ||
          res.mail_signup != tmpData.mail_signup
        ) {
          SetNotifysettings({
            ...notifysettings,
            app_message: res.app_message,
            app_add: res.app_add,
            app_signup: res.app_signup,
            app_job: res.app_job,
            app_membership: res.app_membership,
            mail_message: res.mail_message,
            mail_add: res.mail_add,
            mail_signup: res.mail_signup,
            mail_membership: res.mail_membership,
            mail_job: res.mail_job
          });
          tmpData.app_message = res.app_message;
          tmpData.app_add = res.app_add;
          tmpData.app_signup = res.app_signup;
          tmpData.app_job = res.app_job;
          tmpData.app_membership = res.app_membership;
          tmpData.mail_message = res.mail_message;
          tmpData.mail_add = res.mail_add;
          tmpData.mail_signup = res.mail_signup;
          tmpData.mail_membership = res.mail_membership;
          tmpData.mail_job = res.mail_job;
          once = true;
        }
      })
      .catch((error) => {
        console.error('Error getting Notify Settings', error);
      });
  }
  const handleChange = (kind) => {
    console.log(kind);
    switch (kind) {
      case 'app_message':
        notifysettings.app_message = notifysettings.app_message == 1 ? 0 : 1;
        axios
          .post('/api/update_notifysettings', {
            notifysettings: notifysettings,
            user_email: JSON.parse(localStorage.getItem('email'))
          })
          .then((response) => {
            tmpData.app_message = tmpData.app_message == 1 ? 0 : 1;
            SetNotifysettings({
              ...notifysettings
            });
          })
          .catch((error) => {
            console.error('Error getting Notify Settings', error);
          });
        break;
      case 'app_job':
        notifysettings.app_job = notifysettings.app_job == 1 ? 0 : 1;
        axios
          .post('/api/update_notifysettings', {
            notifysettings: notifysettings,
            user_email: JSON.parse(localStorage.getItem('email'))
          })
          .then((response) => {
            tmpData.app_job = tmpData.app_job == 1 ? 0 : 1;
            SetNotifysettings({
              ...notifysettings
            });
          })
          .catch((error) => {
            console.error('Error getting Notify Settings', error);
          });
        break;

      case 'app_signup':
        notifysettings.app_signup = notifysettings.app_signup == 1 ? 0 : 1;
        axios
          .post('/api/update_notifysettings', {
            notifysettings: notifysettings,
            user_email: JSON.parse(localStorage.getItem('email'))
          })
          .then((response) => {
            tmpData.app_signup = tmpData.app_signup == 1 ? 0 : 1;
            SetNotifysettings({
              ...notifysettings
            });
          })
          .catch((error) => {
            console.error('Error getting Notify Settings', error);
          });
        break;

      case 'app_add':
        notifysettings.app_add = notifysettings.app_add == 1 ? 0 : 1;
        axios
          .post('/api/update_notifysettings', {
            notifysettings: notifysettings,
            user_email: JSON.parse(localStorage.getItem('email'))
          })
          .then((response) => {
            tmpData.app_add = tmpData.app_add == 1 ? 0 : 1;
            SetNotifysettings({
              ...notifysettings
            });
          })
          .catch((error) => {
            console.error('Error getting Notify Settings', error);
          });
        break;
      case 'app_membership':
        notifysettings.app_membership =
          notifysettings.app_membership == 1 ? 0 : 1;
        axios
          .post('/api/update_notifysettings', {
            notifysettings: notifysettings,
            user_email: JSON.parse(localStorage.getItem('email'))
          })
          .then((response) => {
            tmpData.app_membership = tmpData.app_membership == 1 ? 0 : 1;
            SetNotifysettings({
              ...notifysettings
            });
          })
          .catch((error) => {
            console.error('Error getting Notify Settings', error);
          });
        break;
      case 'mail_message':
        notifysettings.mail_message = notifysettings.mail_message == 1 ? 0 : 1;
        axios
          .post('/api/update_notifysettings', {
            notifysettings: notifysettings,
            user_email: JSON.parse(localStorage.getItem('email'))
          })
          .then((response) => {
            tmpData.mail_message = tmpData.mail_message == 1 ? 0 : 1;
            SetNotifysettings({
              ...notifysettings
            });
          })
          .catch((error) => {
            console.error('Error getting Notify Settings', error);
          });
        break;
      case 'mail_job':
        notifysettings.mail_job = notifysettings.mail_job == 1 ? 0 : 1;
        axios
          .post('/api/update_notifysettings', {
            notifysettings: notifysettings,
            user_email: JSON.parse(localStorage.getItem('email'))
          })
          .then((response) => {
            tmpData.mail_job = tmpData.mail_job == 1 ? 0 : 1;
            SetNotifysettings({
              ...notifysettings
            });
          })
          .catch((error) => {
            console.error('Error getting Notify Settings', error);
          });
        break;
      case 'mail_add':
        notifysettings.mail_add = notifysettings.mail_add == 1 ? 0 : 1;
        axios
          .post('/api/update_notifysettings', {
            notifysettings: notifysettings,
            user_email: JSON.parse(localStorage.getItem('email'))
          })
          .then((response) => {
            tmpData.mail_add = tmpData.mail_add == 1 ? 0 : 1;
            SetNotifysettings({
              ...notifysettings
            });
          })
          .catch((error) => {
            console.error('Error getting Notify Settings', error);
          });
        break;
      case 'mail_signup':
        notifysettings.mail_signup = notifysettings.mail_signup == 1 ? 0 : 1;
        axios
          .post('/api/update_notifysettings', {
            notifysettings: notifysettings,
            user_email: JSON.parse(localStorage.getItem('email'))
          })
          .then((response) => {
            tmpData.mail_signup = tmpData.mail_signup == 1 ? 0 : 1;
            SetNotifysettings({
              ...notifysettings
            });
          })
          .catch((error) => {
            console.error('Error getting Notify Settings', error);
          });
        break;
      case 'mail_membership':
        notifysettings.mail_membership =
          notifysettings.mail_membership == 1 ? 0 : 1;
        axios
          .post('/api/update_notifysettings', {
            notifysettings: notifysettings,
            user_email: JSON.parse(localStorage.getItem('email'))
          })
          .then((response) => {
            tmpData.mail_membership = tmpData.mail_membership == 1 ? 0 : 1;
            SetNotifysettings({
              ...notifysettings
            });
          })
          .catch((error) => {
            console.error('Error getting Notify Settings', error);
          });
    }
  };
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid xs={12} md={4}>
            <Typography variant="h6">In-App</Typography>
          </Grid>
          <Grid xs={12} sm={12} md={8}>
            <Stack spacing={3}>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle1">New Messages</Typography>
                  <Typography color="text.secondary" variant="body2">
                    {/* Lorem Ipsum */}
                  </Typography>
                </Stack>
                <Switch
                  checked={
                    notifysettings.app_message &&
                    notifysettings.app_message == 1
                      ? true
                      : false
                  }
                  onChange={() => handleChange('app_message')}
                />
              </Stack>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle1">Job Applicants</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Lorem Ipsum */}
                  </Typography>
                </Stack>
                <Switch
                  checked={
                    notifysettings.app_job && notifysettings.app_job == 1
                      ? true
                      : false
                  }
                  onChange={() => handleChange('app_job')}
                />
              </Stack>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    Influencer Signups
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Lorem Ipsum */}
                  </Typography>
                </Stack>
                <Switch
                  checked={
                    notifysettings.app_signup && notifysettings.app_signup == 1
                      ? true
                      : false
                  }
                  onChange={() => handleChange('app_signup')}
                />
              </Stack>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    Influencer added to database
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Lorem Ipsum */}
                  </Typography>
                </Stack>
                <Switch
                  onChange={() => handleChange('app_add')}
                  checked={
                    notifysettings.app_add && notifysettings.app_add == 1
                      ? true
                      : false
                  }
                />
              </Stack>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle1">Membership</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Lorem Ipsum */}
                  </Typography>
                </Stack>
                <Switch
                  onChange={() => handleChange('app_membership')}
                  checked={
                    notifysettings.app_membership &&
                    notifysettings.app_membership == 1
                      ? true
                      : false
                  }
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, borderColor: 'lightgrey' }} />
        <Grid container spacing={3}>
          <Grid xs={12} md={4}>
            <Typography variant="h6">Email</Typography>
          </Grid>
          <Grid xs={12} sm={12} md={8}>
            <Stack spacing={3}>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle1">New Messages</Typography>
                  <Typography color="text.secondary" variant="body2">
                    {/* Lorem Ipsum */}
                  </Typography>
                </Stack>
                <Switch
                  onChange={() => handleChange('mail_message')}
                  checked={
                    notifysettings.mail_message &&
                    notifysettings.mail_message == 1
                      ? true
                      : false
                  }
                />
              </Stack>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle1">Job Applicants</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Lorem Ipsum */}
                  </Typography>
                </Stack>
                <Switch
                  onChange={() => handleChange('mail_job')}
                  checked={
                    notifysettings.mail_job && notifysettings.mail_job == 1
                      ? true
                      : false
                  }
                />
              </Stack>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    Influencer Signups
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Lorem Ipsum */}
                  </Typography>
                </Stack>
                <Switch
                  onChange={() => handleChange('mail_signup')}
                  checked={
                    notifysettings.mail_signup &&
                    notifysettings.mail_signup == 1
                      ? true
                      : false
                  }
                />
              </Stack>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    Influencer added to database
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Lorem Ipsum */}
                  </Typography>
                </Stack>
                <Switch
                  onChange={() => handleChange('mail_add')}
                  checked={
                    notifysettings.mail_add && notifysettings.mail_add == 1
                      ? true
                      : false
                  }
                />
              </Stack>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle1">Membership</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Lorem Ipsum */}
                  </Typography>
                </Stack>
                <Switch
                  onChange={() => handleChange('mail_membership')}
                  checked={
                    notifysettings.mail_membership &&
                    notifysettings.mail_membership == 1
                      ? true
                      : false
                  }
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
