import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import {
  Box,
  Button,
  Card,
  Stack,
  SvgIcon,
  TextField,
  Unstable_Grid2 as Grid,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState, useEffect } from 'react';
import { doSearch } from '@/actions';
import {
  categoryOptions,
  locationOptions,
  followersFromOptions,
  followersToOptions,
  ageOptions,
  genderOptions,
  languageOptions,
  ptengagementOptions,
  avglikesOptions,
  avgcommentsOptions,
  totallikesOptions
} from './data';
import { useDispatch, connect } from 'react-redux';
import { getSearchs } from '@/actions';
import { useDialog } from '@/hooks/use-dialog';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const PinterestSearch = (props) => {
  const { searchs, runTab } = props;
  const email = JSON.parse(localStorage.getItem('email'));
  const [selectedSearch, setSelectedSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchs({ email: email }));
  }, [dispatch]);
  const [savedSearchs, setSavedSearchs] = useState(searchs);
  const saveSearch = () => {
    let values = searchParams;
    values['email'] = email;
    values['search_name'] = search_name;
    values['brief_description'] = brief_description;
    axios.post('/api/save_search', { values }).then((response) => {
      if (response.data.status === 200) {
        dispatch(getSearchs({ email: email }));
        setOpen(false);
      }
    });
  };
  const [open, setOpen] = useState(false);
  const [search_name, setSearchName] = useState('');
  const [brief_description, setBriefDescription] = useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = () => {
    saveSearch();
  };
  const runSearch = () => {
    if (selectedSearch > 0) {
      searchs.map((search) => {
        if (search.id == selectedSearch) {
          let temp = {
            tab: 'pinterest',
            keywords: search.keywords == null ? '' : search.keywords,
            category: search.category == null ? 'All' : search.category,
            location: search.location == null ? 'All' : search.location,
            followers_from:
              search.followers_from == null ? 'All' : search.followers_from,
            followers_to:
              search.followers_to == null ? 'All' : search.followers_to,
            age: search.age == null ? 'All' : search.age,
            gender: search.gender == null ? 'All' : search.gender,
            language: search.lanugage == null ? 'All' : search.language,
            engagement: search.engagement == null ? 'All' : search.engagement,
            avg_like: search.avg_like == null ? 'All' : search.avg_like,
            avg_comment:
              search.avg_comment == null ? 'All' : search.avg_comment,
            total_likes:
              search.total_likes == null ? 'All' : search.total_likes,
            username: search.username == null ? '' : search.username,
            url: search.url == null ? '' : search.url,
            hasPhone: search.hasPhone == 1 ? true : false,
            verified: search.verified == 1 ? true : false
          };
          setSearchParams({
            ...searchParams,
            keywords: search.keywords == null ? '' : search.keywords,
            category: search.category == null ? 'All' : search.category,
            location: search.location == null ? 'All' : search.location,
            followers_from:
              search.followers_from == null ? 'All' : search.followers_from,
            followers_to:
              search.followers_to == null ? 'All' : search.followers_to,
            age: search.age == null ? 'All' : search.age,
            gender: search.gender == null ? 'All' : search.gender,
            language: search.lanugage == null ? 'All' : search.language,
            engagement: search.engagement == null ? 'All' : search.engagement,
            avg_like: search.avg_like == null ? 'All' : search.avg_like,
            avg_comment:
              search.avg_comment == null ? 'All' : search.avg_comment,
            total_likes:
              search.total_likes == null ? 'All' : search.total_likes,
            username: search.username == null ? '' : search.username,
            url: search.url == null ? '' : search.url,
            hasPhone: search.hasPhone == 1 ? true : false,
            verified: search.verified == 1 ? true : false
          });
          dispatch(doSearch(email, temp));
          return;
        }
      });
    }
  };
  const [searchParams, setSearchParams] = useState({
    email: '',
    tab: 'pinterest',
    keywords: '',
    category: 'All',
    location: 'All',
    followers_from: 'All',
    followers_to: 'All',
    age: 'All',
    gender: 'All',
    language: 'All',
    engagement: 'All',
    avg_like: 'All',
    total_likes: 'All',
    avg_comment: 'All',
    username: '',
    url: '',
    hasPhone: false,
    verified: false
  });
  const onSearch = () => {
    dispatch(doSearch(email, searchParams));
  };
  useEffect(() => {
    dispatch(doSearch(email, searchParams));
  }, []);
  useEffect(() => {
    if (
      runTab &&
      runTab.runsavestate &&
      runTab.runsavestate.tab == 'pinterest'
    ) {
      setSelectedSearch(runTab.runsavestate.id);
      searchs.map((search) => {
        if (search.id == runTab.runsavestate.id) {
          let temp = {
            tab: 'pinterest',
            keywords: search.keywords == null ? '' : search.keywords,
            category: search.category == null ? 'All' : search.category,
            location: search.location == null ? 'All' : search.location,
            followers_from:
              search.followers_from == null ? 'All' : search.followers_from,
            followers_to:
              search.followers_to == null ? 'All' : search.followers_to,
            age: search.age == null ? 'All' : search.age,
            gender: search.gender == null ? 'All' : search.gender,
            language: search.lanugage == null ? 'All' : search.language,
            engagement: search.engagement == null ? 'All' : search.engagement,
            avg_like: search.avg_like == null ? 'All' : search.avg_like,
            avg_comment:
              search.avg_comment == null ? 'All' : search.avg_comment,
            total_likes:
              search.total_likes == null ? 'All' : search.total_likes,
            username: search.username == null ? '' : search.username,
            url: search.url == null ? '' : search.url,
            hasPhone: search.hasPhone == 1 ? true : false,
            verified: search.verified == 1 ? true : false
          };
          setSearchParams({
            ...searchParams,
            keywords: search.keywords == null ? '' : search.keywords,
            category: search.category == null ? 'All' : search.category,
            location: search.location == null ? 'All' : search.location,
            followers_from:
              search.followers_from == null ? 'All' : search.followers_from,
            followers_to:
              search.followers_to == null ? 'All' : search.followers_to,
            age: search.age == null ? 'All' : search.age,
            gender: search.gender == null ? 'All' : search.gender,
            language: search.lanugage == null ? 'All' : search.language,
            engagement: search.engagement == null ? 'All' : search.engagement,
            avg_like: search.avg_like == null ? 'All' : search.avg_like,
            avg_comment:
              search.avg_comment == null ? 'All' : search.avg_comment,
            total_likes:
              search.total_likes == null ? 'All' : search.total_likes,
            username: search.username == null ? '' : search.username,
            url: search.url == null ? '' : search.url,
            hasPhone: search.hasPhone == 1 ? true : false,
            verified: search.verified == 1 ? true : false
          });
          dispatch(doSearch(email, temp));
          return;
        }
      });
    }
  }, [runTab]);
  return (
    <>
      <Stack
        // alignItems="center"
        // direction="row"
        flexWrap="wrap"
        gap={1}
        sx={{ p: 3 }}
      >
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Save Search</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To save this search, please enter search name and breif
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
            <Button onClick={handleCreate}>Create</Button>
          </DialogActions>
        </Dialog>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={searchParams.keywords}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, keywords: e.target.value })
                }
                fullWidth
                label="Search"
                name="keywords"
                placeholder="Keywords"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={searchParams.category}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, category: e.target.value })
                }
                fullWidth
                label="Category"
                name="category"
                select
                SelectProps={{ native: true }}
              >
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={searchParams.location}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, location: e.target.value })
                }
                fullWidth
                label="Location"
                name="location"
                select
                SelectProps={{ native: true }}
              >
                {locationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={searchParams.language}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, language: e.target.value })
                }
                fullWidth
                label="Language"
                name="language"
                select
                SelectProps={{ native: true }}
              >
                {languageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={searchParams.followers_from}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    followers_from: e.target.value
                  })
                }
                fullWidth
                label="Followers"
                name="followers_from"
                select
                SelectProps={{ native: true }}
              >
                {followersFromOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
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
                value={searchParams.followers_to}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    followers_to: e.target.value
                  })
                }
                fullWidth
                label="Followers"
                name="followers_to"
                select
                SelectProps={{ native: true }}
              >
                {followersToOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={searchParams.age}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, age: e.target.value })
                }
                fullWidth
                label="Age"
                name="age"
                select
                SelectProps={{ native: true }}
              >
                {ageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={searchParams.gender}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, gender: e.target.value })
                }
                fullWidth
                label="Gender"
                name="gender"
                select
                SelectProps={{ native: true }}
              >
                {genderOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={searchParams.engagement}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    engagement: e.target.value
                  })
                }
                fullWidth
                label="Engagement rate"
                name="engagement"
                select
                SelectProps={{ native: true }}
              >
                {ptengagementOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={searchParams.avg_like}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, avg_like: e.target.value })
                }
                fullWidth
                label="Avg likes range"
                name="avg_like"
                select
                SelectProps={{ native: true }}
              >
                {avglikesOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={searchParams.avg_comment}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    avg_comment: e.target.value
                  })
                }
                fullWidth
                label="Avg comments range"
                name="avg_comment"
                select
                SelectProps={{ native: true }}
              >
                {avgcommentsOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.total_likes}
                                onChange={(e) => setSearchParams({ ...searchParams, total_likes: e.target.value })}
                                fullWidth
                                label="Total likes count"
                                name="total_likes_count"
                                select
                                SelectProps={{ native: true }}
                            >
                                {totallikesOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid> */}
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={searchParams.username}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, username: e.target.value })
                }
                fullWidth
                label="Search"
                name="username"
                placeholder="Username"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4} className="custom-grid">
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                value={searchParams.url}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, url: e.target.value })
                }
                fullWidth
                label="Search"
                name="url"
                placeholder="URL"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
          </Grid>
        </Grid>
        <FormGroup>
          <Box sx={{ flexGrow: 1 }}>
            <FormControlLabel
              control={
                <Checkbox
                  value={searchParams.hasPhone}
                  onChange={(e) =>
                    setSearchParams({
                      ...searchParams,
                      hasPhone: !searchParams.hasPhone
                    })
                  }
                  checked={searchParams.hasPhone == 1 ? true : false}
                />
              }
              label="Has Phone number"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={searchParams.verified}
                  onChange={(e) =>
                    setSearchParams({
                      ...searchParams,
                      verified: !searchParams.verified
                    })
                  }
                  checked={searchParams.verified == 1 ? true : false}
                />
              }
              label="Is Verified"
            />
          </Box>
        </FormGroup>

        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2} sm={3} className="custom-grid1">
              <Button
                sx={{ marginRight: 2, height: 53.13 }}
                className="res-btn"
                size="large"
                fullWidth
                startIcon={
                  <SvgIcon>
                    <SearchMdIcon />
                  </SvgIcon>
                }
                onClick={onSearch}
                variant="contained"
              >
                Search
              </Button>
            </Grid>
            <Grid item xs={12} md={3} sm={3} className="custom-grid1">
              <Button
                sx={{ marginRight: 2, height: 53.13 }}
                size="large"
                className="res-btn"
                fullWidth
                startIcon={
                  <SvgIcon>
                    <BookmarkBorderIcon />
                  </SvgIcon>
                }
                onClick={handleClickOpen}
                variant="outlined"
              >
                Save this Search
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sm={3}
              className="custom-grid1 hidden-grid"
            ></Grid>
            <Grid item xs={12} md={2} sm={3} className="custom-grid1">
              <TextField
                value={selectedSearch}
                onChange={(e) => setSelectedSearch(e.target.value)}
                // fullWidth
                sx={{ height: 53.13 }}
                label="Saved Searchs"
                name="saved_searchs"
                fullWidth
                select
                SelectProps={{ native: true }}
              >
                <option key="0" value=""></option>
                {searchs &&
                  searchs.map((option) => {
                    if (option['tab'] == 'pinterest')
                      return (
                        <option key={option['id']} value={option['id']}>
                          {option['search_name'].charAt(0).toUpperCase() +
                            option['search_name'].slice(1)}
                        </option>
                      );
                  })}
              </TextField>
            </Grid>
            <Grid item xs={12} md={2} sm={3} className="custom-grid1">
              <Button
                size="large"
                className="res-btn"
                fullWidth
                variant="contained"
                sx={{ height: 53.13 }}
                onClick={runSearch}
              >
                Run this Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};
const mapStateToProps = (state) => ({
  searchs: state.searchs.searchs,
  runTab: state.runsavestate
});
export default connect(mapStateToProps)(PinterestSearch);
