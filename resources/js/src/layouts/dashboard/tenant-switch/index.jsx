import PropTypes from 'prop-types';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import { Box, IconButton, Stack, SvgIcon, Typography } from '@mui/material';
import { usePopover } from '@/hooks/use-popover';
import { TenantPopover } from './tenant-popover';
import { connect } from 'react-redux';
const tenants = ['Devias', 'Acme Corp'];

const TenantSwitch = (props) => {
  const popover = usePopover();
  const { userinfo } = props;
  return (
    <>
      <Stack alignItems="center" direction="row" spacing={2} {...props}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="inherit" variant="h6">
            {userinfo.firstname}
          </Typography>
          <Typography color="neutral.400" variant="body2">
            Dashboard
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});

export default connect(mapStateToProps)(TenantSwitch);
