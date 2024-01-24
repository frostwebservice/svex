import PropTypes from 'prop-types';
import Settings04Icon from '@untitled-ui/icons-react/build/esm/Settings04';
import { Box, Button, Stack, SvgIcon, Typography } from '@mui/material';
import { useSettings } from '@/hooks/use-settings';
import { useNavigate } from 'react-router-dom';
import GraduationHat01Icon from '@/icons/untitled-ui/duocolor/graduation-hat-01';
export const OverviewInvoices = (props) => {
  const { handleDrawerOpen } = useSettings();
  const navigate = useNavigate();
  return (
    <Stack
      alignItems="center"
      direction={{
        xs: 'column',
        md: 'row'
      }}
      spacing={4}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'primary.darkest'
            : 'primary.lightest',
        borderRadius: 2.5,
        p: 4
      }}
      {...props}
    >
      <Box
        sx={{
          width: 200,
          '& img': {
            width: '100%'
          }
        }}
      >
        <img src="/assets/person-standing.png" />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Typography color="primary.main" variant="overline">
          New v6 update
        </Typography>
        <Typography color="text.primary" sx={{ mt: 2 }} variant="h6">
          View All Orders
        </Typography>
        <Typography color="text.primary" sx={{ mt: 1 }} variant="body1">
          To management users, click the below button.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            color="primary"
            onClick={() => navigate('/dashboard/orders')}
            startIcon={
              <SvgIcon>
                <GraduationHat01Icon />
              </SvgIcon>
            }
            variant="contained"
          >
            View All Orders
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

OverviewInvoices.propTypes = {
  onDismiss: PropTypes.func
};
