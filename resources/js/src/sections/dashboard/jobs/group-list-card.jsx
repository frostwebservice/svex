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
import { getJobs } from '@/actions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const GroupListCard = (props) => {
  const {
    onClose,
    currentTab = '',
    infID = 0,
    groupID = 0,
    open = false,
    ...other
  } = props;
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem('email'));
  const [groups, setGroups] = useState([]);
  console.log(groups);
  useEffect(() => {
    axios
      .post('/api/getoutreachs', {
        email: email
      })
      .then((response) => {
        setGroups(response.data);
      })
      .catch((e) => {});
  }, []);

  const AddGroup = (groupID) => {
    axios
      .post('/api/add_group', {
        group_id: groupID,
        inf_id: infID,
        tab: currentTab
      })
      .then((response) => {
        toast.success('Successfuly added to outreach group.');

        onClose();
      })
      .catch((e) => {});
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
        <Typography variant="h6">Select a group</Typography>
        <IconButton color="inherit" onClick={onClose}>
          <SvgIcon>
            <XIcon />
          </SvgIcon>
        </IconButton>
      </Stack>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          {(groups?.length == 0 || groups[0]?.length == 0) && (
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
                      There are no outreach groups. Please click this link if
                      you want to create a new group.
                      <Link
                        style={{ marginLeft: 9 }}
                        to="/inf-finder/new-group"
                        underline="always"
                      >
                        Create Outreach Group
                      </Link>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          )}
          {groups?.map((group, index) => {
            return index == 0 ? (
              <></>
            ) : (
              <Card sx={{ mb: 1 }}>
                <Stack>
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
                      Group Name: {group[0].group_name}
                    </Typography>
                    <Stack
                      alignItems="center"
                      direction="row"
                      spacing={2}
                      // className='right-panel'
                    >
                      <Button
                        onClick={() =>
                          AddGroup(
                            group[0].group_id ? group[0].group_id : group[0].id
                          )
                        }
                        variant="contained"
                        size="small"
                        style={{ fontSize: 14 }}
                      >
                        Add to this outreach group
                      </Button>
                    </Stack>

                    {/* </div> */}
                  </Stack>
                  <Typography
                    variant="inherit"
                    sx={{ fontSize: 14, px: 2, pb: 2, pt: 0 }}
                  >
                    Brief Description: {group[0].brief_group}
                  </Typography>
                </Stack>
              </Card>
            );
          })}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});

export default connect(mapStateToProps)(GroupListCard);
