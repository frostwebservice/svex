import { useRef, useState } from "react";
import * as Yup from 'yup';
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useFormik } from 'formik';
import { useSearchParams } from '@/hooks/use-search-params';
import { useNavigate } from 'react-router-dom';

// import { RedditTextfield} from '../../../frontendpage/TextfieldStyle'
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
  CircularProgress
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { paths } from '@/paths';





const Page = () => {


  const validationSchema = Yup.object({
    instagram: Yup
      .string()
      .max(255)
      .required('Name is required'),
    tiktok: Yup
      .string()
      .max(255)
      .required('Name is required'),
    youtube: Yup
      .string()
      .max(255)
      .required('Name is required'),
    facebook: Yup
      .string()
      .max(255)
      .required('Name is required'),
    twitter: Yup
      .string()
      .max(255)
      .required('Name is required'),
    linkedin: Yup
      .string()
      .max(255)
      .required('Name is required'),
    blogurl: Yup
      .string()
      .max(255)
      .required('Name is required'),
    pinterest: Yup
      .string()
      .max(255)
      .required('Name is required'),
  
  
  });

  
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');  
  const [isLoading, setIsLoading] = useState(false);
  const [letter, setLetter] = useState("Save changes and NEXT");
  const email = JSON.parse(localStorage.getItem('Email'));
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    instagram:"",   
    tiktok:"",
    youtube:"",   
    facebook:"", 
    twitter:"",  
    pinterest:"",   
    linkedin:"", 
    blogurl:"",  
    email:""
  });
  initialValues.email = email;
  const onCancel = (e) =>{
    navigate(returnTo || paths.auth.auth.signin);
} 
  const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit: values => { 
    setIsLoading(true);
    setLetter("");
    axios
      .post("/api/social-Info", values)
        .then((response) => {
          if (response.data.status === 200) {
            setInitialValues({
            instagram:"",   
            tiktok:"",
            youtube:"",   
            facebook:"", 
            twitter:"",  
            pinterest:"",   
            linkedin:"", 
            blogurl:"",  
            email:""
          })
          setLetter("Save changes and NEXT")
          setIsLoading(false)
          navigate(returnTo || paths.auth.auth.trial)
        }
        if (response.data.status === "failed") {
          setLetter("Save changes and NEXT")
          setIsLoading(false);
        }
      });
    }
  });

  return (
    <>
      <Seo title="Business Info" />
      <div className="social-page">
      <Typography   color="primary" variant="h4" sx={{pb:1, fontWeight:'bold',textAlign: 'center'}}>
          LOGO
             </Typography>
        <Card className="mainCard px-4 pt-3 pb-3 card" sx={{borderRadius: 2.5 }} >
         
          <CardContent className="container">
            <form
              noValidate
              onSubmit={formik.handleSubmit}
               className = "row"
            >
            <Typography className="row title largesize" sx={{pb:3,textAlign: 'center'}} >
                    Social Media Handles
            </Typography>
            <Typography className="row" color="grey" sx={{pb:3, pt:0, fontWeight:'reqular',textAlign: 'left'}} >
                    Show case your brand and social media presence to interested influencers who may want to work with you.
            </Typography>
            <Stack spacing={0} className = "col-md-6 col-12">
              <div className='p-1 '>
              <TextField
                  label=" Instagram Handle"
                  className="title-inter"
                  name="instagram"
                  variant="filled"
                  fullWidth
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.instagram && formik.errors.instagram)}
                  helperText={formik.touched.instagram && formik.errors.instagram}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.instagram}
                /></div>
                <div  className='p-1 '>
                <TextField
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
                /></div>
                <div className='p-1 '>
              <TextField
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
                /></div>
                <div  className='p-1 '>
                <TextField
                  variant="filled"
                  className="title-inter "
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.linkedin && formik.errors.linkedin)}
                  helperText={formik.touched.linkedin && formik.errors.linkedin}
                  label="Linkedin Handle"
                  name="linkedin"
                  fullWidth
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.linkedin}
                /></div>
              </Stack>  
              <Stack spacing={0} className = "col-md-6 col-12">
              <div className='p-1 '>
              <TextField
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
                /></div>
                <div  className='p-1 '>
                <TextField
                  variant="filled"
                  className="title-inter "
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.facebook && formik.errors.facebook)}
                  helperText={formik.touched.facebook && formik.errors.facebook}
                  label="Facebook Handle"
                  name="facebook"
                  fullWidth
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.facebook}
                /></div>
                <div className='p-1 '>
              <TextField
                  label=" Pinterest Handle"
                  className="title-inter"
                  name="pinterest"
                  variant="filled"
                  fullWidth
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.pinterest && formik.errors.pinterest)}
                  helperText={formik.touched.pinterest && formik.errors.pinterest}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.pinterest}
                /></div>
                <div  className='p-1 '>
                <TextField
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
                /></div>
              </Stack>  
              <div className= "row d-flex justify-content-end pt-4 px-1 title-inter ">
              
              <Button 
              className="text-center m-2 w-25  btn btn-hover-outline mainButton smallsize"
                variant="white"
                onClick={onCancel}
              >
              Cancel
              </Button>
                    
                
              <Button
                className="text-center   mx-8 w-50  mainButton background-blue smallsize"
                variant="contained"
              
                sx={{ width:200 , justifyContent: 'center',
                      maxWidth: '260px', maxHeight: '48px', minWidth: '100px', minHeight: '48px'
                    }}
                type="submit">
                <span className="ml-2"> {letter } </span>
                    {isLoading ? (
                    
                    <CircularProgress color="inherit" size="2rem"/>
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
};

export default Page;
