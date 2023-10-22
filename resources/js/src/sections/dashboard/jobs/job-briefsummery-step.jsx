import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Card, Box, Radio, RadioGroup, Stack, FormControlLabel, SvgIcon, Typography, TextField } from '@mui/material';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';


const currencies = [
  {
    value: 'Any',
    label: 'Any',
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
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Card
              spacing={3}
              sx={{
                width: '344px', marginRight: '1.4rem', paddingLeft: '2rem',
                borderRadius: '1rem', height: '74px', alignItems: 'center', display: 'flex'
              }}
            >
              <FormControlLabel value="shotoutonly" control={<Radio />} label="Shotout Olny" />
            </Card>
            <Card
              spacing={3}
              sx={{
                width: '347px', paddingLeft: '2rem',
                borderRadius: '1rem', height: '74px', alignItems: 'center', display: 'flex'
              }}>
              <FormControlLabel value="female" control={<Radio />} label="Content Creation & Shotout" />
            </Card>


          </RadioGroup>
        </Stack>
      </Stack>

      <div>
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
      </div>
    </Stack>
  );
};

JobBriefSummeryStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
