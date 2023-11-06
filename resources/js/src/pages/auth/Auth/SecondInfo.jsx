import { useRef, useState, useEffect } from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useSearchParams } from '@/hooks/use-search-params';
import RedditTextField from '../../../frontendpage/TextfieldStyle';
import { connect, useDispatch } from 'react-redux';
import { getUserProfile } from "../../../actions";
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import "./Form.css";
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
  Grid,
  CircularProgress
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { paths } from '@/paths';
import MultiSelectAll from "./MultiSelectAll";
import { Alert } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  { label: 'Acne and Skin Care', value: 'Acne and Skin Care' },
  { label: 'Alcohol', value: 'Alcohol' },
  { label: 'Art', value: 'Art' },
  { label: 'Baby and Maternity', value: 'Baby and Maternity' },
  { label: 'Blockchain and Cryptocurrency', value: 'Blockchain and Cryptocurrency' },
  { label: 'Books and Fiction', value: 'Books and Fiction' },
  { label: 'Business and Career', value: 'Business and Career' },
  { label: 'Cameras, Photography and Videography', value: 'Cameras, Photography and Videography' },
  { label: 'Cars and Vehicles', value: 'Cars and Vehicles' },
  { label: 'Cooking and Recipes', value: 'Cooking and Recipes' },
  { label: 'Crafts and DIY', value: 'Crafts and DIY' },
  { label: 'Diet and Weight Loss', value: 'Diet and Weight Loss' },
  { label: 'Digital Marketing and Making Money Online', value: 'Digital Marketing and Making Money Online' },
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
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const Page = (props) => {
  const [tmpkey, setTempkey] = useState("1");
  const [showAlert, setShowAlert] = useState(false);
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const { userinfo } = props
  const validationSchema = Yup.object({
    budget: Yup
      .string()
      .max(255)
      .required('This Field is required'),
    companysize: Yup
      .string()
      .max(255)
      .required('This Field is required'),
    companyfounded: Yup
      .string()
      .max(255)
      .required('This Field is required'),
    aboutbusiness: Yup
      .string()
      .max(2550)
      .required('This Field is required'),

  });
  const [renderedonce, setRenderedonce] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile({ email: email }));

  }, [dispatch])
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    // console.log(personName);
  };

  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const [isLoading, setIsLoading] = useState(false);
  const [letter, setLetter] = useState("Save changes and NEXT");
  const email = JSON.parse(localStorage.getItem('email'));
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    budget: '',
    companysize: '',
    companyfounded: '',
    aboutbusiness: '',
    email: '',
  });
  initialValues.email = email;
  const [initialSelect, setInitialSelect] = useState([])
  const onCancel = (e) => {
    navigate(returnTo || paths.auth.auth.signin);
  }

  var nichesArr = [];
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,

    validationSchema,
    onSubmit: values => {

      setIsLoading(true);
      setLetter("");
      values.nichecategory = currentSelection;
      // console.log("custom", initialSelect); return;
      axios
        .post("/api/second-Info", values)
        .then((response) => {
          if (response.data.status === 200) {
            setInitialValues({
              nichecategory: '',
              budget: '',
              companysize: '',
              companyfounded: '',
              aboutbusiness: '',
              email: '',
            })
            navigate(returnTo || paths.auth.auth.socialHandle)
            setLetter("Save changes and NEXT")
            setIsLoading(false)
          }

          if (response.data.status === "failed") {
            setLetter("Save changes and NEXT")
            setIsLoading(false);
            setShowAlert(true)

          }
        });
    }
  });
  useEffect(() => {

    if (!renderedonce && userinfo) {

      if (userinfo) {
        let tmpArr = [];
        userinfo.niches.map(niche => {
          tmpArr.push({ value: niche.niche, label: niche.niche })
        })
        setInitialSelect(tmpArr)
        // renderBox()
        setTempkey(tmpkey + "aa")
      }

      setInitialValues({
        ...initialValues,
        nichecategory: userinfo ? currentSelection : '',
        budget: userinfo ? userinfo.budget : '',
        companysize: userinfo ? userinfo.companysize : '',
        companyfounded: userinfo ? userinfo.companyfounded : '',
        aboutbusiness: userinfo ? userinfo.aboutbusiness : '',
      })
      if (userinfo.id != 0)
        setRenderedonce(true);

    }

  });

  const [currentSelection, setCurrentSelection] = useState(
    []
  );

  const handleSelectionChange = (result) => {
    console.log(result)
    setCurrentSelection(result);

  };
  return (
    <>
      <Seo title="Business Info" />
      <div className="firstinfo-card">
        <Typography color="primary" variant="h4" sx={{ pb: 1, fontWeight: 'bold', textAlign: 'center' }}>
          LOGO
        </Typography>
        <Card sx={{ borderRadius: 2.5 }} className="mainCard card  px-4 pt-4 pb-3" >

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
              <Stack spacing={0} className="col-md-12 col-12">
                <div className='p-1 '>
                  <Grid item xs={12} sx={{ p: 0 }}>
                    <MultiSelectAll
                      sx={{ maxheight: "700px" }}
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
                </div>
              </Stack>
              <Stack spacing={0} className="col-md-4 col-12">
                <div className='p-1 '>
                  <RedditTextField
                    variant="filled"
                    className="title-inter "
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.budget && formik.errors.budget)}
                    helperText={formik.touched.budget && formik.errors.budget}
                    label="Budget"
                    name="budget"
                    fullWidth
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.budget}
                  /></div>

              </Stack>
              <Stack spacing={0} className="col-md-4 col-12 ">
                <div className='p-1 '>
                  <RedditTextField
                    variant="filled"
                    className="title-inter "
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.companysize && formik.errors.companysize)}
                    helperText={formik.touched.companysize && formik.errors.companysize}
                    label="Company Size"
                    name="companysize"
                    fullWidth
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.companysize}
                  /></div>
              </Stack>
              <Stack spacing={0} className="col-md-4 col-12 ">

                <div className='p-1  '>
                  <RedditTextField
                    label="Company founded"
                    className="title-inter"
                    name="companyfounded"
                    variant="filled"
                    fullWidth
                    style={{ marginTop: 11 }}
                    error={!!(formik.touched.companyfounded && formik.errors.companyfounded)}
                    helperText={formik.touched.companyfounded && formik.errors.companyfounded}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.companyfounded}
                  /></div>

              </Stack>
              <div className='p-1 px-3  '>
                <RedditTextField
                  label="Bio"
                  className="title-inter "
                  name="aboutbusiness"
                  variant="filled"
                  multiline
                  inputProps={{
                    style: {
                      height: "110px",
                    },
                  }}
                  fullWidth
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.aboutbusiness && formik.errors.aboutbusiness)}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  // onClick={onbioClick}
                  value={formik.values.aboutbusiness}
                  helperText="Describe your influencer marketing goals and ambitions using SocialVex"
                />
              </div>

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

                  sx={{
                    width: 200, justifyContent: 'center',
                    maxWidth: '260px', maxHeight: '48px', minWidth: '100px', minHeight: '48px'
                  }}
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
        </Card>
      </div >
    </>
  );
};
const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
})
export default connect(mapStateToProps)(Page);
