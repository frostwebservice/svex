import PropTypes from 'prop-types';
import CheckVerified01 from '@untitled-ui/icons-react/build/esm/CheckVerified01';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Link,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
  Button,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import RedditTextField from '../../../frontendpage/TextfieldStyle';

import { paths } from '@/paths';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MessageChatSquareIcon from '@untitled-ui/icons-react/build/esm/MessageChatSquare';
import HeartIcon from '@untitled-ui/icons-react/build/esm/Heart';
import { useState, useCallback } from 'react';
import { OutreachMemberCard } from './outreach-member-card';
import { subDays, subHours, subMinutes, subSeconds } from 'date-fns';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDialog } from '@/hooks/use-dialog';
import JobListCard from '../../../sections/dashboard/jobs/job-list-card';

const now = new Date();

export const OutreachCard = (props) => {
  const { company, order, reRender, ...other } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [open, setOpen] = useState(false);

  const [group, setGroup] = useState({
    id: '',
    group_name: '',
    brief_group: ''
  });
  const handleClickOpen = (id, name, brief) => {
    setGroup({ id: id, group_name: name, brief_group: brief });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = () => {
    axios
      .post('/api/update_group', {
        id: group.id,
        group_name: group.group_name,
        brief_group: group.brief_group
      })
      .then((response) => {
        reRender();
        setOpen(false);
      });
  };
  const jobDialog = useDialog();
  const handleInvite = () => {
    jobDialog.handleOpen();
  };
  const deleteGroup = (group) => {
    if (group[0].group_id) {
      axios
        .post('/api/delete_group', {
          id: group[0].group_id
        })
        .then((response) => {
          reRender();
        });
    } else {
      axios
        .post('/api/delete_group', {
          id: group[0]['id']
        })
        .then((response) => {
          reRender();
        });
    }
  };
  return (
    <Card {...other} style={{ marginTop: 30 }}>
      <JobListCard
        onClose={jobDialog.handleClose}
        open={jobDialog.open}
        isGroup={true}
        groupID={company[0]?.id}
        order={order}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Outreach Group</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit Outreach Group, pleaes enter text below.
          </DialogContentText>
          <RedditTextField
            label="Title"
            className="title-inter"
            name="title"
            variant="filled"
            onChange={(e) =>
              setGroup((prev) => ({
                ...prev,
                group_name: e.target.value
              }))
            }
            style={{ marginTop: 3 }}
            fullWidth
            value={group.group_name}
          />
          <RedditTextField
            label="Content"
            className="title-inter"
            name="content"
            variant="filled"
            onChange={(e) =>
              setGroup((prev) => ({
                ...prev,
                brief_group: e.target.value
              }))
            }
            multiline
            style={{ marginTop: 3 }}
            fullWidth
            value={group.brief_group}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Save</Button>
        </DialogActions>
      </Dialog>
      <CardContent>
        <Stack
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          sx={{
            px: 2,
            py: 1.5
          }}
        >
          <Stack
            alignItems="flex-start"
            spacing={2}
            direction={{
              xs: 'column',
              sm: 'row'
            }}
          >
            <div>
              <Typography
                sx={{ color: 'text.primary' }}
                style={{ fontSize: 24, fontWeight: 600 }}
              >
                {order == 0 ? 'Favorites' : company[0]['group_name']}
              </Typography>
              <Typography
                sx={{ color: 'text.primary' }}
                style={{ fontSize: 20 }}
              >
                {order == 0
                  ? 'Favorites Influencers'
                  : company[0]['brief_group']}
              </Typography>
            </div>
          </Stack>

          <Stack
            alignItems="center"
            direction="row"
            className="right-panel"
            spacing={2}
          >
            <IconButton
              edge="end"
              onClick={() =>
                handleClickOpen(
                  company[0]['id'],
                  company[0]['group_name'],
                  company[0]['brief_group']
                )
              }
            >
              <SvgIcon fontSize="small">
                <ModeEditIcon />
              </SvgIcon>
            </IconButton>
            {order == 0 ? (
              <></>
            ) : (
              <IconButton edge="end" onClick={() => deleteGroup(company)}>
                <SvgIcon fontSize="small">
                  <DeleteOutlineOutlinedIcon />
                </SvgIcon>
              </IconButton>
            )}

            <Button
              onClick={handleInvite}
              size="small"
              className="right-btn"
              startIcon={
                <>
                  <img src="/assets/icons/invite.svg" />
                </>
              }
              variant="outlined"
            >
              Invite To Project
            </Button>
            <Button
              component={RouterLink}
              href={paths.dashboard.chat}
              size="small"
              className="right-btn mass-btn"
              startIcon={
                <SvgIcon>
                  <MessageChatSquareIcon />
                </SvgIcon>
              }
              variant="contained"
            >
              Send Mass Message
            </Button>
          </Stack>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          sx={{
            px: 2,
            py: 1.5
          }}
        >
          <Typography
            sx={{ color: 'text.primary' }}
            style={{ fontSize: 18, fontWeight: 600 }}
          >
            Influeners in this group
          </Typography>
        </Stack>
        <Stack
        // alignItems="center"
        // direction="row"
        // flexWrap="wrap"
        // justifyContent="space-between"
        // sx={{
        //     px: 2,
        //     py: 1.5
        // }}
        >
          {company[0] && company[0].detail == null ? (
            <></>
          ) : (
            <OutreachMemberCard
              key={order}
              company={company}
              order={order}
              reRender={reRender}
            />
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

OutreachCard.propTypes = {
  company: PropTypes.object.isRequired
};
