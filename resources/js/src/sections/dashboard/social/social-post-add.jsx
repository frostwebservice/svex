
import {
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  CardContent,
  useMediaQuery
} from '@mui/material';
import { useMockedUser } from '@/hooks/use-mocked-user';
import { getInitials } from '@/utils/get-initials';
import "./social.css"
import { connect } from 'react-redux';
const SocialPostAdd = (props) => {
  const user = useMockedUser();
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const { brandinfo } = props;
  const renderNiches = () => {
    console.log(brandinfo);
    if (!brandinfo.niches) return;
    const nicheView = brandinfo.niches.map((niche) =>
      <div className='profile-niche' key={niche.id}>{niche.niche}</div>
    )
    return nicheView
  }
  return (
    <Card style={{ borderRadius: 0, boxShadow: 'none', borderLeft: '0.5px solid #F2F4F7', paddingLeft: 60, paddingRight: 0 }}>
      <CardHeader title="Niche" className='head-font' />
      <CardContent style={{ padding: 0 }}>
        {renderNiches()}
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
                  {brandinfo ? brandinfo.facebook : ''}
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
                  {brandinfo ? brandinfo.instagram : ''}
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
                  {brandinfo ? brandinfo.tiktok : ''}
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
                  {brandinfo ? brandinfo.youtube : ''}
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
                  {brandinfo ? brandinfo.twitter : ''}
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
                  {brandinfo ? brandinfo.pinterest : ''}

                </Link>
              )}
            />
          </ListItem>
        </List>

      </CardContent>
    </Card >

  );
};
const mapStateToProps = state => ({
  brandinfo: state.profile.brandinfo
});
export default connect(mapStateToProps)(SocialPostAdd);