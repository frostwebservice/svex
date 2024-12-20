import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, Container, Stack, useMediaQuery } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Logo1 } from '@/components/logo1';
import { RouterLink } from '@/components/router-link';
import { usePathname } from '@/hooks/use-pathname';
import { useWindowScroll } from '@/hooks/use-window-scroll';
import { paths } from '@/paths';
import { TopNavItem } from './top-nav-item';

const items = [
  {
    title: 'Login',
    path: paths.auth.auth.signin
  },
  {
    title: 'Register',
    path: paths.auth.auth.signup
  }
];

const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onMobileNavOpen } = props;
  const pathname = usePathname();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [elevate, setElevate] = useState(false);
  const offset = 64;
  const delay = 100;

  const handleWindowScroll = useCallback(() => {
    if (window.scrollY > offset) {
      setElevate(true);
    } else {
      setElevate(false);
    }
  }, []);

  useWindowScroll({
    handler: handleWindowScroll,
    delay
  });

  return (
    <Box
      component="header"
      sx={{
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        pt: 2,
        zIndex: (theme) => theme.zIndex.appBar
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: 'transparent',
          borderRadius: 2.5,
          boxShadow: 'none',
          transition: (theme) =>
            theme.transitions.create('box-shadow, background-color', {
              easing: theme.transitions.easing.easeInOut,
              duration: 200
            }),
          ...(elevate && {
            backgroundColor: (theme) =>
              alpha(theme.palette.background.paper, 0.9),
            boxShadow: 8
          })
        }}
      >
        <Stack direction="row" spacing={2} sx={{ height: TOP_NAV_HEIGHT }}>
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{ flexGrow: 1 }}
          >
            <Stack
              alignItems="center"
              component={RouterLink}
              direction="row"
              display="inline-flex"
              href={paths.index}
              spacing={1}
              sx={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  height: 25
                  // width: 400
                }}
              >
                <Logo1 />
              </Box>
              {/* {mdUp && (
                <Box
                  sx={{
                    color: 'text.primary',
                    fontFamily: '\'Plus Jakarta Sans\', sans-serif',
                    fontSize: 14,
                    fontWeight: 800,
                    letterSpacing: '0.3px',
                    lineHeight: 2.5,
                    '& span': {
                      color: 'primary.main'
                    }
                  }}
                >
                  <span>Svex11</span>
                </Box>
              )} */}
            </Stack>
            <Chip label="v6.1.0" size="small" />
          </Stack>
          {mdUp && (
            <Stack alignItems="center" direction="row" spacing={2}>
              <Box component="nav" sx={{ height: '100%' }}>
                <Stack
                  component="ul"
                  alignItems="center"
                  justifyContent="center"
                  direction="row"
                  spacing={1}
                  sx={{
                    height: '100%',
                    listStyle: 'none',
                    m: 0,
                    p: 0
                  }}
                >
                  <>
                    {items.map((item) => {
                      const checkPath = !!(item.path && pathname);
                      const partialMatch = checkPath
                        ? pathname.includes(item.path)
                        : false;
                      const exactMatch = checkPath
                        ? pathname === item.path
                        : false;
                      const active = item.popover ? partialMatch : exactMatch;

                      return (
                        <TopNavItem
                          active={active}
                          external={item.external}
                          key={item.title}
                          path={item.path}
                          popover={item.popover}
                          title={item.title}
                        />
                      );
                    })}
                  </>
                </Stack>
              </Box>
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func
};
