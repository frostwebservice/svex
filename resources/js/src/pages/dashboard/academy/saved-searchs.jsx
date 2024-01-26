import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import { subDays, subHours, subMinutes, subSeconds } from 'date-fns';

import {
    Box,
    Button,
    Tabs,
    Tab,
    Container,
    Card,
    Stack,
    SvgIcon,
    InputAdornment,
    OutlinedInput,
    TextField,
    Typography,
    Unstable_Grid2 as Grid
} from '@mui/material';
import { Seo } from '@/components/seo';
import { usePageView } from '@/hooks/use-page-view';
import { useSettings } from '@/hooks/use-settings';
import { AcademyDailyProgress } from '@/sections/dashboard/academy/academy-daily-progress';
import { AcademyFind } from '@/sections/dashboard/academy/academy-find';
import { CourseCard } from '@/sections/dashboard/academy/course-card';
import "./inf_finder.css"
import { useCallback } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/Youtube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedinIcon from '@mui/icons-material/Linkedin';
import { InfCard } from './inf_card';
import InstagramSave from '@/sections/dashboard/academy/instagram-Save';
import TiktokSave from '@/sections/dashboard/academy/tiktok-save';
import YoutubeSave from '@/sections/dashboard/academy/youtube-save';
import TwitterSave from '@/sections/dashboard/academy/twitter-save';
import PinterestSave from '@/sections/dashboard/academy/pinterest-save';
import LinkedinSave from '@/sections/dashboard/academy/linkedin-save';
import { useDispatch, connect } from "react-redux";
import { useState, useEffect } from 'react';
import { getSearchs } from '@/actions';

const SavedSearchs = (props) => {
    const { searchs } = props
    const settings = useSettings();
    const dispatch = useDispatch()
    usePageView();
    const email = JSON.parse(localStorage.getItem('email'))
    useEffect(() => {
        dispatch(getSearchs({ email: email }));

    }, [dispatch])
    return (
        <>
            <Seo title="Dashboard: Saved Searchs" />
            <Box
                component="main"
                sx={{ flexGrow: 1 }}
            >
                <Container maxWidth={settings.stretch ? false : 'xl'} >

                    <Typography variant="h4" sx={{ mt: 8, mb: 4, fontSize: '32px' }}>
                        Saved Searchs
                    </Typography>
                    {searchs && searchs.map((search) => {
                        if (search.tab == "instagram") return (
                            <Card sx={{ my: 4 }} 
                            key={search.id}
                            >
                                <InstagramSave
                                    search={search}
                                />
                            </Card>
                        )
                        else if (search.tab == "tiktok") return (
                            <Card sx={{ my: 4 }}
                            key={search.id}
                            
                            >
                                <TiktokSave
                                    search={search}
                                />
                            </Card>
                        )
                        else if (search.tab == "youtube") return (
                            <Card sx={{ my: 4 }}
                            key={search.id}
                            
                            >
                                <YoutubeSave
                                    search={search}
                                />
                            </Card>
                        )
                        else if (search.tab == "twitter") return (
                            <Card sx={{ my: 4 }}
                            key={search.id}
                            
                            >
                                <TwitterSave
                                    search={search}
                                />
                            </Card >
                        )
                        else if (search.tab == "pinterest") return (
                            <Card sx={{ my: 4 }}
                            key={search.id}
                            
                            >
                                <PinterestSave
                                    search={search}
                                />
                            </Card >
                        )
                        else if (search.tab == "linkedin") return (
                            <Card sx={{ my: 4 }}
                            key={search.id}
                            
                            >
                                <LinkedinSave
                                    search={search}
                                />
                            </Card >
                        )

                    })}
                </Container >

            </Box >
        </>
    );
};

const mapStateToProps = state => ({
    searchs: state.searchs.searchs
})
export default connect(mapStateToProps)(SavedSearchs);