import { useCallback } from 'react';
import PropTypes from 'prop-types';
import Attachment01Icon from '@untitled-ui/icons-react/build/esm/Attachment01';
import Expand01Icon from '@untitled-ui/icons-react/build/esm/Expand01';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import Minimize01Icon from '@untitled-ui/icons-react/build/esm/Minimize01';
import Link01Icon from '@untitled-ui/icons-react/build/esm/Link01';
import FaceSmileIcon from '@untitled-ui/icons-react/build/esm/FaceSmile';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import { makeStyles } from '@material-ui/core';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {
  Backdrop,
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  Paper,
  TextField,
  Portal,
  Stack,
  SvgIcon,
  Tooltip,
  Typography
} from '@mui/material';
import { QuillEditor } from '@/components/quill-editor';
const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
  },
}));
export const MailComposer = (props) => {
  const {
    maximize = false,
    message = '',
    onClose,
    onMaximize,
    onMessageChange,
    onMinimize,
    onSubjectChange,
    onToChange,
    open = false,
    subject = '',
    to = ''
  } = props;
  const classes = useStyles();
  const handleSubjectChange = useCallback((event) => {
    onSubjectChange?.(event.target.value);
  }, [onSubjectChange]);

  const handleToChange = useCallback((event) => {
    onToChange?.(event.target.value);
  }, [onToChange]);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Backdrop open={maximize} />
      <Paper
        sx={{
          bottom: (theme) => `calc((${theme.spacing(20)})/3)`,
          display: 'flex',
          flexDirection: 'column',
          // margin: '30px auto',
          height: (theme) => `calc(100% - ${theme.spacing(20)})`,
          width: (theme) => `calc(100% - ${theme.spacing(40)})`,
          // minHeight: 500,
          outline: 'none',
          position: 'fixed',
          right: (theme) => `calc((${theme.spacing(40)}) / 2)`,
          // width: 600,
          zIndex: 1400,
          overflow: 'hidden',
          // ...(maximize && {
          //   borderRadius: 0,
          //   height: '100%',
          //   margin: 0,
          //   maxHeight: '100%',
          //   maxWidth: '100%',
          //   width: '100%'
          // })
        }}
        elevation={12}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            px: 2,
            py: 1
          }}
        >
          <Typography variant="h6">
            New Email
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* {maximize
            ? (
              <IconButton onClick={onMinimize}>
                <SvgIcon>
                  <Minimize01Icon />
                </SvgIcon>
              </IconButton>
            )
            : (
              <IconButton onClick={onMaximize}>
                <SvgIcon>
                  <Expand01Icon />
                </SvgIcon>
              </IconButton>
            )} */}
          <IconButton onClick={onClose}>
            <SvgIcon>
              <XIcon />
            </SvgIcon>
          </IconButton>
        </Box>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        // spacing={3}
        // sx={{ p: 2 }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
          >
            <Typography sx={{ mx: 2 }}>To</Typography>
            <Input
              disableUnderline
              fullWidth
              onChange={handleToChange}
              // placeholder="To"
              sx={{
                pt: 0.5,
                borderBottom: 1,
                borderColor: 'divider'
              }}
              value={to}
            />
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
          >
            <Typography sx={{ mx: 2, fontWeight: 600, fontSize: 16 }}>Outreach Group</Typography>

            <FormControlLabel
              sx={{
                display: 'block',
              }}
              style={{ marginRight: 20 }}
              control={
                <Switch
                  checked={true}
                  // onChange={() => setLoading(!loading)}
                  name="loading"
                  color="primary"
                />
              }
            // label="Loading"
            />

          </Stack>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        // spacing={3}
        // sx={{ p: 2 }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
          >
            <Typography sx={{ mx: 2 }}>Subject</Typography>
            <Input
              disableUnderline
              fullWidth
              onChange={handleSubjectChange}
              // placeholder="Subject"
              sx={{
                pt: 0.5,
                borderBottom: 1,
                borderColor: 'divider'
              }}
              value={subject}
            />
          </Stack>
        </Stack>


        <QuillEditor
          onChange={onMessageChange}
          placeholder="Type your text"
          sx={{
            border: 'none',
            flexGrow: 1
          }}
          value={message}
        />
        {/* <TextField
          // label="Bio"
          // className="title-inter "
          // label='Type your text'
          // size="medium"
          placeholder='Type your text'
          name="aboutbusiness"
          autoComplete='message '
          // disableUnderline={false}
          variant="outlined"
          multiline
          id="message"
          classes={{ notchedOutline: classes.input }}
          className={classes.textField}
          sx={{
            border: 'none',
            flexGrow: 1,
            // p: 2
          }}
          inputProps={{
            style: {
              padding: 0,
              maxHeight: (theme) => `calc(100% - ${theme.spacing(20)})`,
            },
            classes: { notchedOutline: classes.noBorder }
          }}
          fullWidth
          style={{ marginTop: 11 }}
        // helperText="Type your text"
        /> */}
        <Divider />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={3}
          sx={{ p: 2 }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
          >
            <Tooltip title="Attach image">
              <IconButton size="small">
                <SvgIcon>
                  <Image01Icon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Attach file">
              <IconButton size="small">
                <SvgIcon>
                  <Attachment01Icon />
                </SvgIcon>
              </IconButton>
            </Tooltip>

            <IconButton>
              <SvgIcon>
                <Link01Icon />
              </SvgIcon>
            </IconButton>
            <IconButton>
              <SvgIcon>
                <FaceSmileIcon />
              </SvgIcon>
            </IconButton>

          </Stack>
          <div>
            <Button variant="contained">
              Send Email
            </Button>
          </div>
        </Stack>
      </Paper>
    </Portal >
  );
};

MailComposer.propTypes = {
  maximize: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func,
  onMaximize: PropTypes.func,
  onMessageChange: PropTypes.func,
  onMinimize: PropTypes.func,
  onSubjectChange: PropTypes.func,
  onToChange: PropTypes.func,
  open: PropTypes.bool,
  subject: PropTypes.string,
  to: PropTypes.string
};
