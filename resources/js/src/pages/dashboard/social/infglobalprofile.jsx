import { useCallback, useEffect, useState } from 'react';
import MessageChatSquareIcon from '@untitled-ui/icons-react/build/esm/MessageChatSquare';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import UserPlus02Icon from '@untitled-ui/icons-react/build/esm/UserPlus02';
import HeartIcon from '@untitled-ui/icons-react/build/esm/Heart';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import { useNavigate } from 'react-router-dom';
import {
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    ButtonBase,
    IconButton,
    Stack,
    SvgIcon,
    Tab,
    Tabs,
    Grid,
    Tooltip,
    Typography
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { socialApi } from '@/api/social';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { useMounted } from '@/hooks/use-mounted';
import { usePageView } from '@/hooks/use-page-view';
import { paths } from '@/paths';
import InfOverview from '@/sections/dashboard/social/inf-overview';
import "./profile.css";
import { getSocialProfile } from '@/actions';
import { useDispatch, connect } from "react-redux";
import { useSettings } from '@/hooks/use-settings';
import { MailComposer } from '@/sections/dashboard/mail/mail-composer';
const useComposer = () => {
    const initialState = {
        isFullScreen: false,
        isOpen: false,
        message: '',
        subject: '',
        toemail: '',
        to: ''
    };

    const [state, setState] = useState(initialState);

    const handleOpen = () => {
        setState((prevState) => ({
            ...prevState,
            isOpen: true
        }));

    };

    const handleClose = useCallback(() => {
        setState(initialState);
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);

    const handleMaximize = useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            isFullScreen: true
        }));
    }, []);

    const handleMinimize = useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            isFullScreen: false
        }));
    }, []);

    const handleMessageChange = useCallback((message) => {
        // setState((prevState) => ({
        //   ...prevState,
        //   message
        // }));
    }, []);

    const handleSubjectChange = useCallback((subject) => {
        setState((prevState) => ({
            ...prevState,
            subject
        }));
    }, []);

    const handleToChange = useCallback((to) => {
        setState((prevState) => ({
            ...prevState,
            to
        }));
    }, []);

    return {
        ...state,
        handleClose,
        handleMaximize,
        handleMessageChange,
        handleMinimize,
        handleOpen,
        handleSubjectChange,
        handleToChange
    };
};
const tabs = [
    { label: 'Overview', value: 'infoverview' }
];
const ranges = [
    { divider: 1e18, suffix: 'E' },
    { divider: 1e15, suffix: 'P' },
    { divider: 1e12, suffix: 'T' },
    { divider: 1e9, suffix: 'G' },
    { divider: 1e6, suffix: 'M' },
    { divider: 1e3, suffix: 'K' }
];
const formatNumber = n => {
    for (var i = 0; i < ranges.length; i++) {
        if (n >= ranges[i].divider) {
            return Number(n / ranges[i].divider).toFixed(1).toString().replace(".0", "") + ranges[i].suffix;
        }
    }
    return n.toString();
}
const useProfile = () => {
    const isMounted = useMounted();
    const [profile, setProfile] = useState(null);

    const handleProfileGet = useCallback(async () => {
        try {
            const response = await socialApi.getProfile();

            if (isMounted()) {
                setProfile(response);
            }
        } catch (err) {
            console.error(err);
        }
    }, [isMounted]);

    useEffect(() => {
        handleProfileGet();

    }, []);

    return profile;
};

