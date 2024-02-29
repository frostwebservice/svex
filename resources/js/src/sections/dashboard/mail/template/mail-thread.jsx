import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import { paths } from '@/paths';
import { useDispatch, useSelector } from '@/store';
import { thunks } from '@/thunks/mail';
import { MailThreadAttachmentsTemp } from './mail-thread-attachments';
import { MailThreadMessageTemp } from './mail-thread-message';
import { MailThreadToolbarTemp } from './mail-thread-toolbar';
import { useNavigate } from 'react-router-dom';
const useEmail = (emailId) => {
  const dispatch = useDispatch();
  const email = useSelector(
    (state) => state.mail.tmpmails.filter((tmp) => tmp.id == emailId)[0]
  );
  return email;
};

export const MailThreadTemp = (props) => {
  const { emailId, currentLabelId, onSidebarToggle, userinfo } = props;
  const email = useEmail(emailId);
  const navigate = useNavigate();
  const backHref =
    currentLabelId && currentLabelId !== 'inbox'
      ? paths.dashboard.mail + `?label=${currentLabelId}`
      : paths.dashboard.mail;
  if (!email) {
    navigate(backHref);
    return null;
  }

  const hasMessage = !!email.message;
  const hasAttachments = email.files.split(',').length > 0;

  return (
    <Stack
      sx={{
        flexGrow: 1,
        height: '100%',
        overflowY: 'auto'
      }}
    >
      <MailThreadToolbarTemp
        tmpmail={email}
        backHref={backHref}
        createdAt={new Date(email.created_at)}
        currentLabelId={currentLabelId}
        onSidebarToggle={onSidebarToggle}
        userinfo={userinfo}
      />
      <Box
        sx={{
          flexGrow: 1,
          px: 3,
          py: 6
        }}
      >
        <Typography variant="h3">{email.subject}</Typography>
        <Stack sx={{ mt: 2 }} spacing={6}>
          {hasMessage && <MailThreadMessageTemp message={email.message} />}
          {hasAttachments && (
            <MailThreadAttachmentsTemp attachments={email.files} />
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

MailThreadTemp.propTypes = {
  emailId: PropTypes.string.isRequired,
  currentLabelId: PropTypes.string
};
