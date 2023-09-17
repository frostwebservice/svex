import * as Yup from 'yup';
import { Component, useState } from "react";

import { useFormik } from 'formik';
import "./Form.css";
import { useSearchParams } from '@/hooks/use-search-params';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Link,
  SvgIcon,
  TextField,
  CircularProgress,
  Typography
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import { paths } from '@/paths';
// import { paths } from 'src/paths';

const initialValues = {
  email: ''
};

const validationSchema = Yup.object({
  email: Yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required')
});

const Page = () => {
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const [start, setStart] = useState("Send Reset Link");
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      localStorage.setItem("email", values.email);
      setIsLoading(true)
      setStart("")

      try {
        axios.post('/api/send-reset', values)
          .then((response) => {
            console.log(response);
          });
        console.log('Send Reset sent');
      } catch (error) {
        console.error('Error sending reset', error);
      }

      setIsLoading(false)
      setStart("Send Reset Link")
    }
  });


  return (
    <>
      <Seo title="Forgot Password" />
      <div className="forgotpassword-page">
        <Typography color="primary" variant="h4" sx={{ pb: 1, fontWeight: 'bold', textAlign: 'center' }}>
          LOGO
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Link
            color="text.primary"
            component={RouterLink}
            to={paths.auth.auth.signin}
            sx={{
              alignItems: 'center',
              display: 'inline-flex'
            }}
            underline="hover"
          >
            <SvgIcon sx={{ mr: 1 }}>
              <ArrowLeftIcon />
            </SvgIcon>
            <Typography variant="subtitle2">

              SignIn

            </Typography>
          </Link>
        </Box>

        <Card elevation={16} sx={{ borderRadius: 2.5 }} className="card  px-4 pt-4 pb-3">
          <CardHeader
            sx={{ pb: 0 }}
            title="Forgot password"
          />
          <CardContent>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <TextField
                className="title-inter mt-4"
                autoFocus
                variant="filled"
                style={{ marginTop: 11 }}
                error={!!(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email Address"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
              />
              <Button
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                type="submit"
                variant="contained"
              >
                Send reset link
                {isLoading ? (

                  <CircularProgress color="inherit" size="1.4rem" />
                ) : (
                  <span></span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Page;
