import { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Button,
  Chip,
  Card,
  Box,
  InputAdornment,
  Stack,
  SvgIcon,
  IconButton,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Trash02Icon from '@untitled-ui/icons-react/build/esm/Trash02';

import { MobileDatePicker } from '@mui/x-date-pickers';
import Upload01Icon from '@untitled-ui/icons-react/build/esm/Upload01';
import Download01Icon from '@untitled-ui/icons-react/build/esm/Download01';
import Avatar from './Avatar.png';
import { FileUploader } from './file-uploader';
import { useDialog } from '@/hooks/use-dialog';
import { connect } from 'react-redux';
const JobShotoutStep = (props) => {
  const { onBack, onNext, updateValue, isReview, job, ...other } = props;
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [startDate, setStartDate] = useState(new Date('2022-09-22T11:41:50'));
  const [endDate, setEndDate] = useState(new Date('2023-01-11T12:41:50'));
  const [kind, setKind] = useState('images');
  const uploadDialog = useDialog();
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [articles, setArticles] = useState([]);
  const imageUpload = () => {
    setKind('images');
    uploadDialog.handleOpen();
  };
  const videoUpload = () => {
    setKind('videos');
    uploadDialog.handleOpen();
  };
  const articleUpload = () => {
    setKind('articles');
    uploadDialog.handleOpen();
  };
  const onUpgrade = (kind, data) => {
    if (kind == 'images') {
      if (job.images != '') updateValue('images', job.images + ',' + data);
      else updateValue(kind, data);
    }
    if (kind == 'videos') {
      if (job.videos != '') updateValue('videos', job.videos + ',' + data);
      else updateValue(kind, data);
    }
    if (kind == 'articles') {
      if (job.articles != '')
        updateValue('articles', job.articles + ',' + data);
      else updateValue(kind, data);
    }
  };
  const handleStartDateChange = useCallback((date) => {
    setStartDate(date);
  }, []);

  const handleEndDateChange = useCallback((date) => {
    setEndDate(date);
  }, []);

  const handleTagAdd = useCallback((tag) => {
    setTags((prevState) => {
      return [...prevState, tag];
    });
  }, []);

  const handleTagDelete = useCallback((tag) => {
    setTags((prevState) => {
      return prevState.filter((t) => t !== tag);
    });
  }, []);
  useEffect(() => {
    let arr = job?.images?.split(',');
    if (arr?.length > 0) {
      if (arr[0] != '') {
        axios
          .post('/api/get_files', { kind: 'images', arr: arr })
          .then((response) => {
            setImages(response.data);
          });
      }
    }
    if (job?.images == '') {
      setImages([]);
    }
    arr = job?.videos?.split(',');
    if (arr?.length > 0) {
      if (arr[0] != '') {
        axios
          .post('/api/get_files', { kind: 'videos', arr: arr })
          .then((response) => {
            setVideos(response.data);
          });
      }
    }
    if (job?.videos == '') {
      setVideos([]);
    }
    arr = job?.articles?.split(',');
    if (arr?.length > 0) {
      if (arr[0] != '') {
        axios
          .post('/api/get_files', { kind: 'articles', arr: arr })
          .then((response) => {
            setArticles(response.data);
          });
      }
    }
    if (job?.articles == '') {
      setArticles([]);
    }
  }, [job]);
  const removeItem = (id, kind) => {
    let newItems = '';
    if (kind == 'images') {
      job.images.split(',').map((item) => {
        if (item != id) newItems += item + ',';
      });
      if (job.images.split(',').length == 1) updateValue('images', '');
      else updateValue('images', newItems.slice(0, newItems.length - 1));
    }
    if (kind == 'videos') {
      job.videos.split(',').map((item) => {
        if (item != id) newItems += item + ',';
      });
      updateValue('videos', newItems.slice(0, newItems.length - 1));
    }
    if (kind == 'articles') {
      job.articles.split(',').map((item) => {
        if (item != id) newItems += item + ',';
      });
      updateValue('articles', newItems.slice(0, newItems.length - 1));
    }
  };
  return (
    <Stack spacing={3} {...other}>
      <Grid
        container
        disableEqualOverflow
        spacing={{
          xs: 3,
          lg: 4
        }}
      >
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            value={job.businessurl}
            label="Business URL"
            onChange={(e) => updateValue('businessurl', e.target.value)}
            sx={{
              borderRadius: '0.5rem',
              height: '4rem',
              alignItems: 'center'
            }}
            name="businessurl"
            placeholder="e.g www.canadagoose.com"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            onChange={(e) => updateValue('socialhandle', e.target.value)}
            fullWidth
            value={job.socialhandle}
            label="Social Media Handle"
            sx={{
              borderRadius: '0.5rem',
              height: '4rem',
              alignItems: 'center'
            }}
            name="socialhandle"
            placeholder="e.g @canadagoose"
          />
        </Grid>

        <Grid xs={12} md={6}>
          <Card
            onClick={imageUpload}
            spacing={3}
            sx={{
              borderRadius: '0.5rem',
              height: '4rem',
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button>
              <img src={Avatar} />
            </Button>
            <Typography ml={2}>
              Click to upload or drag your brand images
            </Typography>
          </Card>
          <Stack
            sx={{ mt: 1 }}
            // alignItems="flex-start"
            // direction="row"
            // justifyContent="space-between"
            // spacing={3}
          >
            {images.map((file) => {
              return (
                <Box key={file.fid} sx={{ px: 1 }}>
                  <SvgIcon fontSize="small">
                    <AttachFileIcon />
                  </SvgIcon>
                  {file.filename}
                  <IconButton onClick={() => removeItem(file.fid, 'images')}>
                    <SvgIcon fontSize="small">
                      <Trash02Icon />
                    </SvgIcon>
                  </IconButton>
                </Box>
              );
            })}
          </Stack>
        </Grid>
        <Grid xs={12} md={6}>
          <Card
            onClick={videoUpload}
            spacing={3}
            sx={{
              borderRadius: '0.5rem',
              height: '4rem',
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button>
              <img src={Avatar} />
            </Button>
            <Typography ml={2}>
              Click to upload or drag your brand videos
            </Typography>
          </Card>
          <Stack sx={{ mt: 1 }}>
            {videos.map((file) => {
              return (
                <Box key={file.fid} sx={{ px: 1 }}>
                  <SvgIcon fontSize="small">
                    <AttachFileIcon />
                  </SvgIcon>
                  {file.filename}
                  <IconButton onClick={() => removeItem(file.fid, 'videos')}>
                    <SvgIcon fontSize="small">
                      <Trash02Icon />
                    </SvgIcon>
                  </IconButton>
                </Box>
              );
            })}
          </Stack>
        </Grid>
        <Grid xs={12} md={6}>
          <Card
            onClick={articleUpload}
            spacing={3}
            sx={{
              borderRadius: '0.5rem',
              height: '4rem',
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button>
              <img src={Avatar} />
            </Button>
            <Typography ml={2}>
              Click to upload or drag your brand articles
            </Typography>
          </Card>
          <Stack
            sx={{ mt: 1 }}

            // alignItems="flex-start"
            // direction="row"
            // justifyContent="space-between"
            // spacing={3}
          >
            {articles.map((file) => {
              return (
                <Box key={file.fid} sx={{ px: 1 }}>
                  <SvgIcon fontSize="small">
                    <AttachFileIcon />
                  </SvgIcon>
                  {file.filename}
                  <IconButton onClick={() => removeItem(file.fid, 'articles')}>
                    <SvgIcon fontSize="small">
                      <Trash02Icon />
                    </SvgIcon>
                  </IconButton>
                </Box>
              );
            })}
          </Stack>
        </Grid>
      </Grid>

      <Stack direction="row">
        <Stack alignItems="center" direction="row" flexWrap="wrap" spacing={1}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              onDelete={() => handleTagDelete(tag)}
              variant="outlined"
            />
          ))}
        </Stack>
      </Stack>

      <Stack alignItems="center" direction="row" spacing={2}>
        <Button
          endIcon={
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          }
          className={isReview ? 'review-hidden' : ''}
          sx={{ px: 5, py: 2, fontSize: 18 }}
          onClick={onNext}
          variant="contained"
        >
          Continue
        </Button>
        <Button
          color="primary"
          className={isReview ? 'review-hidden' : ''}
          onClick={onNext}
          sx={{ px: 5, py: 2, fontSize: 18 }}
        >
          Skip
        </Button>
      </Stack>
      <FileUploader
        onClose={uploadDialog.handleClose}
        open={uploadDialog.open}
        onUpgrade={onUpgrade}
        kind={kind}
      />
    </Stack>
  );
};

JobShotoutStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
const mapStateToProps = (state) => ({
  job: state.job
});

export default connect(mapStateToProps)(JobShotoutStep);
