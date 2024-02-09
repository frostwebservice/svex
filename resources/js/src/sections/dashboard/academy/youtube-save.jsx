import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import {
  Typography,
  Box,
  Button,
  Card,
  Stack,
  IconButton,
  SvgIcon,
  TextField,
  Unstable_Grid2 as Grid,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { doSearch } from '@/actions';
import { useDispatch, connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { RouterLink } from '@/components/router-link';
import { runSavedSearch } from '@/actions';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDialog } from '@/hooks/use-dialog';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getSearchs } from '@/actions';
import toast from 'react-hot-toast';

const YoutubeSave = (props) => {
  const { userinfo, search } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem('email'));
  let data = {
    email: email,
    searchParams: search
  };

  const dispatchSavedSearch = () => {
    if (userinfo.is_admin != '1') {
      if (userinfo.paid == '1' && userinfo.search_cnt >= 50) {
        toast.error(
          'You are trying to run 51th search this month.\n Please upgrade your membership. \n ' +
            userinfo.time +
            'days left by renewal date.'
        );
        return;
      } else if (userinfo.paid == '0' && userinfo.search_cnt >= 5) {
        toast.error(
          'Trial user cannot run over 5 searchs .\n Please upgrade your membership.'
        );
        return;
      }
    }
    dispatch(runSavedSearch('youtube', search.id));
    navigate('/inf-finder');
  };
  const [open, setOpen] = useState(false);
  const [search_name, setSearchName] = useState(search.search_name);
  const [brief_description, setBriefDescription] = useState(
    search.brief_description
  );
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = () => {
    saveSearch();
  };
  const saveSearch = () => {
    let values = {
      id: search.id,
      search_name: search_name,
      brief_description: brief_description,
      type: 'update'
    };
    axios.post('/api/update_search', { values: values }).then((response) => {
      if (response.data.status === 200) {
        dispatch(getSearchs({ email: email }));
      }
      setOpen(false);
    });
  };
  const handleTrash = () => {
    let values = {
      id: search.id,
      search_name: search_name,
      brief_description: brief_description,
      type: 'delete'
    };
    axios.post('/api/update_search', { values: values }).then((response) => {
      if (response.data.status === 200) {
        dispatch(getSearchs({ email: email }));
      }
      setOpen(false);
    });
  };
  return (
    <>
      <Stack flexWrap="wrap" gap={1} sx={{ p: 3 }}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update Search</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To update this search, please modify search name and breif
              description here.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Search Name"
              type="text"
              fullWidth
              variant="standard"
              value={search_name}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="name"
              label="Brief Search Description"
              type="text"
              fullWidth
              variant="standard"
              value={brief_description}
              onChange={(e) => setBriefDescription(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleCreate}>Update</Button>
          </DialogActions>
        </Dialog>
        <Box>
          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Stack
              alignItems="flex-start"
              // spacing={2}
              direction={{
                xs: 'column',
                sm: 'column'
              }}
            >
              <Typography
                sx={{ color: 'text.primary' }}
                style={{ fontSize: 24, fontWeight: 700 }}
              >
                {search.search_name.charAt(0).toUpperCase() +
                  search.search_name.slice(1)}
              </Typography>
              <Typography
                sx={{ color: 'text.secondary' }}
                style={{ fontSize: 20 }}
              >
                {search.brief_description}
              </Typography>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={2}>
              <IconButton onClick={handleClickOpen}>
                <SvgIcon>
                  <EditIcon />
                </SvgIcon>
              </IconButton>
              <IconButton onClick={handleTrash}>
                <SvgIcon>
                  <DeleteIcon />
                </SvgIcon>
              </IconButton>
              <Button
                size="large"
                onClick={dispatchSavedSearch}
                fullWidth
                variant="contained"
                sx={{ height: 53.13 }}
              >
                Run this Search
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography
            sx={{ color: 'text.primary' }}
            style={{ fontSize: 18, fontWeight: 600 }}
          >
            Filters Selected
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.keywords}
                fullWidth
                label="Search"
                name="keywords"
                placeholder="Keywords"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.category}
                fullWidth
                label="Category"
                name="category"
                placeholder="Category"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.location}
                fullWidth
                label="Location"
                name="location"
                placeholder="Location"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.subscribers_from}
                fullWidth
                label="Subscribers"
                name="subscribers_from"
                placeholder="Subscribers"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex'
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  whiteSpace: 'normal',
                  marginRight: 5,
                  display: 'flex',
                  alignItems: 'center',
                  mr: 5
                }}
              >
                To
              </span>
              <TextField
                value={search.subscribers_to}
                fullWidth
                label="Subscribers"
                name="subscribers_to"
                placeholder="Subscribers"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.language}
                fullWidth
                label="Language"
                name="language"
                placeholder="Language"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.engagement}
                fullWidth
                label="Engagement rate"
                name="engagement"
                placeholder="Engagement rate"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.avg_view}
                fullWidth
                label="Avg views"
                name="avg_view"
                placeholder="Avg views"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.avg_like}
                fullWidth
                label="Avg likes range"
                name="avg_like"
                placeholder="Avg likes range"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.avg_dislike}
                fullWidth
                label="Avg dislikes range"
                name="avg_dislike"
                placeholder="Avg dislikes range"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.avg_comment}
                fullWidth
                label="Avg comments range"
                name="avg_comment"
                placeholder="Avg comments range"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.total_likes}
                fullWidth
                label="Total likes"
                name="total_likes"
                placeholder="Total likes"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.username}
                fullWidth
                label="Search"
                name="username"
                placeholder="Username"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={search.url}
                fullWidth
                label="Search"
                name="url"
                placeholder="URL"
                InputLabelProps={{ shrink: true }}
                inputProps={{ readOnly: true }}
              />
            </Box>
          </Grid>
        </Grid>
        <FormGroup>
          <Box sx={{ flexGrow: 1 }}>
            <FormControlLabel
              control={
                <Checkbox
                  value={search.hasPhone}
                  checked={search.hasPhone == 1 ? true : false}
                />
              }
              label="Has Phone number"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={search.verified}
                  checked={search.verified == 1 ? true : false}
                />
              }
              label="Is Verified"
            />
          </Box>
        </FormGroup>
        <Box sx={{ mt: 3 }}>
          <Typography
            sx={{ color: 'text.primary' }}
            style={{ fontSize: 18, fontWeight: 600 }}
          >
            Number of Influencers fall in this search
          </Typography>
        </Box>
        <Box>
          <Typography style={{ fontSize: 18, color: '#2970FF' }}>
            {search.counter}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};
const mapStateToProps = (state) => ({
  // results: state.searchresult
  userinfo: state.profile.userinfo
});
export default connect(mapStateToProps)(YoutubeSave);
