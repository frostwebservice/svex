import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01';
import {
  Box,
  IconButton,
  Stack,
  SvgIcon,
  ButtonBase,
  Tooltip,
  useMediaQuery,
  Button
} from '@mui/material';

import Badge from '@mui/material/Badge';
import { useTheme } from '@mui/material/styles';
import { Logo } from '@/components/logo';
import { RouterLink } from '@/components/router-link';
import { Scrollbar } from '@/components/scrollbar';
import { usePathname } from '@/hooks/use-pathname';
import { paths } from '@/paths';
import { useSelector } from '@/store';
import { useState, useEffect } from 'react';
import AccountButton from '../account-button';
import { ContactsButton } from '../contacts-button';
import { LanguageSwitch } from '../language-switch';
import Settings03Icon from '@untitled-ui/icons-react/build/esm/Settings03';
import { Link } from 'react-router-dom';
import { NotificationsButton } from '../notifications-button';
import TenantSwitch from '../tenant-switch';
import { TopNavSection } from './top-nav-section';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';

const useCssVars = (color) => {
  const theme = useTheme();

  return useMemo(() => {
    switch (color) {
      case 'blend-in':
        if (theme.palette.mode === 'dark') {
          return {
            '--nav-bg': theme.palette.background.default,
            '--nav-color': theme.palette.neutral[100],
            '--nav-divider-color': theme.palette.neutral[800],
            '--nav-border-color': theme.palette.neutral[700],
            '--nav-logo-border': theme.palette.neutral[700],
            '--nav-item-color': theme.palette.neutral[400],
            '--nav-item-hover-bg': 'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-bg': 'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-color': theme.palette.text.primary,
            '--nav-item-disabled-color': theme.palette.neutral[600],
            '--nav-item-icon-color': theme.palette.neutral[500],
            '--nav-item-icon-active-color': theme.palette.primary.main,
            '--nav-item-icon-disabled-color': theme.palette.neutral[700],
            '--nav-item-chevron-color': theme.palette.neutral[700],
            '--nav-scrollbar-color': theme.palette.neutral[400]
          };
        } else {
          return {
            '--nav-bg': theme.palette.background.default,
            '--nav-color': theme.palette.text.primary,
            '--nav-divider-color': theme.palette.divider,
            '--nav-border-color': theme.palette.neutral[100],
            '--nav-logo-border': theme.palette.neutral[100],
            '--nav-section-title-color': theme.palette.neutral[400],
            '--nav-item-color': theme.palette.text.secondary,
            '--nav-item-hover-bg': theme.palette.action.hover,
            '--nav-item-active-bg': theme.palette.action.selected,
            '--nav-item-active-color': theme.palette.text.primary,
            '--nav-item-disabled-color': theme.palette.neutral[400],
            '--nav-item-icon-color': theme.palette.neutral[400],
            '--nav-item-icon-active-color': theme.palette.primary.main,
            '--nav-item-icon-disabled-color': theme.palette.neutral[400],
            '--nav-item-chevron-color': theme.palette.neutral[400],
            '--nav-scrollbar-color': theme.palette.neutral[900]
          };
        }

      case 'discreet':
        if (theme.palette.mode === 'dark') {
          return {
            '--nav-bg': theme.palette.neutral[900],
            '--nav-color': theme.palette.neutral[100],
            '--nav-divider-color': theme.palette.neutral[800],
            '--nav-border-color': theme.palette.neutral[700],
            '--nav-logo-border': theme.palette.neutral[700],
            '--nav-item-color': theme.palette.neutral[400],
            '--nav-item-hover-bg': 'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-bg': 'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-color': theme.palette.text.primary,
            '--nav-item-disabled-color': theme.palette.neutral[600],
            '--nav-item-icon-color': theme.palette.neutral[500],
            '--nav-item-icon-active-color': theme.palette.primary.main,
            '--nav-item-icon-disabled-color': theme.palette.neutral[700],
            '--nav-item-chevron-color': theme.palette.neutral[700],
            '--nav-scrollbar-color': theme.palette.neutral[400]
          };
        } else {
          return {
            '--nav-bg': theme.palette.neutral[50],
            '--nav-color': theme.palette.text.primary,
            '--nav-divider-color': theme.palette.neutral[200],
            '--nav-border-color': theme.palette.divider,
            '--nav-logo-border': theme.palette.neutral[200],
            '--nav-section-title-color': theme.palette.neutral[500],
            '--nav-item-color': theme.palette.neutral[500],
            '--nav-item-hover-bg': theme.palette.action.hover,
            '--nav-item-active-bg': theme.palette.action.selected,
            '--nav-item-active-color': theme.palette.text.primary,
            '--nav-item-disabled-color': theme.palette.neutral[400],
            '--nav-item-icon-color': theme.palette.neutral[400],
            '--nav-item-icon-active-color': theme.palette.primary.main,
            '--nav-item-icon-disabled-color': theme.palette.neutral[400],
            '--nav-item-chevron-color': theme.palette.neutral[400],
            '--nav-scrollbar-color': theme.palette.neutral[900]
          };
        }

      case 'evident':
        if (theme.palette.mode === 'dark') {
          return {
            '--nav-bg': theme.palette.neutral[800],
            '--nav-color': theme.palette.common.white,
            '--nav-divider-color': theme.palette.neutral[700],
            '--nav-border-color': 'transparent',
            '--nav-logo-border': theme.palette.neutral[700],
            '--nav-item-color': theme.palette.neutral[400],
            '--nav-item-hover-bg': 'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-bg': 'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-color': theme.palette.common.white,
            '--nav-item-disabled-color': theme.palette.neutral[500],
            '--nav-item-icon-color': theme.palette.neutral[400],
            '--nav-item-icon-active-color': theme.palette.primary.main,
            '--nav-item-icon-disabled-color': theme.palette.neutral[500],
            '--nav-item-chevron-color': theme.palette.neutral[600],
            '--nav-scrollbar-color': theme.palette.neutral[400]
          };
        } else {
          return {
            '--nav-bg': theme.palette.neutral[800],
            '--nav-color': theme.palette.common.white,
            '--nav-divider-color': theme.palette.neutral[700],
            '--nav-border-color': 'transparent',
            '--nav-logo-border': theme.palette.neutral[700],
            '--nav-item-color': theme.palette.neutral[400],
            '--nav-item-hover-bg': 'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-bg': 'rgba(255, 255, 255, 0.04)',
            '--nav-item-active-color': theme.palette.common.white,
            '--nav-item-disabled-color': theme.palette.neutral[500],
            '--nav-item-icon-color': theme.palette.neutral[400],
            '--nav-item-icon-active-color': theme.palette.primary.main,
            '--nav-item-icon-disabled-color': theme.palette.neutral[500],
            '--nav-item-chevron-color': theme.palette.neutral[600],
            '--nav-scrollbar-color': theme.palette.neutral[400]
          };
        }

      default:
        return {};
    }
  }, [theme, color]);
};

