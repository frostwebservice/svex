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
        ...other
    } = props;

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
                        {socialinfo ? socialinfo.biography.replace(/[\.,?!]/g, '') : ''}
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} sm={6}>
                            <List disablePadding>
                                <ListItem
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <div className='man-icon'></div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2" className='about-list-font'>
                                                {socialinfo ? socialinfo.full_name : ''}
                                            </Typography>
                                        )}
                                    />
                                </ListItem>
                                <ListItem
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <div className='homepage-icon'></div>
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
                                                href={socialinfo ? socialinfo.external_url : ''}
                                            >
                                                {socialinfo ? socialinfo.external_url.replace(/(^\w+:|^)\/\//, '') : ''}
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
                                        <div className='phone-icon'></div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2" className='about-list-font'>
                                                {socialinfo ? "+" + socialinfo.phone_country_code + socialinfo.phone_number : ''}
                                            </Typography>
                                        )}
                                    />
                                </ListItem>

                                <ListItem
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <div className='home-icon'></div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2"
                                                className='about-list-font'>
                                                {socialinfo ? socialinfo.city : ''}
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
                                                {socialinfo ? "Language: " + socialinfo.language.charAt(0).toUpperCase() + socialinfo.language.slice(1) : ''}
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
                                                {socialinfo ? "Gender: " + socialinfo.gender.charAt(0).toUpperCase() + socialinfo.gender.slice(1) : ''}
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
                                                {socialinfo ? "Age: " + socialinfo.age : ''}
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
                                                {socialinfo ? "Ethnicity: " + socialinfo.ethnicity : ''}
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