import PropTypes from 'prop-types';

import {
    Card,
    CardContent,
    CardHeader,
    LinearProgress,
    Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Tooltip,
    Stack,
    SvgIcon,
    Grid,
    Typography
} from '@mui/material';
import './social.css'
import { connect } from 'react-redux'
const InfAbout = (props) => {
    const {
        currentCity,
        currentJobCompany,
        currentJobTitle,
        email,
        originCity,
        socialinfo,
        previousJobCompany,
        previousJobTitle,
        profileProgress,
        quote,
        total,
        ...other
    } = props;
    let tmp = total == "total" ? socialinfo[socialinfo["basic"]] : socialinfo
    const showExternalUrl = () => {

        let social_type = window.location.pathname.split("/")[3]
        if (social_type == "tiktok") {
            if (tmp && tmp.external_url == "-") return ''
            return tmp && tmp.external_url ? tmp.external_url.replace(/(^\w+:|^)\/\//, '') : ''
        }
        else {
            return tmp && tmp.external_url ? tmp.external_url.replace(/(^\w+:|^)\/\//, '') : ''
        }

    }
    return (
        <Stack
            spacing={3}
            {...other}>
            <Card

                style={{ borderRadius: 0, boxShadow: 'none' }}
            >
                <CardHeader
                    title="Biography"
                    className='head-font'

                />
                <CardContent style={{ paddingTop: 2 }}>
                    <Typography
                        color="text.secondary"
                        sx={{ mb: 2 }}
                        variant="subtitle2"
                        className='about-content'
                        style={{ borderBottom: '0.5px solid #F2F4F7', paddingBottom: 50 }}
                    >
                        {tmp ? tmp.biography.replace(/[\.,?!]/g, '').replace(/�/g, "'") : ''}
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} sm={6}>
                            <List disablePadding>
                                <ListItem
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <Tooltip title="Full Name">

                                            <div className='man-icon'></div>
                                        </Tooltip>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2" className='about-list-font'>
                                                {tmp ? tmp.full_name : ''}
                                            </Typography>
                                        )}
                                    />
                                </ListItem>
                                <ListItem
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <Tooltip title="Website Url">

                                            <div className='homepage-icon'></div>
                                        </Tooltip>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Link
                                                color="text.primary"
                                                // color="text.secondary"
                                                component="a"
                                                target='_blank'
                                                sx={{ cursor: 'pointer' }}
                                                variant="caption"
                                                className='social-list-font'
                                                href={tmp ? tmp.external_url : ''}
                                            >
                                                {showExternalUrl()}
                                            </Link>
                                            // <Typography variant="subtitle2" className='about-list-font'>
                                            //     {socialinfo ? socialinfo.external_url : ''}
                                            // </Typography>
                                        )}
                                    />
                                </ListItem>

                                <ListItem
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <Tooltip title="Phone Number">

                                            <div className='phone-icon'></div>
                                        </Tooltip>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2" className='about-list-font'>
                                                {tmp ? "+" + tmp.phone_country_code + tmp.phone_number : ''}
                                            </Typography>
                                        )}
                                    />
                                </ListItem>

                                <ListItem
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <Tooltip title="Location">

                                            <div className='home-icon'></div>
                                        </Tooltip>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2"
                                                className='about-list-font'>
                                                {tmp ? tmp.city + ", " + tmp.Country : ''}
                                                {' '}
                                            </Typography>
                                        )}

                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6} sm={6}>
                            <List disablePadding>
                                <ListItem
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <div className='global-icon'></div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2" className='about-list-font'>
                                                {tmp ? "Language: " + tmp.language.charAt(0).toUpperCase() + tmp.language.slice(1) : ''}
                                            </Typography>
                                        )}
                                    />
                                </ListItem>
                                <ListItem
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <div className='male-icon'></div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2" className='about-list-font'>
                                                {tmp ? "Gender: " + tmp.gender.charAt(0).toUpperCase() + tmp.gender.slice(1) : ''}
                                            </Typography>
                                        )}
                                    />
                                </ListItem>

                                <ListItem
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <div className='age-icon'></div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2" className='about-list-font'>
                                                {tmp ? "Age: " + tmp.age : ''}
                                            </Typography>
                                        )}
                                    />
                                </ListItem>

                                <ListItem
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <div className='ethnicity-icon'></div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2"
                                                className='about-list-font'>
                                                {tmp ? "Ethnicity: " + tmp.ethnicity : ''}
                                            </Typography>
                                        )}

                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>


                </CardContent>
            </Card>
        </Stack>
    );
};

InfAbout.propTypes = {
    currentCity: PropTypes.string.isRequired,
    currentJobCompany: PropTypes.string.isRequired,
    currentJobTitle: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    originCity: PropTypes.string.isRequired,
    previousJobCompany: PropTypes.string.isRequired,
    previousJobTitle: PropTypes.string.isRequired,
    profileProgress: PropTypes.number.isRequired,
    quote: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
    socialinfo: state.profile.socialinfo
})
export default connect(mapStateToProps)(InfAbout);