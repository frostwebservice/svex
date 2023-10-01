import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';
import { Button, Card, Divider, Stack, Typography } from '@mui/material';

export const CompanyJobs = (props) => {
  const { jobs = [], ...other } = props;

  return (
    <Card
      variant="outlined"
      {...other}>
      <Stack divider={<Divider />}>
        {jobs.map((job) => {
          const location = job.isRemote ? 'Remote possible' : `(${job.country}, ${job.city})`;
          const publishedAt = formatDistanceStrict(job.publishedAt,
            new Date(),
            { addSuffix: true });
          const salary = `${job.currency}${job.salaryMin} - ${job.currency}${job.salaryMax}`;
          const jobtype = job.jobType;
          const paymenttype = job.paymentType;
          return (
            <Stack
              alignItems="center"
              direction="row"
              flexWrap="wrap"
              justifyContent="space-between"
              key={job.id}
              sx={{
                px: 2,
                py: 1.5
              }}
            >
              <div>
                <Typography variant="subtitle1">
                  {job.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="caption"
                >
                  Budget • {salary}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="caption"
                  style={{ marginLeft: 20 }}
                >
                  Job Type • {jobtype}
                </Typography>
                <Typography
                  color="text.secondary"
                  style={{ marginLeft: 20 }}
                  variant="caption"
                >
                  Payment Type • {paymenttype}
                </Typography>
              </div>
              <Stack
                alignItems="center"
                direction="row"
                spacing={2}
              >
                <Typography
                  color="text.secondary"
                  variant="caption"
                  style={{ fontSize: 12 }}
                >
                  {publishedAt}
                </Typography>
                <Button size="small"
                  style={{ fontSize: 14 }}
                >
                  Apply
                </Button>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Card>
  );
};

CompanyJobs.propTypes = {
  jobs: PropTypes.array
};
