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
export const MailThreadToolbarTemp = (props) => {
  const {
    backHref,
    tmpmail,
    createdAt,
    userinfo,
    onSidebarToggle,
    currentLabelId = 'inbox'
  } = props;
  const router = useRouter();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const formattedCreatedAt = format(
    new Date(createdAt),
    'MMMM d yyyy, h:mm:ss a'
  );
  const labels = useSelector((state) => state.mail.labels);
  const delMail = (uid) => {
    axios
      .post('/api/del_tmpmail', {
        uid: uid,
        email: JSON.parse(localStorage.getItem('email'))
      })
      .then((response) => {
        router.push('/dashboard/mail?label=template');
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
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 3 }}
      >
        <Stack alignItems="center" direction="row" spacing={2}>
          <Avatar
            src={
              userinfo.avatar
                ? userinfo.avatar
                : `https://ui-avatars.com/api/?name=${userinfo.fullname}&background=2970FF&color=fff&rounded=true`
            }
          ></Avatar>
          <div>
            <Typography component="span" variant="subtitle2">
              {userinfo.fullname}
            </Typography>
          </div>
        </Stack>

        <Stack alignItems="center" direction="row" spacing={1}>
          {mdUp && (
            <>
              {formattedCreatedAt && (
                <Typography color="text.secondary" noWrap variant="caption">
                  {formattedCreatedAt}
                </Typography>
              )}
              <Tooltip title="Delete">
                <IconButton onClick={() => delMail(tmpmail.id)}>
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

MailThreadToolbarTemp.propTypes = {
  backHref: PropTypes.string.isRequired
};
