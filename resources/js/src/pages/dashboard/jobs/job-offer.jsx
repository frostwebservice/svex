import { useCallback, useEffect, useState } from 'react';
import ChevronLeftIcon from '@untitled-ui/icons-react/build/esm/ChevronLeft';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import {
  Box,
  Button,
  Container,
  IconButton,
  Switch,
  Stack,
  SvgIcon,
  Dialog,
  DialogContent,
  Tabs,
  Tab,
  Card,
  Input,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { jobsApi } from '@/api/jobs';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { useMounted } from '@/hooks/use-mounted';
import { usePageView } from '@/hooks/use-page-view';
import { paths } from '@/paths';
import SimpleJobCard from '@/sections/dashboard/jobs/simplejobcard';
import { AppCard } from './app_card';
import { JobListSearch } from '@/sections/dashboard/jobs/job-list-search';
import { useSettings } from '@/hooks/use-settings';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import EmptyInvited from './empty_invited';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import { connect } from 'react-redux';
import { InfCard } from './inf_card';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import { useNavigate } from 'react-router-dom';

import './manage.css';
import './inf_finder.css';

const tabs = [
  { label: 'Job listing', value: 'joblisting' },
  { label: 'Review Offers', value: 'applicants' },
  { label: 'Invited Influencers', value: 'invitedinfluencers' },
  { label: 'Hired', value: 'hired' }
];
const JobOffer = (props) => {
  const {
    jobs,
    onClose,
    influencer,
    onRerender,
    currentTab,
    open = false
  } = props;
  const settings = useSettings();
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);

  const [rendered, setRendered] = useState(0);

  const email = JSON.parse(localStorage.getItem('email'));

  usePageView();
  const jobID =
    window.location.pathname.split('/')[
      window.location.pathname.split('/').length - 1
    ];
  const job = jobs?.filter((obj) => {
    return obj.id == jobID;
  });
  if (rendered < 1) {
  }
  const hireInf = () => {
    axios
      .post('/api/hire_inf', {
        inf_id: influencer.id,
        job_id: jobID,
        tab: currentTab
      })
      .then((response) => {
        onClose();
        onRerender();
      });
  };
  return (
    <Dialog fullWidth maxWidth="lg" open={open} onClose={onClose}>
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
        <Typography variant="h6">Job Offer</Typography>
        <IconButton color="inherit" onClick={onClose}>
          <SvgIcon>
            <XIcon />
          </SvgIcon>
        </IconButton>
      </Stack>
      <Stack
        alignItems="flex-end"
        justifyContent="space-between"
        sx={{
          mr: 3,
          px: 3
        }}
      >
        <Button
          size="small"
          sx={{ width: 200 }}
          className="right-btn"
          variant="contained"
          onClick={hireInf}
        >
          Hire This Influencer
        </Button>
      </Stack>

      <DialogContent>
        <SimpleJobCard
          order={
            window.location.pathname.split('/')[
              window.location.pathname.split('/').length - 1
            ]
          }
          offer={true}
        />
        <Box>
          <InfCard
            influencer={influencer}
            currentTab={currentTab}
            invited="0"
            offer={true}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(JobOffer);
