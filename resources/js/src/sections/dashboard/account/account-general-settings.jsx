import PropTypes from 'prop-types';
import Camera01Icon from '@untitled-ui/icons-react/build/esm/Camera01';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import { useCallback, useState, useRef, useEffect } from "react";
import { connect, useDispatch } from 'react-redux'
import TimezoneSelect from 'react-timezone-select'
import { useTheme } from '@mui/material/styles';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  SvgIcon,
  Switch,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import "./account.css";
import { useDialog } from '@/hooks/use-dialog';
import { FileUploader } from '@/sections/dashboard/file-manager/file-uploader';
import { useAuth } from '@/hooks/use-auth';
import { getBrandProfile, getUserProfile } from '@/actions';
import { useNavigate } from 'react-router-dom';

import $ from 'jquery'
var tmpFirst = "";
var tmpLast = "";
var tmpEmail = "";
var tmpTimezone = "";
var once = false;
var coloronce = false;

const AccountGeneralSettings = (props) => {
  const theme = useTheme();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const uploadDialog = useDialog();
  const auth = useAuth();
  const { avatar, userinfo } = props;

  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState(userinfo.timezone ? userinfo.timezone : Intl.DateTimeFormat().resolvedOptions().timeZone)
  const [disableTimezone, setDisableTimezone] = useState(true)
  const [editemail, setEditemail] = useState(false);
  const [editfirst, setEditfirst] = useState(false);
  const [editlast, setEditlast] = useState(false);
  const [edittimezone, setEdittimezone] = useState(false);
  const [timezonekey, setTimezonekey] = useState("")

  setTimeout(() => {

  }, 50);
  if (!once) {
    if (userinfo.email && userinfo.email != tmpEmail) {
      tmpEmail = userinfo.email;
      // once = true;
    }
    if (userinfo.firstname && userinfo.firstname != tmpFirst) {
      tmpFirst = userinfo.firstname;
      // once = true;
    }
    if (userinfo.lastname && userinfo.lastname != tmpLast) {
      tmpLast = userinfo.lastname;
      // once = true;
    }
    if (userinfo.timezone && userinfo.timezone != tmpTimezone) {
      tmpTimezone = userinfo.timezone;
      // once = true;
    }
  }
  const sortOptions = [
    {
      label: 'Toronto,Canada',
      value: '1'
    },
    {
      label: 'Toronto,Canada',
      value: '2'
    }
  ];
  const handleemail = useCallback((status) => {
    setEditemail((prevState) => !prevState);
    if (!status) return;

  }, []);
  const handlefirst = useCallback((status) => {
    setEditfirst((prevState) => !prevState);
    if (!status) return;


  }, []);
  const handlelast = useCallback((status) => {
    setEditlast((prevState) => !prevState);
    if (!status) return;


  }, []);
  const handletimezone = useCallback((status) => {
    setEdittimezone((prevState) => !prevState);
    if (!status) setDisableTimezone(false)
    else setDisableTimezone(true)

  }, []);
  $(document).on("click", ".css-b62m3t-container", function (e) {
    e.preventDefault()
  })
  const avatarUpload = () => {
    uploadDialog.handleOpen()
  }
  const [key, setKey] = useState("")
  const onUpgrade = () => {
    dispatch(getUserProfile({ email: JSON.parse(localStorage.getItem('email')) }));

    setKey(key + "a")
  }
  useEffect(() => {
    if (first == "") {
      setEmail(tmpEmail);
      setFirst(tmpFirst);
      setLast(tmpLast);
      setSelectedTimezone(tmpTimezone)
    }

  });

  const saveChange = () => {
    let value = {
      user_email: JSON.parse(localStorage.getItem('email')),
      email: email,
      firstname: first,
      lastname: last,
      timezone: selectedTimezone
    }

    axios.post('/api/update_generalinfo', value)
      .then(response => {
        if (response.data.status == "failed") {
          alert("Email is already exist! Please input another email address.")
        }
        else {
          if (response.data.message == "changed") {
            dispatch(getUserProfile({ email: JSON.parse(localStorage.getItem('email')) }))
            auth.signOut();
            navigate("/auth/auth/SignIn")

          }
        }
        console.log(response.data.message)

      })
      .catch(error => {
        console.error('Error getting Notify Settings', error);
      })
  }
  return (
    <Stack
      spacing={4}
      {...props}>
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              md={4}
            >
              <Typography variant="h6">
                Personal Information
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={8}
            >
              <Stack spacing={3}>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <Box
                    sx={{
                      borderColor: 'neutral.300',
                      borderRadius: '50%',
                      borderStyle: 'dashed',
                      borderWidth: 1,
                      p: '4px'
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: '50%',
                        height: '100%',
                        width: '100%',
                        position: 'relative'
                      }}
                    >
                      <Box
                        sx={{
                          alignItems: 'center',
                          backgroundColor: (theme) => alpha(theme.palette.neutral[700], 0.5),
                          borderRadius: '50%',
                          color: 'common.white',
                          cursor: 'pointer',
                          display: 'flex',
                          height: '100%',
                          justifyContent: 'center',
                          left: 0,
                          opacity: 0,
                          position: 'absolute',
                          top: 0,
                          width: '100%',
                          zIndex: 1,
                          '&:hover': {
                            opacity: 1
                          }
                        }}
                      >
                        <Stack
                          alignItems="center"
                          direction="row"
                          spacing={1}
                          onClick={avatarUpload}
                        >
                          <SvgIcon color="inherit">
                            <Camera01Icon />
                          </SvgIcon>
                          <Typography
                            color="inherit"
                            variant="subtitle2"
                            sx={{ fontWeight: 700 }}
                          >
                            Select
                          </Typography>
                        </Stack>
                      </Box>
                      <Avatar
                        key={key}

                        src={userinfo.avatar ? userinfo.avatar : `https://ui-avatars.com/api/?name=${userinfo.companyname}&background=2970FF&color=fff&rounded=true`}
                        sx={{
                          height: 100,
                          width: 100
                        }}
                      >
                        <SvgIcon>
                          <User01Icon />
                        </SvgIcon>
                      </Avatar>
                    </Box>
                  </Box>
                  <Button
                    onClick={avatarUpload}
                    color="inherit"
                    size="small"
                  >
                    Change
                  </Button>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <TextField
                    value={first}
                    disabled={!editfirst}
                    placeholder='Your First Name'
                    label="First Name"
                    onChange={(e) => { tmpFirst = e.target.value; setFirst(e.target.value); }}
                    sx={{
                      flexGrow: 1,
                      ...(!editfirst && {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderStyle: 'dotted'
                        }
                      })
                    }}
                  />
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => handlefirst(editfirst)}
                  >
                    {editfirst ? "Done" : "Edit"}
                  </Button>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <TextField
                    value={last}
                    onChange={(e) => { setLast(e.target.value); tmpLast = e.target.value }}
                    label="Last Name"
                    placeholder='Your Last Name'
                    disabled={!editlast}
                    sx={{
                      flexGrow: 1,
                      ...(!editlast && {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderStyle: 'dotted'
                        }
                      })
                    }}
                  />
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => handlelast(editlast)}

                  >
                    {editlast ? "Done" : "Edit"}

                  </Button>
                </Stack>

                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <TextField
                    value={email}
                    disabled={!editemail}
                    onChange={(e) => { setEmail(e.target.value); tmpEmail = e.target.value }}
                    placeholder='Your Email Address'
                    label="Email Address"
                    required
                    sx={{
                      flexGrow: 1,
                      ...(!editemail && {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderStyle: 'dotted'
                        }
                      })
                    }}
                  />
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => handleemail(editemail)}
                  >
                    {editemail ? "Done" : "Edit"}

                  </Button>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <TimezoneSelect
                    key={timezonekey}
                    value={selectedTimezone}
                    onChange={(e) => { console.log(e); setSelectedTimezone(e.value); tmpTimezone = e.value }}
                    sx={{
                      flexGrow: 1,
                      ...(!edittimezone && {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderStyle: 'dotted'
                        }
                      })
                    }}
                    textFieldProps={{
                      label: 'Label',
                      InputLabelProps: {
                        shrink: true,
                      },
                    }}
                    isDisabled={disableTimezone}

                  />
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => handletimezone(edittimezone)}
                  >
                    {edittimezone ? "Done" : "Edit"}

                  </Button>
                </Stack>

                <Stack
                  alignItems="right"
                  direction="row"
                // spacing={2}
                >
                  <Button
                    size="small"
                    type="button"
                    color="primary"
                    variant="contained"
                    className="title-inter w-75 smallsize save-btn"
                    sx={{ mr: 3 }}

                    onClick={saveChange}
                  >
                    <span className="ml-2"> Save Changes </span>

                  </Button>
                </Stack>

              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <FileUploader
        onClose={uploadDialog.handleClose}
        open={uploadDialog.open}
        onUpgrade={onUpgrade}
      // kind={kind}
      />
    </Stack>

  );
};

AccountGeneralSettings.propTypes = {
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
  userinfo: state.profile.userinfo
});

export default connect(mapStateToProps)(AccountGeneralSettings);