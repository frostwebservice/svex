import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Attachment01Icon from '@untitled-ui/icons-react/build/esm/Attachment01';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
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
  Avatar,
  Input,
  Paper,
  TextField,
  Portal,
  Stack,
  SvgIcon,
  Tooltip,
  Typography
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { QuillEditor } from '@/components/quill-editor';
import { Editor } from 'react-draft-wysiwyg';
import { toast } from 'react-hot-toast';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromRaw
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useEffect } from 'react';
import { FileUploader } from './file-uploader';
import { useDialog } from '@/hooks/use-dialog';
import { connect } from 'react-redux';
import $ from 'jquery';
import { render } from 'nprogress';
const useStyles = makeStyles(() => ({
  noBorder: {
    border: 'none'
  }
}));

const TemplateComposer = (props) => {
  const {
    maximize = false,
    message = '',
    onClose,
    onMaximize,
    onMessageChange,
    onMinimize,
    onSubjectChange,
    onAttach,
    loading,
    onToChange,
    onDisplayChange,
    onInlineImgsChange,
    inlineImgs,
    handleInlineImgsInit,
    onSubmit,
    open = false,
    subject = '',
    to = '',
    toDisplay = '',
    toemail = '',
    avatar = '',
    userinfo
  } = props;

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const [uploadedimages, setUploadedImages] = useState([]);
  const contentState = editorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  const uploadDialog = useDialog();
  const [content, setContent] = useState();
  const email = JSON.parse(localStorage.getItem('email'));

  const onUpgrade = (data) => {
    onAttach(data);
  };
  const onEditorStateChange = (editorState) => {
    updateImageEntities(editorState.getCurrentContent());
    setEditorState(editorState);
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  const handleSubjectChange = useCallback(
    (event) => {
      onSubjectChange?.(event.target.value);
    },
    [onSubjectChange]
  );

  const handleSubmit = () => {
    if (subject == '') {
      toast.error('You should input Subject field.');
      return;
    }

    onSubmit();
  };
  useEffect(() => {
    onMessageChange?.(content);
  }, [content]);
  useEffect(() => {
    if (message == '') setEditorState(EditorState.createEmpty());
  }, [message]);
  if (!open) {
    // setEditorState(EditorState.createEmpty());
    return null;
  }

  const updateImageEntities = async (contentState) => {
    // let newContentState = contentState;
    contentState.getBlockMap().forEach((contentBlock) => {
      contentBlock.findEntityRanges(
        (character) => {
          const entityKey = character.getEntity();
          return (
            entityKey !== null &&
            contentState.getEntity(entityKey).getType() === 'IMAGE'
          );
        },
        async (start, end) => {
          const entityKey = contentState
            .getBlockForKey(contentBlock.getKey())
            .getEntityAt(start);
          const entity = contentState.getEntity(entityKey);
          const data = entity.getData();
          if (inlineImgs.includes(data.src)) return;
          onInlineImgsChange(data.src);
          if (data.src.includes('blob:http')) {
            axios({
              method: 'get',
              url: data.src, // blob url eg. blob:http://127.0.0.1:8000/e89c5d87-a634-4540-974c-30dc476825cc
              responseType: 'blob'
            }).then(function (response) {
              var reader = new FileReader();
              reader.readAsDataURL(response.data);
              reader.onloadend = function () {
                var base64data = reader.result;

                axios
                  .post('/api/upload_inline', {
                    uri: data.src.split('/')[3],
                    data: base64data
                  })
                  .then((response) => {
                    onInlineImgsChange(data.src + '.' + response.data);
                  })
                  .catch((e) => {});
                // data.src = base64data;
              };
            });
            // return;
          }
        }
      );
    });
    // setEditorState(EditorState.createWithContent(newContentState));
  };

  const _uploadimagecallback = (file) => {
    const imageobject = {
      file: file,
      localsrc: URL.createObjectURL(file)
    };
    return new Promise((resolve, reject) => {
      resolve({ data: { link: imageobject.localsrc } });
    });
  };

  $('.rdw-remove-wrapper').on('click', function () {
    uploadDialog.handleOpen();
  });

  $('.suggestion input').on('focus', function () {
    $('#suggestion')[0].style.display = 'none';
  });
  return (
    <Portal>
      <Backdrop open={maximize} />
      <Paper
        sx={{
          bottom: '10%',
          display: 'flex',
          flexDirection: 'column',
          height: '80%',
          outline: 'none',
          position: 'fixed',
          left: '5%',
          width: '90%',
          zIndex: 1200,
          overflow: 'hidden'
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
          <Typography variant="h6">Default Template</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onClose}>
            <SvgIcon>
              <XIcon />
            </SvgIcon>
          </IconButton>
        </Box>
        <Stack
          alignItems="flex-start"
          direction={{
            xs: 'column',
            sm: 'row'
          }}
          justifyContent="space-between"
        >
          <Stack justifyContent="flex-start" sx={{ width: '100%' }}>
            <Stack
              alignItems="center"
              direction="row"
              spacing={1}
              sx={{
                py: 2,
                borderBottom: 1,
                borderTop: 1,
                borderColor: 'divider'
              }}
            >
              <Typography sx={{ mx: 2 }}>To</Typography>
              {/* <Avatar
                src={
                  avatar != ''
                    ? avatar
                    : `https://ui-avatars.com/api/?name=${
                        to ? to : ''
                      }&background=2970FF&color=fff&rounded=true`
                }
              /> */}

              {/* <Input
                disableUnderline
                fullWidth
                onChange={handleToChange}
                placeholder="Input Address To"
                value={to}
                list="suggestion"
                className="suggestion"
                inputProps={{ list: 'suggestion' }}
              />

              <datalist id="suggestion">
                {infaddresses.map((address, index) => {
                  //Parsing the array and displaying suggestion with option tag
                  return (
                    <option key={index} value={address}>
                      {address}
                    </option>
                  );
                })}
              </datalist> */}
            </Stack>

            <Stack
              alignItems="center"
              direction="row"
              spacing={1}
              sx={{
                py: 2,
                borderBottom: 1,
                borderColor: 'divider'
              }}
            >
              <Typography sx={{ mx: 2 }}>Subject</Typography>
              <Input
                disableUnderline
                fullWidth
                onChange={handleSubjectChange}
                placeholder="Input Subject"
                value={subject}
              />
            </Stack>
            {/* <Stack
              spacing={1}
              sx={{
                py: 2,
                borderBottom: 1,
                borderColor: 'divider'
              }}
            >
              <Stack>
                <Typography sx={{ mx: 2 }}>Add Branding</Typography>
              </Stack>

              <Stack
                spacing={1}
                alignItems="center"
                direction="row"
                sx={{ p: 2 }}
              >
                <Input
                  disableUnderline
                  fullWidth
                  onChange={handleSubjectChange}
                  placeholder="Input Subject"
                  value={subject}
                />
              </Stack>
            </Stack> */}
          </Stack>
        </Stack>

        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            options: ['image', 'link', 'emoji', 'remove'],
            link: {
              options: ['link'],
              link: {
                icon: '/assets/icons/link.png'
              }
            },
            emoji: { icon: '/assets/icons/smile.png' },
            image: {
              icon: '/assets/icons/image.png',
              uploadCallback: _uploadimagecallback,
              previewImage: true
            },
            remove: {
              icon: '/assets/icons/attach.png',
              title: 'Attach'
            }
          }}
        />
        <Divider />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={3}
          sx={{ p: 2, mb: 2 }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{ ml: 27 }}
          ></Stack>

          <div>
            <LoadingButton
              loading={loading}
              loadingPosition="center"
              variant="contained"
              onClick={handleSubmit}
            >
              Save Template
            </LoadingButton>
          </div>
        </Stack>
        <FileUploader
          onClose={uploadDialog.handleClose}
          open={uploadDialog.open}
          onUpgrade={onUpgrade}
        />
      </Paper>
    </Portal>
  );
};

TemplateComposer.propTypes = {
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
const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});
export default connect(mapStateToProps)(TemplateComposer);
