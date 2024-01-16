import PropTypes from 'prop-types';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import { useCallback, useEffect, useState } from 'react';
import { jobsApi } from '@/api/jobs';
import { JobCard } from '@/sections/dashboard/jobs/company-card';
import { connect } from 'react-redux';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Input,
  Stack,
  SvgIcon,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { SocialConnection } from './social-connection';
import { useMounted } from '@/hooks/use-mounted';
import { getJobs } from '@/actions';
import { useDispatch } from 'react-redux';
const useCompanies = () => {
  const isMounted = useMounted();
  const [companies, setCompanies] = useState([]);

  const handleCompaniesGet = useCallback(async () => {
    try {
      const response = await jobsApi.getCompanies();

      if (isMounted()) {
        setCompanies(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    handleCompaniesGet();
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return companies;
};
const SocialConnections = (props) => {
  const {jobs, connections = [], query = '', onQueryChange, ...other } = props;
  const companies = useCompanies();
  const email = JSON.parse(localStorage.getItem('email'))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs(email,1));
  }, []);
  return (
    <Card {...other}
      style={{ borderRadius: 0, boxShadow: 'none' }}

    >
      {/* <CardHeader title="Connections" /> */}

      <Divider />
      <Box sx={{ p: 0.5 }} style={{ boxShadow: 'none' }}>
        <Stack
          spacing={4}
          sx={{ mt: 4 }}
        >

          {jobs?.map((job) => job.is_active==1?(
            <JobCard
              key={job.id}
              job={job}
              active="active"
            />
          ):(<></>))}

        </Stack>
      </Box>
    </Card >
  );
};

SocialConnections.propTypes = {
  connections: PropTypes.array,
  query: PropTypes.string,
  onQueryChange: PropTypes.func
};
const mapStateToProps = state => ({
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(SocialConnections);