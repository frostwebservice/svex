import Attachment01Icon from '@untitled-ui/icons-react/build/esm/Attachment01';
import FaceSmileIcon from '@untitled-ui/icons-react/build/esm/FaceSmile';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import Link01Icon from '@untitled-ui/icons-react/build/esm/Link01';
import BookOpen01Icon from '@untitled-ui/icons-react/build/esm/BookOpen01';
import Briefcase01Icon from '@untitled-ui/icons-react/build/esm/Briefcase01';
import Home02Icon from '@untitled-ui/icons-react/build/esm/Home02';
import Mail01Icon from '@untitled-ui/icons-react/build/esm/Mail01';
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
    <Card>
      <CardHeader title="Niche" />
      <CardContent>
        <div className='profile-niche'>Clothing</div>
        <div className='profile-niche'>Men Fashion</div>

      </CardContent>
      <CardHeader title="Social Media Links" />
      <CardContent>
        <List disablePadding>
          <ListItem
            disableGutters
            divider
          >
            <ListItemAvatar>
              <SvgIcon color="action">
                <BookOpen01Icon />
              </SvgIcon>
            </ListItemAvatar>
            <ListItemText
              primary={(
                <Link
                  color="text.secondary"
                  sx={{ cursor: 'pointer' }}
                  variant="caption"
                >
                  www.facebook.com/xxxxxxx
                </Link>
              )}
            />
          </ListItem>
        </List>

      </CardContent>
    </Card>

  );
};
