import Attachment01Icon from '@untitled-ui/icons-react/build/esm/Attachment01';
import FaceSmileIcon from '@untitled-ui/icons-react/build/esm/FaceSmile';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import Link01Icon from '@untitled-ui/icons-react/build/esm/Link01';
import BookOpen01Icon from '@untitled-ui/icons-react/build/esm/BookOpen01';
import Briefcase01Icon from '@untitled-ui/icons-react/build/esm/Briefcase01';
import Home02Icon from '@untitled-ui/icons-react/build/esm/Home02';
import Mail01Icon from '@untitled-ui/icons-react/build/esm/Mail01';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  CardContent,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
  SvgIcon,
  useMediaQuery
} from '@mui/material';
import { useMockedUser } from '@/hooks/use-mocked-user';
import { getInitials } from '@/utils/get-initials';
import "./social.css"
export const SocialPostAdd = (props) => {
  const user = useMockedUser();
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Card style={{ borderRadius: 0, boxShadow: 'none', borderLeft: '0.5px solid #F2F4F7', paddingLeft: 60, paddingRight: 0 }}>
      <CardHeader title="Niche" className='head-font' />
      <CardContent style={{ padding: 0 }}>
        <div className='profile-niche'>Clothing</div>
        <div className='profile-niche'>Men Fashion</div>

      </CardContent>
      <CardHeader title="Social media links" className='head-font' />
      <CardContent>
        <List disablePadding>
          <ListItem
            disableGutters
            divider
          >
            <ListItemAvatar className='social-icons'>
              <div className='facebook-icon'></div>
            </ListItemAvatar>
            <ListItemText
              primary={(
                <Link
                  // color="text.secondary"
                  sx={{ cursor: 'pointer' }}
                  variant="caption"
                  className='social-list-font'
                >
                  www.facebook.com/xxxxxxx
                </Link>
              )}
            />
          </ListItem>
          <ListItem
            disableGutters
            divider
          >
            <ListItemAvatar className='social-icons'>
              <div className='instagram-icon'></div>
            </ListItemAvatar>
            <ListItemText
              primary={(
                <Link
                  // color="text.secondary"
                  sx={{ cursor: 'pointer' }}
                  variant="caption"
                  className='social-list-font'
                >
                  www.instagram.com/xxxxxxx
                </Link>
              )}
            />
          </ListItem>
          <ListItem
            disableGutters
            divider
          >
            <ListItemAvatar className='social-icons'>
              <div className='tiktok-icon'></div>
            </ListItemAvatar>
            <ListItemText
              primary={(
                <Link
                  // color="text.secondary"
                  sx={{ cursor: 'pointer' }}
                  variant="caption"
                  className='social-list-font'
                >
                  www.tiktok.com/xxxxxxx
                </Link>
              )}
            />
          </ListItem>
          <ListItem
            disableGutters
            divider
          >
            <ListItemAvatar className='social-icons'>
              <div className='youtube-icon'></div>
            </ListItemAvatar>
            <ListItemText
              primary={(
                <Link
                  // color="text.secondary"
                  sx={{ cursor: 'pointer' }}
                  variant="caption"
                  className='social-list-font'
                >
                  www.youtube.com/xxxxxxx
                </Link>
              )}
            />
          </ListItem>
          <ListItem
            disableGutters
            divider
          >
            <ListItemAvatar className='social-icons'>
              <div className='twitter-icon'></div>
            </ListItemAvatar>
            <ListItemText
              primary={(
                <Link
                  // color="text.secondary"
                  sx={{ cursor: 'pointer' }}
                  variant="caption"
                  className='social-list-font'
                >
                  www.twitter.com/xxxxxxx
                </Link>
              )}
            />
          </ListItem>
          <ListItem
            disableGutters
          >
            <ListItemAvatar className='social-icons'>
              <div className='pinterest-icon'></div>
            </ListItemAvatar>
            <ListItemText
              primary={(
                <Link
                  // color="text.secondary"
                  sx={{ cursor: 'pointer' }}
                  variant="caption"
                  className='social-list-font'
                >
                  www.pinterest.com/xxxxxxx
                </Link>
              )}
            />
          </ListItem>
        </List>

      </CardContent>
    </Card>

  );
};
