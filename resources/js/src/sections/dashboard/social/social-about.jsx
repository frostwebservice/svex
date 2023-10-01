import PropTypes from 'prop-types';
import BookOpen01Icon from '@untitled-ui/icons-react/build/esm/BookOpen01';
import Briefcase01Icon from '@untitled-ui/icons-react/build/esm/Briefcase01';
import Home02Icon from '@untitled-ui/icons-react/build/esm/Home02';
import Mail01Icon from '@untitled-ui/icons-react/build/esm/Mail01';
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
export const SocialAbout = (props) => {
  const {
    currentCity,
    currentJobCompany,
    currentJobTitle,
    email,
    originCity,
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
            {quote}
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
                    www.canadagoose.com/shop
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
                    +92313524856
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
                    Toronto, Ontario, Canada
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
                    katarina.smith@devias.io
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
