import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import { FileDropzone } from '@/components/file-dropzone';
import XIcon from '@untitled-ui/icons-react/build/esm/X';

export const FileUploader = (props) => {
  const { onClose, open = false, onUpgrade } = props;
  const [files, setFiles] = useState([]);
  useEffect(() => {
    // setFiles([]);
  }, [open]);

  const handleDrop = useCallback((newFiles) => {
    setFiles((prevFiles) => {
      // return [...prevFiles, ...newFiles];
      return [...newFiles];
    });
  }, []);

  const handleRemove = useCallback((file) => {
    setFiles((prevFiles) => {
      return prevFiles.filter((_file) => _file.path !== file.path);
    });
  }, []);
  const email = JSON.parse(localStorage.getItem('email'));

  const handleRemoveAll = useCallback(() => {
    setFiles([]);
  }, []);
  const onUpload = () => {
    const data = new FormData();
    const len = files.length;
    for (let i = 0; i < len; i++) {
      data.append('file' + i, files[i]);
    }
    data.append('len', len);
    onUpgrade(data);
    setFiles([]);
    onClose();
    // let url = '/api/upload_shoutout';
    // axios.post(url, data, {}).then((res) => {
    //   onUpgrade(res.data);
    //   setFiles([]);
    //   onClose();
    // });
  };
  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={3}
        sx={{
          px: 3,
          py: 2
        }}
      >
        <Typography variant="h6">Upload Files</Typography>
        <IconButton color="inherit" onClick={onClose}>
          <SvgIcon>
            <XIcon />
          </SvgIcon>
        </IconButton>
      </Stack>
      <DialogContent>
        <FileDropzone
          // accept={{ '*.*': [] }}
          caption="Max file size is 8 MB"
          files={files}
          onDrop={handleDrop}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
          onUpload={onUpload}
        />
      </DialogContent>
    </Dialog>
  );
};

FileUploader.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
