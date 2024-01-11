import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Chip, InputAdornment, Stack, SvgIcon, TextField, Typography,Unstable_Grid2 as Grid } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { categoryOptions, locationOptions, followersFromOptions, followersToOptions, ageOptions, genderOptions, languageOptions, engagementOptions, avglikesOptions, avgcommentsOptions } from '../academy/data'


const currencies = [
  {
    value: 'Instagram',
    label: 'Instagram',
  },
  {
    value: 'Tik Toc',
    label: 'TikToc',
  },
  {
    value: 'youTube',
    label: 'YouTube',
  },
  {
    value: 'Twitter',
    label: 'Twitter',
  },
  {
    value: 'Pinterest',
    label: 'Pinterest',
  },
  {
    value: 'LinkedIn',
    label: 'LinkedIn',
  },
  {
    value: 'Blog/Website',
    label: 'Blob/Website',
  },
];

export const JobExclusionStep = (props) => {
  const { onBack, onNext, ...other } = props;
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [startDate, setStartDate] = useState(new Date('2022-09-22T11:41:50'));
  const [endDate, setEndDate] = useState(new Date('2023-01-11T12:41:50'));

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
            label="Total Reach"
            // defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
            variant="filled"
          >
            {followersFromOptions.map((option,index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Location"
            // defaultValue="EUR"
            SelectProps={{
              native: true,
            }}

            variant="filled"
          >
            {locationOptions.map((option,index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid xs={12} md={6}>

          <TextField
            fullWidth
            select
            label="Gender"
            // defaultValue="EUR"
            SelectProps={{
              native: true,
            }}

            variant="filled"
          >
            {genderOptions.map((option,index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Age Range"
            // defaultValue="EUR"
            SelectProps={{
              native: true,
            }}

            variant="filled"
          >
            {ageOptions.map((option,index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Engagement Rate"
            // defaultValue="EUR"
            SelectProps={{
              native: true,
            }}

            variant="filled"
          >
            {engagementOptions.map((option,index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
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
          sx={{px:5,py:2}}
          onClick={onNext}
          variant="contained"
        >
          Continue
        </Button>
        <Button
          color="primary"
          sx={{px:5,py:2}}
          onClick={onBack}
        >
          Skip
        </Button>
      </Stack>
    </Stack>
  );
};

JobExclusionStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
