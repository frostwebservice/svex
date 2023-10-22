import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Chip, Card, InputAdornment, Stack, SvgIcon, TextField, Typography } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';
import Upload01Icon from '@untitled-ui/icons-react/build/esm/Upload01';
import Download01Icon from '@untitled-ui/icons-react/build/esm/Download01';
import Avatar from './Avatar.png';

export const JobShotoutStep = (props) => {
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
      <TextField
        fullWidth
        // sx={{ width: '344px'}}
        label="Business URL"
        name="jobTitle"
        placeholder="e.g Salesforce Analyst"
      />
      <Stack direction="row">
        <Stack spacing={3}>

          <Card sx={{
            width: '344px', marginRight: '1.4rem', paddingLeft: '2rem', marginBottom: '1rem',
            borderRadius: '0.5rem', height: '4rem', alignItems: 'center', display: 'flex'
          }}>
            <Button>
              <img src={Avatar} />
            </Button>
            <Typography ml={2}>
              Click to upload or drag your
              brand images
            </Typography>
          </Card>
          <Card sx={{
            width: '344px', marginRight: '1.4rem', paddingLeft: '2rem', marginBottom: '1rem',
            borderRadius: '0.5rem', height: '4rem', alignItems: 'center', display: 'flex'
          }}>
            <Button>
              <img src={Avatar} />
            </Button>
            <Typography ml={2}>
              Click to upload or drag your
              brand images
            </Typography>
          </Card>
        </Stack>
        <Stack spacing={3}>

          <Card sx={{
            width: '344px', marginRight: '1.4rem', paddingLeft: '2rem', marginBottom: '1rem',
            borderRadius: '0.5rem', height: '4rem', alignItems: 'center', display: 'flex'
          }}>
            <Button>
              <img src={Avatar} />
            </Button>
            <Typography ml={2}>
              Click to upload or drag your
              brand images
            </Typography>
          </Card>
        </Stack>

        <Stack
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          spacing={1}
        >
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              onDelete={() => handleTagDelete(tag)}
              variant="outlined"
            />
          ))}
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

JobShotoutStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