export const TopNav = (props) => {
  const { color = 'evident', userinfo, onMobileNav, sections = [] } = props;
  const pathname = usePathname();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const cssVars = useCssVars(color);
  const email = JSON.parse(localStorage.getItem('email'));
  const mails = useSelector((state) => state.mail.emails);
  const [mailCnt, setMailCnt] = useState(0);

  useEffect(() => {
    if (mails.allIds.length != 0) {
      let cnt = 0;
      mails.allIds.map((emailId) => {
        if (!mails.byId[emailId].isUnread.seen) {
          cnt++;
        }
      });
      setMailCnt(cnt);
    }
  }, [mails]);
  return (
    <Box
      component="header"
      sx={{
        ...cssVars,
        backgroundColor: 'var(--nav-bg)',
        borderBottomColor: 'var(--nav-border-color)',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        color: 'var(--nav-color)',
        left: 0,
        position: 'sticky',
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar
      }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          px: 3,
          py: 1
        }}
      >
        <Stack alignItems="center" direction="row" spacing={2}>
          {!mdUp && (
            <IconButton onClick={onMobileNav}>
              <SvgIcon>
                <Menu01Icon />
              </SvgIcon>
            </IconButton>
          )}
          <Box
            component={RouterLink}
            href={paths.index}
            sx={{
              borderColor: 'var(--nav-logo-border)',
              borderRadius: 1,
              borderStyle: 'solid',
              borderWidth: 1,
              display: 'inline-flex',
              height: 40,
              p: '4px',
              width: 40
            }}
          >
            <Logo />
          </Box>
          <TenantSwitch />
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2}>
          {/* <LanguageSwitch /> */}
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
          <Box>
            <Button
              className="custom-mailbox"
              component={RouterLink}
              href={paths.dashboard.mail}
              startIcon={
                <>
                  {mailCnt == 0 ? (
                    <img
                      src="/assets/icons/mail-empty.png"
                      width={40}
                      height={30}
                    />
                  ) : (
                    <Badge badgeContent={mailCnt} color="primary">
                      <img
                        src="/assets/icons/mail.png"
                        width={40}
                        height={30}
                      />
                    </Badge>
                  )}
                </>
              }
            ></Button>
          </Box>
          <NotificationsButton />
          {/* <ContactsButton /> */}
          <AccountButton />
        </Stack>
      </Stack>
      {mdUp && (
        <Box
          sx={{
            borderTopWidth: 1,
            borderTopStyle: 'solid',
            borderTopColor: 'var(--nav-divider-color)'
          }}
        >
          <Scrollbar
            sx={{
              '& .simplebar-scrollbar:before': {
                background: 'var(--nav-scrollbar-color)'
              }
            }}
          >
            <Stack
              alignItems="center"
              component="nav"
              direction="row"
              spacing={1}
              sx={{
                px: 2,
                py: 1.5
              }}
            >
              {sections.map((section, index) => (
                <TopNavSection
                  items={section.items}
                  key={index}
                  pathname={pathname}
                  subheader={section.subheader}
                />
              ))}
              {userinfo.paid == 0 ? (
                <Stack direction="row" sx={{ px: 2 }}>
                  <Box
                    component="span"
                    sx={{
                      alignItems: 'center',
                      color: 'var(--nav-item-icon-color)',
                      display: 'inline-flex',
                      justifyContent: 'center'
                    }}
                  >
                    <SvgIcon>
                      <CardMembershipOutlinedIcon />
                    </SvgIcon>
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      color: 'white',
                      flexGrow: 1,
                      fontFamily: (theme) => theme.typography.fontFamily,
                      fontSize: 14,
                      fontWeight: 600,
                      ml: 1
                      // lineHeight: '24px',
                      // whiteSpace: 'nowrap'
                    }}
                  >
                    Trial Account
                    <Link
                      style={{ marginLeft: 9, color: 'white' }}
                      to="/dashboard/account?tab=billing"
                      underline="always"
                    >
                      Upgrade
                    </Link>
                  </Box>
                </Stack>
              ) : userinfo.paid == 1 ? (
                <Stack direction="row" sx={{ px: 2 }}>
                  <Box
                    component="span"
                    sx={{
                      alignItems: 'center',
                      color: 'var(--nav-item-icon-color)',
                      display: 'inline-flex',
                      justifyContent: 'center'
                    }}
                  >
                    <SvgIcon>
                      <CardMembershipOutlinedIcon />
                    </SvgIcon>
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      color: 'white',
                      flexGrow: 1,
                      fontFamily: (theme) => theme.typography.fontFamily,
                      fontSize: 14,
                      fontWeight: 600,
                      ml: 1
                      // lineHeight: '24px',
                      // whiteSpace: 'nowrap'
                    }}
                  >
                    Essential Member
                  </Box>
                </Stack>
              ) : (
                <Stack direction="row" sx={{ px: 2 }}>
                  <Box
                    component="span"
                    sx={{
                      alignItems: 'center',
                      color: 'var(--nav-item-icon-color)',
                      display: 'inline-flex',
                      justifyContent: 'center'
                    }}
                  >
                    <SvgIcon>
                      <CardMembershipOutlinedIcon />
                    </SvgIcon>
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      color: 'white',
                      flexGrow: 1,
                      fontFamily: (theme) => theme.typography.fontFamily,
                      fontSize: 14,
                      fontWeight: 600,
                      ml: 1
                      // lineHeight: '24px',
                      // whiteSpace: 'nowrap'
                    }}
                  >
                    Premium Member
                  </Box>
                </Stack>
              )}
            </Stack>
          </Scrollbar>
        </Box>
      )}
    </Box>
  );
};

TopNav.propTypes = {
  color: PropTypes.oneOf(['blend-in', 'discreet', 'evident']),
  onMobileNav: PropTypes.func,
  sections: PropTypes.array
};
