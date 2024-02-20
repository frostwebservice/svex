import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import ChevronLeftIcon from '@untitled-ui/icons-react/build/esm/ChevronLeft';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import Trash02Icon from '@untitled-ui/icons-react/build/esm/Trash02';
import {
  Avatar,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Chip,
  Box,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
  useMediaQuery
} from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { RouterLink } from '@/components/router-link';
import { getInitials } from '@/utils/get-initials';
import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01';
import { useDispatch, useSelector } from '@/store';
import { useRouter } from '@/hooks/use-router';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
export const MailThreadToolbar = (props) => {
  const {
    backHref,
    uid,
    createdAt,
    from,
    to,
    folder = 'inbox',
    onSidebarToggle,
    currentLabelId = 'inbox'
  } = props;
  const router = useRouter();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const formattedCreatedAt = format(
    new Date(createdAt),
    'MMMM d yyyy, h:mm:ss a'
  );
  const [loading, setLoading] = useState(false);
  const labels = useSelector((state) => state.mail.labels);
  const delMail = (uid) => {
    setLoading(true);
    axios
      .post('/api/del_mail', {
        uid: uid,
        label: folder,
        email: JSON.parse(localStorage.getItem('email'))
      })
      .then((response) => {
        setLoading(false);
        if (currentLabelId == 'inbox') router.push('/dashboard/mail');
        if (currentLabelId == 'sent') router.push('/dashboard/mail?label=sent');
        if (currentLabelId == 'favorites')
          router.push('/dashboard/mail?label=favorites');
      })
      .catch((e) => {});
  };

  return (
    <div>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        {loading == true ? (
          <Box sx={{ display: 'flex', textAlign: 'center' }}>
            <CircularProgress />
            <Typography
              sx={{ display: 'inline', fontSize: 18, fontWeight: 700, p: 1 }}
            >
              Removing...
            </Typography>
          </Box>
        ) : (
          <></>
        )}

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
        {/* <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <OutlinedInput
            fullWidth
            placeholder="Search message"
            size="small"
            startAdornment={(
              <InputAdornment position="start">
                <SvgIcon>
                  <SearchMdIcon />
                </SvgIcon>
              </InputAdornment>
            )}
            sx={{ width: 200 }}
          />
          <Tooltip title="Previous email">
            <IconButton>
              <SvgIcon>
                <ChevronLeftIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
          <Tooltip title="Next email">
            <IconButton>
              <SvgIcon>
                <ChevronRightIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
        </Stack> */}
      </Stack>
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 3 }}
      >
        {folder == 'inbox' ? (
          <Stack alignItems="center" direction="row" spacing={2}>
            <Avatar
              src={`https://ui-avatars.com/api/?name=${from.email}&background=2970FF&color=fff&rounded=true`}
            ></Avatar>
            <div>
              <Typography component="span" variant="subtitle2">
                {from.name}
              </Typography>{' '}
              <Link color="text.secondary" component="span" variant="body2">
                {from.email}
              </Link>
              <Typography color="text.secondary" variant="subtitle2">
                To:{' '}
                {to.map((person) => (
                  <Link color="inherit" key={person.email}>
                    {person.email}
                  </Link>
                ))}
              </Typography>
            </div>
          </Stack>
        ) : (
          <Stack alignItems="center" direction="row" spacing={2}>
            <Avatar
              src={`https://ui-avatars.com/api/?name=${from.email}&background=2970FF&color=fff&rounded=true`}
            ></Avatar>
            <div>
              <Typography component="span" variant="subtitle2">
                {from.name}
              </Typography>{' '}
              <Link color="text.secondary" component="span" variant="body2">
                {from.email}
              </Link>
              <Typography color="text.secondary" variant="subtitle2">
                To:{' '}
                {to[0].name.map((person, index) => (
                  <Link color="inherit" key={person.mail}>
                    {index == to[0].name.length - 1
                      ? person.mail
                      : person.mail + ', '}
                  </Link>
                ))}
              </Typography>
            </div>
          </Stack>
        )}

        <Stack alignItems="center" direction="row" spacing={1}>
          {mdUp && (
            <>
              {formattedCreatedAt && (
                <Typography color="text.secondary" noWrap variant="caption">
                  {formattedCreatedAt}
                </Typography>
              )}
              {/* <Tooltip title="Reply">
                <IconButton>
                  <img src="/assets/icons/left.png" width={15} height={15} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Reply all">
                <IconButton>
                  <img src="/assets/icons/dleft.png" width={15} height={15} />
                </IconButton>
              </Tooltip> */}
              <Tooltip title="Delete">
                <IconButton onClick={() => delMail(uid)}>
                  <img src="/assets/icons/trash.png" width={15} height={15} />
                </IconButton>
              </Tooltip>
            </>
          )}
        </Stack>
      </Stack>
    </div>
  );
};

MailThreadToolbar.propTypes = {
  backHref: PropTypes.string.isRequired,
  from: PropTypes.object.isRequired,
  to: PropTypes.array.isRequired
};
