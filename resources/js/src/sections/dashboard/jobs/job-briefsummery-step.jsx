import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Card, Box, Radio, RadioGroup, Stack, FormControlLabel, SvgIcon, Typography, TextField,Unstable_Grid2 as Grid } from '@mui/material';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';


const currencies =  [
  { label: 'Acne and Skin Care', value: 'Acne and Skin Care' },
  { label: 'Alcohol', value: 'Alcohol' },
  { label: 'Art', value: 'Art' },
  { label: 'Baby and Maternity', value: 'Baby and Maternity' },
  { label: 'Blockchain and Cryptocurrency', value: 'Blockchain and Cryptocurrency' },
  { label: 'Books and Fiction', value: 'Books and Fiction' },
  { label: 'Business and Career', value: 'Business and Career' },
  { label: 'Cameras, Photography and Videography', value: 'Cameras, Photography and Videography' },
  { label: 'Cars and Vehicles', value: 'Cars and Vehicles' },
  { label: 'Cooking and Recipes', value: 'Cooking and Recipes' },
  { label: 'Crafts and DIY', value: 'Crafts and DIY' },
  { label: 'Diet and Weight Loss', value: 'Diet and Weight Loss' },
  { label: 'Digital Marketing and Making Money Online', value: 'Digital Marketing and Making Money Online' },
  { label: 'Exercise and Fitness', value: 'Exercise and Fitness' },
  { label: 'Farming', value: 'Farming' },
  { label: 'Gardening and Lawn Care', value: 'Gardening and Lawn Care' },
  { label: 'Health', value: 'Health' },
  { label: 'Makeup and Beauty', value: 'Makeup and Beauty' },
  { label: 'Martial Arts', value: 'Martial Arts' },
  { label: 'Music and Instruments', value: 'Music and Instruments' },
  { label: 'Outdoors and Hiking', value: 'Outdoors and Hiking' },
  { label: 'Pets and Animal Care', value: 'Pets and Animal Care' },
  { label: 'Sports', value: 'Sports' },
  { label: 'Technology and Gadgets', value: 'Technology and Gadgets' },
  { label: 'Travel', value: 'Travel' },
  { label: 'Wedding', value: 'Wedding' },
  { label: 'OK', value: 'OK' }
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

export const JobBriefSummeryStep = (props) => {
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
      // sx={{ width: '44.6rem' }}
      {...other}>
      <div>
        <Typography variant="h6"
          sx={{ mb: '1rem' }}
        >
          I am looking for...
        </Typography>
        <TextField
          fullWidth
          label="Job Title"
          name="jobTitle"
          placeholder="Discribe your job in brief"
          inputProps={{
            style: {
              height: "24px",
              fontSize: "18px"
            },
          }}
        />
      </div>

      <Stack spacing={3}>
        <TextField
          label="Job Brief"
          name="jobbrief"
          variant="filled"
          placeholder="Describe your goals and objectives of this job and what you require from an Influencer"
          multiline
          fullWidth
          inputProps={{
            style: {
              height: "48px",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px"
            },
          }}
        />
        <TextField
          inputProps={{
            style: {
              height: "24px",
              fontSize: "18px"
            },
          }}
          select
          label="Niche"
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
        <Stack direction="row">
        <Grid
            container
            spacing={{
              xs: 12,
              lg: 12,
              md:12
            }}
            style={{margin:0,width:'100%'}}
          >
            <Grid xs={12} md={6} sx={{padding:0}}>
              <Card
                sx={{
                
                    padding:'15px 20px',
                  borderRadius: '1rem', alignItems: 'center'
                }}
              >
                <FormControlLabel value="shotoutonly" control={<Radio />} label="Shoutout Only" />
              </Card>
            </Grid> 
            <Grid xs={12} md={6} sx={{padding:0}}>
              <Card
                sx={{
                  padding:'15px 20px',
                  borderRadius: '1rem',  alignItems: 'center'
                }}>
                <FormControlLabel value="female" control={<Radio />} label="Content Creation & Shoutout" />
              </Card>
            </Grid>




          </Grid>
        </Stack>
      </Stack>

      <div>
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
      </div>
    </Stack>
  );
};

JobBriefSummeryStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
