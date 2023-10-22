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

export const JobSocialDetailStep = (props) => {
  const { onBack, onNext, ...other } = props;


  return (
    <Stack
      spacing={3}
      {...other}>

      <Stack spacing={3}>
        <TextField

          select
          label="Instagram"
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
          label="Instagram"
          name="instagram"
        // placeholder="e.g Salesforce Analyst"
        />
        <TextField
          fullWidth
          label="Tik Toc"
          name="tiktoc"
        // placeholder="e.g Salesforce Analyst"
        />
        <TextField
          fullWidth
          label="You Tube"
          name="youtube"
        // placeholder="e.g Salesforce Analyst"
        />
        <TextField
          fullWidth
          label="Twitter"
          name="twitter"
        // placeholder="e.g Salesforce Analyst"
        />
        <TextField
          fullWidth
          label="Pinterest"
          name="pinterest"
        // placeholder="e.g Salesforce Analyst"
        />
        <TextField
          fullWidth
          label="LinkedIn"
          name="linkedin"
        // placeholder="e.g Salesforce Analyst"
        />
        <TextField
          fullWidth
          label="Blog/Website"
          name="blog&website"
        // placeholder="e.g Salesforce Analyst"
        />


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

JobSocialDetailStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
