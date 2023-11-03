
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
    const { socialinfo, statkind, total, currentTab } = props;
    let tmp = total == "total" ? socialinfo[currentTab] : socialinfo
    const renderNiche = () => {
        let tmpStatKind = statkind

        if (total == "total") tmpStatKind = currentTab
        if (tmpStatKind == "instagram" || tmpStatKind == "tiktok" || tmpStatKind == "twitter" || tmpStatKind == "pinterest") {
            return (
                (tmp && tmp.category_niche) ? (< div className='profile-niche' key={tmp.category_niche} > {tmp.category_niche}</div >) : (<></>)
            )
        }
        else if (tmpStatKind == "youtube") {
            let niches = (tmp && tmp.category_niche) ? tmp.category_niche : ""
            niches = niches.replace("[", "").replace("]", "")
            niches = niches.split(",")
            const renderingNiches = niches.map(niche =>
                <div className='profile-niche' key={niche} > {niche.replace(/"/g, '')}</div >
            )
            return renderingNiches
        }
    }
    return (
        <Card className="custom-right-card">
            <CardHeader title="Niche" className='head-font' />
            <CardContent style={{ padding: 0 }}>
                {renderNiche()}
            </CardContent>
            <CardHeader title="Social media links" className='head-font' />
            <CardContent>
                <List disablePadding>
                    {tmp ? (
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
                                        href={"https://" + 'www.facebook.com/' + tmp.username}
                                    >
                                        {'www.facebook.com/' + tmp.username}
                                    </Link>
                                )}
                            />
                        </ListItem>
                    ) : ''}
                    {tmp ? (
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
                                        href={"https://" + 'www.instagram.com/' + tmp.username}
                                    >
                                        {'www.instagram.com/' + tmp.username}
                                    </Link>
                                )}
                            />
                        </ListItem>
                    ) : ''}
                    {tmp ? (
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
                                        href={"https://" + 'www.tiktok.com/' + tmp.username}
                                    >
                                        {'www.tiktok.com/' + tmp.username}
                                    </Link>
                                )}
                            />
                        </ListItem>
                    ) : ''}
                    {tmp ? (
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
                                        href={"https://" + 'www.youtube.com/@' + tmp.username}
                                    >
                                        {'www.youtube.com/@' + tmp.username}
                                    </Link>
                                )}
                            />
                        </ListItem>
                    ) : ''}
                    {tmp ? (
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
                                        href={"https://" + 'www.twitter.com/' + tmp.username}
                                    >
                                        {'www.twitter.com/' + tmp.username}
                                    </Link>
                                )}
                            />
                        </ListItem>
                    ) : ''}
                    {tmp ? (
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
                                        href={"https://" + 'www.pinterest.com/' + tmp.username}
                                    >
                                        {'www.pinterest.com/' + tmp.username}
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