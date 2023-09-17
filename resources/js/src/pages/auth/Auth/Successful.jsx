import { Component, useState } from "react";
import { useLocation } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Form.css";
import { useSearchParams } from '@/hooks/use-search-params';
import { useNavigate } from 'react-router-dom';

import { Seo } from '@/components/seo';
import { paths } from '@/paths';

import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    CircularProgress,
    Button,
} from '@mui/material';
import { useFormik } from 'formik';

export default function Successful(props) {

    const searchParams = useSearchParams();
    const returnTo = searchParams.get('returnTo');
    const [isLoading, setIsLoading] = useState(false);
    const [launch, setLaunch] = useState("LAUNCH DASHBOARD");
    const email = JSON.parse(localStorage.getItem('Email'));
    const values = { "email": email };
    const navigate = useNavigate();

    const onClickHandler = (e) => {
        navigate(paths.dashboard.index)
    }
    return (
        <>
            <Seo title="Register" />
            <div className="sendEmail-page">
                <Typography color="primary" variant="h4" sx={{ pb: 1, fontWeight: 'bold', textAlign: 'center' }}>
                    LOGO
                </Typography>
                <Card elevation={0} sx={{ p: 3, pb: 0, borderRadius: 5 }} className="transparent">

                    <CardContent   >
                        <form >
                            <div className="success-img"></div>
                            <Typography className="title sucsize mb-3 text-center">
                                Registration Successful
                            </Typography>
                            <div className="d-flex justify-content-center launch-dashboard resend-button" >

                                <Button
                                    fullWidth
                                    size="large"
                                    sx={{ mt: 2 }}
                                    type="button"
                                    color="primary"
                                    variant="contained"
                                    className="title-inter w-75 smallsize mainButton "
                                    onClick={onClickHandler}
                                >
                                    <span className="ml-2"> {launch} </span>
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