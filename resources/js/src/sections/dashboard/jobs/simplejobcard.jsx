import PropTypes from 'prop-types';
import CheckVerified01 from '@untitled-ui/icons-react/build/esm/CheckVerified01';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Link,
  Stack,
  SvgIcon,
  Typography,
  Divider,
  Button,
  Switch
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { paths } from '@/paths';
import { getInitials } from '@/utils/get-initials';
import { CompanyJobs } from './company-jobs';
import { connect } from 'react-redux';
import './manage.css';
const SimpleJobCard = (props) => {
  const { jobs, order, offer, ...other } = props;

  const job = jobs?.filter((obj) => {
    return obj.id == order;
  });
  const getPaymentType = () => {
    if (job) {
      if (job[0]) {
        if (job[0].barter) return 'Barter';
        else if (job[0].revenue) return 'Revenue';
        else if (job[0].custom) return 'Custom';
        else return 'Paid';
      }
    }
  };
  const getBudget = () => {
    if (job && job[0]) {
      if (job[0].barter) return job[0].barter;
      else if (job[0].revenue) return job[0].revenue;
      else if (job[0].custom) return job[0].custom;
      else {
        return job[0].paid;
      }
    }
  };
  const getJobID = () => {
    if (job && job[0]) {
      return job[0].id;
    }
  };
  const timeSince = (date1, date2) => {
    var seconds = Math.floor(
      (new Date(date2) - new Date(date1).getTime()) / 1000
    );
    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + ' years';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + ' months';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + ' days';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + ' hours';
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  };
  return (
    <Card variant="outlined" {...other}>
      <Stack
        sx={{ py: 1 }}
        alignItems="flex-start"
        direction="row"
        // flexWrap="wrap"
        justifyContent="space-between"
      >
        <Stack>
          <Stack
            alignItems="flex-start"
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            sx={{
              px: 2,
              py: 1
            }}
          >
            <Typography variant="subtitle1" sx={{ fontSize: 16 }}>
              {job && job[0]?.title}
            </Typography>
          </Stack>
          <Stack
            alignItems="flex-start"
            direction="row"
            flexWrap="wrap"
            // justifyContent="space-between"

            sx={{
              px: 2,
              pb: 1.5
            }}
          >
            <Typography
              color="text.secondary"
              variant="caption"
              sx={{ lineHeight: 2 }}
            >
              Status • Actively Hiring
            </Typography>
            <Typography
              color="text.secondary"
              style={{ marginLeft: 40 }}
              sx={{ lineHeight: 2 }}
              variant="caption"
            >
              Number of applicants • {job && job[0]?.cnt}
            </Typography>

            <Typography
              color="text.secondary"
              style={{ marginLeft: 40 }}
              variant="caption"
              sx={{ lineHeight: 2 }}
            >
              Budget • {getBudget()}
            </Typography>
            <Typography
              color="text.secondary"
              style={{ marginLeft: 40 }}
              sx={{ lineHeight: 2 }}
              variant="caption"
            >
              Job type •{' '}
              {job && job[0]?.shoutoutonly == 'shoutoutonly'
                ? 'Shoutout Only'
                : 'Content creation & Shoutouts'}
            </Typography>
            <Typography
              sx={{ lineHeight: 2 }}
              color="text.secondary"
              style={{ marginLeft: 40 }}
              variant="caption"
            >
              Payment type • {getPaymentType()}
            </Typography>
          </Stack>
        </Stack>

        <Stack
          alignItems="center"
          verticalAlign="center"
          direction="row"
          spacing={2}
          sx={{ margin: 'auto 35px' }}
        >
          <Typography
            color="text.secondary"
            variant="caption"
            style={{ fontSize: 12, minWidth: 100 }}
          >
            {timeSince(job && job[0]?.created_at, job && job[0]?.time)} ago
          </Typography>
          {offer ? (
            <Button
              className="right-alone-btn"
              component={RouterLink}
              href={'/dashboard/jobs/'}
              sx={{ fontSize: 15 }}
              // variant="contained"
            >
              View
            </Button>
          ) : (
            <></>
          )}
        </Stack>
      </Stack>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(SimpleJobCard);
