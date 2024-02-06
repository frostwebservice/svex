import { useState } from 'react';
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  ListItemAvatar,
  ListItemText,
  SvgIcon,
  Typography
} from '@mui/material';
import RedditTextField from '../../../frontendpage/TextfieldStyle';
import CloseIcon from '@mui/icons-material/Close';
import Pagination from '@mui/material/Pagination';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import usePagination from '@/utils/pagination';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './overview.css';
export const Announcements = (props) => {
  const [announcements, setAccouncements] = useState([]);
  const [called, setCalled] = useState(true);
  const [uannouncement, setUannouncement] = useState({
    id: '',
    a_title: '',
    a_content: ''
  });
  if (called) {
    axios.post('/api/get_announcements', {}).then((response) => {
      setAccouncements(response.data);
      setCalled(false);
    });
  }
  const [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(announcements.length / PER_PAGE);
  const _DATA = usePagination(announcements, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const deleteA = (id) => {
    axios.post('/api/delete_announcement', { id: id }).then((response) => {
      setAccouncements(response.data);
      setCalled(false);
    });
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = (id, title, content) => {
    setUannouncement({ id: id, a_title: title, a_content: content });
    setOpen(true);
  };
  const handleUpdate = () => {
    axios
      .post('/api/update_announcement', {
        id: uannouncement.id,
        a_title: uannouncement.a_title,
        a_content: uannouncement.a_content
      })
      .then((response) => {
        setAccouncements(response.data);
        setCalled(false);
        setOpen(false);
      });
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Announcement</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit announcement please enter.
          </DialogContentText>
          <RedditTextField
            label="Title"
            className="title-inter"
            name="title"
            variant="filled"
            onChange={(e) =>
              setUannouncement((prev) => ({
                ...prev,
                a_title: e.target.value
              }))
            }
            style={{ marginTop: 3 }}
            fullWidth
            value={uannouncement.a_title}
          />
          <RedditTextField
            label="Content"
            className="title-inter"
            name="content"
            variant="filled"
            onChange={(e) =>
              setUannouncement((prev) => ({
                ...prev,
                a_content: e.target.value
              }))
            }
            multiline
            style={{ marginTop: 3 }}
            fullWidth
            value={uannouncement.a_content}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Save</Button>
        </DialogActions>
      </Dialog>
      <Card>
        <CardHeader
          title="Announcements"
          action={
            <Stack spacing={2}>
              <Pagination
                count={count}
                // size="small"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </Stack>
          }
        />
        <List disablePadding>
          {_DATA.currentData().map((announcement) => {
            const ago = announcement.updated_at;

            return (
              <ListItem
                alignItems="flex-start"
                key={announcement.id}
                sx={{
                  '&:hover': {
                    backgroundColor: 'action.hover',
                    cursor: 'pointer'
                  }
                }}
              >
                <ListItemAvatar>
                  <Avatar src="/favicon-32x32.png" />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                      variant="subtitle2"
                    >
                      {announcement.a_title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography
                        color="text.secondary"
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'wrap'
                        }}
                        variant="body2"
                      >
                        {announcement.a_content}
                      </Typography>

                      <Stack
                        alignItems="center"
                        direction="row"
                        justifyContent="space-between"
                        flexWrap="wrap"
                      >
                        <Stack>
                          <Typography
                            color="text.secondary"
                            sx={{ whiteSpace: 'wrap', mt: 1 }}
                            variant="subtitle2"
                          >
                            {[
                              new Date(ago).getMonth() + 1,
                              new Date(ago).getDate(),
                              new Date(ago).getFullYear()
                            ].join('/')}
                          </Typography>
                        </Stack>
                        <Stack sx={{ mt: 1 }} direction="row">
                          <IconButton
                            edge="end"
                            onClick={() =>
                              handleClickOpen(
                                announcement.id,
                                announcement.a_title,
                                announcement.a_content
                              )
                            }
                          >
                            <SvgIcon fontSize="small">
                              <ModeEditIcon />
                            </SvgIcon>
                          </IconButton>
                          <IconButton
                            edge="end"
                            onClick={() => deleteA(announcement.id)}
                          >
                            <SvgIcon fontSize="small">
                              <CloseIcon />
                            </SvgIcon>
                          </IconButton>
                        </Stack>
                      </Stack>
                    </>
                  }
                  sx={{ pr: 2 }}
                />
              </ListItem>
            );
          })}
        </List>
      </Card>
    </>
  );
};
