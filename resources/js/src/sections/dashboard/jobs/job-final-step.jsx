import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Chip, InputAdornment, Stack, SvgIcon, TextField, Typography } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';

export const JobFinalStep = (props) => {
  const { onBack, onNext,isEdit,onUpdate, ...other } = props;

  return (

      <Stack
        alignItems="right"
        direction="row"
        spacing={2}
        sx={{float:'right'}}
      >
        <Button
          sx={{px:5,py:2,fontSize:18}}
          endIcon={(
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          )}
          onClick={isEdit?onUpdate:onNext}
          variant="contained"
        >
          {isEdit?"Update Job":"Post the Job"}
          
        </Button>
       
      </Stack>

  );
};

JobFinalStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
