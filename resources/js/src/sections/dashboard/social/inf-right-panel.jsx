
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
const InfRightPanel = (props) => {
    const user = useMockedUser();
    const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const { socialinfo } = props;

    return (
        <Card style={{ borderRadius: 0, boxShadow: 'none', borderLeft: '0.5px solid #F2F4F7', paddingLeft: 60, paddingRight: 0 }}>
            <CardHeader title="Niche" className='head-font' />
            <CardContent style={{ padding: 0 }}>
                {
                    (socialinfo && socialinfo.category_niche) ? (< div className='profile-niche' key={socialinfo.category_niche} > {socialinfo.category_niche}</div >) : ("")

                }
            </CardContent>
            <CardHeader title="Social media links" className='head-font' />
            <CardContent>
                <List disablePadding>
                    {socialinfo ? (
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
                                        color="text.primary"
                                        // color="text.secondary"
                                        component="a"
                                        target='_blank'
                                        sx={{ cursor: 'pointer' }}
                                        variant="caption"
                                        className='social-list-font'
                                        href={"https://" + 'www.facebook.com/' + socialinfo.username}
                                    >
                                        {'www.facebook.com/' + socialinfo.username}
                                    </Link>
                                )}
                            />
                        </ListItem>
                    ) : ''}
                    {socialinfo ? (
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
                                        color="text.primary"
                                        // color="text.secondary"
                                        component="a"
                                        target='_blank'
                                        sx={{ cursor: 'pointer' }}
                                        variant="caption"
                                        className='social-list-font'
                                        href={"https://" + 'www.instagram.com/' + socialinfo.username}
                                    >
                                        {'www.instagram.com/' + socialinfo.username}
                                    </Link>
                                )}
                            />
                        </ListItem>
                    ) : ''}
                    {socialinfo ? (
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
                                        color="text.primary"
                                        // color="text.secondary"
                                        component="a"
                                        target='_blank'
                                        sx={{ cursor: 'pointer' }}
                                        variant="caption"
                                        className='social-list-font'
                                        href={"https://" + 'www.tiktok.com/' + socialinfo.username}
                                    >
                                        {'www.tiktok.com/' + socialinfo.username}
                                    </Link>
                                )}
                            />
                        </ListItem>
                    ) : ''}
                    {socialinfo ? (
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
                                        color="text.primary"
                                        // color="text.secondary"
                                        component="a"
                                        target='_blank'
                                        sx={{ cursor: 'pointer' }}
                                        variant="caption"
                                        className='social-list-font'
                                        href={"https://" + 'www.youtube.com/@' + socialinfo.username}
                                    >
                                        {'www.youtube.com/@' + socialinfo.username}
                                    </Link>
                                )}
                            />
                        </ListItem>
                    ) : ''}
                    {socialinfo ? (
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
                                        color="text.primary"
                                        // color="text.secondary"
                                        component="a"
                                        target='_blank'
                                        sx={{ cursor: 'pointer' }}
                                        variant="caption"
                                        className='social-list-font'
                                        href={"https://" + 'www.twitter.com/' + socialinfo.username}
                                    >
                                        {'www.twitter.com/' + socialinfo.username}
                                    </Link>
                                )}
                            />
                        </ListItem>
                    ) : ''}
                    {socialinfo ? (
                        <ListItem
                            disableGutters
                            divider
                        >
                            <ListItemAvatar className='social-icons'>
                                <div className='pinterest-icon'></div>
                            </ListItemAvatar>
                            <ListItemText
                                primary={(
                                    <Link
                                        color="text.primary"
                                        // color="text.secondary"
                                        component="a"
                                        target='_blank'
                                        sx={{ cursor: 'pointer' }}
                                        variant="caption"
                                        className='social-list-font'
                                        href={"https://" + 'www.pinterest.com/' + socialinfo.username}
                                    >
                                        {'www.pinterest.com/' + socialinfo.username}
                                    </Link>
                                )}
                            />
                        </ListItem>
                    ) : ''}
                </List>

            </CardContent>
        </Card >

    );
};
const mapStateToProps = state => ({
    socialinfo: state.profile.socialinfo
});
export default connect(mapStateToProps)(InfRightPanel);