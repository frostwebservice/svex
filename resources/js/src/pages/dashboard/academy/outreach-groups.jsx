import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Seo } from '@/components/seo';
import { usePageView } from '@/hooks/use-page-view';
import { useSettings } from '@/hooks/use-settings';
import './inf_finder.css';
import { OutreachCard } from './outreach-card';
import { getOutReachs } from '@/actions';
import { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { RouterLink } from '@/components/router-link';

const now = new Date();

const OutreachGroups = (props) => {
  let obj = {
    time: new Date().getTime(),
    value: 'email',
    expire: 3000000
  };
  // You can only store strings
  let objStr = JSON.stringify(obj);
  localStorage.setItem('time_token', objStr);
  const { groups } = props;
  const settings = useSettings();
  usePageView();
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem('email'));
  useEffect(() => {
    dispatch(getOutReachs({ email: email }));
  }, [dispatch]);
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const reRender = () => {
    dispatch(getOutReachs({ email: email }));
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = () => {
    axios
      .post('/api/newgroup', { group_name: newName, email: email })
      .then((response) => {
        dispatch(getOutReachs({ email: email }));
        setOpen(false);
      });
  };
  return (
    <>
      <Seo title="Dashboard: Outreach Groups" />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Outreach Group</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create new outreach group, please enter your group name here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Group Name"
            type="text"
            fullWidth
            variant="standard"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            spacing={3}
            // sx={{ p: 3 }}
          >
            <Box
              component="form"
              // onSubmit={handleQueryChange}
              sx={{ flexGrow: 1 }}
            >
              <Typography variant="h4" sx={{ mt: 7, mb: 0, fontSize: '32px' }}>
                Outreach Groups
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex'
              }}
              className="create-parent"
              style={{ marginLeft: 0 }}
            >
              <Button
                size="small"
                component={RouterLink}
                href="/inf-finder/new-group"
                className="right-btn create-btn"
                variant="contained"
                // onClick={handleClickOpen}
              >
                Create New Outreach Group
              </Button>
            </Box>
          </Stack>
          <Box sx={{ p: 0.5 }} style={{ boxShadow: 'none' }}>
            {groups.result.map((group, index) => (
              <OutreachCard
                key={index}
                company={group}
                order={index}
                reRender={reRender}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};
const mapStateToProps = (state) => ({
  groups: state.outreachs.outreachs
});
export default connect(mapStateToProps)(OutreachGroups);
