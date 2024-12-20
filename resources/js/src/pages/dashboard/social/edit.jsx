import { useCallback, useEffect, useState } from 'react';
import MessageChatSquareIcon from '@untitled-ui/icons-react/build/esm/MessageChatSquare';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import UserPlus02Icon from '@untitled-ui/icons-react/build/esm/UserPlus02';
import HeartIcon from '@untitled-ui/icons-react/build/esm/Heart';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import { useDialog } from '@/hooks/use-dialog';
import { FileUploader } from '@/sections/dashboard/file-manager/file-uploader';
import { useSettings } from '@/hooks/use-settings';
import { useNavigate } from 'react-router-dom';
// import TextField from '../../../frontendpage/TextfieldStyle';
import { alpha } from '@mui/material/styles';
import Camera01Icon from '@untitled-ui/icons-react/build/esm/Camera01';
import GoogleMaps from './places';
import './Form.css';
import { makeStyles } from '@material-ui/core';
import $ from 'jquery';
import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Card,
  CardHeader,
  CardContent,
  Unstable_Grid2 as Grid,
  ButtonBase,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { usePageView } from '@/hooks/use-page-view';
import MultiSelectAll from '../../auth/Auth/MultiSelectAll';
import { Alert } from '@mui/material';
import './profile.css';
import { getBrandProfile, getUserProfile } from '@/actions';
import { useDispatch, connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const names = [
  { label: 'Acne and Skin Care', value: 'Acne and Skin Care' },
  { label: 'Alcohol', value: 'Alcohol' },
  { label: 'Art', value: 'Art' },
  { label: 'Baby and Maternity', value: 'Baby and Maternity' },
  {
    label: 'Blockchain and Cryptocurrency',
    value: 'Blockchain and Cryptocurrency'
  },
  { label: 'Books and Fiction', value: 'Books and Fiction' },
  { label: 'Business and Career', value: 'Business and Career' },
  {
    label: 'Cameras, Photography and Videography',
    value: 'Cameras, Photography and Videography'
  },
  { label: 'Cars and Vehicles', value: 'Cars and Vehicles' },
  { label: 'Cooking and Recipes', value: 'Cooking and Recipes' },
  { label: 'Crafts and DIY', value: 'Crafts and DIY' },
  { label: 'Diet and Weight Loss', value: 'Diet and Weight Loss' },
  {
    label: 'Digital Marketing and Making Money Online',
    value: 'Digital Marketing and Making Money Online'
  },
  { label: 'Exercise and Fitness', value: 'Exercise and Fitness' },
  { label: 'Farming', value: 'Farming' },
  { label: 'Gardening and Lawn Care', value: 'Gardening and Lawn Care' },
  { label: 'Health', value: 'Health' },
  { label: 'Makeup and Beauty', value: 'Makeup and Beauty' },
  { label: 'Martial Arts', value: 'Martial Arts' },
  { label: 'Music and Instruments', value: 'Music and Instruments' },
  { label: 'Outdoors and Hiking', value: 'Outdoors and Hiking' },
  { label: 'Pets and Animal Care', value: 'Pets and Animal Care' },
  { label: 'Sports', value: 'Sports' },
  { label: 'Technology and Gadgets', value: 'Technology and Gadgets' },
  { label: 'Travel', value: 'Travel' },
  { label: 'Wedding', value: 'Wedding' },
  { label: 'OK', value: 'OK' }
];

const Page = (props) => {
  const email = JSON.parse(localStorage.getItem('email'));
  const [focused, SetFocused] = useState(false);
  const [haserror, SetHaserror] = useState(false);
  const [clickonce, SetClickonce] = useState(false);
  const [renderkey, Setrenderkey] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const validationSchema = Yup.object({
    firstname: Yup.string().max(255).required('This field is required'),
    lastname: Yup.string().max(255).required('This field is required'),
    phonenumber: Yup.string().max(255).required('This field is required'),
    companyname: Yup.string().max(255).required('This field is required'),
    companywebsite: Yup.string().max(255).required('This field is required'),
    budget: Yup.string().max(255).required('This field is required'),
    companyfounded: Yup.string().max(255).required('This field is required'),
    companysize: Yup.string().max(255).required('This field is required'),
    aboutbusiness: Yup.string().required('This field is required')
  });

  const [initialValues, setInitialValues] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    companyname: '',
    companywebsite: '',
    companylocation: '',
    budget: '',
    companyfounded: '',
    companysize: '',
    aboutbusiness: '',
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
  const [tmpkey, setTempkey] = useState('1');
  const [showAlert, setShowAlert] = useState(false);
  const [initialSelect, setInitialSelect] = useState([]);
  const getLocation = (v) => {
    if (!v || v == '' || v == null) SetHaserror(true);
    else {
      setInitialValues({
        ...initialValues,
        companylocation: v.description
      });
      setDefaultValue(v.description);
      SetHaserror(false);
    }
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      values.nichecategory = currentSelection;
      values.companylocation = initialValues.companylocation;
      axios.post('/api/edit-profile', values).then((response) => {
        if (response.data.status === 200) {
          setInitialValues({
            firstname: '',
            lastname: '',
            phonenumber: '',
            companyname: '',
            companywebsite: '',
            companylocation: '',
            budget: '',
            companyfounded: '',
            companysize: '',
            aboutbusiness: '',
            instagram: '',
            tiktok: '',
            youtube: '',
            facebook: '',
            twitter: '',
            pinterest: '',
            linkedin: '',
            blogurl: ''
          });
          dispatch(
            getUserProfile({ email: JSON.parse(localStorage.getItem('email')) })
          );

          navigate(
            '/profile/' +
              userinfo.firstname?.toLowerCase() +
              '-' +
              userinfo.lastname?.toLowerCase() +
              '-' +
              userinfo.id
          );
        }
        if (response.data.status === 'failed') {
          setShowAlert(true);
        }
      });
    }
  });
  usePageView();
  const [menuclick, Setmenuclick] = useState(false);

  const uploadDialog = useDialog();
  const settings = useSettings();
  const [kind, setKind] = useState('cover');
  const { brandinfo, userinfo } = props;
  const [renderedonce, setRenderedonce] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(
      getUserProfile({ email: JSON.parse(localStorage.getItem('email')) })
    );
  }, [dispatch]);

  const [key, setKey] = useState('');
  const onUpgrade = () => {
    dispatch(
      getBrandProfile({ brandID: window.location.pathname.split('/')[3] })
    );
    dispatch(
      getUserProfile({ email: JSON.parse(localStorage.getItem('email')) })
    );
    setKey(key + 'a');
  };
  const avatarClick = () => {
    setKind('avatar');
    uploadDialog.handleOpen();
  };
  const onloadelement = () => {
    alert('dsf');
  };
  useEffect(() => {
    // if (renderedonce < 5 && userinfo) {
    if (userinfo) {
      let tmpArr = [];
      userinfo.niches.map((niche) => {
        tmpArr.push({ value: niche.niche, label: niche.niche });
      });
      setInitialSelect(tmpArr);
      setTempkey(tmpkey + 'aa');
    }
    setInitialValues({
      ...initialValues,
      nichecategory: userinfo ? currentSelection : '',
      firstname: userinfo ? userinfo.firstname : '',
      lastname: userinfo ? userinfo.lastname : '',
      phonenumber: userinfo ? userinfo.phonenumber : '',
      companyname: userinfo ? userinfo.companyname : '',
      companywebsite: userinfo ? userinfo.companywebsite : '',
      companylocation: userinfo ? userinfo.companylocation : '',
      budget: userinfo ? userinfo.budget : '',
      companyfounded: userinfo ? userinfo.companyfounded : '',
      companysize: userinfo ? userinfo.companysize : '',
      aboutbusiness: userinfo ? userinfo.aboutbusiness : '',
      instagram: userinfo ? userinfo.instagram : '',
      tiktok: userinfo ? userinfo.tiktok : '',
      youtube: userinfo ? userinfo.youtube : '',
      facebook: userinfo ? userinfo.facebook : '',
      twitter: userinfo ? userinfo.twitter : '',
      pinterest: userinfo ? userinfo.pinterest : '',
      linkedin: userinfo ? userinfo.linkedin : '',
      blogurl: userinfo ? userinfo.blogurl : ''
    });
    setDefaultValue(userinfo?.companylocation);
    // if (userinfo.id != 0) setRenderedonce(renderedonce + 1);
    // }
  }, [userinfo]);
  const onSelectMode = (mode) => {
    setMode(mode);
    if (mode === 'dark') alert('dark');
    else alert('remove dark');
  };

  const [currentSelection, setCurrentSelection] = useState([]);

  const handleSelectionChange = (result) => {
    setCurrentSelection(result);
  };
  return (
    <>
      <Seo title="Dashboard: Social Profile" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Box
            key={key}
            style={{
              backgroundImage: `url(${
                userinfo.cover_photo
                  ? userinfo.cover_photo
                  : '/assets/covers/abstract-1-4x3-large.png'
              })`
            }}
            sx={{
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: 1,
              height: 421,
              position: 'relative'
            }}
          >
            {userinfo && brandinfo && userinfo.id == userinfo.id ? (
              <Button
                onClick={() => {
                  setKind('cover');
                  uploadDialog.handleOpen();
                }}
                startIcon={
                  <SvgIcon>
                    <Image01Icon />
                  </SvgIcon>
                }
                sx={{
                  backgroundColor: blueGrey[900],
                  bottom: {
                    lg: 24,
                    xs: 'auto'
                  },
                  color: 'common.white',
                  position: 'absolute',
                  right: 24,
                  top: {
                    lg: 'auto',
                    xs: 24
                  },
                  // visibility: 'hidden',
                  '&:hover': {
                    backgroundColor: blueGrey[900]
                  }
                }}
                variant="contained"
              >
                Change Cover
              </Button>
            ) : (
              ''
            )}
          </Box>
          <Stack
            alignItems="center"
            direction="row"
            className="custom-parent"
            spacing={2}
            sx={{ mt: 4 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              className="custom-avatar"
              spacing={2}
            >
              <Box
                sx={{
                  borderRadius: '50%',
                  height: 140,
                  width: 140,
                  position: 'relative'
                }}
              >
                <Box
                  onClick={avatarClick}
                  sx={{
                    alignItems: 'center',
                    backgroundColor: (theme) =>
                      alpha(theme.palette.neutral[700], 0.5),
                    borderRadius: '50%',
                    color: 'common.white',
                    cursor: 'pointer',
                    display: 'flex',
                    height: '23%',
                    width: '23%',
                    justifyContent: 'center',
                    right: '5px',
                    bottom: '15px',
                    opacity: 0.7,
                    position: 'absolute',
                    zIndex: 1,
                    '&:hover': {
                      opacity: 1
                    }
                  }}
                >
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <SvgIcon color="inherit">
                      <Camera01Icon />
                    </SvgIcon>
                    {/* <Typography
                        color="inherit"
                        variant="subtitle2"
                        sx={{ fontWeight: 700 }}
                      >
                        Select
                      </Typography> */}
                  </Stack>
                </Box>
                <Box
                  component={ButtonBase}
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    borderWidth: 2,
                    borderStyle: 'solid',
                    borderColor: 'divider',
                    height: 140,
                    width: 140,
                    borderRadius: '50%'
                  }}
                >
                  <Avatar
                    onClick={avatarClick}
                    src={
                      userinfo.avatar
                        ? userinfo.avatar
                        : `https://ui-avatars.com/api/?name=${userinfo.fullname}&background=2970FF&color=fff&rounded=true`
                    }
                    sx={{
                      height: 130,
                      width: 130
                    }}
                    style={{ cursor: 'pointer' }}
                  ></Avatar>
                </Box>
              </Box>
              <div className="brand-info">
                <Typography
                  color="primary"
                  variant="h6"
                  style={{ fontSize: 22 }}
                >
                  {userinfo ? userinfo.fullname : ''}
                </Typography>
                <Typography
                  color="text.secondary"
                  className="font-inter"
                  variant="subtitle2"
                  style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}
                >
                  Established since {userinfo ? userinfo.companyfounded : ''}
                </Typography>
                <Typography
                  color="text.secondary"
                  className="font-inter location-pointer"
                  variant="overline"
                  style={{ fontSize: 12, marginTop: 17 }}
                ></Typography>
                <Typography
                  color="primary"
                  variant="overline"
                  // variant="subtitle2"
                  className="font-inter"
                  style={{ fontSize: 13 }}
                >
                  {userinfo ? userinfo.companylocation : ''}
                </Typography>
              </div>
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            {userinfo && brandinfo && userinfo.id === userinfo.id ? (
              <Stack
                alignItems="center"
                direction="row"
                spacing={2}
                className="button-bar"
                sx={{
                  display: {
                    md: 'block'
                    // xs: 'none'
                  }
                }}
              >
                <Button
                  // component={RouterLink}
                  // href={paths.dashboard.chat}
                  size="small"
                  className="social-btn"
                  startIcon={
                    <SvgIcon>
                      <Image01Icon />
                    </SvgIcon>
                  }
                  onClick={() => {
                    navigate(
                      '/profile/' +
                        userinfo.firstname?.toLowerCase() +
                        '-' +
                        userinfo.lastname?.toLowerCase() +
                        '-' +
                        userinfo.id
                    );
                  }}
                  variant="contained"
                >
                  View Profile
                </Button>
              </Stack>
            ) : (
              ''
            )}
          </Stack>

          <Stack spacing={4} sx={{ mt: 10 }}>
            <form onSubmit={formik.handleSubmit}>
              <Card>
                <CardHeader title="General Business Information" />
                <CardContent sx={{ pt: 0 }}>
                  <Grid container spacing={3}>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(
                            formik.touched.firstname && formik.errors.firstname
                          )
                        }
                        fullWidth
                        helperText={
                          formik.touched.firstname && formik.errors.firstname
                        }
                        label="First name"
                        name="firstname"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(formik.touched.lastname && formik.errors.lastname)
                        }
                        fullWidth
                        helperText={
                          formik.touched.lastname && formik.errors.lastname
                        }
                        label="Last name"
                        name="lastname"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(
                            formik.touched.phonenumber &&
                            formik.errors.phonenumber
                          )
                        }
                        fullWidth
                        helperText={
                          formik.touched.phonenumber &&
                          formik.errors.phonenumber
                        }
                        label="Phone number"
                        name="phonenumber"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.phonenumber}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(
                            formik.touched.companyname &&
                            formik.errors.companyname
                          )
                        }
                        fullWidth
                        helperText={
                          formik.touched.companyname &&
                          formik.errors.companyname
                        }
                        label="Company name"
                        name="companyname"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.companyname}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(
                            formik.touched.companywebsite &&
                            formik.errors.companywebsite
                          )
                        }
                        fullWidth
                        helperText={
                          formik.touched.companywebsite &&
                          formik.errors.companywebsite
                        }
                        label="Company website"
                        name="companywebsite"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.companywebsite}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(
                            formik.touched.companyfounded &&
                            formik.errors.companyfounded
                          )
                        }
                        fullWidth
                        helperText={
                          formik.touched.companyfounded &&
                          formik.errors.companyfounded
                        }
                        label="Company founded"
                        name="companyfounded"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.companyfounded}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <GoogleMaps
                        getLocation={getLocation}
                        haserror={haserror}
                        defaultValue={defaultValue}
                      />
                    </Grid>
                    {/* niche category */}
                    <Grid xs={12} md={6}>
                      <Grid item xs={12} sx={{}}>
                        <MultiSelectAll
                          sx={{ maxheight: '700px' }}
                          items={names}
                          selectAllLabel="Select All"
                          value={initialSelect}
                          key={tmpkey}
                          placeholder="sss"
                          onChange={handleSelectionChange}
                        />
                      </Grid>
                      {showAlert && (
                        <Alert severity="info" onClose={handleCloseAlert}>
                          Niche category field should not over 5 items
                        </Alert>
                      )}
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(formik.touched.budget && formik.errors.budget)
                        }
                        fullWidth
                        helperText={
                          formik.touched.budget && formik.errors.budget
                        }
                        label="Budget"
                        name="budget"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.budget}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(
                            formik.touched.companysize &&
                            formik.errors.companysize
                          )
                        }
                        fullWidth
                        helperText={
                          formik.touched.companysize &&
                          formik.errors.companysize
                        }
                        label="Company Size"
                        name="companysize"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.companysize}
                      />
                    </Grid>

                    <Grid xs={12} md={12}>
                      <TextField
                        label="Bio"
                        className="title-inter "
                        name="aboutbusiness"
                        variant="filled"
                        multiline
                        inputProps={{
                          style: {
                            height: '110px'
                          }
                        }}
                        fullWidth
                        style={{ marginTop: 11 }}
                        error={
                          !!(
                            formik.touched.aboutbusiness &&
                            formik.errors.aboutbusiness
                          )
                        }
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.aboutbusiness}
                        helperText="Describe your influencer marketing goals and ambitions using SocialVex"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardHeader title="Social Media Handles" />
                <CardContent sx={{ pt: 0 }}>
                  <Grid container spacing={3}>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(
                            formik.touched.instagram && formik.errors.instagram
                          )
                        }
                        fullWidth
                        helperText={
                          formik.touched.instagram && formik.errors.instagram
                        }
                        label="Instagram handle"
                        name="instagram"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.instagram}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(formik.touched.tiktok && formik.errors.tiktok)
                        }
                        fullWidth
                        helperText={
                          formik.touched.tiktok && formik.errors.tiktok
                        }
                        label="Tiktok handle"
                        name="tiktok"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.tiktok}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(formik.touched.youtube && formik.errors.youtube)
                        }
                        fullWidth
                        helperText={
                          formik.touched.youtube && formik.errors.youtube
                        }
                        label="Youtube handle"
                        name="youtube"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.youtube}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(formik.touched.facebook && formik.errors.facebook)
                        }
                        fullWidth
                        helperText={
                          formik.touched.facebook && formik.errors.facebook
                        }
                        label="Facebook handle"
                        name="facebook"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.facebook}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(formik.touched.twitter && formik.errors.twitter)
                        }
                        fullWidth
                        helperText={
                          formik.touched.twitter && formik.errors.twitter
                        }
                        label="Twitter handle"
                        name="twitter"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.twitter}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(
                            formik.touched.pinterest && formik.errors.pinterest
                          )
                        }
                        fullWidth
                        helperText={
                          formik.touched.pinterest && formik.errors.pinterest
                        }
                        label="Pinterest handle"
                        name="pinterest"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.pinterest}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(formik.touched.linkedin && formik.errors.linkedin)
                        }
                        fullWidth
                        helperText={
                          formik.touched.linkedin && formik.errors.linkedin
                        }
                        label="Linkedin handle"
                        name="linkedin"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.linkedin}
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        error={
                          !!(formik.touched.blogurl && formik.errors.blogurl)
                        }
                        fullWidth
                        helperText={
                          formik.touched.blogurl && formik.errors.blogurl
                        }
                        label="Blog URL"
                        name="blogurl"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.blogurl}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Stack
                  direction={{
                    xs: 'column',
                    sm: 'row'
                  }}
                  flexWrap="wrap"
                  spacing={3}
                  sx={{ p: 3 }}
                >
                  <Button type="submit" variant="contained">
                    Update
                  </Button>
                  <Button
                    color="inherit"
                    component={RouterLink}
                    href={
                      '/profile/' +
                      userinfo.firstname?.toLowerCase() +
                      '-' +
                      userinfo.lastname?.toLowerCase() +
                      '-' +
                      userinfo.id
                    }
                  >
                    Cancel
                  </Button>
                </Stack>
              </Card>
            </form>
          </Stack>
        </Container>
      </Box>
      <FileUploader
        onClose={uploadDialog.handleClose}
        open={uploadDialog.open}
        onUpgrade={onUpgrade}
        kind={kind}
      />
    </>
  );
};
const mapStateToProps = (state) => ({
  brandinfo: state.profile.brandinfo,
  userinfo: state.profile.userinfo
});

export default connect(mapStateToProps)(Page);
