import { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import ChevronLeftIcon from '@untitled-ui/icons-react/build/esm/ChevronLeft';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01';
import RefreshCcw02Icon from '@untitled-ui/icons-react/build/esm/RefreshCcw02';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import { useSearchParams } from '@/hooks/use-search-params';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import Backdrop from '@mui/material/Backdrop';
import {
  Box,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Pagination,
  Stack,
  SvgIcon,
  Button,
  Tooltip,
  Typography
} from '@mui/material';
import { paths } from '@/paths';
import { useDispatch, useSelector } from '@/store';
import { thunks } from '@/thunks/mail';
import { MailItem } from './mail-item';
import { TemplateItem } from './template-item';
import usePagination from '@/utils/pagination';
import CircularProgress from '@mui/material/CircularProgress';

const useEmails = (currentLabelId) => {
  const dispatch = useDispatch();
  const { emails } = useSelector((state) => state.mail);
  useEffect(
    () => {
      dispatch(
        thunks.getEmails({
          label: currentLabelId == undefined ? 'inbox' : currentLabelId,
          email: JSON.parse(localStorage.getItem('email'))
        })
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentLabelId]
  );

  return emails;
};

const useSelectionModel = (emailIds) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setSelected([]);
  }, [emailIds]);

  const handleSelectAll = useCallback(() => {
    setSelected([...emailIds]);
  }, [emailIds]);

  const handleSelectOne = useCallback((emailId) => {
    setSelected((prevState) => {
      if (!prevState.includes(emailId)) {
        return [...prevState, emailId];
      }

      return prevState;
    });
  }, []);

  const handleDeselectAll = useCallback(() => {
    setSelected([]);
  }, []);

  const handleDeselectOne = useCallback((emailId) => {
    setSelected((prevState) => {
      return prevState.filter((id) => id !== emailId);
    });
  }, []);

  return {
    handleDeselectAll,
    handleDeselectOne,
    handleSelectAll,
    handleSelectOne,
    selected
  };
};

