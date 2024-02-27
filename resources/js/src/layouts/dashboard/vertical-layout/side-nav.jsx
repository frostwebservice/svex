import { useMemo } from 'react';
import PropTypes from 'prop-types';
import File04Icon from '@untitled-ui/icons-react/build/esm/File04';
import {
  Box,
  Button,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  ButtonBase
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Logo } from '@/components/logo';
import { RouterLink } from '@/components/router-link';
import { Scrollbar } from '@/components/scrollbar';
import { usePathname } from '@/hooks/use-pathname';
import { paths } from '@/paths';
import { Link } from 'react-router-dom';
import TenantSwitch from '../tenant-switch';
import { SideNavSection } from './side-nav-section';
// import { AccountPlanIcon } from '@/sections/dashboard/account/account-plan-icon';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
const SIDE_NAV_WIDTH = 280;
import { connect } from 'react-redux';
const useCssVars = (color) => {
  const theme = useTheme();

  return useMemo(() => {
    switch (color) {
      case 'blend-in':
        if (theme.palette.mode === 'dark') {
          return {
            '--nav-bg': theme.palette.background.default,
            '--nav-color': theme.palette.neutral[100],
            '--nav-border-color': theme.palette.neutral[700],
            '--nav-logo-border': theme.palette.neutral[700],
            '--nav-section-title-color': theme.palette.neutral[400],
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
            '--nav-border-color': theme.palette.neutral[700],
            '--nav-logo-border': theme.palette.neutral[700],
            '--nav-section-title-color': theme.palette.neutral[400],
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
            '--nav-border-color': 'transparent',
            '--nav-logo-border': theme.palette.neutral[700],
            '--nav-section-title-color': theme.palette.neutral[400],
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
            '--nav-border-color': 'transparent',
            '--nav-logo-border': theme.palette.neutral[700],
            '--nav-section-title-color': theme.palette.neutral[400],
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

export const SideNav = (props) => {
  const { color = 'evident', userinfo, sections = [] } = props;
  const [tempkey, SetTempkey] = useState(0);
  const pathname = usePathname();
  const cssVars = useCssVars(color);
  useEffect(() => {
    SetTempkey(tempkey + 1);
  }, [userinfo]);

  return (
    <Drawer
      anchor="left"
      open
      PaperProps={{
        sx: {
          ...cssVars,
          backgroundColor: 'var(--nav-bg)',
          borderRightColor: 'var(--nav-border-color)',
          borderRightStyle: 'solid',
          borderRightWidth: 1,
          color: 'var(--nav-color)',
          width: SIDE_NAV_WIDTH
        }
      }}
      variant="permanent"
    >
      <Scrollbar
        sx={{
          height: '100%',
          '& .simplebar-content': {
            height: '100%'
          },
          '& .simplebar-scrollbar:before': {
            background: 'var(--nav-scrollbar-color)'
          }
        }}
      >
        <Stack sx={{ height: '100%' }}>
          <Stack alignItems="center" direction="row" spacing={2} sx={{ p: 3 }}>
            <Box
              component={RouterLink}
              href={paths.index}
              sx={{
                borderColor: 'var(--nav-logo-border)',
                borderRadius: 1,
                borderStyle: 'solid',
                borderWidth: 1,
                display: 'flex',
                height: 40,
                p: '4px',
                width: 40
              }}
            >
              <Logo />
            </Box>
            <TenantSwitch sx={{ flexGrow: 1 }} />
          </Stack>
          <Stack
            key={tempkey}
            component="nav"
            spacing={2}
            sx={{
              flexGrow: 1,
              px: 2
            }}
          >
            {sections.map((section, index) => (
              <SideNavSection
                items={section.items}
                key={index}
                pathname={pathname}
                subheader={section.subheader}
              />
            ))}

            {userinfo.is_admin == 1 ? (
              <></>
            ) : userinfo.paid == 0 ? (
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
        </Stack>
      </Scrollbar>
    </Drawer>
  );
};

SideNav.propTypes = {
  color: PropTypes.oneOf(['blend-in', 'discreet', 'evident']),
  sections: PropTypes.array
};
