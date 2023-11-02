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
  Tooltip,
  Typography
} from '@mui/material';
import './social.css'
import { connect } from 'react-redux'

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';

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
                <Tooltip title="Company Website">

                  <div className='url-icon'></div>
                </Tooltip>
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
                <Tooltip title="Phone Number">

                  <div className='phone-icon'></div>
                </Tooltip>
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
                <Tooltip title="Company Location">

                  <div className='home-icon'></div>
                </Tooltip>
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
                <Tooltip title="Email Address">

                  <div className='mail-icon'></div>
                </Tooltip>
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
              divider

            >
              <ListItemAvatar>
                <Tooltip title="Budget">

                  <SvgIcon>
                    <AttachMoneyIcon style={{ opacity: '0.6' }} />
                  </SvgIcon>
                </Tooltip>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={(
                  <Typography variant="subtitle2" className='about-list-font'>
                    {/* {currentJobTitle} */}
                    {brandinfo ? brandinfo.budget : ''}

                  </Typography>
                )}
              />
            </ListItem>
            <ListItem
              disableGutters
              divider
            >
              <ListItemAvatar>
                <Tooltip title="Company Size">
                  <SvgIcon style={{ opacity: '0.6' }}>
                    <BusinessOutlinedIcon />
                  </SvgIcon>
                </Tooltip>

              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={(
                  <Typography variant="subtitle2"
                    className='about-list-font'>
                    {brandinfo ? brandinfo.companysize : ''}

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