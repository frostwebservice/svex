import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import { paths } from '@/paths';
import { useDispatch, useSelector } from '@/store';
import { thunks } from '@/thunks/mail';
import { MailThreadAttachments } from './mail-thread-attachments';
import { MailThreadMessage } from './mail-thread-message';
import MailThreadReply from './mail-thread-reply';
import { MailThreadToolbar } from './mail-thread-toolbar';
import { useNavigate } from 'react-router-dom';
const useEmail = (emailId) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.mail.emails.byId[emailId]);
  return email;
};

export const MailThread = (props) => {
  const { emailId, currentLabelId, onSidebarToggle } = props;
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
  const hasAttachments = email.attachments && email.attachments.length > 0;

  return (
    <Stack
      sx={{
        flexGrow: 1,
        height: '100%',
        overflowY: 'auto'
      }}
    >
      <MailThreadToolbar
        uid={emailId}
        backHref={backHref}
        createdAt={new Date(email.createdAt)}
        currentLabelId={currentLabelId}
        folder={email.realfolder}
        from={email.from}
        onSidebarToggle={onSidebarToggle}
        to={email.to}
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
          {hasMessage && <MailThreadMessage message={email.message} />}
          {hasAttachments && (
            <MailThreadAttachments attachments={email.attachments} />
          )}
        </Stack>
      </Box>
      <MailThreadReply
        from={email.from}
        to={email.to}
        subject={email.subject}
      />
    </Stack>
  );
};

MailThread.propTypes = {
  emailId: PropTypes.string.isRequired,
  currentLabelId: PropTypes.string
};
