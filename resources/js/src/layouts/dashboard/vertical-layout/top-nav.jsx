import PropTypes from 'prop-types';
import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01';
import {
  Box,
  IconButton,
  Stack,
  SvgIcon,
  useMediaQuery,
  Button
} from '@mui/material';
import Badge from '@mui/material/Badge';
import { alpha } from '@mui/material/styles';
import AccountButton from '../account-button';
import { ContactsButton } from '../contacts-button';
import { LanguageSwitch } from '../language-switch';
import { NotificationsButton } from '../notifications-button';
import { SearchButton } from '../search-button';
import { ButtonBase, Tooltip } from '@mui/material';
import Settings03Icon from '@untitled-ui/icons-react/build/esm/Settings03';
import { getUserProfile } from '@/actions';
const TOP_NAV_HEIGHT = 64;
const SIDE_NAV_WIDTH = 280;
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import '../top.css';
import { RouterLink } from '@/components/router-link';
import { paths } from '@/paths';
import { useSelector } from '@/store';
import { useState } from 'react';
export const TopNav = (props) => {
  const { onMobileNavOpen, ...other } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const email = JSON.parse(localStorage.getItem('email'));
  const mails = useSelector((state) => state.mail.cntemails);
  const [mailCnt, setMailCnt] = useState(0);

  useEffect(() => {
    let cnt = 0;
    mails.allIds.map((emailId) => {
      if (!mails.byId[emailId].isUnread.seen) {
        cnt++;
      }
    });
    setMailCnt(cnt);
  }, [mails]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile({ email }));
  }, [dispatch]);
  return (
    <Box
      component="header"
      sx={{
        backdropFilter: 'blur(6px)',
        backgroundColor: (theme) =>
          alpha(theme.palette.background.default, 0.8),
        position: 'sticky',
        left: {
          lg: `${SIDE_NAV_WIDTH}px`
        },
        top: 0,
        width: {
          lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
        },
        zIndex: (theme) => theme.zIndex.appBar
      }}
      {...other}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 2
        }}
      >
        <Stack alignItems="center" direction="row" spacing={2} sx={{ ml: 8 }}>
          {!lgUp && (
            <IconButton onClick={onMobileNavOpen}>
              <SvgIcon>
                <Menu01Icon />
              </SvgIcon>
            </IconButton>
          )}
          <SearchButton />
        </Stack>
        <Stack alignItems="center" direction="row" spacing={0}>
          <Tooltip title="Settings" className="small-show">
            <Box
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: '50%',
                // bottom: 0,
                boxShadow: 16,
                margin: (theme) => theme.spacing(1),
                // position: 'fixed',
                // right: 0,
                zIndex: (theme) => theme.zIndex.speedDial
              }}
            >
              <ButtonBase
                sx={{
                  backgroundColor: 'primary.main',
                  borderRadius: '50%',
                  color: 'primary.contrastText',
                  p: '4px'
                }}
                className="custom-setting"
                onClick={() => {
                  document.getElementsByClassName('realtooltip')[0].click();
                }}
              >
                <SvgIcon>
                  <Settings03Icon />
                </SvgIcon>
              </ButtonBase>
            </Box>
          </Tooltip>
          <Box sx={{ pr: 0 }}>
            <Button
              sx={{ pr: 1 }}
              className="custom-mailbox"
              component={RouterLink}
              href={paths.dashboard.mail}
              startIcon={
                <>
                  {mailCnt == 0 ? (
                    <img
                      src="/assets/icons/mail-empty.png"
                      width={30}
                      height={25}
                    />
                  ) : (
                    <Badge badgeContent={mailCnt} color="primary">
                      <img
                        src="/assets/icons/mail.png"
                        width={30}
                        height={25}
                      />
                    </Badge>
                  )}
                </>
              }
            ></Button>
          </Box>
          {/* <LanguageSwitch /> */}
          <NotificationsButton />
          {/* <ContactsButton /> */}
          <AccountButton />
        </Stack>
      </Stack>
    </Box>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func
};
