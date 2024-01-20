import { Box, Button, Container, Typography, useMediaQuery,SvgIcon } from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { usePageView } from '@/hooks/use-page-view';
import { paths } from '@/paths';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';

const EmptyInvited = () => {


  return (
    <>
      <Seo title="Error: Server Error" />
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          py: '80px'
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 6
            }}
          >
            <Box
              alt="Internal server error"
              component="img"
              src="/assets/errors/empty.png"
              sx={{
                height: 'auto',
                maxWidth: '100%',
                width: 145
              }}
            />
          </Box>
          <Typography
            align="center"
            sx={{fontWeight:700,fontSize:28}}
            // variant={mdUp ? 'h1' : 'h4'}
          >
            There are no influencers invited yet!
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            sx={{ mt: 0.5,fontSize:16 }}
          >
            Tap below to create an outreach group
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 2
            }}
          >
            <Button
            endIcon={(
                <SvgIcon>
                    <ArrowRightIcon />
                </SvgIcon>
                )}
              component={RouterLink}
              variant="contained"

              href="/inf-finder/new-group"
            >
              Create Outreach Group
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default EmptyInvited;