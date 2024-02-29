import PropTypes from 'prop-types';
import Download01Icon from '@untitled-ui/icons-react/build/esm/Download01';
import { Avatar, Button, Stack, SvgIcon, Typography } from '@mui/material';
import Attachment01Icon from '@untitled-ui/icons-react/build/esm/Attachment01';
import { RouterLink } from '@/components/router-link';
import $ from 'jquery';
export const MailThreadAttachmentsTemp = (props) => {
  const { attachments } = props;

  const count = attachments.split(',').length;
  const downloadAll = () => {
    let len = $('.download-link').length;
    for (let i = 0; i < len; i++) {
      $('.download-link')[i].click();
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">{count} Attachments</Typography>
      <Stack
        alignItems="flex-start"
        direction="row"
        spacing={2}
        flexWrap="wrap"
      >
        {attachments.split(',').map((attachment, index) => (
          <Stack
            key={index}
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{
              alignItems: 'center',
              cursor: 'pointer',
              display: 'flex'
            }}
          >
            <Avatar
              variant="rounded"
              sx={{ backgroundColor: 'primary.light', borderRadius: '50%' }}
              component={RouterLink}
              href={'http://localhost/tmpfiles/' + attachment}
              download={attachment}
              target="_blank"
            >
              <Attachment01Icon />
            </Avatar>
            <div>
              <Typography
                className="download-link"
                component={RouterLink}
                noWrap
                variant="subtitle2"
                href={'http://localhost/tmpfiles/' + attachment}
                download={attachment}
                target="_blank"
              >
                {attachment}
              </Typography>
            </div>
          </Stack>
        ))}
      </Stack>
      <div>
        <Button color="primary" size="small" onClick={downloadAll}>
          Download all
        </Button>
      </div>
    </Stack>
  );
};

MailThreadAttachmentsTemp.propTypes = {
  attachments: PropTypes.string
};
