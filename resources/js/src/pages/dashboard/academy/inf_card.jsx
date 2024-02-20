import PropTypes from 'prop-types';
import CheckVerified01 from '@untitled-ui/icons-react/build/esm/CheckVerified01';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Link,
  Stack,
  SvgIcon,
  Typography,
  Button,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { paths } from '@/paths';
import { getInitials } from '@/utils/get-initials';
import { CardBottom } from './card-bottom';
import MessageChatSquareIcon from '@untitled-ui/icons-react/build/esm/MessageChatSquare';
import HeartIcon from '@untitled-ui/icons-react/build/esm/Heart';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MailComposer from '@/sections/dashboard/mail/mail-composer';
import { useDispatch } from 'react-redux';
import { getFavs } from '@/actions';
import '@/sections/dashboard/mail/mail.css';
import { toast } from 'react-hot-toast';
const useComposer = () => {
  const initialState = {
    isFullScreen: false,
    isOpen: false,
    message: '',
    subject: '',
    to: '',
    loading: false,
    data: new FormData()
  };
  const dispatch = useDispatch();

  const [state, setState] = useState(initialState);

  const handleOpen = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      isOpen: true
    }));
  }, []);

  const handleClose = useCallback(() => {
    setState(initialState);
  }, []);

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
  const handleAttach = useCallback((data) => {
    setState((prevState) => ({
      ...prevState,
      data: data
    }));
  }, []);
  const handleMessageChange = useCallback((message) => {
    setState((prevState) => ({
      ...prevState,
      message
    }));
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
  const handleSubmit = () => {
    setState((prevState) => ({
      ...prevState,
      loading: true
    }));
    state.data.append('to', state.to);
    state.data.append('subject', state.subject);
    state.data.append('message', state.message);
    state.data.append('email', JSON.parse(localStorage.getItem('email')));
    axios
      .post('/api/send_mail', state.data, {})
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          subject: '',
          to: '',
          message: '',
          isOpen: false,
          data: new FormData()
        }));
        toast.success('Message Sent Successfuly.');

        dispatch(
          thunks.getEmails({
            label: useSearchParams().get('label') || 'inbox',
            email: JSON.parse(localStorage.getItem('email'))
          })
        );
      })
      .catch((e) => {});
  };
  return {
    ...state,
    handleClose,
    handleMaximize,
    handleMessageChange,
    handleMinimize,
    handleSubmit,
    handleOpen,
    handleAttach,
    handleSubjectChange,
    handleToChange
  };
};
export const InfCard = (props) => {
  const { influencer, currentTab, ...other } = props;
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(influencer.liked == 1 ? true : false);
  const composer = useComposer();
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLiked(influencer.liked == 1 ? true : false);
  }, [influencer]);
  const handleLike = () => {
    setIsLiked(true);
    let value = {
      email: JSON.parse(localStorage.getItem('email')),
      tab: currentTab,
      inf_id: influencer.id,
      liked: '1'
    };
    axios.post('/api/handle_like', value).then((response) => {
      if (response.data.status === 200) {
      }
    });
  };
  const handleUnlike = () => {
    setIsLiked(false);
    let value = {
      email: JSON.parse(localStorage.getItem('email')),
      tab: currentTab,
      inf_id: influencer.id,
      liked: '0'
    };
    axios.post('/api/handle_like', value).then((response) => {
      if (response.data.status === 200) {
        dispatch(getFavs({ email: JSON.parse(localStorage.getItem('email')) }));
      }
    });
  };
  const show_percentage = (value) => {
    return Number(value) <= 1
      ? Number(value).toFixed(2) + '%'
      : formatNumber(Number(value).toFixed(1)).replace('.0', '') + '%';
  };
  const ranges = [
    { divider: 1e18, suffix: 'E' },
    { divider: 1e15, suffix: 'P' },
    { divider: 1e12, suffix: 'T' },
    { divider: 1e9, suffix: 'G' },
    { divider: 1e6, suffix: 'M' },
    { divider: 1e3, suffix: 'K' }
  ];
  const formatNumber = (n) => {
    for (var i = 0; i < ranges.length; i++) {
      if (n >= ranges[i].divider) {
        return (
          Number(n / ranges[i].divider)
            .toFixed(1)
            .toString()
            .replace('.0', '') + ranges[i].suffix
        );
      }
    }
    return n.toString();
  };
  return (
    <>
      <Card {...other} style={{ marginTop: 30, marginBottom: 30 }}>
        <CardContent>
          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            sx={{
              px: 2,
              py: 1.5
            }}
          >
            <Stack
              alignItems="flex-start"
              spacing={2}
              direction={{
                xs: 'column',
                sm: 'row'
              }}
            >
              <Avatar
                component={RouterLink}
                href={'/profile/inf/' + influencer.username}
                target="_blank"
                src={
                  influencer.profile_pic_url_hd
                    ? influencer.profile_pic_url_hd
                    : `https://ui-avatars.com/api/?name=${
                        influencer.full_name ? influencer.full_name : ''
                      }&background=2970FF&color=fff&rounded=true`
                }
                sx={{ width: 74, height: 74 }}
                // variant="rounded"
              >
                {getInitials(influencer.full_name)}
              </Avatar>
              <div>
                <Link
                  color="#2970FF"
                  component={RouterLink}
                  href={'/profile/inf/' + influencer.username}
                  target="_blank"
                  variant="h6"
                  style={{ fontSize: 18 }}
                >
                  {influencer.username}
                </Link>
                {(influencer.verified && influencer.verified == 1) ||
                (influencer.verified && influencer.verified == 1) ? (
                  <div className="verified-image"></div>
                ) : (
                  ''
                )}

                <Typography
                  sx={{ color: 'text.primary' }}
                  style={{ fontSize: 14 }}
                >
                  {influencer.full_name}
                </Typography>
                <Typography
                  color="text.secondary"
                  className="font-inter location-pointer"
                  variant="overline"
                  style={{ fontSize: 12, marginTop: 17 }}
                ></Typography>
                <Typography
                  color="primary"
                  variant="overline"
                  // variant="subtitle2"
                  style={{ fontSize: 10 }}
                >
                  {influencer.city + ', ' + influencer.Country}
                </Typography>
              </div>
              <div className="custom-reach">
                <Grid container>
                  <Grid
                    item
                    sx={{
                      color: '#2970FF',
                      fontSize: '11px',
                      fontWeight: 300,
                      pl: 1,
                      pr: 1,
                      pt: 0.5,
                      pb: 0.5
                    }}
                  >
                    <div>Reach</div>
                    <div style={{ fontSize: '16px', fontWeight: 700 }}>
                      {formatNumber(
                        influencer.follower_count
                          ? influencer.follower_count
                          : influencer.subscribers
                      )}
                    </div>
                  </Grid>
                  <Grid
                    item
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '0 auto'
                    }}
                  >
                    <div className="reach-arrow"></div>
                  </Grid>
                </Grid>
              </div>
            </Stack>

            <Stack
              alignItems="center"
              direction="row"
              className="right-panel"
              spacing={2}
            >
              {isLiked ? (
                <>
                  <Button
                    onClick={handleUnlike}
                    className="right-btn"
                    startIcon={
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
                    }
                  ></Button>

                  <Button
                    component={RouterLink}
                    href={'/profile/inf/' + influencer.username}
                    sx={{ color: 'text.primary' }}
                    size="small"
                    target="_blank"
                    className="right-btn"
                    startIcon={
                      <>
                        <img src="/assets/icons/icon-profile.svg" />
                      </>
                    }
                    variant="outlined"
                  >
                    View Profile
                  </Button>
                  <Button
                    onClick={() => {
                      composer.handleToChange(influencer.public_email);
                      composer.handleOpen();
                    }}
                    size="small"
                    className="right-btn"
                    startIcon={
                      <SvgIcon>
                        <MessageChatSquareIcon />
                      </SvgIcon>
                    }
                    variant="contained"
                  >
                    Send Message
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={handleLike}
                    className="right-btn"
                    startIcon={
                      <SvgIcon sx={{ transform: 'scale(1.8)' }}>
                        <HeartIcon />
                      </SvgIcon>
                    }
                  ></Button>
                  <Button
                    // onClick={handleInvite}
                    component={RouterLink}
                    href={'/profile/inf/' + influencer.username}
                    size="small"
                    target="_blank"
                    className="right-btn"
                    startIcon={
                      <>
                        <img src="/assets/icons/icon-profile.svg" />
                      </>
                    }
                    variant="outlined"
                  >
                    View Profile
                  </Button>
                  <Button
                    onClick={() => {
                      composer.handleToChange(influencer.public_email);
                      composer.handleOpen();
                    }}
                    size="small"
                    className="right-btn"
                    startIcon={
                      <SvgIcon>
                        <MessageChatSquareIcon />
                      </SvgIcon>
                    }
                    variant="contained"
                  >
                    Send Message
                  </Button>
                </>
              )}
            </Stack>
          </Stack>
          <Box sx={{ mt: 2 }}>
            <CardBottom
              engagement={show_percentage(influencer.engagement_rate)}
              followers={formatNumber(
                influencer.follower_count
                  ? influencer.follower_count
                  : influencer.subscribers
              )}
              category={influencer.category_niche}
            />
          </Box>
        </CardContent>
      </Card>

      <MailComposer
        maximize={composer.isFullScreen}
        message={composer.message}
        onClose={composer.handleClose}
        // onMaximize={composer.handleMaximize}
        onMessageChange={composer.handleMessageChange}
        onMinimize={composer.handleMinimize}
        onSubjectChange={composer.handleSubjectChange}
        onSubmit={composer.handleSubmit}
        onAttach={composer.handleAttach}
        onToChange={composer.handleToChange}
        open={composer.isOpen}
        subject={composer.subject}
        loading={composer.loading}
        to={composer.to}
        avatar={influencer.profile_pic_url_hd}
      />
    </>
  );
};

InfCard.propTypes = {
  influencer: PropTypes.object.isRequired
};