const usePosts = () => {
    const isMounted = useMounted();
    const [posts, setPosts] = useState([]);
    const handlePostsGet = useCallback(async () => {
        try {
            const response = await socialApi.getPosts();

            if (isMounted()) {
                setPosts(response);
            }
        } catch (err) {
            console.error(err);
        }
    }, [isMounted]);

    useEffect(() => {
        handlePostsGet();
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);

    return posts;
};

const useConnections = (search = '') => {
    const [connections, setConnections] = useState([]);
    const isMounted = useMounted();

    const handleConnectionsGet = useCallback(async () => {
        const response = await socialApi.getConnections();

        if (isMounted()) {
            setConnections(response);
        }
    }, [isMounted]);

    useEffect(() => {
        handleConnectionsGet();
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [search]);

    return connections.filter((connection) => {
        return connection.name?.toLowerCase().includes(search);
    });
};

const Page = (props) => {
    const settings = useSettings();
    const email = JSON.parse(localStorage.getItem('email'))
    // console.log(props);
    const { socialinfo, userinfo } = props;
    const profile = useProfile();
    const [currentTab, setCurrentTab] = useState('infoverview');
    const [status, setStatus] = useState('not_connected');
    const posts = usePosts();
    const [connectionsQuery, setConnectionsQuery] = useState('');
    const connections = useConnections(connectionsQuery);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedStat, SetSelectedStat] = useState(socialinfo["basic"])
    let tmp = socialinfo[selectedStat]
    const composer = useComposer();
    const [isLiked, setIsLiked] = useState(tmp && tmp.liked == "1" ? true : false);
    const changeStat = (str) => {
        SetSelectedStat(str)
    }
    useEffect(() => {
        dispatch(getSocialProfile({ email: email, infname: window.location.pathname.split("/")[3], socialtype: "total" }));

    }, [dispatch])
    useEffect(() => {
        setIsLiked(tmp && tmp.liked == "1" ? true : false)

    }, [tmp])
    const handleInvite = useCallback(() => {

    }, []);

    const handleLike = () => {
        setIsLiked(true);
        let value = {
            email: JSON.parse(localStorage.getItem('email')),
            tab: selectedStat,
            inf_id: tmp && tmp.id ? tmp.id : "",
            liked: "1"
        }
        axios
            .post("/api/handle_like", value)
            .then((response) => {
                if (response.data.status === 200) {

                }
            });
    };

    const handleUnlike = () => {
        setIsLiked(false);
        let value = {
            email: JSON.parse(localStorage.getItem('email')),
            tab: selectedStat,
            inf_id: tmp && tmp.id ? tmp.id : "",
            liked: "0"
        }
        axios
            .post("/api/handle_like", value)
            .then((response) => {
                if (response.data.status === 200) {

                }
            });
    };

    usePageView();

    const handleConnectionAdd = useCallback(() => {
        setStatus('pending');
    }, []);

    const handleConnectionRemove = useCallback(() => {
        setStatus('not_connected');
    }, []);

    const handleTabsChange = useCallback((event, value) => {
        setCurrentTab(value);
    }, []);

    const handleConnectionsQueryChange = useCallback((event) => {
        setConnectionsQuery(event.target.value);
    }, []);

    if (!profile) {
        return null;
    }

    const showConnect = status === 'not_connected';
    const showPending = status === 'pending';

    const showReach = () => {
        let social_type = selectedStat
        let total_number = (socialinfo && socialinfo["instagram"] ? socialinfo["instagram"].follower_count : 0)
            + (socialinfo && socialinfo["pinterest"] ? socialinfo["pinterest"].follower_count : 0)
            + (socialinfo && socialinfo["tiktok"] ? socialinfo["tiktok"].follower_count : 0)
            + (socialinfo && socialinfo["twitter"] ? socialinfo["twitter"].follower_count : 0)
            + (socialinfo && socialinfo["youtube"] ? socialinfo["youtube"].follower_count : 0)
        return formatNumber(total_number)


    }
    const showTooltipReach = () => {
        let txt = ""
        txt += "Instagram followers: " + (socialinfo && socialinfo["instagram"] ? formatNumber(socialinfo["instagram"].follower_count) : 0) + '\n'
            + "Tiktok followers: " + (socialinfo && socialinfo["tiktok"] ? formatNumber(socialinfo["tiktok"].follower_count) : 0) + '\n'
            + "Youtube followers: " + (socialinfo && socialinfo["youtube"] ? formatNumber(socialinfo["youtube"].follower_count) : 0) + '\n'
            + "Twitter followers: " + (socialinfo && socialinfo["twitter"] ? formatNumber(socialinfo["twitter"].follower_count) : 0) + '\n'
            + "Pinterest followers: " + (socialinfo && socialinfo["pinterest"] ? formatNumber(socialinfo["pinterest"].follower_count) : 0) + '\n'
        return txt
    }
    const showExternalUrl = () => {

        if (selectedStat == "tiktok") {
            if (tmp && tmp.external_url == "-") return ''
            return tmp && tmp.external_url ? tmp.external_url : ''
        }
        else {
            return tmp && tmp.external_url ? tmp.external_url : ''
        }
    }

    return (
        <>
            <Seo title="Dashboard: Social Profile" />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth={settings.stretch ? false : 'xl'} >
                    <div>
                        <Box
                            style={{ backgroundImage: `url(${profile.cover})` }}
                            sx={{
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                borderRadius: 1,
                                height: 421,
                                position: 'relative',
                                '&:hover': {
                                    '& button': {
                                        visibility: 'visible'
                                    }
                                }
                            }}
                        >

                        </Box>
                        <Stack
                            alignItems="center"
                            direction="row"
                            className="custom-parent"
                            spacing={2}
                            sx={{ mt: 4 }}
                        >
                            <Stack
                                alignItems="center"
                                direction="row"
                                className="custom-avatar"
                                spacing={2}
                            >
                                <Box
                                    component={ButtonBase}
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        borderWidth: 2,
                                        borderStyle: 'solid',
                                        borderColor: 'divider',
                                        height: 140,
                                        width: 140,
                                        borderRadius: '50%'
                                    }}
                                >
                                    <Avatar
                                        src={tmp && tmp.profile_pic_url_hd ? tmp.profile_pic_url_hd : `https://ui-avatars.com/api/?name=${tmp && tmp.full_name ? tmp.full_name : ""}&background=2970FF&color=fff&rounded=true`}
                                        sx={{
                                            height: 130,
                                            width: 130
                                        }}
                                    />
                                </Box>
                                <div className='brand-info'>
                                    <Grid container>
                                        <Grid item sm={7} xs={12}>
                                            <Typography
                                                color="primary"
                                                variant="h6"
                                                style={{ fontSize: 22, wordWrap: 'break-word' }}
                                            >
                                                {tmp ? tmp.username : ''}
                                            </Typography>
                                            <Typography
                                                color="text.secondary"
                                                className='font-inter'
                                                variant="subtitle2"
                                                style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}
                                            >
                                                {tmp ? tmp.full_name : ''}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={5} xs={12}>
                                            <Tooltip title={
                                                <div style={{ whiteSpace: 'pre-line' }}>{showTooltipReach()}</div>

                                            }>
                                                <div className='custom-reach'>
                                                    <Grid container>
                                                        <Grid item sx={{ color: '#2970FF', fontSize: '11px', fontWeight: 300, pl: 1, pr: 1, pt: 0.5, pb: 0.5 }}>
                                                            <div>Reach</div>
                                                            <div style={{ fontSize: '16px', fontWeight: 700 }}>
                                                                {showReach()}
                                                            </div>
                                                        </Grid>
                                                        <Grid item style={{ display: 'flex', alignItems: 'center', margin: '0 auto' }}>
                                                            <div className='reach-arrow'></div>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>

                                    <Typography
                                        color="text.secondary"
                                        className='font-inter location-pointer'
                                        variant="overline"
                                        style={{ fontSize: 12, marginTop: 17 }}
                                    >

                                    </Typography>
                                    <Typography
                                        color="primary"
                                        variant="overline"
                                        // variant="subtitle2"
                                        className='font-inter'
                                        style={{ fontSize: 13 }}
                                    >
                                        {tmp ? tmp.city + ", " + tmp.Country : ''}
                                    </Typography>

                                </div>
                            </Stack>
                            <Box sx={{ flexGrow: 1 }} />

                            <Stack
                                alignItems="center"
                                direction="row"
                                spacing={2}
                                className='inf-button-bar'
                                sx={{
                                    display: {
                                        md: 'block',
                                        // xs: 'none'
                                    }
                                }}
                            >
                                {isLiked
                                    ? (
                                        <>
                                            <Button
                                                onClick={handleUnlike}
                                                className='fav-btn=alone'
                                                startIcon={(
                                                    <SvgIcon
                                                        sx={{
                                                            transform: 'scale(1.8)',
                                                            color: 'error.main',
                                                            '& path': {
                                                                fill: (theme) => theme.palette.error.main,
                                                                fillOpacity: 1
                                                            }
                                                        }}
                                                    >
                                                        <HeartIcon />
                                                    </SvgIcon>
                                                )}
                                            >
                                            </Button>
                                            <Button
                                                // size="small"
                                                className='fav-btn-alone'
                                                // sx={{ ml: 0 }}
                                                startIcon={(
                                                    <img src="/assets/stats/users.png" />

                                                )}
                                            >
                                            </Button>
                                            <Button
                                                onClick={handleInvite}
                                                size="small"
                                                className='fav-btn small-button'
                                                startIcon={(
                                                    <>
                                                        <img src="/assets/icons/invite.svg" />
                                                    </>
                                                )}
                                                variant="outlined"
                                            >
                                                Invite To Project
                                            </Button>
                                            <Button
                                                onClick={composer.handleOpen}

                                                size="small"
                                                className="social-btn small-button"
                                                startIcon={(
                                                    <SvgIcon>
                                                        <MessageChatSquareIcon />
                                                    </SvgIcon>
                                                )}
                                                variant="contained"
                                            >
                                                Send Message
                                            </Button>
                                        </>
                                    )
                                    : (
                                        <>
                                            <Button
                                                onClick={handleLike}

                                                className='fav-btn-alone'
                                                startIcon={(
                                                    <SvgIcon sx={{ transform: 'scale(1.8)' }}>
                                                        <HeartIcon />
                                                    </SvgIcon>
                                                )}
                                            >

                                            </Button>
                                            <Button
                                                // size="small"
                                                className='fav-btn-alone'
                                                startIcon={(
                                                    <img src="/assets/stats/users.png" />
                                                )}
                                            >
                                            </Button>
                                            <Button
                                                onClick={handleInvite}
                                                size="small"
                                                className='fav-btn small-button'
                                                startIcon={(
                                                    <>
                                                        <img src="/assets/icons/invite.svg" />
                                                    </>
                                                )}
                                                variant="outlined"
                                            >
                                                Invite To Project
                                            </Button>
                                            <Button
                                                onClick={composer.handleOpen}

                                                size="small"
                                                className="social-btn small-button"
                                                startIcon={(
                                                    <SvgIcon>
                                                        <MessageChatSquareIcon />
                                                    </SvgIcon>
                                                )}
                                                variant="contained"
                                            >
                                                Send Message
                                            </Button>
                                        </>

                                    )}
                            </Stack>


                        </Stack>
                    </div>
                    <div className='quick-link-bar'>
                        <div className='right-quick'>
                            <div className='quick-font'>Quick links</div>
                            <div className='quick-links'>
                                <a className=' homepage-icon' href={showExternalUrl()} target='_blank'></a>
                                <a className='instagram-icon quick-link' href='https://www.instagram.com' target='_blank'></a>
                                <a className='tiktok-icon quick-link' href='https://www.tiktok.com' target='_blank'></a>
                                <a className='youtube-icon quick-link' href='https://www.youtube.com' target='_blank'></a>
                                <a className='twitter-icon quick-link' href='https://www.twitter.com' target='_blank'></a>
                                <a className='pinterest-icon quick-link' href='https://www.pinterest' target='_blank'></a>
                            </div>
                        </div>

                    </div>
                    <Tabs
                        indicatorColor="primary"
                        onChange={handleTabsChange}
                        scrollButtons="auto"
                        sx={{ mt: 5 }}
                        textColor="primary"
                        value={currentTab}
                        variant="scrollable"
                        className='tab-panel'
                    >
                        {tabs.map((tab) => (
                            <Tab
                                className='social-font'
                                key={tab.value}
                                label={tab.label}
                                value={tab.value}
                            />
                        ))}
                    </Tabs>
                    <Divider />
                    <Box>
                        {currentTab === 'infoverview' && (
                            <InfOverview
                                posts={posts}
                                profile={profile}
                                total="total"
                                changeStat={changeStat}
                            />
                        )}
                    </Box>
                </Container >
            </Box >
            <MailComposer
                maximize={composer.isFullScreen}
                message={composer.message}
                onClose={composer.handleClose}
                onMessageChange={composer.handleMessageChange}
                onMinimize={composer.handleMinimize}
                onSubjectChange={composer.handleSubjectChange}
                onToChange={composer.handleToChange}
                open={composer.isOpen}
                subject={composer.subject}
                to={tmp && tmp.full_name ? tmp.full_name : ""}
                avatar={tmp && tmp.profile_pic_url_hd ? tmp.profile_pic_url_hd : ""}
                toemail={tmp && tmp.public_email ? tmp.public_email : ""}
            />
        </>
    );
};
const mapStateToProps = state => ({
    socialinfo: state.profile.socialinfo,
    userinfo: state.profile.userinfo,
});

export default connect(mapStateToProps)(Page);

