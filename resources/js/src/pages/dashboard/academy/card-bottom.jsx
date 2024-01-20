import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';
import { Button, Card, Divider, Stack, Typography } from '@mui/material';

export const CardBottom = (props) => {
    const { followers, engagement, category, ...other } = props;

    return (
        <Card
            variant="outlined"
            {...other}>
            <Stack divider={<Divider />}>
                <Stack
                    alignItems="center"
                    direction="row"
                    flexWrap="wrap"
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
                            // variant="overline"
                            sx={{ fontSize: 14, fontWeight: 700 }}
                        >
                            {followers}
                        </Typography>
                        <Typography
                            color="text.secondary"
                            noWrap
                            sx={{ fontSize: 12 }}
                            style={{marginTop:0}}
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
                            // variant="overline"
                            sx={{ fontSize: 14, fontWeight: 700 }}
                        >
                            {engagement}
                        </Typography>
                        <Typography
                            color="text.secondary"
                            style={{marginTop:0}}
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
                            // variant="overline"
                            sx={{ fontSize: 14, fontWeight: 700 }}
                        >
                            Categories
                        </Typography>
                        <Typography
                            color="text.secondary"
                            style={{marginTop:0}}
                            noWrap
                            sx={{ fontSize: 12 }}
                        >
                            {category}
                        </Typography>
                    </Stack>

                </Stack>


            </Stack>
        </Card>
    );
};

// CardBottom.propTypes = {
//     jobs: PropTypes.array
// };
