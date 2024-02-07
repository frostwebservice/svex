import { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Button,
  Chip,
  Grid,
  InputAdornment,
  Stack,
  SvgIcon,
  TextField,
  Typography
} from '@mui/material';
import { connect } from 'react-redux';
import MultiSelectAll from './MultiSelectAll';
import toast from 'react-hot-toast';

const currencies = [
  {
    value: 'instagram',
    label: 'Instagram'
  },
  {
    value: 'tiktok',
    label: 'TikTok'
  },
  {
    value: 'youtube',
    label: 'Youtube'
  },
  {
    value: 'twitter',
    label: 'Twitter'
  },
  {
    value: 'pinterest',
    label: 'Pinterest'
  },
  {
    value: 'linkedin',
    label: 'LinkedIn'
  },
  {
    value: 'blogwebsite',
    label: 'Blob/Website'
  }
];

const JobSocialDetailStep = (props) => {
  const { onBack, onNext, job, isReview, updateValue, ...other } = props;
  const [ighidden, setighidden] = useState('none');
  const [twhidden, settwhidden] = useState('none');
  const [tthidden, settthiden] = useState('none');
  const [ythidden, setythidden] = useState('none');
  const [lihidden, setlihidden] = useState('none');
  const [bwhidden, setbwhidden] = useState('none');
  const [pthidden, setpthidden] = useState('none');
  const [tempKey, setTempKey] = useState(0);
  const [initialSelect, setInitialSelect] = useState([]);
  const [igError, setIgError] = useState(false);
  const [ytError, setYtError] = useState(false);
  const [twError, setTwError] = useState(false);
  const [ptError, setPtError] = useState(false);
  const [ttError, setTtError] = useState(false);
  const [liError, setLiError] = useState(false);
  const [bwError, setBwError] = useState(false);
  const [allError, setAllError] = useState(false);
  useEffect(() => {
    if (tempKey < 3) setTempKey(tempKey + 1);
  }, [job]);
  const handleSelectionChange = (result) => {
    if (result.length != 0) setAllError(false);
    let types = '';
    setighidden('none');
    settwhidden('none');
    settthiden('none');
    setythidden('none');
    setlihidden('none');
    setbwhidden('none');
    setpthidden('none');
    result.map((res) => {
      if (res.value == 'instagram') setighidden('');
      if (res.value == 'twitter') settwhidden('');
      if (res.value == 'tiktok') settthiden('');
      if (res.value == 'youtube') setythidden('');
      if (res.value == 'linkein') setlihidden('');
      if (res.value == 'pinterest') setpthidden('');
      if (res.value == 'blogwebsite') setbwhidden('');
      types += res.value + ',';
    });
    updateValue('socialtypes', types.slice(0, -1));
    updateValue('typesarray', result);
  };
  const goNext = () => {
    if (
      ighidden == 'none' &&
      ythidden == 'none' &&
      tthidden == 'none' &&
      twhidden == 'none' &&
      pthidden == 'none' &&
      lihidden == 'none' &&
      bwhidden == 'none'
    ) {
      setAllError(true);
      toast.error('You should select at least one social media type!');
    } else {
      if (ighidden == '' && job.ig == '') setIgError(true);
      if (ythidden == '' && job.yt == '') setYtError(true);
      if (twhidden == '' && job.tw == '') setTwError(true);
      if (pthidden == '' && job.pt == '') setPtError(true);
      if (tthidden == '' && job.tt == '') setTtError(true);
      if (lihidden == '' && job.li == '') setLiError(true);
      if (bwhidden == '' && job.bw == '') setBwError(true);
      if (
        (ighidden == '' && job.ig == '') ||
        (ythidden == '' && job.yt == '') ||
        (twhidden == '' && job.tw == '') ||
        (pthidden == '' && job.pt == '') ||
        (tthidden == '' && job.tt == '') ||
        (lihidden == '' && job.li == '') ||
        (bwhidden == '' && job.bw == '')
      ) {
      } else {
        if (ighidden == 'none') updateValue('ig', '');
        if (ythidden == 'none') updateValue('yt', '');
        if (tthidden == 'none') updateValue('tt', '');
        if (twhidden == 'none') updateValue('tw', '');
        if (lihidden == 'none') updateValue('li', '');
        if (pthidden == 'none') updateValue('pt', '');
        if (bwhidden == 'none') updateValue('bw', '');
        onNext();
      }
    }
  };
  return (
    <Stack spacing={3} {...other}>
      <Stack spacing={3}>
        <Grid item xs={12} sx={{ p: 0 }}>
          <MultiSelectAll
            sx={{ maxheight: '700px' }}
            items={currencies}
            key={tempKey}
            error={allError}
            selectAllLabel="Select All"
            value={job.typesarray}
            // key={tmpkey}
            placeholder="sss"
            onChange={handleSelectionChange}
          />
        </Grid>

        <TextField
          fullWidth
          label="Instagram"
          sx={{ display: ighidden }}
          error={igError}
          value={job.ig}
          name="instagram"
          onChange={(e) => {
            if (e.target.value != '') setIgError(false);
            updateValue('ig', e.target.value);
          }}
          placeholder="3 Permanent Posts and 3 Stories every 24 hrs for 3 days"
        />
        <TextField
          fullWidth
          sx={{ display: tthidden }}
          error={ttError}
          value={job.tt}
          label="Tiktok"
          onChange={(e) => {
            if (e.target.value != '') setTtError(false);
            updateValue('tt', e.target.value);
          }}
          name="tiktok"
          placeholder="1 Permanent TikTok Post"
        />
        <TextField
          sx={{ display: ythidden }}
          error={ytError}
          value={job.yt}
          fullWidth
          onChange={(e) => {
            if (e.target.value != '') setYtError(false);
            updateValue('yt', e.target.value);
          }}
          label="Youtube"
          name="youtube"
          placeholder="1 Temporary YouTube Short Story"
        />
        <TextField
          sx={{ display: twhidden }}
          error={twError}
          fullWidth
          value={job.tw}
          label="Twitter"
          onChange={(e) => {
            if (e.target.value != '') setTwError(false);

            updateValue('tw', e.target.value);
          }}
          name="twitter"
          placeholder="3 Pinned Tweets for 24 Hours"
        />
        <TextField
          fullWidth
          error={ptError}
          sx={{ display: pthidden }}
          value={job.pt}
          label="Pinterest"
          onChange={(e) => {
            if (e.target.value != '') setPtError(false);

            updateValue('pt', e.target.value);
          }}
          name="pinterest"
          placeholder="3 Permanent Pins"
        />
        <TextField
          sx={{ display: lihidden }}
          error={liError}
          fullWidth
          value={job.li}
          onChange={(e) => {
            if (e.target.value != '') setLiError(false);

            updateValue('li', e.target.value);
          }}
          label="LinkedIn"
          name="linkedin"
          placeholder="1 Article Publication"
        />
        <TextField
          sx={{ display: bwhidden }}
          fullWidth
          error={bwError}
          value={job.bw}
          onChange={(e) => {
            if (e.target.value != '') setBwError(false);

            updateValue('bw', e.target.value);
          }}
          label="Blog/Website"
          name="blogwebsite"
          placeholder="Blog Post: 1 Blog Article of 500 Words"
        />
      </Stack>

      <Stack alignItems="center" direction="row" spacing={2}>
        <Button
          endIcon={
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          }
          sx={{ px: 5, py: 2, fontSize: 18 }}
          className={isReview ? 'review-hidden' : ''}
          onClick={goNext}
          variant="contained"
        >
          Continue
        </Button>
      </Stack>
    </Stack>
  );
};

JobSocialDetailStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
const mapStateToProps = (state) => ({
  job: state.job
});

export default connect(mapStateToProps)(JobSocialDetailStep);
