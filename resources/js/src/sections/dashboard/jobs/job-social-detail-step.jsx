import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Chip, Grid, InputAdornment, Stack, SvgIcon, TextField, Typography } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';

import MultiSelectAll from "./MultiSelectAll";
const currencies = [
  {
    value: 'instagram',
    label: 'Instagram',
  },
  {
    value: 'tiktok',
    label: 'TikTok',
  },
  {
    value: 'youtube',
    label: 'Youtube',
  },
  {
    value: 'twitter',
    label: 'Twitter',
  },
  {
    value: 'pinterest',
    label: 'Pinterest',
  },
  {
    value: 'linkedin',
    label: 'LinkedIn',
  },
  {
    value: 'blogwebsite',
    label: 'Blob/Website',
  },
];

export const JobSocialDetailStep = (props) => {
  const { onBack, onNext, ...other } = props;
  const handleSelectionChange = (result) => {
    console.log(result)
    // setCurrentSelection(result);

  };
  const [initialSelect, setInitialSelect] = useState([])
  return (
    <Stack
      spacing={3}
      {...other}>

      <Stack spacing={3}>
        {/* <TextField

          select
          label="Social Media Types"
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
        </TextField> */}
   
          <Grid item xs={12} sx={{ p: 0 }}>
            <MultiSelectAll
                sx={{ maxheight: "700px"}}
                items={currencies}
                selectAllLabel="Select All"
                value={initialSelect}
                // key={tmpkey}
                placeholder="sss"
                onChange={handleSelectionChange}
              />
            </Grid>

        <TextField
          fullWidth
          label="Instagram"
          name="instagram"
        // placeholder="e.g Salesforce Analyst"
        />
        <TextField
          fullWidth
          label="Tiktok"
          name="tiktok"
        // placeholder="e.g Salesforce Analyst"
        />
        <TextField
          fullWidth
          label="Youtube"
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
          name="blogwebsite"
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

JobSocialDetailStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
