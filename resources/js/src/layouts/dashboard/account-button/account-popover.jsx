import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import CreditCard01Icon from '@untitled-ui/icons-react/build/esm/CreditCard01';
import Settings04Icon from '@untitled-ui/icons-react/build/esm/Settings04';
import User03Icon from '@untitled-ui/icons-react/build/esm/User03';
import {
  Box,
  Button,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  SvgIcon,
  Typography
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { useAuth } from '@/hooks/use-auth';
import { useMockedUser } from '@/hooks/use-mocked-user';
import { useRouter } from '@/hooks/use-router';
import { paths } from '@/paths';
import { Issuer } from '@/utils/auth';
import { useSelector, connect } from 'react-redux';
const AccountPopover = (props) => {
  const { anchorEl, userinfo, onClose, open, ...other } = props;
  const router = useRouter();
  const auth = useAuth();
  const user = useMockedUser();

  // console.log(useSelector(state => state.profile));
  // const profile_link = `/profile/${useSelector(state => state.profile.userinfo).firstname}-${useSelector(state => state.profile.userinfo).lastname}-${useSelector(state => state.profile.userinfo).id}`

  const handleLogout = useCallback(async () => {
    try {
      onClose?.();

      switch (auth.issuer) {
        case Issuer.Amplify: {
          await auth.signOut();
          break;
        }

        case Issuer.Auth0: {
          await auth.logout();
          break;
        }

        case Issuer.Firebase: {
          await auth.signOut();
          break;
        }

        case Issuer.JWT: {
          await auth.signOut();
          break;
        }
        case Issuer.Auth: {
          await auth.signOut();
          break;
        }

        default: {
          console.warn('Using an unknown Auth Issuer, did not log out');
        }
      }

      router.push(paths.index);
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  }, [auth, router, onClose]);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom'
      }}
      disableScrollLock
      onClose={onClose}
      open={!!open}
      PaperProps={{ sx: { width: 200 } }}
      {...other}
    >
      <Box sx={{ pl: 2, pr: 2, pt: 2, pb: 2 }}>
        <Typography
          variant="body1"
          style={{ fontStyle: 'italic', fontWeight: 'bold' }}
        >
          {userinfo ? userinfo.fullname : ''}
        </Typography>
        {/* <Typography
          color="text.secondary"
          variant="body2"
        >
          {userinfo ? userinfo.email : ''}

        </Typography> */}
      </Box>
      <Divider style={{ borderColor: 'lightgrey' }} />
      <Box sx={{ p: 1 }}>
        <ListItemButton
          // component={RouterLink}
          component="a"
          // href={paths.dashboard.social.profile}
          href={
            userinfo
              ? `/profile/${userinfo.firstname?.toLowerCase()}-${userinfo.lastname?.toLowerCase()}-${
                  userinfo.id
                }`
              : ''
          }
          onClick={onClose}
          sx={{
            borderRadius: 1,
            px: 1,
            py: 0.5
          }}
        >
          <ListItemIcon>
            <SvgIcon fontSize="small">
              <User03Icon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body1">Profile</Typography>}
          />
        </ListItemButton>
        <ListItemButton
          component={RouterLink}
          href={paths.dashboard.account}
          onClick={onClose}
          sx={{
            borderRadius: 1,
            px: 1,
            py: 0.5
          }}
        >
          <ListItemIcon>
            <SvgIcon fontSize="small">
              <Settings04Icon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body1">Settings</Typography>}
          />
        </ListItemButton>
        {/* <ListItemButton
          component={RouterLink}
          href={paths.dashboard.index}
          onClick={onClose}
          sx={{
            borderRadius: 1,
            px: 1,
            py: 0.5
          }}
        >
          <ListItemIcon>
            <SvgIcon fontSize="small">
              <CreditCard01Icon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText
            primary={<Typography variant="body1">Billing</Typography>}
          />
        </ListItemButton> */}
      </Box>
      <Divider sx={{ my: '0 !important', borderColor: 'lightgrey' }} />
      <Box
        sx={{
          display: 'flex',
          p: 1,
          justifyContent: 'center'
        }}
      >
        <Button color="inherit" onClick={handleLogout} size="small">
          Logout
        </Button>
      </Box>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};
const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});

export default connect(mapStateToProps)(AccountPopover);
