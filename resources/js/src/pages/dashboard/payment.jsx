import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Box,
  Container,
  Link,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { usePageView } from '@/hooks/use-page-view';
import { PaymentEditForm } from './payment-edit';
import { useSettings } from '@/hooks/use-settings';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './account.css';
const Payment = (props) => {
  const { userinfo } = props;
  usePageView();
  const settings = useSettings();
  let obj = {
    time: new Date().getTime(),
    value: 'email',
    expire: 3000000
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (userinfo.is_admin == 0) navigate('/dashboard');
  }, [userinfo]);
  // You can only store strings
  let objStr = JSON.stringify(obj);
  localStorage.setItem('time_token', objStr);
  return (
    <>
      <Seo title="Dashboard: Payment Settings" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <div>
            <Stack spacing={4}>
              <Stack spacing={4}>
                <div>
                  <Link
                    color="text.primary"
                    component={RouterLink}
                    href="/dashboard/admin"
                    sx={{
                      alignItems: 'center',
                      display: 'inline-flex'
                    }}
                    underline="hover"
                  >
                    <SvgIcon sx={{ mr: 1 }}>
                      <ArrowLeftIcon />
                    </SvgIcon>
                    <Typography variant="subtitle2">Admin Dashboard</Typography>
                  </Link>
                </div>
              </Stack>
              <PaymentEditForm />
            </Stack>
          </div>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});
export default connect(mapStateToProps)(Payment);