export const MailList = (props) => {
  const { currentLabelId, disCount, onSidebarToggle, onCompose, ...other } =
    props;
  const emails = useEmails(currentLabelId);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const labels = useSelector((state) => state.mail.labels);
  const [read, setRead] = useState(0);
  const [infav, setInfav] = useState([]);
  const [sentfav, setSentfav] = useState([]);
  useEffect(() => {
    setRead(1);
    setLoading(true);
  }, [currentLabelId]);
  const {
    handleDeselectAll,
    handleDeselectOne,
    handleSelectAll,
    handleSelectOne,
    selected
  } = useSelectionModel(emails.allIds);
  const handleToggleAll = useCallback(
    (event) => {
      if (event.target.checked) {
        handleSelectAll();
      } else {
        handleDeselectAll();
      }
    },
    [handleSelectAll, handleDeselectAll]
  );
  const calcCount = (email) => {
    if (email.isUnread.seen) {
      //seen
    } else {
      //unread message
      axios
        .post('/api/unread_set', {
          uid: email.id,
          email: JSON.parse(localStorage.getItem('email'))
        })
        .then((response) => {
          dispatch(
            thunks.getEmails({
              label: 'inbox',
              email: JSON.parse(localStorage.getItem('email'))
            })
          );
          dispatch(
            thunks.getCntEmails({
              label: 'inbox',
              email: JSON.parse(localStorage.getItem('email'))
            })
          );
        })
        .catch((e) => {});
    }
  };
  const selectedAll = selected.length === emails.allIds.length;
  const selectedSome =
    selected.length > 0 && selected.length < emails.allIds.length;
  const hasEmails = emails.allIds.length > 0;

  const [viewMails, setViewMails] = useState(emails.allIds);
  useEffect(() => {
    if (read == 1) setLoading(false);

    setRead(read + 1);
    if (read >= 2) setRead(0);
    setViewMails(emails.allIds);
  }, [emails]);
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;
  const count = Math.ceil(viewMails.length / PER_PAGE);
  const _DATA = usePagination(viewMails, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const queryRef = useRef(null);
  const handleQueryChange = useCallback(
    (event) => {
      event.preventDefault();
      const query = queryRef.current?.value || '';
      let data = emails.allIds.filter((emailId) => {
        if (typeof query !== 'undefined' && query !== '') {
          console.log('called');
          const containsQuery = (emails.byId[emailId].subject || '')
            .toLowerCase()
            .includes(query.toLowerCase());
          if (!containsQuery) {
            return false;
          }
        }
        return true;
      });
      setViewMails(data);
    },
    [emails]
  );

  return (
    <Stack
      sx={{
        height: '100%',
        overflowY: 'auto'
      }}
      {...other}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <div>
          <IconButton onClick={onSidebarToggle}>
            <SvgIcon>
              <Menu01Icon />
            </SvgIcon>
          </IconButton>
          <Typography sx={{ display: 'inline', fontSize: 18, fontWeight: 700 }}>
            {currentLabelId == undefined
              ? 'Inbox'
              : labels.map((label) => {
                  if (label.id == currentLabelId) return label.name;
                })}
          </Typography>
        </div>
      </Stack>
      <Divider />
      {loading == true ? (
        <Backdrop
          open={loading}
          onClick={(e) => e.preventDefault()}
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
          <Typography
            sx={{ display: 'inline', fontSize: 18, fontWeight: 700, p: 1 }}
          >
            Loading...
          </Typography>
        </Backdrop>
      ) : hasEmails ? (
        <>
          <Box
            sx={{
              alignItems: 'center',
              borderBottomColor: 'divider',
              borderBottomStyle: 'solid',
              borderBottomWidth: 1,
              display: {
                xs: 'none',
                md: 'flex'
              },
              p: 2
            }}
          >
            <Checkbox
              checked={selectedAll}
              indeterminate={selectedSome}
              onChange={handleToggleAll}
            />
            <Typography variant="subtitle2">Select all</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Stack alignItems="center" direction="row" spacing={1}>
              {currentLabelId && currentLabelId.search('template') >= 0 ? (
                <Button
                  // fullWidth
                  onClick={onCompose}
                  startIcon={
                    <SvgIcon>
                      <PlusIcon />
                    </SvgIcon>
                  }
                  // sx={{ mt: 2 }}
                  variant="contained"
                >
                  New Template
                </Button>
              ) : (
                ''
              )}
              <Box
                component="form"
                onSubmit={handleQueryChange}
                sx={{ flexGrow: 1 }}
              >
                <OutlinedInput
                  fullWidth
                  inputProps={{ ref: queryRef }}
                  placeholder="Search email"
                  size="small"
                  startAdornment={
                    <InputAdornment position="start">
                      <SvgIcon>
                        <SearchMdIcon />
                      </SvgIcon>
                    </InputAdornment>
                  }
                  sx={{ width: 200 }}
                />
              </Box>

              <Pagination
                count={count}
                // size="small"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </Stack>
          </Box>
          <div>
            {_DATA.currentData().map((emailId) => {
              const isSelected = selected.includes(emailId);

              const href =
                currentLabelId && currentLabelId !== 'inbox'
                  ? paths.dashboard.mail +
                    `?emailId=${emailId}&label=${currentLabelId}`
                  : paths.dashboard.mail + `?emailId=${emailId}`;

              return currentLabelId &&
                currentLabelId.search('template') >= 0 ? (
                <TemplateItem
                  email={emails.byId[emailId]}
                  href={href}
                  onCompose={onCompose}
                  onClick={onCompose}
                  key={emailId}
                  onDeselect={() => handleDeselectOne(emailId)}
                  onSelect={() => handleSelectOne(emailId)}
                  selected={isSelected}
                />
              ) : (
                emails.byId[emailId] && (
                  <MailItem
                    email={emails.byId[emailId]}
                    href={href}
                    onClick={() => calcCount(emails.byId[emailId])}
                    onCompose={onCompose}
                    // onClick={onCompose}
                    key={emailId}
                    onDeselect={() => handleDeselectOne(emailId)}
                    onSelect={() => handleSelectOne(emailId)}
                    selected={isSelected}
                  />
                )
              );
            })}
          </div>
        </>
      ) : (
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{
            flexGrow: 1,
            p: 2
          }}
        >
          <Box
            component="img"
            src="/assets/errors/error-404.png"
            sx={{
              height: 'auto',
              maxWidth: 120
            }}
          />
          <Typography color="text.secondary" variant="h5">
            There are no emails
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

MailList.propTypes = {
  currentLabelId: PropTypes.string,
  onSidebarToggle: PropTypes.func
};
