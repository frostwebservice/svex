import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Link,
  Stack,
  Typography
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { useMounted } from '@/hooks/use-mounted';
import { usePageView } from '@/hooks/use-page-view';
import { paths } from '@/paths';
import { Svexlogo } from '@/components/Svexlogo'; 
import { useState } from 'react';
const Page = () => {
  const isMounted = useMounted();
  const [ email, setEmail ] = useState('john.doe@gmail.com');
  usePageView();

  return (
    <>
      <Seo title="Verify" />
        <Card elevation={16} sx={{ background: 'transparent', boxShadow: 'none', width: '500px', margin: 'auto' }}>
          <CardHeader 
            component="div"
            subheader={(
                <>
                <Stack>
                    <Link 
                        component={RouterLink}
                        href={paths.index}
                        variant="subtitle2"                    
                    >
                        <Svexlogo />
                    </Link>
                </Stack>
                <Stack>
                <Typography 
                    variant='h4'
                    mt={3}
                    color='#111927'
                    sx={{
                        fontSize: '32px'
                    }}
                    >Confirm your email address</Typography>
                </Stack>
                </>
            )}
            sx={{ textAlign: 'center' }}
            >
          </CardHeader>
          <CardContent>
            <Typography variant="string" paragraph align="center" sx={{ color: '#6C737F' }}>
                Please verify your email address by clicking the link sent to
            </Typography>
            <Typography variant="string" paragraph align="center" sx={{ color: '#111927' }}>
               <b>{email}</b>
            </Typography>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                type="submit"
                variant="contained"
              >
                Resend verification link
              </Button>
          </CardContent>
        </Card>
    </>
  );
};

export default Page;
