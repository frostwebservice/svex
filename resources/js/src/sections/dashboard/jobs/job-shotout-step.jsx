import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Chip, Card, InputAdornment, Stack, SvgIcon, TextField, Typography ,Unstable_Grid2 as Grid } from '@mui/material';
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
              label="Business URL"
              sx={{
            
                borderRadius: '0.5rem', height: '4rem', alignItems: 'center'
              }}
              name="businessurl"
              placeholder="e.g www.canadagoose.com"
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              label="Social Media Handle"
              sx={{
            
                borderRadius: '0.5rem', height: '4rem', alignItems: 'center'
              }}
              name="socialhandle"
              placeholder="e.g @canadagoose"
            />
          </Grid>
        
        <Grid xs={12} md={6}>
          <Card
            spacing={3}
            sx={{
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
        </Grid>
        <Grid xs={12} md={6}>
          <Card 
            spacing={3}
            
          sx={{
            borderRadius: '0.5rem', height: '4rem', alignItems: 'center', display: 'flex'
          }}>
            <Button>
              <img src={Avatar} />
            </Button>
            <Typography ml={2}>
              Click to upload or drag your
              brand videos
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} md={6}>
          <Card 
            spacing={3}
          sx={{
            borderRadius: '0.5rem', height: '4rem', alignItems: 'center', display: 'flex'
          }}>
            <Button>
              <img src={Avatar} />
            </Button>
            <Typography ml={2}>
              Click to upload or drag your
              brand articles
            </Typography>
          </Card>
        </Grid>
        </Grid>

      
      <Stack direction="row">

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
          sx={{px:5,py:2}}
          onClick={onNext}
          variant="contained"
        >
          Continue
        </Button>
        <Button
          color="primary"
          onClick={onBack}
          sx={{px:5,py:2}}
        >
          Skip
        </Button>
      </Stack>
    </Stack>
  );
};

JobShotoutStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
