import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useRef, useState} from "react";
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Link,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import {RouterLink} from '@/components/router-link';
import {Seo} from '@/components/seo';
import {useSearchParams} from '@/hooks/use-search-params';
import {usePageView} from '@/hooks/use-page-view';
import {paths} from '@/paths';
import {Svexlogo} from '@/components/Svexlogo';
const Page = () => {

    usePageView();
    const validationSchema = Yup.object({
        firstname: Yup
            .string()
            .max(255)
            .required('Name is required'),
        lastname: Yup
            .string()
            .max(255)
            .required('Name is required'),
        phonenumber: Yup
            .string()
            .max(255)
            .required('Name is required'),
        companywebsite: Yup
            .string()
            .max(255)
            .required('Name is required'),
        companylocation: Yup
            .string()
            .max(255)
            .required('Name is required'),
        companyname: Yup
            .string()
            .max(255)
            .required('Name is required')
    });
    const [letter, setLetter] = useState("Save changes and NEXT");
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const returnTo = searchParams.get('returnTo');
    const [initialValues, setInitialValues] = useState({
        firstname: 'Your First Name',
        lastname: 'Your Last Name',
        phonenumber: 'Your Phone Number',
        companywebsite: 'Your Company Website',
        companylocation: 'Your Company Location',
        companyname: 'Your Company Name',
        policy: false,
        submit: null
    });
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {

            setIsLoading(true);
            setLetter("");

            // setTimeout(() => { axios   .post("/api/first-Info", values)
            // .then((response) => {      if (response.data.status === 200) {
            // setInitialValues({         firstname: '',         lastname: '',
            // phonenumber: '',         companywebsite:'',         companylocation: '',
            // companyname:'',         email:''       })       navigate('/SecondInfo')
            // setLetter("Save changes and NEXT")       setIsLoading(false)     }     if
            // (response.data.status === "failed") {     setLetter("Save changes and NEXT")
            // setIsLoading(false);     }   }); }, 500);
        }
    });

    const onCancel = (e) => {
        window.location.href = returnTo || paths.auth.jwt.login;
    }
    return (
        <> < Seo title = "Business Info" /> <Card
            elevation={16}
            sx={{
                background: 'transparent',
                boxShadow: 'none'
            }}>
            <CardHeader
                component="div"
                subheader={(
                    <Stack>
                        <Link component={RouterLink} href={paths.index} variant="subtitle2">
                            <Svexlogo/>
                        </Link>
                    </Stack>
                )}
                sx={{
                    textAlign: 'center'
                }}></CardHeader>
            <CardContent className="container">
                <form noValidate="noValidate" onSubmit={formik.handleSubmit} className="row">
                    <Typography color='black' className="title largesize mb-2"
                        // variant="h4" 
                    >
                        General Business Information
                    </Typography>
                    <Stack spacing={0} className="col-md-6 col-12">
                        <div className='p-1 '>
                            <TextField
                                label="First name"
                                className="title-inter "
                                name="firstname"
                                variant="filled"
                                fullWidth="fullWidth"
                                style={{
                                    marginTop: 11
                                }}
                                error={!!(formik.touched.firstname && formik.errors.firstname)}
                                helperText={formik.touched.firstname && formik.errors.firstname}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.firstname}/></div>
                        <div className='p-1 '>
                            <TextField
                                variant="filled"
                                className="title-inter "
                                style={{
                                    marginTop: 11
                                }}
                                error={!!(formik.touched.phonenumber && formik.errors.phonenumber)}
                                helperText={formik.touched.phonenumber && formik.errors.phonenumber}
                                label="Phone Number"
                                name="phonenumber"
                                fullWidth="fullWidth"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.phonenumber}/></div>
                        <div className='p-1'>
                            <TextField
                                variant="filled"
                                className="title-inter "
                                style={{
                                    marginTop: 11
                                }}
                                error={!!(formik.touched.companywebsite && formik.errors.companywebsite)}
                                helperText={formik.touched.companywebsite && formik.errors.companywebsite}
                                label="Company Website"
                                name="companywebsite"
                                fullWidth="fullWidth"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.companywebsite}/></div>
                    </Stack>
                    <Stack spacing={0} className="col-md-6 col-12 ">
                        <div className='p-1  '>
                            <TextField
                                label="Last name"
                                className="title-inter"
                                name="lastname"
                                variant="filled"
                                fullWidth="fullWidth"
                                style={{
                                    marginTop: 11
                                }}
                                error={!!(formik.touched.lastname && formik.errors.lastname)}
                                helperText={formik.touched.lastname && formik.errors.lastname}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.lastname}/></div>
                        <div className='p-1 '>
                            <TextField
                                variant="filled"
                                className="title-inter "
                                style={{
                                    marginTop: 11
                                }}
                                error={!!(formik.touched.companyname && formik.errors.companyname)}
                                helperText={formik.touched.companyname && formik.errors.companyname}
                                label="Company Name"
                                name="companyname"
                                fullWidth="fullWidth"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.companyname}/></div>
                        <div className='p-1'>
                            <TextField
                                variant="filled"
                                className="title-inter "
                                style={{
                                    marginTop: 11
                                }}
                                error={!!(formik.touched.companylocation && formik.errors.companylocation)}
                                helperText={formik.touched.companylocation && formik.errors.companylocation}
                                label="Company Location"
                                name="companylocation"
                                fullWidth="fullWidth"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.companylocation}/></div>
                    </Stack>

                    <div className="row d-flex justify-content-end pt-4 px-1 title-inter ">

                        <Button onClick={onCancel}>
                            Cancel
                        </Button>

                        <Button
                            // style={{maxWidth: '260px', maxHeight: '48px', minWidth: '100px', minHeight: '48px'}}
                            sx={{
                                pb: 0,
                                width: 200,
                                fontsize: 20,
                                fontWeight: 'bold'
                            }} type="submit">
                            <span className="ml-2">
                                {letter}
                            </span>
                            {
                                isLoading
                                    ? (<CircularProgress color="inherit" size="2rem"/>)
                                    : (<span></span>)
                            }
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    </>
    );
};

export default Page;
