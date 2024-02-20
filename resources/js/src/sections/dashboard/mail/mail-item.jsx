import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Attachment01Icon from '@untitled-ui/icons-react/build/esm/Attachment01';
import BookmarkIcon from '@untitled-ui/icons-react/build/esm/Bookmark';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import { useSearchParams } from '@/hooks/use-search-params';

import {
  Avatar,
  Box,
  Checkbox,
  Chip,
  IconButton,
  SvgIcon,
  Tooltip,
  Typography
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { getInitials } from '@/utils/get-initials';
import { useRouter } from '@/hooks/use-router';
import { thunks } from '@/thunks/mail';
import { useDispatch, useSelector } from '@/store';

export const MailItem = (props) => {
  const { email, onDeselect, onSelect, onCompose, selected, href, ...other } =
    props;
  const dispatch = useDispatch();

  const searchParams = useSearchParams();
  const currentLabelId = searchParams.get('label') || undefined;
  const handleSelectToggle = useCallback(
    (event) => {
      if (event.target.checked) {
        onSelect?.();
      } else {
        onDeselect?.();
      }
    },
    [onSelect, onDeselect]
  );
  const createdAt = format(new Date(email.createdAt), 'MMM dd');
  const templateCreatedAt = format(
    new Date(email.createdAt),
    'MMM dd, hh:mm aa'
  );
  const hasAnyAttachments = !!(
    email.attachments && email.attachments.length > 0
  );
  const hasManyAttachments = !!(
    email.attachments && email.attachments.length > 1
  );
  const router = useRouter();
  const doFav = (flag, uid, realfolder, folder) => {
    axios
      .post('/api/update_fav', {
        uid: uid,
        flag: flag,
        email: JSON.parse(localStorage.getItem('email')),
        label: realfolder
      })
      .then((response) => {
        dispatch(
          thunks.getEmails({
            label: folder,
            email: JSON.parse(localStorage.getItem('email'))
          })
        );
      })
      .catch((e) => {});
  };
  return (
    <Box
      sx={{
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'divider',
        display: 'flex',
        p: 2,
        ...(!email.isUnread && {
          position: 'relative',
          '&:before': {
            backgroundColor: 'primary.main',
            content: '" "',
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 4
          },
          '& $name, & $subject': {
            fontWeight: 600
          }
        }),
        ...(selected && {
          backgroundColor: 'primary.lightest'
        }),
        ...(!selected && {
          '&:hover': {
            backgroundColor: 'action.hover'
          }
        })
      }}
      {...other}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: {
            md: 'flex',
            xs: 'none'
          },
          mr: 1
        }}
      >
        <Checkbox checked={selected} onChange={handleSelectToggle} />
        <Tooltip title="Starred">
          <IconButton
            onClick={() =>
              doFav(email.favorite, email.id, email.realfolder, email.folder)
            }
          >
            <SvgIcon
              sx={{
                ...(email.favorite && {
                  color: 'warning.main',
                  '& path': {
                    fill: (theme) => theme.palette.warning.main,
                    fillOpacity: 1
                  }
                })
              }}
            >
              <Star01Icon />
            </SvgIcon>
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        component={RouterLink}
        href={href}
        sx={{
          alignItems: 'center',
          cursor: 'pointer',
          display: 'contents',
          flexGrow: 1,
          flexWrap: {
            xs: 'wrap',
            md: 'wrap'
          },
          minWidth: 1,
          textDecoration: 'none'
        }}
      >
        {email.realfolder == 'inbox' ? (
          <Box
            // onClick={onCompose}

            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Avatar
              src={`https://ui-avatars.com/api/?name=${email.from.email}&background=2970FF&color=fff&rounded=true`}
            ></Avatar>
            <Typography
              color="text.primary"
              sx={{
                width: 120,
                ml: 2,
                ...(!email.isUnread && {
                  fontWeight: 600
                })
              }}
              noWrap
              variant="body2"
            >
              {email.from.email}
            </Typography>
          </Box>
        ) : (
          <Box
            // onClick={onCompose}

            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Avatar
              src={`https://ui-avatars.com/api/?name=${email.to[0].name[0].mail}&background=2970FF&color=fff&rounded=true`}
            ></Avatar>
            <Typography
              color="text.primary"
              sx={{
                width: 120,
                ml: 2,
                ...(!email.isUnread && {
                  fontWeight: 600
                })
              }}
              noWrap
              variant="body2"
            >
              {email.to[0].name.map((person) => person.mail)}
            </Typography>
          </Box>
        )}

        <Box
          sx={{
            // flexGrow: 1,
            ml: {
              xs: 0,
              md: 2
            },
            my: {
              xs: 2,
              md: 0
            },
            overflow: 'hidden',
            // width: {
            //   xs: '100%',
            //   md: 'auto'
            // }
            width: '-webkit-fill-available'
          }}
        >
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              maxWidth: 800,
              width: '100%'
            }}
          >
            {email.isUnread.seen == 'Seen' ? (
              <Typography
                color="text.primary"
                sx={{
                  fontWeight: 400,
                  minWidth: 100,
                  maxWidth: 400,
                  mr: 1
                }}
                noWrap
                variant="body2"
              >
                {email.subject}
              </Typography>
            ) : (
              <Typography
                color="text.primary"
                sx={{
                  fontWeight: 700,
                  minWidth: 100,
                  maxWidth: 400,
                  mr: 1
                }}
                noWrap
                variant="body2"
              >
                {email.subject}
              </Typography>
            )}
            <Typography
              className="inline-item"
              color="text.secondary"
              noWrap
              variant="body2"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: email.message
                }}
              />
            </Typography>
          </Box>
          {hasAnyAttachments && (
            <Box sx={{ mt: 1, maxWidth: 800 }}>
              <Chip
                icon={
                  <SvgIcon>
                    <Attachment01Icon />
                  </SvgIcon>
                }
                label={email.attachments[0].name}
                size="small"
              />
              {hasManyAttachments && (
                <Chip
                  label={'+' + (email.attachments.length - 1).toString()}
                  size="small"
                  sx={{ ml: 1 }}
                />
              )}
            </Box>
          )}
        </Box>
        <Box sx={{ margin: 'auto' }}>
          <Typography
            color="text.secondary"
            variant="caption"
            alignItems="center"
            sx={{
              display: 'block',
              textAlign: {
                xs: 'left',
                md: 'right'
              },
              whiteSpace: 'nowrap',
              width: '100%'
            }}
          >
            {currentLabelId && currentLabelId.search('template') >= 0
              ? 'Last used-' + templateCreatedAt
              : createdAt}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

MailItem.propTypes = {
  email: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.bool.isRequired
};
