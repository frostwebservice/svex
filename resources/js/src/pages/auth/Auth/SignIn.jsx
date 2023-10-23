import * as Yup from 'yup';
import { useRef, useState, useEffect } from "react";
import { useFormik } from 'formik';
import { useSearchParams } from '@/hooks/use-search-params';
import { useNavigate } from 'react-router-dom';
import { Link as ReactRouterLink } from 'react-router-dom';
import RedditTextField from '../../../frontendpage/TextfieldStyle';
// import "@/frontendpage/Form.CSS";
import "./Form.css";
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Link,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { paths } from '@/paths';
import { useAuth } from '@/hooks/use-auth';
import { useMounted } from '@/hooks/use-mounted';


const Page = () => {


  const validationSchema = Yup.object({
    email: Yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    password: Yup
      .string()
      .max(255)
      .required('Password is required')
  });

  const isMounted = useMounted();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const [isLoading, setIsLoading] = useState(false);
  const [letter, setLetter] = useState("Log In");
  const { signIn } = useAuth();
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
    type: "Credential login"
  });
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      setIsLoading(true);
      setLetter("");

      axios
        .post("/api/user-signin", values)
        .then((response) => {

          if (response.data.status === 200) {
            setInitialValues({
              ...initialValues,
              email: "",
              password: "",
              // submit:null,
            });
            setLetter("Log In")
            setIsLoading(false)
            async function callSignin() {
              try {
                await signIn(values.email, values.password, response.data.data);

                if (isMounted()) {
                  // returnTo could be an absolute path
                  navigate(returnTo || paths.dashboard.index);
                }
              } catch (err) {
                console.error(err);

                if (isMounted()) {
                  helpers.setStatus({ success: false });
                  helpers.setErrors({ submit: err.message });
                  helpers.setSubmitting(false);
                }
              }
            }
            callSignin();
            setLetter("Log in")
            setIsLoading(false)
            // window.location.href = returnTo || paths.dashboard.index;
          }

          if (response.data.status === "failed") {
            setLetter("Log In")
            setIsLoading(false)

            alert(response.data.message);

          }
        });

    }
  });

  return (
    <>
      <Seo title="Login" />
      <div className='signup-page'>
        <Box sx={{ mb: 2 }}>
          <Link
            color="text.primary"
            component={RouterLink}
            href="/Dashboard"
            sx={{
              alignItems: 'center',
              display: 'inline-flex'
            }}
            underline="hover"
          >
            <SvgIcon sx={{ mr: 1 }}>
              <ArrowLeftIcon />
            </SvgIcon>
            <Typography
              color="text.primary"

              variant="body1"
            // sx={{ color: 'rgba(0, 0, 0, 0.87)' }}
            >
              Dashboard
            </Typography>
          </Link>
        </Box>
        <Card sx={{ borderRadius: 2.5 }} elevation={16} className="mainCard card  px-4 pt-4 pb-3" >

          <CardHeader
            subheader={(
              <Typography
                className="title-inter"
                color="text.secondary"
              // variant="body1"

              >
                Don&apos;t have an account?
                &nbsp;
                <Link
                  underline="hover"
                  // variant="subtitle2"
                  className="title-inter pointer"
                  onClick={() => navigate(paths.auth.auth.signup)}
                >
                  Register
                </Link>
              </Typography>
            )}
            sx={{ pb: 0 }}
            className="title  smalltitle signup-form-title"
            title="Log in"
          />
          <CardContent className="signup-form">
            <form
              noValidate
              onSubmit={formik.handleSubmit}

            >


              <Stack spacing={3}>
                <RedditTextField
                  className="title-inter mt-3"
                  variant="filled"
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
                <RedditTextField
                  className="title-inter mt-3"
                  variant="filled"
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  autoComplete="new password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 5 }}
                type="submit"
                color="primary"
                variant="contained"
                className="title-inter smallsize mainButton background-blue"

              >
                <span className="ml-2"> {letter} </span>
                {isLoading ? (
                  <CircularProgress color="inherit" size="2rem" />
                ) : (
                  <span></span>
                )}
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 3
                }}
              >
                <Link
                  // href={paths.auth.auth.forgotPassword}
                  underline="hover"
                  className='pointer'
                  variant="subtitle2"
                  onClick={() => navigate(paths.auth.auth.forgotPassword)}
                >
                  Forgot password?
                </Link>
              </Box>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Page;
