import { Component, useState } from "react";
import { useLocation } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Form.css";
import { useSearchParams } from '@/hooks/use-search-params';
import { Seo } from '@/components/seo';

import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CircularProgress,
  Button,
} from '@mui/material';
import { useFormik } from 'formik';

export default function EmailVerify (props) {

  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');    
  const [start, setStart] = useState("Resend verification link");
  const [isLoading, setIsLoading] = useState(false);
  const email = JSON.parse(localStorage.getItem('Email'));
  const values = {"email":email};
  const onSubmitHandler = async(e) => {
    setIsLoading(true)
    setStart("")

    try {
      axios.post('/api/resend-email',values)
      .then((response)=>{
        console.log(response);
      });
      console.log('Verification email sent');
    } catch (error) {
      console.error('Error sending verification email', error);
    }

    setIsLoading(false)
    setStart("Resend Verification link")


  }
    return (
      <>
      <Seo title="Email Verification" />
      <div className="sendEmail-page">
        <Typography   color="primary" variant="h4" sx={{pb:1, fontWeight:'bold',textAlign: 'center'}}>
          LOGO
        </Typography>
         <Card elevation={0} sx={{p:3, pb:0 ,borderRadius: 5}} className="transparent">

          <CardContent   >
            <form >
             <Typography  className="title bigsize mb-3 text-center">
                    Confirm your email address
             </Typography>
             <Typography  color="text.secondary" className="title-inter smallsize"  sx={{pt:2 ,textAlign: 'center'}}>
                 please verify your email address by clicking the link sent to
             </Typography>
             <Typography  sx={{pb:4,textAlign: 'center'}}  className="title smallsize" >
                {email}
             </Typography>
            <div  className="d-flex justify-content-center resend-button" >
             <Button
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                type="button"
                color="primary"
                variant="contained"
                className="title-inter w-75 smallsize mainButton "
                onClick={onSubmitHandler}
              >
               <span className="ml-2"> {start } </span>
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