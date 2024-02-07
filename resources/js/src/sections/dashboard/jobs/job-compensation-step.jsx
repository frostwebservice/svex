import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Button,
  Card,
  Box,
  Radio,
  RadioGroup,
  Stack,
  FormControlLabel,
  SvgIcon,
  Typography,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';

import { connect } from 'react-redux';
const currencies = [
  {
    value: 'Under 10USD',
    label: 'Under 10USD'
  },
  {
    value: '10-30USD',
    label: '10-30USD'
  },
  {
    value: '30-250USD',
    label: '30-250USD'
  },
  {
    value: '250-750USD',
    label: '250-750USD'
  },
  {
    value: '750-1500USD',
    label: '750-1500USD'
  },
  {
    value: '1500-3000USD',
    label: '1500-3000USD'
  },
  {
    value: '3000-5000USD',
    label: '3000-5000USD'
  },
  {
    value: 'Over 5000USD',
    label: 'Over 5000USD'
  }
];

const categoryOptions = [
  {
    description: 'Best for small, friendly-pocket projects',
    title: 'Freelancers',
    value: 'freelancers'
  },
  {
    description: 'Limited-time projects with highly experienced individuals',
    title: 'Contractor',
    value: 'contractor'
  },
  {
    description: 'Unlimited term contracts',
    title: 'Employees',
    value: 'employees'
  }
];

