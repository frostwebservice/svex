import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';
import { Button, Card, Divider, Stack, Typography } from '@mui/material';

export const CardBottom = (props) => {
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
                            // justifyContent="space-between"
                            key={job.id}
                            sx={{
                                px: 2,
                                py: 1.5
                            }}
                        >
                            <Stack
                                alignItems="flex-start"
                                spacing={2}
                                direction={{
                                    xs: 'column',
                                    sm: 'column',
                                    md: 'column',
                                }}
                                sx={{ mr: 10 }}
                            >
                                <Typography
                                    color="text.primary"
                                    noWrap
                                    variant="overline"
                                    sx={{ fontSize: 14, fontWeight: 700 }}
                                >
                                    500K
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    noWrap
                                    sx={{ fontSize: 12 }}
                                >
                                    Followers
                                </Typography>
                            </Stack>
                            <Stack
                                alignItems="flex-start"
                                spacing={2}
                                direction={{
                                    xs: 'column',
                                    sm: 'column',
                                    md: 'column',
                                }}
                                sx={{ mr: 10 }}
                            >
                                <Typography
                                    color="text.primary"
                                    noWrap
                                    variant="overline"
                                    sx={{ fontSize: 14, fontWeight: 700 }}
                                >
                                    5%
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    noWrap
                                    sx={{ fontSize: 12 }}
                                >
                                    Engagement rate
                                </Typography>
                            </Stack>
                            <Stack
                                alignItems="flex-start"
                                spacing={2}
                                direction={{
                                    xs: 'column',
                                    sm: 'column',
                                    md: 'column',
                                }}
                                sx={{ mr: 10 }}
                            >
                                <Typography
                                    color="text.primary"
                                    noWrap
                                    variant="overline"
                                    sx={{ fontSize: 14, fontWeight: 700 }}
                                >
                                    Categories
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    noWrap
                                    sx={{ fontSize: 12 }}
                                >
                                    Art & Entertainment, Business, Education
                                </Typography>
                            </Stack>

                        </Stack>
                    );
                })}
            </Stack>
        </Card>
    );
};

CardBottom.propTypes = {
    jobs: PropTypes.array
};
