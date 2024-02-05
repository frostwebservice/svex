import { Component, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import './Form.css';
import { useSearchParams } from '@/hooks/use-search-params';
import { Seo } from '@/components/seo';

import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography,
  CircularProgress,
  Button
} from '@mui/material';
import { useFormik } from 'formik';
import { Alert } from '@mui/material';
export default function EmailVerify(props) {
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const [start, setStart] = useState('Resend verification link');
  const [isLoading, setIsLoading] = useState(false);
  const email = JSON.parse(localStorage.getItem('email'));
  const values = { email: email };
  const [showAlert, setShowAlert] = useState(false);
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const onSubmitHandler = async (e) => {
    setIsLoading(true);
    setStart('');

    try {
      axios
        .post('/api/resend-email', values)
        .then((response) => {
          console.log(response);
          setShowAlert(true);
        })
        .catch((e) => {
          setShowAlert(true);
        });
    } catch (error) {
      console.error('Error sending verification email', error);
    }

    setIsLoading(false);
    setStart('Resend Verification link');
  };
  return (
    <>
      <Seo title="Email Verification" />
      <div className="signup-page">
        {/* <Typography color="primary" variant="h4" sx={{ pb: 1, fontWeight: 'bold', textAlign: 'center' }}>
          LOGO
        </Typography> */}
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src="/longlogo.png" width={200} height={50} />
        </Box>

        <Card
          elevation={0}
          sx={{ p: 3, pb: 0, borderRadius: 5 }}
          className="transparent"
        >
          <CardContent>
            <form>
              <Typography className="title bigsize mb-3 text-center">
                Confirm your email address
              </Typography>
              <Typography
                color="text.secondary"
                className="title-inter smallsize"
                sx={{ pt: 2, textAlign: 'center' }}
              >
                Please verify your email address by clicking the link sent to
              </Typography>
              <Typography
                sx={{ pb: 4, textAlign: 'center' }}
                className="title smallsize"
              >
                {email}
              </Typography>
              <div className="row d-flex justify-content-center resend-button">
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 2 }}
                  type="button"
                  color="primary"
                  variant="contained"
                  className="title-inter w-75 smallsize mainButton resend-button"
                  onClick={onSubmitHandler}
                >
                  <span className="ml-2 button-font"> {start} </span>
                  {isLoading ? (
                    <CircularProgress color="inherit" size="1.4rem" />
                  ) : (
                    <span></span>
                  )}
                </Button>
                {showAlert && (
                  <Alert severity="info" onClose={handleCloseAlert}>
                    Verification link has been sent
                  </Alert>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
