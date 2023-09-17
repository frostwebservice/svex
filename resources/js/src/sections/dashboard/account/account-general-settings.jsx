import PropTypes from 'prop-types';
import Camera01Icon from '@untitled-ui/icons-react/build/esm/Camera01';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import { useCallback, useState } from "react";

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
export const AccountGeneralSettings = (props) => {

  const { avatar } = props;
  const [email, setEmail] = useState("frostwebservice.com");
  const [first, setFirst] = useState("Felix");
  const [last, setLast] = useState("Jin");
  const [editemail, setEditemail] = useState(false);
  const [editfirst, setEditfirst] = useState(false);
  const [editlast, setEditlast] = useState(false);
  const [edittimezone, setEdittimezone] = useState(false);
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
  const handleemail = useCallback(() => {
    setEditemail((prevState) => !prevState);
  }, []);
  const handlefirst = useCallback(() => {
    setEditfirst((prevState) => !prevState);
  }, []);
  const handlelast = useCallback(() => {
    setEditlast((prevState) => !prevState);
  }, []);
  const handletimezone = useCallback(() => {
    setEdittimezone((prevState) => !prevState);
  }, []);
  // const handleSortChange = useCallback((event) => {
  //   const sortDir = event.target.value;
  //   onSortChange?.(sortDir);
  // }, [onSortChange]);
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
                        src={avatar}
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
                    defaultValue={first}
                    disabled={!editfirst}
                    label="First Name"
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
                    onClick={handlefirst}
                  >
                    {editfirst ? "Save" : "Edit"}
                  </Button>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <TextField
                    defaultValue={last}
                    label="Last Name"
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
                    onClick={handlelast}
                  >
                    {editlast ? "Save" : "Edit"}

                  </Button>
                </Stack>

                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <TextField
                    defaultValue={email}
                    disabled={!editemail}
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
                    onClick={handleemail}
                  >
                    {editemail ? "Save" : "Edit"}

                  </Button>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                >
                  <TextField
                    label="Timezone"
                    name="timezone"
                    disabled={!edittimezone}
                    // onChange={handleSortChange}
                    select
                    SelectProps={{ native: true }}
                    sx={{
                      flexGrow: 1,
                      ...(!edittimezone && {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderStyle: 'dotted'
                        }
                      })
                    }}
                  // value={sortDir}
                  >
                    {sortOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  <Button
                    color="inherit"
                    size="small"
                    onClick={handletimezone}
                  >
                    {edittimezone ? "Save" : "Edit"}

                  </Button>
                </Stack>

                <Stack
                  alignItems="right"
                  direction="row"
                  spacing={2}
                >
                  <Button
                    size="small"
                    type="button"
                    color="primary"
                    variant="contained"
                    className="title-inter w-75 smallsize save-btn"
                  >
                    <span className="ml-2"> Save Changes </span>

                  </Button>
                </Stack>

              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    </Stack>
  );
};

AccountGeneralSettings.propTypes = {
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
