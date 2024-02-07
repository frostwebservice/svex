import { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Button,
  Chip,
  InputAdornment,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { connect } from 'react-redux';
import MultiSelectAll from './MultiSelectAll';

const JobShareStep = (props) => {
  const { onBack, onNext, updateValue, isReview, job, ...other } = props;
  const email = JSON.parse(localStorage.getItem('email'));
  const [selectedFavorite, setSelectedFavorite] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [tempKey, setTempKey] = useState(0);

  const [groups, setGroups] = useState([]);
  const [mulArr, setMulArr] = useState([]);
  useEffect(() => {
    axios.post('/api/get_favs', { email: email }, {}).then((res) => {
      let newArr = [];
      res.data.map((fav) => {
        newArr.push({ value: fav.id, label: fav.data[0].username });
      });
      if (newArr?.length > 0) setMulArr(newArr);
    });
    axios.post('/api/getoutreachs', { email: email }, {}).then((res) => {
      setGroups(res.data);
      setSelectedGroup('No Outreach Group');
      upgradeGroup('No Outreach Group');
    });
  }, []);

  const upgradeGroup = (value) => {
    setSelectedGroup(value);
    updateValue('outreachgroups', value);
  };
  useEffect(() => {
    if (tempKey < 3) setTempKey(tempKey + 1);
  }, [job]);
  const handleSelectionChange = (result) => {
    let fav = '';
    result.map((res, index) => {
      if (index == result.length - 1) fav += res.value;
      else fav += res.value + ',';
    });
    updateValue('favorites', fav);
    updateValue('favarray', result);
    // if (result.length != 0) setAllError(false);
    // let types = '';
    // setighidden('none');
    // settwhidden('none');
    // settthiden('none');
    // setythidden('none');
    // setlihidden('none');
    // setbwhidden('none');
    // setpthidden('none');
    // result.map((res) => {
    //   if (res.value == 'instagram') setighidden('');
    //   if (res.value == 'twitter') settwhidden('');
    //   if (res.value == 'tiktok') settthiden('');
    //   if (res.value == 'youtube') setythidden('');
    //   if (res.value == 'linkein') setlihidden('');
    //   if (res.value == 'pinterest') setpthidden('');
    //   if (res.value == 'blogwebsite') setbwhidden('');
    //   types += res.value + ',';
    // });
    // updateValue('socialtypes', types.slice(0, -1));
    // updateValue('typesarray', result);
  };
  return (
    <Stack spacing={3} {...other}>
      <Grid
        container
        disableEqualOverflow
        spacing={{
          xs: 3,
          lg: 4
        }}
      >
        <Grid xs={12} md={12}>
          {/* <TextField
            fullWidth
            select
            label="Favorites"
            value={job.favorites}
            onChange={(e) => upgradeFavorite(e.target.value)}
            SelectProps={{
              native: true
            }}
            variant="filled"
          >
            {favorites.map((option, index) => (
              <option key={option.id} value={option.id}>
                {option.data[0].username}
              </option>
            ))}
          </TextField> */}
          <MultiSelectAll
            sx={{ maxheight: '700px' }}
            items={mulArr}
            key={tempKey}
            selectAllLabel="Select All"
            value={job.favarray}
            onChange={handleSelectionChange}
          />
        </Grid>
        <Grid xs={12} md={12}>
          <TextField
            fullWidth
            select
            label="Outreach Groups"
            onChange={(e) => upgradeGroup(e.target.value)}
            value={job.outreachgroups}
            SelectProps={{
              native: true
            }}
            variant="filled"
          >
            <option value="No Outreach Group">No Outreach Group</option>
            {groups.map((group, index) =>
              index == 0 ? (
                <option key="0" value="0">
                  Favorites
                </option>
              ) : (
                <option key={index} value={group[0].id}>
                  {group[0].group_name}
                </option>
              )
            )}
          </TextField>
        </Grid>
      </Grid>
      <Stack alignItems="center" direction="row" spacing={2}>
        <Button
          endIcon={
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          }
          sx={{ px: 5, py: 2, fontSize: 18 }}
          className={isReview ? 'review-hidden' : ''}
          onClick={onNext}
          variant="contained"
        >
          Continue
        </Button>
        <Button
          color="primary"
          className={isReview ? 'review-hidden' : ''}
          sx={{ px: 5, py: 2, fontSize: 18 }}
          onClick={onNext}
        >
          Skip
        </Button>
      </Stack>
    </Stack>
  );
};

JobShareStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
const mapStateToProps = (state) => ({
  job: state.job
});

export default connect(mapStateToProps)(JobShareStep);
