import {
    Box,
    Button,
    Container,
    Stack,
    SvgIcon,
    TextField,
    Typography,
    Unstable_Grid2 as Grid
} from '@mui/material';
import * as Yup from 'yup';
import { Seo } from '@/components/seo';
import { usePageView } from '@/hooks/use-page-view';
import RedditTextField from './frontendpage/TextfieldStyle';

import { useSettings } from '@/hooks/use-settings';
import "./inf_finder.css"
import { getOutReachs } from '@/actions';
import { useState, useEffect } from 'react';
import { useDispatch, connect } from "react-redux";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { RouterLink } from '@/components/router-link';

const now = new Date();

const CreateNewGroup = (props) => {
    const {groups}= props; 
    usePageView();
    const settings = useSettings()
    const dispatch = useDispatch();
    const email = JSON.parse(localStorage.getItem('email'));
    useEffect(() => {
        dispatch(getOutReachs({ email: email }));
    }, [dispatch])

    const navigate = useNavigate()
    const handleCreate = () => {
        axios
        .post("/api/newgroup", {group_name:newName,email:email})
        .then((response) => {
            dispatch(getOutReachs({ email: email }));
            setOpen(false);
        });

    };
    const validationSchema = Yup.object({
        group_name: Yup
          .string()
          .max(255)
          .required('This Field is required'),
        brief_group: Yup
          .string()
          .max(2550)
          .required('This Field is required'),
    
      });
    const [initialValues, setInitialValues] = useState({
        group_name: '',
        brief_group: '',
        email: '',
      });
      initialValues.email = email;
    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema,
        onSubmit: values => {
            axios
                .post("/api/newgroup", {group_name:values.group_name,email:values.email,brief_group:values.brief_group})
                .then((response) => {
                setIsDone(true)
            });
        }
      });
      const [isDone,setIsDone]=useState(false);
    return (
        <>
            <Seo title="Dashboard: Create New Outreach Group" />
            <Box
                component="main"
                sx={{ flexGrow: 1 }}
            >
                <Container maxWidth={settings.stretch ? false : 'xl'} >

                    <Stack
                        alignItems="center"
                        direction="row"
                        flexWrap="wrap"
                        spacing={3}
                    >
                        <Box
                            component="form"
                            sx={{ flexGrow: 1 }}
                        >
                            <Typography variant="h4" sx={{ mt: 7, mb: 0, fontSize: '32px' }}>
                                Create New Outreach Group
                            </Typography>
                        </Box>
                    </Stack>

                    {isDone?(
                    <Box
                    component="main"
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexGrow: 1,
                        py: '80px'
                    }}
                >
                <Container maxWidth="lg">
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 6
                    }}
                    >
                    <Box
                        alt="Internal server error"
                        component="img"
                        src="/assets/errors/checked.png"
                        sx={{
                        height: 'auto',
                        maxWidth: '100%',
                        width: 145
                        }}
                    />
                    </Box>
                    <Typography
                    align="center"
                    sx={{fontWeight:700,fontSize:28}}
                    >
                    Successfully Created Outreach Group
                    </Typography>
                    <Typography
                    align="center"
                    color="text.secondary"
                    sx={{ mt: 0.5,fontSize:16 }}
                    >
                    Now it’s time to recruit Influencers and build up this group
                    </Typography>
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 2
                    }}
                    >
                    <Button
                        endIcon={(
                        <SvgIcon>
                            <ArrowRightIcon />
                        </SvgIcon>
                        )}
                        component={RouterLink}
                        variant="contained"
                        href="/dashboard/jobs/invite"
                    >
                        Invite On This Project
                    </Button>
                    </Box>
                </Container>
                </Box>
                    ):(
                        <Box sx={{ p: 0.5 }} style={{ boxShadow: 'none' }}>
                        <form
                            noValidate
                            onSubmit={formik.handleSubmit}
                            className="row"
                        >
                            <Stack spacing={0} >
                                <div className='p-1 '>
                                <RedditTextField
                                    variant="filled"
                                    className="title-inter "
                                    style={{ marginTop: 11 }}
                                    error={!!(formik.touched.group_name && formik.errors.group_name)}
                                    label="Full Name"
                                    name="group_name"
                                    placeholder="Name"
                                    fullWidth
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.group_name}
                                /></div>

                            </Stack>
                            <div className='p-1 px-3  '>
                                <RedditTextField
                                label="Description"
                                className="title-inter "
                                name="brief_group"
                                variant="filled"
                                placeholder="Write your description here..."
                                multiline
                                inputProps={{
                                    style: {
                                    height: "100px",
                                    },
                                }}
                                fullWidth
                                style={{ marginTop: 11 }}
                                error={!!(formik.touched.brief_group && formik.errors.brief_group)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.brief_group}
                                />
                            </div>
                            <div className="p-1 px-3 d-flex  title-inter ">

                                <Button
                                    className="text-center  background-blue smallsize"
                                    variant="contained"
                                    sx={{
                                        justifyContent: 'center',
                                        width: '300px',  minHeight: '48px',fontSize:'18px',mt:3
                                    }}
                                    type="submit"
                                >
                                    Create New Outreach Group
                                </Button>
                            </div>
                        </form>
                    </Box>
                    )}

                </Container>
            </Box>
        </>
    );
};
const mapStateToProps = state => ({
    groups: state.outreachs.outreachs
})
export default connect(mapStateToProps)(CreateNewGroup);

