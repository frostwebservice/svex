import { Component, useState } from "react";
import { useLocation } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "./Form.css";
// import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { borders } from '@mui/system';
import { Seo } from '@/components/seo';
import { useAuth } from '@/hooks/use-auth';
import { useMounted } from '@/hooks/use-mounted';
import { Link } from "react-router-dom";
import { useSearchParams } from '@/hooks/use-search-params';
import { paths } from '@/paths';
// import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormHelperText,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material';

export default function Start(props) {

  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const [nowLoading, setIsLoading] = useState(false);
  const [click, setClick] = useState("Get Started")
  const navigate = useNavigate();
  const email = JSON.parse(localStorage.getItem('Email'));
  const { signIn } = useAuth();
  const isMounted = useMounted();

  const values = {
    "email": email,
    "from": "start"
  };


  const onStartClicked = (e) => {
    setIsLoading(true)
    setClick("")
    navigate(paths.auth.auth.firstInfos)
    setIsLoading(false)
    setClick("Get Started")


  }
  const onLaterClicked = (e) => {
    axios
      .post("/api/user-signin", values)
      .then((response) => {

        if (response.data.status === 200) {

          async function callSignin() {
            try {
              await signIn(values.email, values.password, response.data.data);

              if (isMounted()) {
                // returnTo could be an absolute path
                navigate(returnTo || paths.dashboard.index);
              }
            } catch (err) {
              console.error(err);

            }
          }
          callSignin();
        }

        if (response.data.status === "failed") {

          alert(response.data.message);

        }
      });
  }
  return (
    <>
      <Seo title="Register" />

      <div className="start-page">
        <Typography color="primary" variant="h3" sx={{ pb: 2, fontWeight: 'bold', textAlign: 'center' }}>
          LOGO
        </Typography>
        <Card className="mainCard card start-content" sx={{ p: 7, pt: 5, mt: 3, borderRadius: 2.5 }} >
          <CardHeader variant="h5"
            sx={{ pb: 0, fontWeight: 'bold', textAlign: 'center' }}
            className="w-100"

          ></CardHeader>

          <CardContent className="d-flex ">
            <div >
              <Typography className="title largesize" sx={{ pb: 1, textAlign: 'left' }} >
                Greate News!
              </Typography>
              <Typography className="title largesize" sx={{ pb: 3, textAlign: 'left' }}>
                Your Brand has registered
              </Typography>
              <Typography color="text.secondary" className="title-inter smallsize" sx={{ pb: 3, fontWeight: 'regular', textAlign: 'left' }}>
                Lets complete you profile and start connecting with potential influencers
              </Typography>

              <div className="row d-flex  pt-4 px-1 title-inter ">

                <Button
                  className="text-center m-2 w-50 btn btn-outline-primary mainButton title-inter smallsize"
                  size="medium"
                  variant="contained"
                  style={{ maxHeight: '48px', minWidth: '100px', minHeight: '48px' }}
                  onClick={onStartClicked}
                  sx={{
                    width: 200,
                    fontsize: 20,
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                >
                  {click}
                </Button>
                <Button
                  size="medium"
                  className="text-center m-2 w-25 later-btn mainButton title-inter smallsize"
                  color="primary"
                  onClick={onLaterClicked}
                  sx={{ fontsize: 20, fontWeight: 'bold' }}

                >
                  <span className="ml-2"> Do It later </span>
                  {nowLoading ? (

                    <CircularProgress color="" size="2.0rem" />
                  ) : (
                    <span></span>
                  )}
                </Button>



              </div>
            </div>
            <div className="left-img">
            </div>
          </CardContent>
        </Card>
      </div>
    </>

  );
}