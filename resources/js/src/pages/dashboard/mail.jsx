import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Divider, useMediaQuery } from '@mui/material';
import { Seo } from '@/components/seo';
import { usePageView } from '@/hooks/use-page-view';
import { useSearchParams } from '@/hooks/use-search-params';
import MailComposer from '@/sections/dashboard/mail/mail-composer';
import TemplateComposer from '@/sections/dashboard/mail/template-composer';
import { MailThread } from '@/sections/dashboard/mail/mail-thread';
import { MailThreadTemp } from '@/sections/dashboard/mail/template/mail-thread';
import { MailContainer } from '@/sections/dashboard/mail/mail-container';
import { MailList } from '@/sections/dashboard/mail/mail-list';
import { MailListTemp } from '@/sections/dashboard/mail/template/mail-list';
import { MailSidebar } from '@/sections/dashboard/mail/mail-sidebar';
import { useDispatch, useSelector } from '@/store';
import { thunks } from '@/thunks/mail';
import { connect } from 'react-redux';
import { toast } from 'react-hot-toast';
import { getUserProfile } from '@/actions';

const useLabels = () => {
  const dispatch = useDispatch();
  const labels = useSelector((state) => state.mail.labels);

  const handleLabelsGet = useCallback(() => {
    dispatch(thunks.getLabels());
  }, [dispatch]);

  useEffect(
    () => {
      handleLabelsGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return labels;
};

const useComposer = () => {
  const initialState = {
    isFullScreen: false,
    isOpen: false,
    message: '',
    subject: '',
    inlineImgs: [],
    to: '',
    toDisplay: '',
    loading: false,
    data: new FormData()
  };
  const dispatch = useDispatch();

  const [state, setState] = useState(initialState);
  const folder = useSearchParams().get('label') || 'inbox';
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
  const handleInlineImgsChange = useCallback((img) => {
    let inline = state.inlineImgs;
    if (inline.includes(img)) return;
    inline.push(img);
    setState((prevState) => ({
      ...prevState,
      inlineImgs: inline
    }));
  }, []);
  const handleInlineImgsInit = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      inlineImgs: []
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
  const handleDisplayChange = useCallback((toDisplay) => {
    setState((prevState) => ({
      ...prevState,
      toDisplay
    }));
  }, []);
  const handleSubmit = (toValue = '') => {
    setState((prevState) => ({
      ...prevState,
      loading: true
    }));
    if (state.to != '') state.data.append('to', state.to);
    else state.data.append('to', toValue);
    state.data.append('subject', state.subject);
    state.data.append('message', state.message);
    state.data.append('email', JSON.parse(localStorage.getItem('email')));
    state.data.append('inlineImgs', state.inlineImgs);

    axios
      .post('/api/send_mail', state.data, {})
      .then((response) => {
        toast.success('Message Sent Successfuly.');
        dispatch(
          thunks.getEmails({
            label: folder,
            email: JSON.parse(localStorage.getItem('email'))
          })
        );
        dispatch(
          getUserProfile({ email: JSON.parse(localStorage.getItem('email')) })
        );

        setState((prevState) => ({
          ...prevState,
          loading: false,
          subject: '',
          to: '',
          toDisplay: '',
          inlineImgs: [],
          message: '',
          isOpen: false,
          data: new FormData()
        }));
      })
      .catch((e) => {});
  };
  return {
    ...state,
    handleClose,
    handleMaximize,
    handleMessageChange,
    handleMinimize,
    handleInlineImgsChange,
    handleInlineImgsInit,
    handleSubmit,
    handleOpen,
    handleAttach,
    handleSubjectChange,
    handleToChange,
    handleDisplayChange
  };
};
const useTmpComposer = () => {
  const initialState = {
    isFullScreen: false,
    isOpen: false,
    message: '',
    subject: '',
    inlineImgs: [],
    to: '',
    toDisplay: '',
    loading: false,
    data: new FormData()
  };
  const dispatch = useDispatch();

  const [state, setState] = useState(initialState);
  const folder = useSearchParams().get('label') || 'inbox';
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
  const handleInlineImgsChange = useCallback((img) => {
    let inline = state.inlineImgs;
    if (inline.includes(img)) return;
    inline.push(img);
    setState((prevState) => ({
      ...prevState,
      inlineImgs: inline
    }));
  }, []);
  const handleInlineImgsInit = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      inlineImgs: []
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
  const handleDisplayChange = useCallback((toDisplay) => {
    setState((prevState) => ({
      ...prevState,
      toDisplay
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
    state.data.append('inlineImgs', state.inlineImgs);

    axios
      .post('/api/save_template', state.data, {})
      .then((response) => {
        toast.success('Template saved successfuly.');
        dispatch(
          thunks.getTmpEmails({
            label: 'template',
            email: JSON.parse(localStorage.getItem('email'))
          })
        );
        dispatch(
          getUserProfile({ email: JSON.parse(localStorage.getItem('email')) })
        );

        setState((prevState) => ({
          ...prevState,
          loading: false,
          subject: '',
          to: '',
          inlineImgs: [],
          message: '',
          isOpen: false,
          data: new FormData()
        }));
      })
      .catch((e) => {});
  };
  return {
    ...state,
    handleClose,
    handleMaximize,
    handleMessageChange,
    handleMinimize,
    handleInlineImgsChange,
    handleInlineImgsInit,
    handleSubmit,
    handleOpen,
    handleAttach,
    handleSubjectChange,
    handleToChange,
    handleDisplayChange
  };
};
const useSidebar = () => {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [open, setOpen] = useState(mdUp);

  const handleScreenResize = useCallback(() => {
    if (!mdUp) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [mdUp]);

  useEffect(
    () => {
      handleScreenResize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mdUp]
  );

  const handleToggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    handleToggle,
    handleClose,
    open
  };
};

const Page = (props) => {
  const { emails, cntemails, userinfo } = props;
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    let cnt = 0;
    cntemails.allIds.map((emailId) => {
      if (!cntemails.byId[emailId].isUnread.seen) cnt++;
    });
    disCount(cnt);
  }, [cntemails]);
  let obj = {
    time: new Date().getTime(),
    value: 'email',
    expire: 3000000
  };
  // You can only store strings
  let objStr = JSON.stringify(obj);
  localStorage.setItem('time_token', objStr);
  const rootRef = useRef(null);
  const searchParams = useSearchParams();
  const emailId = searchParams.get('emailId');
  const currentLabelId = searchParams.get('label') || undefined;
  const labels = useLabels();
  const composer = useComposer();
  const tcomposer = useTmpComposer();
  const sidebar = useSidebar();
  const [unread, setUnread] = useState(0);
  const disCount = (cnt) => {
    setUnread(cnt);
  };
  usePageView();

  const view = emailId ? 'details' : 'list';
  return (
    <>
      <Seo title="Dashboard: Mail" />
      <Divider />
      <Box
        component="main"
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {currentLabelId == 'template' ? (
          <Box
            ref={rootRef}
            sx={{
              bottom: 0,
              display: 'flex',
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0
            }}
          >
            <MailSidebar
              container={rootRef.current}
              currentLabelId={currentLabelId}
              labels={labels}
              unread={unread}
              onClose={sidebar.handleClose}
              onCompose={tcomposer.handleOpen}
              open={sidebar.open}
            />
            <MailContainer open={sidebar.open}>
              {view === 'details' && (
                <MailThreadTemp
                  currentLabelId={currentLabelId}
                  onSidebarToggle={sidebar.handleToggle}
                  emailId={emailId}
                  userinfo={userinfo}
                />
              )}
              {view === 'list' && (
                <MailListTemp
                  currentLabelId={currentLabelId}
                  onSidebarToggle={sidebar.handleToggle}
                  onCompose={tcomposer.handleOpen}
                />
              )}
            </MailContainer>
          </Box>
        ) : (
          <Box
            ref={rootRef}
            sx={{
              bottom: 0,
              display: 'flex',
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0
            }}
          >
            <MailSidebar
              container={rootRef.current}
              currentLabelId={currentLabelId}
              labels={labels}
              unread={unread}
              onClose={sidebar.handleClose}
              onCompose={composer.handleOpen}
              open={sidebar.open}
            />
            <MailContainer open={sidebar.open}>
              {view === 'details' && (
                <MailThread
                  currentLabelId={currentLabelId}
                  onSidebarToggle={sidebar.handleToggle}
                  emailId={emailId}
                />
              )}
              {view === 'list' && (
                <MailList
                  currentLabelId={currentLabelId}
                  onSidebarToggle={sidebar.handleToggle}
                  onCompose={composer.handleOpen}
                  disCount={disCount}
                />
              )}
            </MailContainer>
          </Box>
        )}
      </Box>
      <MailComposer
        maximize={composer.isFullScreen}
        message={composer.message}
        onClose={composer.handleClose}
        // onMaximize={composer.handleMaximize}
        onMessageChange={composer.handleMessageChange}
        onMinimize={composer.handleMinimize}
        onSubjectChange={composer.handleSubjectChange}
        onInlineImgsChange={composer.handleInlineImgsChange}
        onSubmit={composer.handleSubmit}
        onAttach={composer.handleAttach}
        onToChange={composer.handleToChange}
        onDisplayChange={composer.handleDisplayChange}
        handleInlineImgsInit={composer.handleInlineImgsInit}
        inlineImgs={composer.inlineImgs}
        open={composer.isOpen}
        subject={composer.subject}
        loading={composer.loading}
        to={composer.to}
        toDisplay={composer.toDisplay}
      />
      <TemplateComposer
        maximize={tcomposer.isFullScreen}
        message={tcomposer.message}
        onClose={tcomposer.handleClose}
        // onMaximize={tcomposer.handleMaximize}
        onMessageChange={tcomposer.handleMessageChange}
        onMinimize={tcomposer.handleMinimize}
        onSubjectChange={tcomposer.handleSubjectChange}
        onInlineImgsChange={tcomposer.handleInlineImgsChange}
        onSubmit={tcomposer.handleSubmit}
        onAttach={tcomposer.handleAttach}
        onToChange={tcomposer.handleToChange}
        onDisplayChange={tcomposer.handleDisplayChange}
        handleInlineImgsInit={tcomposer.handleInlineImgsInit}
        inlineImgs={tcomposer.inlineImgs}
        open={tcomposer.isOpen}
        subject={tcomposer.subject}
        loading={tcomposer.loading}
        to={tcomposer.to}
      />
    </>
  );
};
const mapStateToProps = (state) => ({
  emails: state.mail.emails,
  cntemails: state.mail.cntemails,
  userinfo: state.profile.userinfo
});

export default connect(mapStateToProps)(Page);
