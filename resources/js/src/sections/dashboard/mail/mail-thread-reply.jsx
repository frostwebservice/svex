import { useCallback, useRef, useState } from 'react';
import Attachment01Icon from '@untitled-ui/icons-react/build/esm/Attachment01';
import Link01Icon from '@untitled-ui/icons-react/build/esm/Link01';
import FaceSmileIcon from '@untitled-ui/icons-react/build/esm/FaceSmile';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  SvgIcon,
  TextField,
  Tooltip
} from '@mui/material';
import { useMockedUser } from '@/hooks/use-mocked-user';
import { Editor } from 'react-draft-wysiwyg';

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
import LoadingButton from '@mui/lab/LoadingButton';
import { useSearchParams } from '@/hooks/use-search-params';
import { useDispatch, useSelector } from '@/store';
import { toast } from 'react-hot-toast';

const MailThreadReply = (props) => {
  const { from, to, subject, userinfo } = props;
  const fileRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const contentState = editorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  const uploadDialog = useDialog();
  const [content, setContent] = useState();
  const email = JSON.parse(localStorage.getItem('email'));
  const [message, setMessage] = useState('');
  const [data, setData] = useState(new FormData());
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const onEditorStateChange = (editorState) => {
    updateImageEntities(editorState.getCurrentContent());
    setEditorState(editorState);
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  const folder = useSearchParams().get('label') || 'inbox';
  useEffect(() => {
    setMessage(content);
  }, [content]);
  useEffect(() => {
    if (message == '') setEditorState(EditorState.createEmpty());
  }, [message]);
  const updateImageEntities = async (contentState) => {
    let newContentState = contentState;

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
                data.src = base64data;
              };
            });

            return;
          }
        }
      );
    });
    setEditorState(EditorState.createWithContent(newContentState));
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
  const attachUpload = () => {
    uploadDialog.handleOpen();
  };
  const onUpgrade = (data) => {
    setData(data);
  };
  const handleSubmit = () => {
    if (userinfo.is_admin != '1') {
      if (userinfo.paid == '1' && userinfo.message_cnt >= 50) {
        toast.error(
          'You are trying to send 51th message this month.\n Please upgrade your membership. \n ' +
            userinfo.time +
            'days left by renewal date.'
        );
        return;
      } else if (userinfo.paid == '0' && userinfo.message_cnt >= 5) {
        toast.error(
          'Trial user cannot send over 5 messages .\n Please upgrade your membership.'
        );
        return;
      }
    }
    setLoading(true);
    if (folder == 'inbox') data.append('to', from.email);
    else {
      let toTo = '';
      to[0].name.map((person, index) => {
        toTo +=
          index == to[0].name.length - 1 ? person.mail : person.mail + ', ';
      });
      data.append('to', toTo);
    }

    data.append('subject', subject);
    data.append('message', message);
    data.append('email', email);

    axios
      .post('/api/send_mail', data, {})
      .then((response) => {
        setLoading(false);
        setMessage('');
        setData(new FormData());
        toast.success('Message Sent Successfuly.');
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
    <>
      <Box sx={{ p: 3 }} {...props}>
        <Stack alignItems="flex-start" direction="row" spacing={2}>
          {/* <Avatar src={user.avatar} /> */}
          <Box sx={{ flexGrow: 1 }}>
            <Editor
              editorState={editorState}
              wrapperClassName="wrapper-class reply-wrapper"
              editorClassName="editor-class reply-class"
              toolbarClassName="toolbar-class"
              onEditorStateChange={onEditorStateChange}
              toolbar={{
                options: ['image', 'link', 'emoji'],
                link: { options: ['link'] },
                image: {
                  uploadCallback: _uploadimagecallback,
                  previewImage: true
                }
              }}
            />
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
                sx={{ ml: 17 }}
              >
                <Tooltip title="Attach file">
                  <IconButton size="small" onClick={attachUpload}>
                    <SvgIcon>
                      <Attachment01Icon />
                    </SvgIcon>
                  </IconButton>
                </Tooltip>
              </Stack>
              <div>
                <LoadingButton
                  loading={loading}
                  loadingPosition="center"
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Reply
                </LoadingButton>
              </div>
            </Stack>
            <FileUploader
              onClose={uploadDialog.handleClose}
              open={uploadDialog.open}
              onUpgrade={onUpgrade}
            />
          </Box>
        </Stack>
      </Box>
      <input hidden ref={fileRef} type="file" />
    </>
  );
};
const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});
export default connect(mapStateToProps)(MailThreadReply);
