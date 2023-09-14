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
// import { brandImg } from '@/components/brand'; 
import { useState } from 'react';
const Page = () => {
  const isMounted = useMounted();
  const [ email, setEmail ] = useState('john.doe@gmail.com');
  usePageView();

  return (
    <>
      <Seo title="Verify" />
        <Card elevation={16} sx={{ background: 'transparent', boxShadow: 'none' }}>
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
          <CardContent>
              
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
