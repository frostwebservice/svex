import { useCallback, useState ,useEffect} from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Chip, InputAdornment, Stack, SvgIcon, TextField, Typography,Unstable_Grid2 as Grid } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { connect } from 'react-redux';
const JobShareStep = (props) => {
  const { onBack, onNext,updateValue,job, ...other } = props;
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [startDate, setStartDate] = useState(new Date('2022-09-22T11:41:50'));
  const [endDate, setEndDate] = useState(new Date('2023-01-11T12:41:50'));
  const email = JSON.parse(localStorage.getItem('email'));
  const [selectedFavorite,setSelectedFavorite] = useState("")
  const [selectedGroup,setSelectedGroup] = useState("")
  const [favorites,setFavorites] = useState([])
  const [groups,setGroups] = useState([])
  useEffect(() => {
    axios.post("/api/get_favs", {email:email}, {
    }).then(res => {
        setFavorites(res.data)
        setSelectedFavorite(res.data[0]?.data[0]?.username)
        upgradeFavorite(res.data[0]?.id)
      })
    axios.post("/api/getoutreachs", {email:email}, {
      }).then(res => {

        setGroups(res.data)
        setSelectedGroup("Favorites")
        upgradeGroup(0)
        })
  }, []);
  const upgradeFavorite = (value) => {
    setSelectedFavorite(value)
    updateValue("favorites",value)
  }
  const upgradeGroup = (value) =>{
    setSelectedGroup(value)
    updateValue("outreachgroups",value)
  }
  const handleStartDateChange = useCallback((date) => {
    setStartDate(date);
  }, []);

  const handleEndDateChange = useCallback((date) => {
    setEndDate(date);
  }, []);

  const handleTagAdd = useCallback((tag) => {
    setTags((prevState) => {
      return [...prevState, tag];
    });
  }, []);

  const handleTagDelete = useCallback((tag) => {
    setTags((prevState) => {
      return prevState.filter((t) => t !== tag);
    });
  }, []);

  return (
    <Stack
      spacing={3}
      {...other}>
      <Grid
        container
        disableEqualOverflow
        spacing={{
          xs: 3,
          lg: 4
        }}
      >
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Favorites"
            // defaultValue="EUR"
            value={job.favorites}
            onChange={(e)=>upgradeFavorite(e.target.value)}
            SelectProps={{
              native: true,
            }}
            variant="filled"
          >
          {favorites.map((option,index) => (
            <option key={option.id} value={option.id}>
              {option.data[0].username}
            </option>
          ))}
        </TextField>
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Outreach Groups"
            onChange={(e)=>upgradeGroup(e.target.value)}
            value={job.outreachgroups}
            // defaultValue="EUR"
            SelectProps={{
              native: true,
            }}

            variant="filled"
          >

            {groups.map((group,index) => 
              index==0?(
                <option key="0" value="0">
                Favorites
              </option>
              ):(
                <option key={index} value={group[0].id}>
                {group[0].group_name}
              </option>
              )

            )}
          </TextField>
        </Grid>
      </Grid>
      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
      >
        <Button
          endIcon={(
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          )}
          sx={{px:5,py:2,fontSize:18}}
          onClick={onNext}
          variant="contained"
        >
          Continue
        </Button>
        <Button
          color="primary"
          sx={{px:5,py:2,fontSize:18}}
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
const mapStateToProps = state => ({
  job: state.job
});

export default connect(mapStateToProps)(JobShareStep);