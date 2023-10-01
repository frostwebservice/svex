import PropTypes from 'prop-types';
import CheckVerified01 from '@untitled-ui/icons-react/build/esm/CheckVerified01';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import { Avatar, Box, Card, CardContent, Link, Stack, SvgIcon, Typography } from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { paths } from '@/paths';
import { getInitials } from '@/utils/get-initials';
import { CompanyJobs } from './company-jobs';

export const JobCard = (props) => {
  const { company, ...other } = props;

  return (
    <Card {...other} style={{ marginTop: 30 }}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          spacing={2}
          direction={{
            xs: 'column',
            sm: 'row'
          }}
        >
          <Avatar
            component={RouterLink}
            href={paths.dashboard.jobs.companies.details}
            src={company.logo}
          // variant="rounded"
          >
            {getInitials(company.name)}
          </Avatar>
          <div>
            <Link
              color="text.primary"
              component={RouterLink}
              href={paths.dashboard.jobs.companies.details}
              variant="h6"
              style={{ fontSize: 18 }}
            >
              {company.name}
            </Link>
            <Typography variant="body2" style={{ fontSize: 14 }}>
              {company.shortDescription}
            </Typography>
            <Stack
              alignItems="center"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              sx={{ mt: 1 }}
            >
              <Stack
                alignItems="center"
                spacing={1}
                direction="row"
              >
                <SvgIcon color="action">
                  <Users01Icon />
                </SvgIcon>
                <Typography
                  color="text.secondary"
                  noWrap
                  variant="overline"
                  style={{ fontSize: 12 }}
                >
                  {company.employees}
                </Typography>
              </Stack>
              {/* <Stack
                alignItems="center"
                spacing={1}
                direction="row"
              >
                <SvgIcon color="action">
                  <Star01Icon />
                </SvgIcon>
                <Typography
                  color="text.secondary"
                  noWrap
                  variant="overline"
                >
                  {company.averageRating}
                  /5
                </Typography>
              </Stack> */}
              {company.isVerified && (
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={0.5}
                >
                  <div className='verified-icon'></div>
                  <Typography
                    color="#15B79E"
                    noWrap
                    variant="overline"
                    style={{ fontSize: 12 }}
                  >
                    Verified
                  </Typography>
                </Stack>
              )}
            </Stack>
          </div>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <CompanyJobs jobs={company.jobs} />
        </Box>
      </CardContent>
    </Card>
  );
};

JobCard.propTypes = {
  company: PropTypes.object.isRequired
};
