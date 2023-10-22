import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Chip, InputAdornment, Stack, SvgIcon, TextField, Typography } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';


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
      <Stack
        direction='row'
        // sx={{width: '44.6rem'}}
        spacing={3}
      >
        <Stack spacing={3}
          sx={{ width: '50%' }}
        >
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
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
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
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
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
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Stack>
        <Stack
          sx={{ width: '50%' }}
          spacing={3}>
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
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
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
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Stack>




      </Stack>


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
          onClick={onNext}
          variant="contained"
        >
          Continue
        </Button>
        <Button
          color="inherit"
          onClick={onBack}
        >
          Back
        </Button>
      </Stack>
    </Stack>
  );
};

JobExclusionStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
