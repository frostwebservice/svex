import PropTypes from 'prop-types';
import SunIcon from '@untitled-ui/icons-react/build/esm/Sun';
import Moon01Icon from '@untitled-ui/icons-react/build/esm/Moon01';
import { Chip, Stack, SvgIcon, Typography } from '@mui/material';
import $ from 'jquery';
import "./custom.css";
import { useEffect } from 'react';
const options = [
  {
    label: 'Light',
    value: 'light',
    icon: (
      <SvgIcon fontSize="small">
        <SunIcon />
      </SvgIcon>
    )
  },
  {
    label: 'Dark',
    value: 'dark',
    icon: (
      <SvgIcon fontSize="small">
        <Moon01Icon />
      </SvgIcon>
    )
  }
];

export const OptionsColorScheme = (props) => {
  const { onChange, value } = props;

  useEffect(() => {
    onMultiSelectCustom(value)

  });
  const onMultiSelectCustom = value => {
    if ($('.geoapify-autocomplete-input').length > 0) {
      if (value == 'dark') {
        $('.geoapify-autocomplete-input').addClass("custom-multiselect");
        $('.geoapify-close-button').addClass("custom-close");
        // $('.geoapify-autocomplete-items').addClass("custom-items");
        // $('.secondary-part').addClass("custom-secondary");
      }
      if (value == 'light') {
        $('.geoapify-autocomplete-input').removeClass("custom-multiselect");
        $('.geoapify-close-button').removeClass("custom-close");
        // $('.geoapify-autocomplete-items').removeClass("custom-items");
        // $('.secondary-part').removeClass("custom-secondary");
      }

    }
  }

  return (
    <Stack spacing={1}>
      <Typography
        color="text.secondary"
        variant="overline"
      >
        Color Scheme
      </Typography>
      <Stack
        alignItems="center"
        direction="row"
        flexWrap="wrap"
        gap={2}
      >
        {options.map((option) => (
          <Chip
            icon={option.icon}
            key={option.value}
            label={option.label}
            onClick={() => { onChange?.(option.value); onMultiSelectCustom?.(option.value) }}
            sx={{
              borderColor: 'transparent',
              borderRadius: 1.5,
              borderStyle: 'solid',
              borderWidth: 2,
              ...(option.value === value && {
                borderColor: 'primary.main'
              })
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

OptionsColorScheme.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOf(['light', 'dark'])
};
