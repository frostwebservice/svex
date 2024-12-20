import { Component, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import './Form.css';
import { useSearchParams } from '@/hooks/use-search-params';
import { useNavigate } from 'react-router-dom';

import { Seo } from '@/components/seo';
import { paths } from '@/paths';
import { useAuth } from '@/hooks/use-auth';
import { useMounted } from '@/hooks/use-mounted';

import {
  Card,
  Box,
  CardContent,
  CardHeader,
  Typography,
  CircularProgress,
  Button
} from '@mui/material';
import { useFormik } from 'formik';

export default function Successful(props) {
  const isMounted = useMounted();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const [isLoading, setIsLoading] = useState(false);
  const [launch, setLaunch] = useState('LAUNCH DASHBOARD');
  const email = JSON.parse(localStorage.getItem('email'));
  const { signIn } = useAuth();

  const values = {
    email: email,
    from: 'success'
  };
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    axios.post('/api/user-signin', values).then((response) => {
      if (response.data.status === 200) {
        async function callSignin() {
          try {
            await signIn(values.email, values.password, response.data.data);

            if (isMounted()) {
              // returnTo could be an absolute path
              navigate(returnTo || paths.dashboard.index);
            }
          } catch (err) {
            console.error(err);
          }
        }
        callSignin();
      }

      if (response.data.status === 'failed') {
        alert(response.data.message);
      }
    });
  };

  return (
    <>
      <Seo title="Register" />
      <div className="register-page">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 0 }}
        >
          <img src="/longlogo.png" width={200} height={50} />
        </Box>
        <Card
          elevation={0}
          sx={{ p: 3, pb: 0, borderRadius: 5 }}
          className="transparent"
        >
          <CardContent>
            <form>
              <div className="success-img"></div>
              <Typography className="title sucsize mb-3 text-center">
                Registration Successful
              </Typography>
              <div className="d-flex justify-content-center launch-dashboard resend-button">
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 2 }}
                  type="button"
                  color="primary"
                  variant="contained"
                  className="title-inter w-75 smallsize mainButton "
                  onClick={onClickHandler}
                >
                  <span className="ml-2"> {launch} </span>
                  {isLoading ? (
                    <CircularProgress color="inherit" size="1.4rem" />
                  ) : (
                    <span></span>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
