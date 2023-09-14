import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Link,
  Stack,
  Grid,
  Typography
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { useMounted } from '@/hooks/use-mounted';
import { usePageView } from '@/hooks/use-page-view';
import { paths } from '@/paths';
import { Svexlogo } from '@/components/Svexlogo'; 
// import BrandImg from '@/components/brand.svg'; 
import { useState } from 'react';
const Page = () => {
  const isMounted = useMounted();
  const [ email, setEmail ] = useState('');
  usePageView();
  const handleGetStarted = ()=>{
    window.location.href = ('step-2');
  }
  return (
    <>
      <Seo title="Verify" />
      <Card 
        elevation={16} 
        sx={{ 
          background: 'transparent', 
          boxShadow: 'none', 
          width: '880px', 
          margin: 'auto',
          boxShadow: '0px 5px 22px 0px #0000000A'
        }}>
        <CardHeader 
          component="div"
          subheader={(
              <Stack>
                  <Link 
                      component={RouterLink}
                      href={paths.index}
                      variant="subtitle2"                    
                  >
                      <Svexlogo />
                  </Link>
              </Stack>
          )}
          sx={{ textAlign: 'center' }}
          >
        </CardHeader>
        <CardContent sx={{
        }}>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <Stack my={2}>
                <Typography variant='h4'>Great News!</Typography>
                <Typography variant='h4'>Your brand has registered</Typography>
              </Stack>
              <Stack my={2}>
                <Typography variant='p' sx={{ color: '#6C737F' }}>Let’s complete your profile and start connecting with potential Influencers</Typography>
              </Stack>
              <Stack direction="row" spacing={3} my={3}>
                <Button
                  size="large"
                  sx={{ 
                    width: '261px',
                    height: '48px',
                    boxShadow: '0px 1px 2px 0px #00000014' 
                  }}
                  onClick={handleGetStarted}
                  variant="contained"
                >
                  Get started
                </Button>
                <Button
                  size="large"
                  sx={{ mt: 2 }}
                  variant="outlined"
                >
                  Do it later
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={5}>
              <img src={BrandImg} alt="brand"/>
            </Grid>
          </Grid>            
        </CardContent>
      </Card>
    </>
  );
};

export default Page;
