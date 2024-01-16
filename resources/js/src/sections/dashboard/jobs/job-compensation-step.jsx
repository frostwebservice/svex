import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Card, Box, Radio, RadioGroup, Stack, FormControlLabel, SvgIcon, Typography, TextField,Unstable_Grid2 as Grid } from '@mui/material';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';

import { connect } from 'react-redux';
const currencies = [
  {
    value: 'maxbudget',
    label: 'Max Budget',
  },
  {
    value: 'budgetrange',
    label: 'Budget Range',
  },
  {
    value: 'flexible',
    label: 'Flexible',
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
  const { onBack, onNext,isReview,job,updateValue, ...other } = props;
  const [category, setCategory] = useState(categoryOptions[1].value);
  const [content, setContent] = useState('');
  // const [barter,setBarter] = useState("")
  // const [revenue,setRevenue] = useState("")
  // const [custom,setCustom] = useState("")
  // const [budget,setBudget] = useState("maxbudget")
  const [selected,setSelected] = useState("paid")
  const handleContentChange = useCallback((value) => {
    setContent(value);
  }, []);
  const handleCategoryChange = useCallback((category) => {
    setCategory(category);
  }, []);
  const changehandler = (target,value) =>{
    updateValue("paid","maxbudget")
    updateValue("barter","")
    updateValue("revenue","")
    updateValue("custom","")
    if(target=="paid"){
      updateValue("paid",value)
    }else if(target=="barter"){
      updateValue("barter",value)
    }else if(target=="revenue"){
      updateValue("revenue",value)
    }else if(target=="custom"){
      updateValue("custom",value)

    }
  }
  const changeSelected = (target)=>{
    setSelected(target);
  }
  return (
    <Stack
      spacing={3}
      // sx={{ width: '44.6rem'}}
      {...other}>


    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="paid"
      value={job.payselected}
      onChange = {(e)=>updateValue("payselected",e.target.value)}
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
                  borderRadius: '0.5rem', height: '4rem', alignItems: 'center', display: 'flex'
                }}
              >
                <FormControlLabel value="paid" control={<Radio />} label="Paid" />
              </Card>
            </Grid>
    
            <Grid xs={12} md={6}>
              <TextField
                sx={{ height: '4rem' }}
                inputProps={{
                  style: {
                    fontSize: "18px"
                  },
                }}
                select
                label="Budget"
                onChange={(e)=>changehandler("paid",e.target.value)}
                value={job.paid}
                fullWidth
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
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                spacing={3}
                sx={{
                 paddingLeft: '2rem',
                  borderRadius: '0.5rem', height: '4rem', alignItems: 'center', display: 'flex'
                }}
              >
                <FormControlLabel value="barter" control={<Radio />} label="Barter" />
              </Card>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                sx={{ height: '4rem' }}
                fullWidth
                label="Barter"
                onChange={(e)=>changehandler("barter",e.target.value)}
                value={job.barter}
                name="barter"
                placeholder="Enter"
                inputProps={{
                  style: {

                    fontSize: "18px"
                  },
                }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                spacing={3}
                sx={{
                 paddingLeft: '2rem',
                  borderRadius: '0.5rem', height: '4rem', alignItems: 'center', display: 'flex'
                }}
              >
                <FormControlLabel value="Revenueshare" control={<Radio />} label="Revenue share" />
              </Card>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                sx={{ height: '4rem' }}
                value={job.revenue}
                fullWidth
                label="Revenue share"
                onChange={(e)=>changehandler("revenue",e.target.value)}
                name="revenue"
                placeholder="Enter"
                inputProps={{
                  style: {

                    fontSize: "18px"
                  },
                }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                spacing={3}
                sx={{
                 paddingLeft: '2rem',
                  borderRadius: '0.5rem', height: '4rem', alignItems: 'center', display: 'flex'
                }}
              >
                <FormControlLabel value="custom" control={<Radio />} label="Custom" />
              </Card>
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                sx={{ height: '4rem' }}
                fullWidth
                label="Custom"
                value={job.custom}
                onChange={(e)=>changehandler("custom",e.target.value)}
                name="custom"
                placeholder="Enter"
                inputProps={{
                  style: {
                    fontSize: "18px"
                  },
                }}
              />
            </Grid>
          </Grid>
      
      </Stack>
    </RadioGroup>

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
          className={isReview?"review-hidden":""}
          onClick={onNext}
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
const mapStateToProps = state => ({
  job: state.job
});

export default connect(mapStateToProps)(JobCompensationStep);