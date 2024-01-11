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

export const JobShareStep = (props) => {
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

      <Stack spacing={3}
        // sx={{
        //     width: '44.6rem'
        // }}
        direction='row'
      >
        <TextField
          fullWidth
          select
          label="Favorites"
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
          label="Outreach Groups"
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

JobShareStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
