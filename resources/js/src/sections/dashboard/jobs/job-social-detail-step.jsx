import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import { Button, Chip, Grid, InputAdornment, Stack, SvgIcon, TextField, Typography } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';

import MultiSelectAll from "./MultiSelectAll";
const currencies = [
  {
    value: 'instagram',
    label: 'Instagram',
  },
  {
    value: 'tiktok',
    label: 'TikTok',
  },
  {
    value: 'youtube',
    label: 'Youtube',
  },
  {
    value: 'twitter',
    label: 'Twitter',
  },
  {
    value: 'pinterest',
    label: 'Pinterest',
  },
  {
    value: 'linkedin',
    label: 'LinkedIn',
  },
  {
    value: 'blogwebsite',
    label: 'Blob/Website',
  },
];

export const JobSocialDetailStep = (props) => {
  const { onBack, onNext,jobDetail,updateValue, ...other } = props;
  const [ighidden,setighidden] = useState("none");
  const [twhidden,settwhidden] = useState("none");
  const [tthidden,settthiden] = useState("none");
  const [ythidden,setythidden] = useState("none");
  const [lihidden,setlihidden] = useState("none");
  const [bwhidden,setbwhidden] = useState("none");
  const [pthidden,setpthidden] = useState("none");
  const handleSelectionChange = (result) => {
    let types= "";
    setighidden("none")
    settwhidden("none")
    settthiden("none")
    setythidden("none")
    setlihidden("none")
    setbwhidden("none")
    setpthidden("none")
    result.map(res=>{
      if(res.value=="instagram") setighidden("")
      if(res.value=="twitter") settwhidden("")
      if(res.value=="tiktok") settthiden("")
      if(res.value=="youtube") setythidden("")
      if(res.value=="linkein") setlihidden("")
      if(res.value=="pinterest") setpthidden("")
      if(res.value=="blogwebsite") setbwhidden("")
      types+=res.value+","
    })
    updateValue("socialtypes",types.slice(0, -1))
  };
  const [initialSelect, setInitialSelect] = useState([])
  return (
    <Stack
      spacing={3}
      {...other}>

      <Stack spacing={3}>
        {/* <TextField

          select
          label="Social Media Types"
          // defaultValue="EUR"
          SelectProps={{
            native: true,
          }}

          variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField> */}
   
          <Grid item xs={12} sx={{ p: 0 }}>
            <MultiSelectAll
                sx={{ maxheight: "700px"}}
                items={currencies}
                selectAllLabel="Select All"
                value={initialSelect}
                // key={tmpkey}
                placeholder="sss"
                onChange={handleSelectionChange}
              />
            </Grid>

        <TextField
          fullWidth
          label="Instagram"
          sx={{display:ighidden}}
          name="instagram"
          onChange={(e)=>updateValue("ig",e.target.value)}
        placeholder="3 Permanent Posts and 3 Stories every 24 hrs for 3 days"
        />
        <TextField
          fullWidth
          sx={{display:tthidden}}
          label="Tiktok"
          onChange={(e)=>updateValue("tt",e.target.value)}
          name="tiktok"
        placeholder="1 Permanent TikTok Post"
        />
        <TextField
          sx={{display:ythidden}}
          fullWidth
          onChange={(e)=>updateValue("yt",e.target.value)}
          label="Youtube"
          name="youtube"
        placeholder="1 Temporary YouTube Short Story"
        />
        <TextField
          sx={{display:twhidden}}
          fullWidth
          label="Twitter"
          onChange={(e)=>updateValue("tw",e.target.value)}
          name="twitter"
        placeholder="3 Pinned Tweets for 24 Hours"
        />
        <TextField
          fullWidth
          sx={{display:pthidden}}
          label="Pinterest"
          onChange={(e)=>updateValue("pt",e.target.value)}
          name="pinterest"
        placeholder="3 Permanent Pins"
        />
        <TextField
          sx={{display:lihidden}}
          fullWidth
          onChange={(e)=>updateValue("li",e.target.value)}
          label="LinkedIn"
          name="linkedin"
        placeholder="1 Article Publication"
        />
        <TextField
          sx={{display:bwhidden}}
          fullWidth
          onChange={(e)=>updateValue("bw",e.target.value)}
          label="Blog/Website"
          name="blogwebsite"
        placeholder="Blog Post: 1 Blog Article of 500 Words"
        />


      </Stack>


      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
      >
        <Button
          endIcon={(
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          )}
          sx={{px:5,py:2,fontSize:18}}
          onClick={onNext}
          variant="contained"
        >
          Continue
        </Button>
        {/* <Button
          color="inherit"
          onClick={onBack}
          sx={{px:5,py:2}}
        >
          Back
        </Button> */}
      </Stack>
    </Stack>
  );
};

JobSocialDetailStep.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};
