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
  Typography
} from '@mui/material';
import './social.css'
import { connect } from 'react-redux'
const SocialAbout = (props) => {
  const {
    currentCity,
    currentJobCompany,
    currentJobTitle,
    email,
    originCity,
    brandinfo,
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
          title="About"
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
            {brandinfo ? brandinfo.aboutbusiness : ''}
          </Typography>

          <List disablePadding>
            <ListItem
              disableGutters
              divider
            >
              <ListItemAvatar>
                <div className='url-icon'></div>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={(
                  <Typography variant="subtitle2" className='about-list-font'>
                    {/* {currentJobTitle} */}
                    {brandinfo ? brandinfo.companywebsite : ''}
                  </Typography>
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
                    {/* {currentJobTitle} */}
                    {brandinfo ? brandinfo.phonenumber : ''}
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
                    {brandinfo ? brandinfo.companylocation : ''}
                    {' '}
                    {/* <Link
                      color="text.primary"
                      href="#"
                      variant="subtitle2"
                    >
                      {currentCity}
                    </Link> */}
                  </Typography>
                )}

              />
            </ListItem>
            <ListItem
              disableGutters
              divider>
              <ListItemAvatar>
                <div className='mail-icon'></div>
              </ListItemAvatar>
              <ListItemText
                primary={(
                  <Typography variant="subtitle2" className='about-list-font'>
                    {/* {email} */}
                    {brandinfo ? brandinfo.email : ''}
                  </Typography>
                )}
              />
            </ListItem>
            <ListItem
              disableGutters

            >
              <ListItemAvatar>
                <div className='connect-icon'></div>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={(
                  <Typography variant="subtitle2" className='about-list-font'>
                    {/* {currentJobTitle} */}
                    25-75
                  </Typography>
                )}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Stack>
  );
};

SocialAbout.propTypes = {
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
  brandinfo: state.profile.brandinfo
})
export default connect(mapStateToProps)(SocialAbout);