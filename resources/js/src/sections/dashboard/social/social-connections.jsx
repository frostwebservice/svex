import PropTypes from 'prop-types';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import { useCallback, useEffect, useState } from 'react';
import { jobsApi } from '@/api/jobs';
import { JobCard } from '@/sections/dashboard/jobs/profile-job-card';
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
export const SocialConnections = (props) => {
  const { connections = [], query = '', onQueryChange, ...other } = props;
  const companies = useCompanies();
  return (
    <Card {...other}
      style={{ borderRadius: 0, boxShadow: 'none' }}

    >
      {/* <CardHeader title="Connections" /> */}

      <Divider />
      <Box sx={{ p: 0.5 }} style={{ boxShadow: 'none' }}>

        {companies.map((company) => (
          <JobCard
            key={company.id}
            company={company}
          />
        ))}

      </Box>
    </Card >
  );
};

SocialConnections.propTypes = {
  connections: PropTypes.array,
  query: PropTypes.string,
  onQueryChange: PropTypes.func
};
