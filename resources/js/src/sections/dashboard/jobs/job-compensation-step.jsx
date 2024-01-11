import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Card, Box, Radio, RadioGroup, Stack, FormControlLabel, SvgIcon, Typography, TextField,Unstable_Grid2 as Grid } from '@mui/material';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';


const currencies = [
  {
    value: 'budget range',
    label: 'Budget Range',
  },
  {
    value: 'Freelancer',
    label: 'Freelancer',
  },
  {
    value: 'Linkedin',
    label: 'Linkedin',
  },
  {
    value: 'Upwork',
    label: 'Upwork',
  },
  {
    value: 'Pinterest',
    label: 'Pinterest',
  },

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

export const JobCompensationStep = (props) => {
  const { onBack, onNext, ...other } = props;
  const [category, setCategory] = useState(categoryOptions[1].value);
  const [content, setContent] = useState('');

  const handleContentChange = useCallback((value) => {
    setContent(value);
  }, []);
  const handleCategoryChange = useCallback((category) => {
    setCategory(category);
  }, []);

  return (
    <Stack
      spacing={3}
      // sx={{ width: '44.6rem'}}
      {...other}>



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
                label="Rudget"
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
                fullWidth
                label="Revenue share"
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
