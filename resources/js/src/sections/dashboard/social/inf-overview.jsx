import PropTypes from 'prop-types';
import { Stack, Unstable_Grid2 as Grid, Box } from '@mui/material';
import InfRightPanel from './inf-right-panel';
import { SocialPostCard } from './social-post-card';
import InfAbout from './inf-about';
import InfStat from './inf-stat';
import { useState, useCallback } from 'react';
import { Tab, Tabs, Card, CardHeader } from '@mui/material';
export const InfOverview = (props) => {
    const handleTabsChange = useCallback((event, value) => {
        setCurrentTab(value);
    }, []);
    const [currentTab, setCurrentTab] = useState('instagramStatistics');

    const { posts = [], profile, ...other } = props;
    const [stat, SetStat] = useState('instagram')
    const tabs = [
        { label: 'Instagram Statistics', value: 'instagramStatistics' }
    ];
    return (
        <>
            <div {...other} style={{ borderBottom: '1px solid #F2F4F7' }}>
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

            <CardHeader title="Stats" className='head-font second-head' />
            <Tabs
                indicatorColor="primary"
                onChange={handleTabsChange}
                scrollButtons="auto"
                textColor="primary"
                value={currentTab}
                variant="scrollable"
            >
                {tabs.map((tab) => (
                    <Tab
                        className='social-font'
                        key={tab.value}
                        label={tab.label}
                        value={tab.value}
                    />
                ))}
            </Tabs>
            <Box>
                {currentTab === 'instagramStatistics' && (
                    <InfStat
                        stat="instagram"
                    />
                )}
            </Box>
        </>
    );
};

InfOverview.propTypes = {
    posts: PropTypes.array,
    profile: PropTypes.object.isRequired
};
