import { useRef, useState, useEffect } from "react";
import * as Yup from 'yup';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { isEmptyArray, useFormik } from 'formik';
import RedditTextField from '../../../frontendpage/TextfieldStyle';
import { useSearchParams } from '@/hooks/use-search-params';
import { useNavigate } from 'react-router-dom';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import {
  Box,
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
import './Form.css';
import { useDispatch, connect } from "react-redux";

import { getUserProfile } from '@/actions';
import { set } from "nprogress";

const Page = (props) => {

  const validationSchema = Yup.object({
    firstname: Yup
      .string()
      .max(255)
      .required('This Field is required'),
    lastname: Yup
      .string()
      .max(255)
      .required('This Field is required'),
    phonenumber: Yup
      .string()
      .max(255)
      .required('This Field is required'),
    companywebsite: Yup
      .string()
      .max(255)
      .required('This Field is required'),
    // companylocation: Yup
    //   .string()
    //   .max(255)
    //   .required('This Field is required'),
    companyname: Yup
      .string()
      .max(255)
      .required('This Field is required'),
  });
  const [renderedonce, setRenderedonce] = useState(false);
  const { userinfo } = props
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const [isLoading, setIsLoading] = useState(false);
  const [letter, setLetter] = useState("Save changes and NEXT");
  const email = JSON.parse(localStorage.getItem('email'));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile({ email: email }));

  }, [dispatch])
  const navigate = useNavigate();
  const [templocation, setTemplocation] = useState("");
  const [initialValues, setInitialValues] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    companywebsite: '',
    companylocation: '',
    companyname: '',
    email: ''
  });
  initialValues.email = email;

  const onCancel = () => {
    navigate(returnTo || paths.auth.auth.signin)
  }
  function isEmpty(value) {
    for (let prop in value) {
      if (value.hasOwnProperty(prop)) return false;
    }
    return true;
  }
  const onPlaceSelect = value => {

    if (value != null) {
      setInitialValues({
        ...formik.values,
        companylocation: value.properties.formatted
      });
      document.getElementsByClassName('geoapify-autocomplete-input')[0].style.opacity = "0";
    }
    else {
      document.getElementsByClassName('geoapify-autocomplete-input')[0].style.opacity = "1";
      setInitialValues({
        ...formik.values,
        companylocation: ''
      });

    }
  }

  const onUserInput = value => {
    console.log("userinput", value);
    document.getElementsByClassName('geoapify-autocomplete-input')[0].style.opacity = "1";
    console.log(isEmpty(formik.errors));
    setInitialValues({
      ...formik.values,
      companylocation: ' '
    });
  }

  const onSuggectionChange = value => {
    console.log("suggestion", value);
    setInitialValues({
      ...formik.values,
      companylocation: ' '
    });
  }
  const onClose = value => {
  }
  const onChange = () => {
    document.getElementsByClassName('geoapify-autocomplete-input')[0].style.visibility = "inherit";
    setInitialValues({
      ...formik.values,
      companylocation: ' '
    });
  }
  const onFocus = (e) => {
    // document.getElementsByClassName('geoapify-autocomplete-input')[0].style.visibility = "inherit";
    // setInitialValues({
    //   ...formik.values,
    //   companylocation: ' '
    // });
    // e.target.blur()
    // document.getElementsByClassName('geoapify-autocomplete-input')[0].click();

  }
  const onLeave = () => {
    document.getElementsByClassName('geoapify-autocomplete-input')[0].style.visibility = "inherit";
    setInitialValues({
      ...formik.values,
      companylocation: ' '
    });
  }
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: values => {
      // console.log(values); return;
      setIsLoading(true);
      setLetter("");
      axios
        .post("/api/first-Info", values)
        .then((response) => {
          if (response.data.status === 200) {
            setInitialValues({
              firstname: '',
              lastname: '',
              phonenumber: '',
              companywebsite: '',
              companylocation: '',
              companyname: '',
              email: ''
            })
            navigate(returnTo || paths.auth.auth.secondInfos)
            setLetter("Save changes and NEXT")
            setIsLoading(false)
          }

          if (response.data.status === "failed") {
            setLetter("Save changes and NEXT")
            setIsLoading(false);

          }
        });
    }
  });
  useEffect(() => {

    if (isEmpty(formik.errors)) {
      document.getElementsByClassName("geoapify-autocomplete-input")[0].style.top = '-67px';

    } else {
      document.getElementsByClassName("geoapify-autocomplete-input")[0].style.top = '-70px';
    }
    if (!renderedonce && userinfo) {
      setInitialValues({
        ...initialValues,
        firstname: userinfo ? userinfo.firstname : '',
        lastname: userinfo ? userinfo.lastname : '',
        phonenumber: userinfo ? userinfo.phonenumber : '',
        companywebsite: userinfo ? userinfo.companywebsite : '',
        companylocation: userinfo ? userinfo.companylocation : '',
        companyname: userinfo ? userinfo.companyname : '',
      })
      setRenderedonce(true);
    }

  });
  return (
    <>
      <Seo title="Business Info" />
      <div className="firstinfo-card">
        <Typography color="primary" variant="h4" sx={{ pb: 1, fontWeight: 'bold', textAlign: 'center' }}>
          LOGO
        </Typography>
        <Card sx={{ borderRadius: 2.5 }} className="mainCard card  px-4 pt-4 pb-3">

          <CardContent className="container">
            <form
              noValidate
              onSubmit={formik.handleSubmit}
              className="row"
            >
              <Typography color='black'
                className="title largesize mb-1"

              // variant="h4" 
              >
                General Business Information
              </Typography>
              <Stack spacing={0} className="col-md-6 col-12">
                <div className='p-2 '>
                  <RedditTextField
                    label="First name"
                    className="title-inter "
                    name="firstname"
                    variant="filled"
                    fullWidth
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.firstname && formik.errors.firstname)}
                    helperText={formik.touched.firstname && formik.errors.firstname}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                  /></div>
              </Stack>
              <Stack spacing={0} className="col-md-6 col-12 ">
                <div className='p-2  '>
                  <RedditTextField
                    label="Last name"
                    className="title-inter"
                    name="lastname"
                    variant="filled"
                    fullWidth
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.lastname && formik.errors.lastname)}
                    helperText={formik.touched.lastname && formik.errors.lastname}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                  /></div>
              </Stack>
              <Stack spacing={0} className="col-md-6 col-12 ">

                <div className='p-2 '>
                  <RedditTextField
                    variant="filled"
                    className="title-inter "
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.phonenumber && formik.errors.phonenumber)}
                    helperText={formik.touched.phonenumber && formik.errors.phonenumber}
                    label="Phone Number"
                    name="phonenumber"
                    fullWidth
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.phonenumber}
                  /></div>
              </Stack>
              <Stack spacing={0} className="col-md-6 col-12 ">
                <div className='p-2 '>
                  <RedditTextField
                    variant="filled"
                    className="title-inter "
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.companyname && formik.errors.companyname)}
                    helperText={formik.touched.companyname && formik.errors.companyname}
                    label="Company Name"
                    name="companyname"
                    fullWidth
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.companyname}
                  /></div>
              </Stack>
              <Stack spacing={0} className="col-md-6 col-12 ">

                <div className='p-2'>
                  <RedditTextField
                    variant="filled"
                    className="title-inter "
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.companywebsite && formik.errors.companywebsite)}
                    helperText={formik.touched.companywebsite && formik.errors.companywebsite}
                    label="Company Website"
                    name="companywebsite"
                    fullWidth
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.companywebsite}
                  /></div>
              </Stack>

              <Stack spacing={0} className="col-md-6 col-12 ">

                <div className='p-2' style={{ position: 'relative' }}>
                  <RedditTextField
                    variant="filled"
                    className="title-inter "
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.companylocation && formik.errors.companylocation)}
                    helperText={formik.touched.companylocation && formik.errors.companylocation}
                    label="Company Location"
                    name="companylocation"
                    fullWidth
                    onBlur={onLeave}
                    // onBlur={formik.handleBlur}
                    onChange={onChange}
                    // onLeave={onLeave}
                    onFocus={onFocus}
                    // onChange={formik.handleChange}

                    value={formik.values.companylocation}
                  />
                  <GeoapifyContext apiKey="1040c1c2e3e34b3b80b351a587232b75">
                    <GeoapifyGeocoderAutocomplete placeholder=" "
                      onUserInput={onUserInput}
                      onClose={onClose}
                      placeSelect={onPlaceSelect}
                      suggestionsChange={onSuggectionChange}
                    />
                  </GeoapifyContext>
                </div>
              </Stack>


              <div className="row d-flex justify-content-end pt-4 px-1 title-inter ">

                <Button
                  className="text-center mx-4 w-25  btn btn-hover-outline mainButton smallsize cancel-button"
                  variant="text"
                  onClick={onCancel}
                >
                  Cancel
                </Button>


                <Button
                  className="text-center   mx-8 w-50  mainButton background-blue smallsize firstinfo-button"
                  variant="contained"


                  type="submit">
                  <span className="ml-2"> {letter} </span>
                  {isLoading ? (

                    <CircularProgress color="inherit" size="2rem" />
                  ) : (
                    <span></span>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card >
      </div >
    </>
  );
};
const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
})
export default connect(mapStateToProps)(Page);
