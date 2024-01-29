import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Link,
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
import { RouterLink } from '@/components/router-link';
import { getJobs } from '@/actions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import { useState, useEffect } from 'react';

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
        onClose();
      })
      .catch((e) => {});
  };
  return (
    <Dialog fullWidth maxWidth="lg" open={open} onClose={onClose}>
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
          {groups?.map((group, index) => {
            return index == 0 ? (
              <></>
            ) : (
              <Card sx={{ mb: 3 }}>
                <Stack>
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
                        onClick={() => AddGroup(group[0].id)}
                        variant="contained"
                        size="small"
                        style={{ fontSize: 14 }}
                      >
                        Add to this outreach group
                      </Button>
                    </Stack>

                    {/* </div> */}
                  </Stack>
                  <Typography variant="inherit" sx={{ fontSize: 14, px: 2 }}>
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
