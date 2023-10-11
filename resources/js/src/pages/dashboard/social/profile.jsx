import { useCallback, useEffect, useState } from 'react';
import MessageChatSquareIcon from '@untitled-ui/icons-react/build/esm/MessageChatSquare';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import UserPlus02Icon from '@untitled-ui/icons-react/build/esm/UserPlus02';
import HeartIcon from '@untitled-ui/icons-react/build/esm/Heart';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import { useDialog } from '@/hooks/use-dialog';
import { FileUploader } from '@/sections/dashboard/file-manager/file-uploader';

import { useSettings } from '@/hooks/use-settings';
import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  SvgIcon,
  Tab,
  Tabs,
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
import { SocialConnections } from '@/sections/dashboard/social/social-connections';
import { SocialTimeline } from '@/sections/dashboard/social/social-timeline';
import "./profile.css";
import { getBrandProfile, getUserProfile } from '@/actions';
import { useDispatch, connect } from "react-redux";

const tabs = [
  { label: 'Overview', value: 'timeline' },
  { label: 'Jobs Posted', value: 'connections' }
];

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
  const uploadDialog = useDialog();
  const settings = useSettings();

  const [kind, setKind] = useState("cover");
  // console.log(props);
  const { brandinfo, userinfo } = props;
  const profile = useProfile();
  const [currentTab, setCurrentTab] = useState('timeline');
  const [status, setStatus] = useState('not_connected');
  const posts = usePosts();
  const [connectionsQuery, setConnectionsQuery] = useState('');
  const connections = useConnections(connectionsQuery);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getBrandProfile({ brandID: window.location.pathname.split("/")[2].split("-")[2] }));

  }, [dispatch])

  const [key, setKey] = useState("")
  const onUpgrade = () => {
    dispatch(getBrandProfile({ brandID: window.location.pathname.split("/")[2].split("-")[2] }));
    dispatch(getUserProfile({ email: JSON.parse(localStorage.getItem('email')) }));

    setKey(key + "a")
  }
  const handleLike = useCallback(() => {
    setIsLiked(true);
    // setLikes((prevLikes) => prevLikes + 1);
  }, []);

  const handleUnlike = useCallback(() => {
    setIsLiked(false);
    // setLikes((prevLikes) => prevLikes - 1);
  }, []);
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
  const avatarClick = () => {
    setKind("avatar")
    uploadDialog.handleOpen()
  }
  const showConnect = status === 'not_connected';
  const showPending = status === 'pending';

  return (
    <>
      <Seo title="Dashboard: Social Profile" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,

        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'} >

          <div>
            <Box
              key={key}
              style={{ backgroundImage: `url(${brandinfo.cover_photo ? brandinfo.cover_photo : profile.cover})` }}
              sx={{
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: 1,
                height: 421,
                position: 'relative',
                // '&:hover': {
                //   '& button': {
                //     visibility: 'visible'
                //   }
                // }
              }}
            >
              {userinfo && brandinfo && userinfo.id == brandinfo.id ? (
                <Button
                  onClick={() => {
                    setKind("cover")
                    uploadDialog.handleOpen()
                  }}

                  startIcon={(
                    <SvgIcon>
                      <Image01Icon />
                    </SvgIcon>
                  )}
                  sx={{
                    backgroundColor: blueGrey[900],
                    bottom: {
                      lg: 24,
                      xs: 'auto'
                    },
                    color: 'common.white',
                    position: 'absolute',
                    right: 24,
                    top: {
                      lg: 'auto',
                      xs: 24
                    },
                    // visibility: 'hidden',
                    '&:hover': {
                      backgroundColor: blueGrey[900]
                    }
                  }}
                  variant="contained"
                >
                  Change Cover
                </Button>
              ) : ('')}

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
                <Avatar
                  onClick={avatarClick}
                  src={brandinfo.avatar ? brandinfo.avatar : `https://ui-avatars.com/api/?name=${brandinfo.companyname}&background=2970FF&color=fff&rounded=true`}
                  sx={{
                    height: 140,
                    width: 140
                  }}
                  style={{ cursor: 'pointer' }}
                >
                </Avatar>
                <div className='brand-info'>
                  <Typography
                    color="primary"
                    variant="h6"
                    style={{ fontSize: 22 }}
                  >
                    {brandinfo ? brandinfo.fullname : ''}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    className='font-inter'
                    variant="subtitle2"
                    style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}
                  >
                    Established since {brandinfo ? brandinfo.companyfounded : ''}
                  </Typography>
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
                    {brandinfo ? brandinfo.companylocation : ''}
                  </Typography>

                </div>
              </Stack>
              <Box sx={{ flexGrow: 1 }} />
              {(userinfo && brandinfo && userinfo.id === brandinfo.id) ? (
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                  className='button-bar'
                  sx={{
                    display: {
                      md: 'block',
                      // xs: 'none'
                    }
                  }}
                >
                  <Button
                    // component={RouterLink}
                    // href={paths.dashboard.chat}
                    size="small"
                    className="social-btn"
                    startIcon={(
                      <SvgIcon>
                        <Edit02Icon />
                      </SvgIcon>
                    )}
                    onClick={() => { navigate('/profile/edit/' + userinfo.id) }}
                    variant="contained"
                  >
                    Edit Profile
                  </Button>
                </Stack>
              ) : (
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                  className='button-bar'
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
                          size="small"
                          className='fav-btn'
                          startIcon={(
                            <SvgIcon
                              sx={{
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
                          variant="outlined"
                        >
                          Favorite
                        </Button>
                        <Button
                          component={RouterLink}
                          href={paths.dashboard.chat}
                          size="small"
                          className="social-btn"
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
                          size="small"
                          className='fav-btn'
                          startIcon={(
                            <SvgIcon>
                              <HeartIcon />
                            </SvgIcon>
                          )}
                          variant="outlined"
                        >
                          Favorite
                        </Button>
                        <Button
                          component={RouterLink}
                          href={paths.dashboard.chat}
                          size="small"
                          className="social-btn"
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
              )}

            </Stack>
          </div>
          <div className='quick-link-bar'>
            <div className='right-quick'>
              <div className='quick-font'>Quick links</div>
              <div className='quick-links'>
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
            {currentTab === 'timeline' && (
              <SocialTimeline
                posts={posts}
                profile={profile}
              />
            )}
            {currentTab === 'connections' && (
              <SocialConnections
                connections={connections}
                onQueryChange={handleConnectionsQueryChange}
                query={connectionsQuery}
              />
            )}
          </Box>
        </Container >
      </Box >
      <FileUploader
        onClose={uploadDialog.handleClose}
        open={uploadDialog.open}
        onUpgrade={onUpgrade}
        kind={kind}
      />
    </>
  );
};
const mapStateToProps = state => ({
  brandinfo: state.profile.brandinfo,
  userinfo: state.profile.userinfo,
});

export default connect(mapStateToProps)(Page);

