import { useRef, useState, useEffect } from 'react';
import * as Yup from 'yup';
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useFormik } from 'formik';
import { useSearchParams } from '@/hooks/use-search-params';
import { useNavigate } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { getUserProfile } from '../../../actions';
import RedditTextField from '../../../frontendpage/TextfieldStyle';
import './Form.css';
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
  SvgIcon,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { paths } from '@/paths';

const Page = (props) => {
  const [renderedonce, setRenderedonce] = useState(false);
  const { userinfo } = props;
  const [toDashboard, setToDashboard] = useState(false);
  const validationSchema = Yup.object({
    instagram: Yup.string().max(255),
    // .required('This Field is required'),
    tiktok: Yup.string().max(255),
    // .required('This Field is required'),
    youtube: Yup.string().max(255),
    // .required('This Field is required'),
    facebook: Yup.string().max(255),
    // .required('This Field is required'),
    twitter: Yup.string().max(255),
    // .required('This Field is required'),
    linkedin: Yup.string().max(255),
    // .required('This Field is required'),
    blogurl: Yup.string().max(255),
    // .required('This Field is required'),
    pinterest: Yup.string().max(255)
    // .required('This Field is required'),
  });

  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const [isLoading, setIsLoading] = useState(false);
  const [letter, setLetter] = useState('Save changes and NEXT');
  const email = JSON.parse(localStorage.getItem('email'));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile({ email: email }));
  }, [dispatch]);
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    instagram: '',
    tiktok: '',
    youtube: '',
    facebook: '',
    twitter: '',
    pinterest: '',
    linkedin: '',
    blogurl: '',
    email: ''
  });
  initialValues.email = email;
  const onCancel = (e) => {
    navigate(returnTo || paths.auth.auth.signin);
  };
  const onSkip = (e) => {
    if (toDashboard) {
      navigate(returnTo || paths.dashboard.index);
    } else {
      navigate(returnTo || paths.auth.auth.trial);
    }
  };
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,

    validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      setLetter('');
      axios.post('/api/social-Info', values).then((response) => {
        if (response.data.status === 200) {
          setInitialValues({
            instagram: '',
            tiktok: '',
            youtube: '',
            facebook: '',
            twitter: '',
            pinterest: '',
            linkedin: '',
            blogurl: '',
            email: ''
          });
          setLetter('Save changes and NEXT');
          setIsLoading(false);
          if (toDashboard) {
            navigate(returnTo || paths.dashboard.index);
          } else {
            navigate(returnTo || paths.auth.auth.trial);
          }
        }
        if (response.data.status === 'failed') {
          setLetter('Save changes and NEXT');
          setIsLoading(false);
        }
      });
    }
  });
  useEffect(() => {
    console.log('ss');
    if (!renderedonce && userinfo) {
      setInitialValues({
        ...initialValues,
        instagram: userinfo ? userinfo.instagram : '',
        tiktok: userinfo ? userinfo.tiktok : '',
        youtube: userinfo ? userinfo.youtube : '',
        facebook: userinfo ? userinfo.facebook : '',
        twitter: userinfo ? userinfo.twitter : '',
        pinterest: userinfo ? userinfo.pinterest : '',
        linkedin: userinfo ? userinfo.linkedin : '',
        blogurl: userinfo ? userinfo.blogurl : ''
      });
      setRenderedonce(true);
    }
    if (userinfo) {
      if (
        userinfo.instagram ||
        userinfo.tiktok ||
        userinfo.youtube ||
        userinfo.facebook ||
        userinfo.twitter ||
        userinfo.pinterest ||
        userinfo.linkedin ||
        userinfo.blogurl
      ) {
        setToDashboard(true);
      }
    }
  });
  return (
    <>
      <Seo title="Business Info" />
      <div className="firstinfo-card">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 5 }}
        >
          <img src="/longlogo.png" width={200} height={50} />
        </Box>
        <Card
          className="mainCard px-4 pt-3 pb-3 card"
          sx={{ borderRadius: 2.5 }}
        >
          <CardContent className="container skip-container">
            <form noValidate onSubmit={formik.handleSubmit} className="row">
              <Typography
                className="row title largesize"
                sx={{ pb: 3, textAlign: 'center' }}
              >
                Social Media Handles
              </Typography>
              <Typography
                className="row"
                color="grey"
                sx={{ pb: 3, pt: 0, fontWeight: 'reqular', textAlign: 'left' }}
              >
                Show case your brand and social media presence to interested
                influencers who may want to work with you.
              </Typography>
              <Stack spacing={0} className="col-md-6 col-12">
                <div className="p-1 ">
                  <RedditTextField
                    label=" Instagram Handle"
                    className="title-inter"
                    name="instagram"
                    variant="filled"
                    fullWidth
                    style={{ marginTop: 11 }}
                    error={
                      !!(formik.touched.instagram && formik.errors.instagram)
                    }
                    helperText={
                      formik.touched.instagram && formik.errors.instagram
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.instagram}
                  />
                </div>
                <div className="p-1 ">
                  <RedditTextField
                    variant="filled"
                    className="title-inter "
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.youtube && formik.errors.youtube)}
                    helperText={formik.touched.youtube && formik.errors.youtube}
                    label="Youtube Handle"
                    name="youtube"
                    fullWidth
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.youtube}
                  />
                </div>
                <div className="p-1 ">
                  <RedditTextField
                    label=" Twitter Handle"
                    className="title-inter"
                    name="twitter"
                    variant="filled"
                    fullWidth
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.twitter && formik.errors.twitter)}
                    helperText={formik.touched.twitter && formik.errors.twitter}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.twitter}
                  />
                </div>
                <div className="p-1 ">
                  <RedditTextField
                    variant="filled"
                    className="title-inter "
                    style={{ marginTop: 11 }}
                    error={
                      !!(formik.touched.linkedin && formik.errors.linkedin)
                    }
                    helperText={
                      formik.touched.linkedin && formik.errors.linkedin
                    }
                    label="Linkedin Handle"
                    name="linkedin"
                    fullWidth
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.linkedin}
                  />
                </div>
              </Stack>
              <Stack spacing={0} className="col-md-6 col-12">
                <div className="p-1 ">
                  <RedditTextField
                    label=" Tiktok Handle"
                    className="title-inter"
                    name="tiktok"
                    variant="filled"
                    fullWidth
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.tiktok && formik.errors.tiktok)}
                    helperText={formik.touched.tiktok && formik.errors.tiktok}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.tiktok}
                  />
                </div>
                <div className="p-1 ">
                  <RedditTextField
                    variant="filled"
                    className="title-inter "
                    style={{ marginTop: 11 }}
                    error={
                      !!(formik.touched.facebook && formik.errors.facebook)
                    }
                    helperText={
                      formik.touched.facebook && formik.errors.facebook
                    }
                    label="Facebook Handle"
                    name="facebook"
                    fullWidth
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.facebook}
                  />
                </div>
                <div className="p-1 ">
                  <RedditTextField
                    label=" Pinterest Handle"
                    className="title-inter"
                    name="pinterest"
                    variant="filled"
                    fullWidth
                    style={{ marginTop: 11 }}
                    error={
                      !!(formik.touched.pinterest && formik.errors.pinterest)
                    }
                    helperText={
                      formik.touched.pinterest && formik.errors.pinterest
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.pinterest}
                  />
                </div>
                <div className="p-1 ">
                  <RedditTextField
                    variant="filled"
                    className="title-inter "
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.blogurl && formik.errors.blogurl)}
                    helperText={formik.touched.blogurl && formik.errors.blogurl}
                    label="Blog Url"
                    name="blogurl"
                    fullWidth
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.blogurl}
                  />
                </div>
              </Stack>
              <div className="row d-flex justify-content-end pt-4 px-1 title-inter ">
                <Button
                  className="text-center m-2 w-25  btn btn-hover-outline mainButton smallsize cancel-button"
                  variant="text"
                  onClick={onCancel}
                >
                  Cancel
                </Button>

                <Button
                  className="text-center   mx-8 w-50  mainButton background-blue smallsize firstinfo-button"
                  variant="contained"
                  type="submit"
                >
                  <span className="ml-2"> {letter} </span>
                  {isLoading ? (
                    <CircularProgress color="inherit" size="2rem" />
                  ) : (
                    <span></span>
                  )}
                </Button>
              </div>
              <div className="row d-flex justify-content-end pt-4 px-1 title-inter ">
                <Button
                  className="text-center w-25  btn  mainButton smallsize skip-btn"
                  style={{ textAlign: 'right!important' }}
                  variant="text"
                  onClick={onSkip}
                >
                  Skip for now
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});
export default connect(mapStateToProps)(Page);
