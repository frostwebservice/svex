
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
          {brandinfo ? (brandinfo.facebook ? (
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
                    component="a"
                    target='_blank'
                    color="text.primary"
                    sx={{ cursor: 'pointer' }}
                    variant="caption"
                    className='social-list-font'
                    href={"https://" + (brandinfo ? (brandinfo.facebook.split("/").length > 1 ? brandinfo.facebook : 'www.instagram.com/' + brandinfo.facebook) : '')}
                  >
                    {brandinfo ? (brandinfo.facebook.split("/").length > 1 ? brandinfo.facebook : 'www.instagram.com/' + brandinfo.facebook) : ''}

                  </Link>
                )}
              />
            </ListItem>
          ) : '') : ''}

          {brandinfo ? (brandinfo.instagram ? (
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
                    component="a"
                    target='_blank'
                    color="text.primary"
                    sx={{ cursor: 'pointer' }}
                    variant="caption"
                    href={"https://" + (brandinfo ? (brandinfo.instagram.split("/").length > 1 ? brandinfo.instagram : 'www.instagram.com/' + brandinfo.instagram) : '')}
                    className='social-list-font'
                  >
                    {(brandinfo ? (brandinfo.instagram.split("/").length > 1 ? brandinfo.instagram : 'www.instagram.com/' + brandinfo.instagram) : '')}
                  </Link>
                )}
              />
            </ListItem>
          ) : '') : ''}
          {brandinfo ? (brandinfo.tiktok ? (

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
                    component="a"
                    target='_blank'
                    color="text.primary"
                    sx={{ cursor: 'pointer' }}
                    variant="caption"
                    className='social-list-font'
                    href={"https://" + (brandinfo ? (brandinfo.tiktok.split("/").length > 1 ? brandinfo.tiktok : 'www.instagram.com/' + brandinfo.tiktok) : '')}

                  >
                    {(brandinfo ? (brandinfo.tiktok.split("/").length > 1 ? brandinfo.tiktok : 'www.instagram.com/' + brandinfo.tiktok) : '')}
                  </Link>
                )}
              />
            </ListItem>
          ) : '') : ''}
          {brandinfo ? (brandinfo.youtube ? (

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
                    component="a"
                    target='_blank'
                    color="text.primary"
                    sx={{ cursor: 'pointer' }}
                    variant="caption"
                    className='social-list-font'
                    href={"https://" + (brandinfo ? (brandinfo.youtube.split("/").length > 1 ? brandinfo.youtube : 'www.instagram.com/' + brandinfo.youtube) : '')}

                  >
                    {(brandinfo ? (brandinfo.youtube.split("/").length > 1 ? brandinfo.youtube : 'www.instagram.com/' + brandinfo.youtube) : '')}
                  </Link>
                )}
              />
            </ListItem>
          ) : '') : ''}
          {brandinfo ? (brandinfo.twitter ? (

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
                    component="a"
                    target='_blank'
                    color="text.primary"
                    sx={{ cursor: 'pointer' }}
                    variant="caption"
                    className='social-list-font'
                    href={"https://" + (brandinfo ? (brandinfo.twitter.split("/").length > 1 ? brandinfo.twitter : 'www.instagram.com/' + brandinfo.twitter) : '')}

                  >
                    {(brandinfo ? (brandinfo.twitter.split("/").length > 1 ? brandinfo.twitter : 'www.instagram.com/' + brandinfo.twitter) : '')}
                  </Link>
                )}
              />
            </ListItem>
          ) : '') : ''}
          {brandinfo ? (brandinfo.pinterest ? (

            <ListItem
              disableGutters
            >
              <ListItemAvatar className='social-icons'>
                <div className='pinterest-icon'></div>
              </ListItemAvatar>
              <ListItemText
                primary={(
                  <Link
                    component="a"
                    target='_blank'
                    color="text.primary"
                    sx={{ cursor: 'pointer' }}
                    variant="caption"
                    className='social-list-font'
                    href={"https://" + (brandinfo ? (brandinfo.pinterest.split("/").length > 1 ? brandinfo.pinterest : 'www.instagram.com/' + brandinfo.pinterest) : '')}

                  >
                    {(brandinfo ? (brandinfo.pinterest.split("/").length > 1 ? brandinfo.pinterest : 'www.instagram.com/' + brandinfo.pinterest) : '')}
                  </Link>
                )}
              />
            </ListItem>
          ) : '') : ''}
        </List>

      </CardContent>
    </Card >

  );
};
const mapStateToProps = state => ({
  brandinfo: state.profile.brandinfo
});
export default connect(mapStateToProps)(SocialPostAdd);