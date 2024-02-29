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
import { connect } from 'react-redux';
const MailItemTemp = (props) => {
  const {
    email,
    onDeselect,
    onSelect,
    onCompose,
    userinfo,
    selected,
    href,
    ...other
  } = props;
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
  const createdAt = format(new Date(email.created_at), 'MMM dd');
  const templateCreatedAt = format(
    new Date(email.created_at),
    'MMM dd, hh:mm aa'
  );
  const hasAnyAttachments = !!(
    email.attachments && email.attachments.length > 0
  );
  const hasManyAttachments = !!(
    email.attachments && email.attachments.length > 1
  );
  const router = useRouter();

  return (
    <Box
      sx={{
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'divider',
        display: 'flex',
        p: 2,

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
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Avatar
            src={
              userinfo.avatar
                ? userinfo.avatar
                : `https://ui-avatars.com/api/?name=${userinfo.fullname}&background=2970FF&color=fff&rounded=true`
            }
          ></Avatar>
          <Typography
            color="text.primary"
            sx={{
              width: 120,
              ml: 2
            }}
            noWrap
            variant="body2"
          >
            {userinfo.fullname}
          </Typography>
        </Box>

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

            {/* <Typography
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
            </Typography> */}
          </Box>
          {email.files != '' && (
            <Box sx={{ mt: 1, maxWidth: 800 }}>
              <Chip
                icon={
                  <SvgIcon>
                    <Attachment01Icon />
                  </SvgIcon>
                }
                label={email.files.split(',')[0]}
                size="small"
              />
              {email.files.split(',')[1] && email.files.split(',')[1] != '' && (
                <Chip
                  label={'+' + (email.files.split(',').length - 1).toString()}
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

MailItemTemp.propTypes = {
  email: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.bool.isRequired
};
const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});

export default connect(mapStateToProps)(MailItemTemp);
