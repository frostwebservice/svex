import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormHelperText,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { useAuth } from '@/hooks/use-auth';
import { useMounted } from '@/hooks/use-mounted';
import { usePageView } from '@/hooks/use-page-view';
import { useSearchParams } from '@/hooks/use-search-params';
import { paths } from '@/paths';
import { styled } from '@mui/system';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const initialValues = {
  username: '',
  email: '',
  password: '',
  policy: false,
  submit: null
};

const validationSchema = Yup.object({
  username: Yup
    .string()
    .max(255)
    .required('Username is required'),
  email: Yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  password: Yup
    .string()
    .min(7)
    .max(255)
    .required('Password is required'),
  password_conf: Yup
    .string()
    .min(7)
    .max(255)
    .required('Password Confirm is required'),
  policy: Yup
    .boolean()
    .oneOf([true], 'This field must be checked'),
  recaptcha: Yup
    .boolean()
    .oneOf([true], 'This field must be checked')
});

export const SvexAuthCard = styled('div')({
  width: '444px',
  margin: 'auto'
})
const Page = () => {
  const isMounted = useMounted();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const { issuer, signUp } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        await signUp(values.email, values.name, values.password);
              
        if (isMounted()) {
          // returnTo could be an absolute path
          window.location.href = returnTo || paths.auth.jwt.step1;
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
  });

  usePageView();
  const handleGoBack = ()=>{
    window.history.back();
  }
  return (
    <>
      <Seo title="Register" />
      <SvexAuthCard>
        <Stack>
          <Stack 
            direction='row' 
            spacing={1} 
            alignItems="center" 
            sx={{
              cursor: 'pointer',
              width: 'fit-content'
            }} 
            onClick={handleGoBack}>
            <ArrowBackIcon fontSize='small'></ArrowBackIcon>
            <Typography variant='button' 
              alignItems='center'
            >Back</Typography>
          </Stack>
        </Stack>
        <Typography variant='h4' 
          my={3}
        >Brand account creation</Typography>
        <Card elevation={16}>
          <CardHeader
            subheader={(
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Already have an account?
                &nbsp;
                <Link
                  component={RouterLink}
                  href={paths.auth.jwt.login}
                  underline="hover"
                  variant="subtitle2"
                >
                  Log in
                </Link>
              </Typography>
            )}
            sx={{ pb: 0 }}
            title="Register"
          />
          <CardContent>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.username && formik.errors.username)}
                  fullWidth
                  helperText={formik.touched.username && formik.errors.username}
                  label="Username"
                  name="username"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                <TextField
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
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
                <TextField
                  error={!!(formik.touched.password_conf && formik.errors.password_conf)}
                  fullWidth
                  helperText={formik.touched.password_conf && formik.errors.password_conf}
                  label="Confirm Password"
                  name="password_conf"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password_conf}
                />
              </Stack>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  ml: -1,
                  mt: 1
                }}
              >
                <Checkbox
                  checked={formik.values.policy}
                  name="policy"
                  onChange={formik.handleChange}
                />
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  I have read the
                  {' '}
                  <Link
                    component="a"
                    href="#"
                  >
                    Terms and Conditions
                  </Link>
                </Typography>
              </Box>
              {!!(formik.touched.policy && formik.errors.policy) && (
                <FormHelperText error>
                  {formik.errors.policy}
                </FormHelperText>
              )}
              {/* <MyGoogleReCaptcha onVerify={handleReCaptchaVerify}></MyGoogleReCaptcha> */}
              {formik.errors.submit && (
                <FormHelperText
                  error
                  sx={{ mt: 3 }}
                >
                  {formik.errors.submit}
                </FormHelperText>
              )}
              <Button
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
            </form>
          </CardContent>
        </Card>
      </SvexAuthCard>      
    </>
  );
};

export default Page;
