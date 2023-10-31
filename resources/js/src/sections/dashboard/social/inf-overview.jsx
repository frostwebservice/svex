import PropTypes from 'prop-types';
import { Stack, Unstable_Grid2 as Grid, Box } from '@mui/material';
import InfRightPanel from './inf-right-panel';
import { SocialPostCard } from './social-post-card';
import InfAbout from './inf-about';
import InfStatIg from './inf-stat-ig';
import InfStatYt from './inf-stat-yt';
import InfStatTt from './inf-stat-tt';
import InfStatTw from './inf-stat-tw';
import InfStatPt from './inf-stat-pt';
import { useState, useCallback } from 'react';
import { Tab, Tabs, Card, CardHeader } from '@mui/material';
import { connect } from 'react-redux'
var firstrender = 0
const InfOverview = (props) => {
    const { posts = [], profile, socialinfo, total, changeStat, ...other } = props;

    const handleTabsChange = useCallback((event, value) => {
        changeStat(value)
        setCurrentTab(value);
    }, []);
    const [currentTab, setCurrentTab] = useState(total == "total" ? socialinfo["basic"] : window.location.pathname.split("/")[3]);
    // changeStat(total == "total" ? socialinfo["basic"] : window.location.pathname.split("/")[3])

    const [stat, SetStat] = useState('instagram')
    var tabs = []
    if (window.location.pathname.split("/")[3]) {
        if (total == "total") {

            if (socialinfo["instagram"])
                tabs.push({ label: "Instagram statistics", value: "instagram" })
            if (socialinfo["youtube"])
                tabs.push({ label: "Youtube statistics", value: "youtube" })
            if (socialinfo["tiktok"])
                tabs.push({ label: "Tiktok statistics", value: "tiktok" })
            if (socialinfo["twitter"])
                tabs.push({ label: "Twitter statistics", value: "twitter" })
            if (socialinfo["pinterest"])
                tabs.push({ label: "Pinterest statistics", value: "pinterest" })

            if (currentTab != socialinfo["basic"] && firstrender == 0) {
                setCurrentTab(socialinfo["basic"])
                changeStat(socialinfo["basic"])

                firstrender = 1;
            }


        }
        else {
            tabs = [
                { label: window.location.pathname.split("/")[3].charAt(0).toUpperCase() + window.location.pathname.split("/")[3].slice(1) + ' Statistics', value: window.location.pathname.split("/")[3] }
            ];
            if (currentTab != window.location.pathname.split("/")[3]) setCurrentTab(window.location.pathname.split("/")[3])
        }

    }


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
                            total={total}
                        />
                    </Grid>
                    <Grid
                        lg={5}
                        xs={12}
                    >
                        <Stack spacing={3}>
                            <InfRightPanel total={total} statkind={window.location.pathname.split("/")[3]} />
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
                {currentTab == 'instagram' && (
                    <InfStatIg total={total} />
                )}
                {currentTab == 'youtube' && (
                    <InfStatYt total={total} />
                )}
                {currentTab == 'tiktok' && (
                    <InfStatTt total={total} />
                )}
                {currentTab == 'twitter' && (
                    <InfStatTw total={total} />
                )}
                {currentTab == 'pinterest' && (
                    <InfStatPt total={total} />
                )}
            </Box>
        </>
    );
};

InfOverview.propTypes = {
    posts: PropTypes.array,
    profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    socialinfo: state.profile.socialinfo
});
export default connect(mapStateToProps)(InfOverview);