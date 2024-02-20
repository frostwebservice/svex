import PropTypes from 'prop-types';
import Download01Icon from '@untitled-ui/icons-react/build/esm/Download01';
import { Avatar, Button, Stack, SvgIcon, Typography } from '@mui/material';
import Attachment01Icon from '@untitled-ui/icons-react/build/esm/Attachment01';
import { RouterLink } from '@/components/router-link';
import $ from 'jquery';
export const MailThreadAttachments = (props) => {
  const { attachments = [] } = props;

  const count = attachments.length;
  const downloadAll = () => {
    let len = $('.download-link').length;
    for (let i = 0; i < len; i++) {
      $('.download-link')[i].click();
    }
  };
  const bytesToSize = (bytes, decimals = 2) => {
    if (!Number(bytes)) {
      return '0 Bytes';
    }

    const kbToBytes = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
      'Bytes',
      'KiB',
      'MiB',
      'GiB',
      'TiB',
      'PiB',
      'EiB',
      'ZiB',
      'YiB'
    ];

    const index = Math.floor(Math.log(bytes) / Math.log(kbToBytes));

    return `${parseFloat((bytes / Math.pow(kbToBytes, index)).toFixed(dm))} ${
      sizes[index]
    }`;
  };

  console.log(attachments);
  return (
    <Stack spacing={2}>
      <Typography variant="h6">{count} Attachments</Typography>
      <Stack
        alignItems="flex-start"
        direction="row"
        spacing={2}
        flexWrap="wrap"
      >
        {attachments.map((attachment) => (
          <Stack
            key={attachment.id}
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{
              alignItems: 'center',
              cursor: 'pointer',
              display: 'flex'
            }}
          >
            {attachment.type.split('/')[0] == 'image' && (
              <Avatar
                component={RouterLink}
                src={'data:image/png;base64,' + attachment.attachment}
                href={
                  'data:' + attachment.type + ';base64,' + attachment.attachment
                }
                download={attachment.name}
                variant="rounded"
              />
              // <Avatar
              //   variant="rounded"
              //   sx={{ backgroundColor: 'primary.light', borderRadius: '50%' }}
              // >
              //   <Attachment01Icon />
              // </Avatar>
            )}
            {attachment.type.split('/')[0] != 'image' && (
              <Avatar
                variant="rounded"
                sx={{ backgroundColor: 'primary.light', borderRadius: '50%' }}
                component={RouterLink}
                href={
                  'data:' + attachment.type + ';base64,' + attachment.attachment
                }
                download={attachment.name}
              >
                <Attachment01Icon />
              </Avatar>
            )}
            <div>
              <Typography
                className="download-link"
                noWrap
                variant="subtitle2"
                component={RouterLink}
                href={
                  'data:' + attachment.type + ';base64,' + attachment.attachment
                }
                download={attachment.name}
              >
                {attachment.name}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {bytesToSize(attachment.size)}
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

MailThreadAttachments.propTypes = {
  attachments: PropTypes.array
};