const JobCompensationStep = (props) => {
  const { onBack, onNext, isReview, job, updateValue, ...other } = props;
  const [category, setCategory] = useState(categoryOptions[1].value);
  const [content, setContent] = useState('');

  const [barterError, setBarterError] = useState(false);
  const [revenueError, setRevenueError] = useState(false);
  const [customError, setCustomError] = useState(false);
  const [barterHidden, setBarterHidden] = useState('none');
  const [budgetHidden, setBudgetHidden] = useState('');
  const [revenueHidden, setRevenueHidden] = useState('none');
  const [customHidden, setCustomHidden] = useState('none');
  const [selected, setSelected] = useState('paid');
  useEffect(() => {
    setBudgetHidden('none');
    setBarterHidden('none');
    setRevenueHidden('none');
    setCustomHidden('none');
    if (job.payselected == 'paid') setBudgetHidden('');
    else if (job.payselected == 'revenue') setRevenueHidden('');
    else if (job.payselected == 'barter') setBarterHidden('');
    else if (job.payselected == 'custom') setCustomHidden('');
  }, [job]);
  const handleContentChange = useCallback((value) => {
    setContent(value);
  }, []);
  const handleCategoryChange = useCallback((category) => {
    setCategory(category);
  }, []);
  const changehandler = (target, value) => {
    updateValue('paid', 'Under 10USD');
    updateValue('barter', '');
    updateValue('revenue', '');
    updateValue('custom', '');
    if (target == 'paid') {
      updateValue('paid', value);
    } else if (target == 'barter') {
      updateValue('barter', value);
    } else if (target == 'revenue') {
      updateValue('revenue', value);
    } else if (target == 'custom') {
      updateValue('custom', value);
    }
  };
  const changeSelected = (target) => {
    setSelected(target);
  };
  const goNext = () => {
    if (job.payselected == 'barter' && job.barter == '') {
      setBarterError(true);
    } else if (job.payselected == 'revenue' && job.revenue == '') {
      setRevenueError(true);
    } else if (job.payselected == 'custom' && job.custom == '') {
      setCustomError(true);
    } else {
      onNext();
    }
  };
  return (
    <Stack
      spacing={3}
      // sx={{ width: '44.6rem'}}
      {...other}
    >
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="paid"
        value={job.payselected}
        onChange={(e) => {
          setBudgetHidden('none');
          setBarterHidden('none');
          setRevenueHidden('none');
          setCustomHidden('none');
          if (e.target.value == 'paid') setBudgetHidden('');
          else if (e.target.value == 'revenue') setRevenueHidden('');
          else if (e.target.value == 'barter') setBarterHidden('');
          else if (e.target.value == 'custom') setCustomHidden('');
          updateValue('payselected', e.target.value);
        }}
        name="shoutout-group"
      >
        <Stack direction="row">
          <Grid
            container
            disableEqualOverflow
            spacing={{
              xs: 3,
              lg: 4
            }}
          >
            <Grid xs={12} md={6}>
              <Card
                spacing={3}
                sx={{
                  paddingLeft: '2rem',
                  borderRadius: '0.5rem',
                  height: '4rem',
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <FormControlLabel
                  value="paid"
                  control={<Radio />}
                  label="Paid"
                />
              </Card>
            </Grid>

            <Grid xs={12} md={6}>
              <TextField
                sx={{ height: '4rem', display: budgetHidden }}
                inputProps={{
                  style: {
                    fontSize: '18px'
                  }
                }}
                select
                label="Budget"
                onChange={(e) => changehandler('paid', e.target.value)}
                value={job.paid}
                fullWidth
                SelectProps={{
                  native: true
                }}
                variant="filled"
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                spacing={3}
                sx={{
                  paddingLeft: '2rem',
                  borderRadius: '0.5rem',
                  height: '4rem',
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <FormControlLabel
                  value="barter"
                  control={<Radio />}
                  label="Barter"
                />
              </Card>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                sx={{ height: '4rem', display: barterHidden }}
                fullWidth
                error={barterError}
                label="Barter"
                onChange={(e) => {
                  if (e.target.value != '') setBarterError(false);
                  changehandler('barter', e.target.value);
                }}
                value={job.barter}
                name="barter"
                placeholder="Enter"
                inputProps={{
                  style: {
                    fontSize: '18px'
                  }
                }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                spacing={3}
                sx={{
                  paddingLeft: '2rem',
                  borderRadius: '0.5rem',
                  height: '4rem',
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <FormControlLabel
                  value="revenue"
                  control={<Radio />}
                  label="Revenue share"
                />
              </Card>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                sx={{ height: '4rem', display: revenueHidden }}
                value={job.revenue}
                fullWidth
                error={revenueError}
                label="Revenue share"
                onChange={(e) => {
                  if (e.target.value != '') setRevenueError(false);
                  changehandler('revenue', e.target.value);
                }}
                name="revenue"
                placeholder="Enter"
                inputProps={{
                  style: {
                    fontSize: '18px'
                  }
                }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                spacing={3}
                sx={{
                  paddingLeft: '2rem',
                  borderRadius: '0.5rem',
                  height: '4rem',
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <FormControlLabel
                  value="custom"
                  control={<Radio />}
                  label="Custom"
                />
              </Card>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                sx={{ height: '4rem', display: customHidden }}
                fullWidth
                error={customError}
                label="Custom"
                value={job.custom}
                onChange={(e) => {
                  if (e.target.value != '') setCustomError(false);
                  changehandler('custom', e.target.value);
                }}
                name="custom"
                placeholder="Enter"
                inputProps={{
                  style: {
                    fontSize: '18px'
                  }
                }}
              />
            </Grid>
          </Grid>
        </Stack>
      </RadioGroup>

      <Stack alignItems="center" direction="row" spacing={2}>
        <Button
          endIcon={
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          }
          sx={{ px: 5, py: 2, fontSize: 18 }}
          className={isReview ? 'review-hidden' : ''}
          onClick={goNext}
          variant="contained"
        >
          Continue
        </Button>
        {/* <Button
          color="inherit"
          onClick={onBack}
          sx={{px:5,py:2}}
        >
          Back
        </Button> */}
      </Stack>
    </Stack>
  );
};

JobCompensationStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
const mapStateToProps = (state) => ({
  job: state.job
});

export default connect(mapStateToProps)(JobCompensationStep);
