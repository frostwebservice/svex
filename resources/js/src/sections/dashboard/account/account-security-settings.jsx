import { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Alert } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import { getUserProfile } from '@/actions';

var once = false;
import { Scrollbar } from '@/components/scrollbar';
const AccountSecuritySettings = (props) => {
  const dispatch = useDispatch();
  const { userinfo } = props;
  const [oldpassword, Setoldpassword] = useState('');
  const [newpassword, Setnewpassword] = useState('');
  const [confirmpassword, Setconfirmpassword] = useState('');
  const { loginEvents } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const email = JSON.parse(localStorage.getItem('email'));
  const sxColorApp = {
    backgroundColor: userinfo.tfaapp == 0 ? 'error.main' : 'primary.main'
  };
  const sxColorSms = {
    backgroundColor: userinfo.tfasms == 0 ? 'error.main' : 'primary.main'
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const [message, SetMessage] = useState('');
  const handleEdit = () => {
    if (isEditing) {
      //save changes
      if (oldpassword == '' || newpassword == '' || confirmpassword == '') {
        SetMessage('You should input all fields!');
        setShowAlert(true);
        return;
      }
      if (newpassword != confirmpassword) {
        SetMessage('New password and confirm password not match!');
        setShowAlert(true);

        return;
      }
      if (
        /^(?=.*[a-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
          newpassword
        )
      ) {
      } else {
        SetMessage(
          'Must contain 8 characters, one uppercase, one lowercase, one number and one special case character'
        );
        setShowAlert(true);
        return;
      }
      axios
        .post('/api/reset_account_password', {
          email,
          oldpassword,
          newpassword,
          confirmpassword
        })
        .then((response) => {
          if (response.data.status === 200) {
            SetMessage('Password reset successfuly.');
            setShowAlert(true);
          } else {
            SetMessage('Old Password Is Wrong!');
            setShowAlert(true);
          }
        });
    }
    setIsEditing((prevState) => !prevState);
  };
  const handleApp = () => {
    axios.post('/api/handle_tfa', { email, kind: 'app' }).then((response) => {
      dispatch(getUserProfile({ email: email }));
    });
  };
  const handleSms = () => {
    axios.post('/api/handle_tfa', { email, kind: 'sms' }).then((response) => {
      dispatch(getUserProfile({ email: email }));
    });
  };
  const [histories, setHistory] = useState([]);
  if (!once) {
    axios.post('/api/login_history', { email }).then((response) => {
      if (response.data.status === 200) {
        setHistory(response.data.data);
      }
    });
    once = true;
  }

  return (
    <Stack spacing={4}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid xs={12} md={4}>
              <Typography variant="h6">Change password</Typography>
            </Grid>
            <Grid xs={12} sm={12} md={8}>
              <Stack
                alignItems="center"
                direction="row"
                sx={{ mb: 2 }}
                spacing={3}
              >
                <TextField
                  disabled={!isEditing}
                  label="Old Password"
                  value={oldpassword}
                  onChange={(e) => {
                    setShowAlert(false);
                    Setoldpassword(e.target.value);
                  }}
                  type="password"
                  defaultValue=""
                  sx={{
                    flexGrow: 1,
                    ...(!isEditing && {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderStyle: 'dotted'
                      }
                    })
                  }}
                />

                <Button onClick={handleEdit}>
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
              </Stack>
              <Stack
                alignItems="center"
                direction="row"
                spacing={3}
                sx={{ mb: 2 }}
              >
                <TextField
                  disabled={!isEditing}
                  value={newpassword}
                  onChange={(e) => {
                    setShowAlert(false);
                    Setnewpassword(e.target.value);
                  }}
                  label="New Password"
                  type="password"
                  defaultValue=""
                  sx={{
                    flexGrow: 1,
                    ...(!isEditing && {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderStyle: 'dotted'
                      }
                    })
                  }}
                />

                <Button>{isEditing ? '' : ''}</Button>
              </Stack>
              <Stack
                alignItems="center"
                direction="row"
                spacing={3}
                sx={{ mb: 2 }}
              >
                <TextField
                  disabled={!isEditing}
                  onChange={(e) => {
                    setShowAlert(false);
                    Setconfirmpassword(e.target.value);
                  }}
                  label="Confirm New Password"
                  value={confirmpassword}
                  type="password"
                  defaultValue=""
                  sx={{
                    flexGrow: 1,
                    ...(!isEditing && {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderStyle: 'dotted'
                      }
                    })
                  }}
                />
                <Button>{isEditing ? '' : ''}</Button>
              </Stack>
              {showAlert && (
                <Alert severity="info" onClose={handleCloseAlert}>
                  {message}
                </Alert>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* <Card>
        <CardHeader title="Multi Factor Authentication" />
        <CardContent sx={{ pt: 0 }}>
          <Grid
            container
            spacing={4}
          >
            <Grid
              xs={12}
              sm={6}
            >
              <Card
                sx={{ height: '100%' }}
                variant="outlined"
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'block',
                      position: 'relative'
                    }}
                  >
                    <Box
                      sx={{
                        '&::before': {
                          ...sxColorApp,
                          borderRadius: '50%',
                          content: '""',
                          display: 'block',
                          height: 8,
                          left: 4,
                          position: 'absolute',
                          top: 7,
                          width: 8,
                          zIndex: 1
                        }
                      }}
                    >
                      <Typography
                        color={(userinfo.tfaapp == 0) ? "error" : "primary"}
                        sx={{ pl: 3 }}
                        variant="body2"
                      >
                        {(userinfo.tfaapp == 0) ? "Off" : "On"}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{ mt: 1 }}
                    variant="subtitle2"
                  >
                    Authenticator App
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Use an authenticator app to generate one time security codes.
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <Button
                      endIcon={(
                        <SvgIcon>
                          <ArrowRightIcon />
                        </SvgIcon>
                      )}
                      variant="outlined"
                      onClick={handleApp}
                    >
                      {(userinfo.tfaapp == 0) ? "Set up" : "Uninstall"}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              sm={6}
              xs={12}
            >
              <Card
                sx={{ height: '100%' }}
                variant="outlined"
              >
                <CardContent>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        '&::before': {
                          ...sxColorSms,
                          borderRadius: '50%',
                          content: '""',
                          display: 'block',
                          height: 8,
                          left: 4,
                          position: 'absolute',
                          top: 7,
                          width: 8,
                          zIndex: 1
                        }
                      }}
                    >
                      <Typography
                        color={(userinfo.tfasms == 0) ? "error" : "primary"}

                        sx={{ pl: 3 }}
                        variant="body2"
                      >
                        {userinfo.tfasms === 0 ? "Off" : "On"}

                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{ mt: 1 }}
                    variant="subtitle2"
                  >
                    Text Message
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Use your mobile phone to receive security codes via SMS.
                  </Typography>
                  <Box sx={{ mt: 4 }}>
                    <Button
                      endIcon={(
                        <SvgIcon>
                          <ArrowRightIcon />
                        </SvgIcon>
                      )}
                      onClick={handleSms}
                      variant="outlined"
                    >
                      {(userinfo.tfasms == 0) ? "Set up" : "Uninstall"}

                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card> */}
      <Card>
        <CardHeader
          title="Login history"
          subheader="Your recent login activity"
        />
        <Scrollbar>
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                <TableCell>Login type</TableCell>
                <TableCell>IP Address</TableCell>
                <TableCell>Client</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {histories.map((history) => {
                const createdAt =
                  (Number(history.created_at.substring(11, 13)) > 12
                    ? Number(history.created_at.substring(11, 13)) - 12
                    : Number(history.created_at.substring(11, 13))) +
                  history.created_at.substring(13, 16) +
                  ' ' +
                  (Number(history.created_at.substring(11, 13)) >= 12
                    ? 'PM'
                    : 'AM') +
                  ' ' +
                  history.created_at
                    .substring(0, 10)
                    .replace(new RegExp('-', 'g'), '/');

                return (
                  <TableRow
                    key={history.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      <Typography variant="subtitle2">
                        {history.type}
                      </Typography>
                      <Typography variant="body2" color="body2">
                        on {createdAt}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {history.ip_address == '::1'
                        ? 'localhost'
                        : history.ip_address}
                    </TableCell>
                    <TableCell>
                      {history.browser_info + ',' + history.os_info}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar>
      </Card>
    </Stack>
  );
};

AccountSecuritySettings.propTypes = {
  loginEvents: PropTypes.array.isRequired
};
const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});
export default connect(mapStateToProps)(AccountSecuritySettings);
