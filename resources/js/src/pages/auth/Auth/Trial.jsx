import { Component, useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import './Form.css';
import { useSearchParams } from '@/hooks/use-search-params';
import ReactCheck from '@/Assets/SVG/check-21.svg';
import { Seo } from '@/components/seo';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Avatar,
  Typography,
  Button
} from '@mui/material';
import { paths } from '@/paths';

export default function Trial(props) {
  const [click, setclick] = useState('start trial');
  const [curtrial, setTrial] = useState({
    trial: '',
    email: ''
  });
  const curEmail = JSON.parse(localStorage.getItem('email'));
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onFreeClicked = (e) => {
    const payload = {
      trial: 1,
      email: curEmail
    };
    axios.post('/api/user-trial', payload).then((response) => {
      if (response.data.status === 200 && response.data.success) {
        setIsLoading(false);
        navigate(paths.auth.auth.successful);
      }
      if (response.data.status === 'failed') {
        alert(response.data.message);
        setIsLoading(false);
      }
    });
  };
  const onStandardClicked = (e) => {
    const payload = {
      trial: 0,
      email: curEmail
    };
    axios.post('/api/user-trial', payload).then((response) => {
      if (response.data.status === 200 && response.data.success) {
        setIsLoading(false);
        navigate(paths.auth.auth.successful);
      }
      if (response.data.status === 'failed') {
        alert(response.data.message);
        setIsLoading(false);
      }
    });
  };
  return (
    <>
      <Seo title="Register" />
      <div className="trial-page">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <img src="/longlogo.png" width={200} height={50} />
        </Box>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-12 pl-2 flex-card">
              <Card className="mainCard" sx={{ p: 2, borderRadius: 5 }}>
                <CardHeader
                  variant="h6"
                  avatar={
                    <Avatar alt="Apple" src="../../Assets/png/avatar.png" />
                  }
                  sx={{ pb: 0, fontWeight: 'bold', textAlign: 'center' }}
                  className="w-100"
                ></CardHeader>

                <CardContent className="d-flex custom-content">
                  <div className=" w-100">
                    <Typography
                      variant="h5"
                      className="title"
                      sx={{ pb: 0, fontWeight: 'bold', textAlign: 'left' }}
                    >
                      $0
                    </Typography>
                    <Typography
                      variant="h6"
                      className="title"
                      sx={{ pb: 0, fontWeight: 'bold', textAlign: 'left' }}
                    >
                      Free trial
                    </Typography>
                    <Typography
                      color="text.secondary"
                      className="title"
                      sx={{ pb: 1, fontWeight: 'regular', textAlign: 'left' }}
                    >
                      To familiarize yourself with our tools
                    </Typography>
                    <hr></hr>
                    <div className="col">
                      <div className="trial-panel">
                        <div className="d-flex justify-content-start justify-items-center">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Access the Influencer Analyzer(Limited)
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start  justify-items-center">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Access the Influencer Finder(Limited)
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Messaging System(Limited)
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Job Board
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Location
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Total Reach Count
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Engagement Rate
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Compensation Method
                          </Typography>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mt-3">
                        <Button
                          className="text-center m-2 w-100 btn btn-outline-primary title-inter smallsize mainButton trial-button"
                          color="inherit"
                          onClick={onFreeClicked}
                        >
                          Start Free trial
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-6 col-sm-12 col-12 pl-2 flex-card">
              <Card className="mainCard" sx={{ p: 2, borderRadius: 5 }}>
                <CardHeader
                  variant="h6"
                  avatar={<Avatar alt="Apple" src="../public/logo192.png" />}
                  sx={{ pb: 0, fontWeight: 'bold', textAlign: 'center' }}
                  className="w-100"
                ></CardHeader>
                <CardContent className="d-flex custom-content">
                  <div className=" w-100">
                    <Typography
                      className="title"
                      variant="h5"
                      sx={{ pb: 0, fontWeight: 'bold', textAlign: 'left' }}
                    >
                      $99
                    </Typography>
                    <Typography
                      className="title"
                      variant="h6"
                      sx={{ pb: 0, fontWeight: 'bold', textAlign: 'left' }}
                    >
                      Standard trial
                    </Typography>
                    <Typography
                      className="title"
                      color="text.secondary"
                      sx={{ pb: 1, fontWeight: 'regular', textAlign: 'left' }}
                    >
                      To familiarize yourself with our tools
                    </Typography>
                    <hr></hr>
                    <div className="col">
                      <div className="trial-panel">
                        <div className="d-flex justify-content-start justify-items-center">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Access the Influencer Analyzer(Full)
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start  justify-items-center">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Access the Influencer Finder(Full)
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Messaging System(Full)
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Job Board
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Compaign Management
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2">
                            Perfermance Tracking
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Reporting
                          </Typography>
                        </div>

                        <div className="d-flex justify-content-start">
                          <img
                            src={ReactCheck}
                            className="me-2 mb-2 pb-2 check-custom"
                          />
                          <Typography className="mb-2 pb-2 title-inter tinysize">
                            Etc...
                          </Typography>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mt-3">
                        <Button
                          className="text-center m-2 w-100 btn btn-outline-primary title-inter smallsize mainButton trial-button"
                          color="inherit"
                          onClick={onStandardClicked}
                        >
                          Start Standard Trial
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
