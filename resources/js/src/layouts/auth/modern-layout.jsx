import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import { Logo1 } from '@/components/logo1';
import { LogoSamsung } from '@/components/logos/logo-samsung';
import { LogoVisma } from '@/components/logos/logo-visma';
import { LogoBolt } from '@/components/logos/logo-bolt';
import { LogoAws } from '@/components/logos/logo-aws';
import { LogoAccenture } from '@/components/logos/logo-accenture';
import { LogoAtt } from '@/components/logos/logo-att';
import { RouterLink } from '@/components/router-link';
import { paths } from '@/paths';

export const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: {
          xs: 'column-reverse',
          md: 'row'
        }
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'neutral.800',
          backgroundImage: 'url("/assets/gradient-bg.svg")',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          color: 'common.white',
          display: 'flex',
          flex: {
            xs: '0 0 auto',
            md: '1 1 auto'
          },
          justifyContent: 'center',
          p: {
            xs: 4,
            md: 8
          }
        }}
      >
        <Box maxWidth="md">
          <Typography
            sx={{ mb: 1 }}
            variant="h4"
          >
            Welcome to Svex
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            A professional kit that comes with ready-to-use MUI components developed with one common goal in mind, help you build faster & beautiful applications.
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ mb: 2 }}
          >
            Join 6,000+ forward-thinking companies:
          </Typography>
          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            gap={4}
            sx={{
              color: 'text.primary',
              '& > *': {
                color: 'neutral.400',
                flex: '0 0 auto'
              }
            }}
          >
            <LogoSamsung />
            <LogoVisma />
            <LogoBolt />
            <LogoAws />
            <LogoAccenture />
            <LogoAtt />
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          display: 'flex',
          flex: {
            xs: '1 1 auto',
            md: '0 0 auto'
          },
          flexDirection: 'column',
          justifyContent: {
            md: 'center'
          },
          maxWidth: '100%',
          p: {
            xs: 4,
            md: 8
          },
          width: {
            md: 600
          }
        }}
      >
        <div>
          <Box sx={{ mb: 4 }}>
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
                  height: 30,
                  // width: 24
                }}
              >
                <Logo1 />
              </Box>
              {/* <Box
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
                <span>Svex</span>
              </Box> */}
            </Stack>
          </Box>
          {children}
        </div>
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
