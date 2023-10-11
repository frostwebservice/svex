import PropTypes from 'prop-types';
import { Stack, Unstable_Grid2 as Grid } from '@mui/material';
import InfRightPanel from './inf-right-panel';
import { SocialPostCard } from './social-post-card';
import InfAbout from './inf-about';

export const InfOverview = (props) => {
    const { posts = [], profile, ...other } = props;

    return (
        <div {...other}>
            <Grid
                container
            // spacing={4}
            >
                <Grid
                    lg={7}
                    xs={12}
                >
                    <InfAbout
                        currentCity={profile.currentCity}
                        currentJobCompany={profile.currentJobCompany}
                        currentJobTitle={profile.currentJobTitle}
                        email={profile.email}
                        originCity={profile.originCity}
                        previousJobCompany={profile.previousJobCompany}
                        previousJobTitle={profile.previousJobTitle}
                        profileProgress={profile.profileProgress}
                        quote={profile.quote}
                    />
                </Grid>
                <Grid
                    lg={5}
                    xs={12}
                >
                    <Stack spacing={3}>
                        <InfRightPanel />

                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
};

InfOverview.propTypes = {
    posts: PropTypes.array,
    profile: PropTypes.object.isRequired
};
