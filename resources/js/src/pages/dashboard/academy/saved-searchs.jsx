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
import { useCallback, useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/Youtube';
// import TiktokIcon from '@mui/icons-material/tiktok';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedinIcon from '@mui/icons-material/Linkedin';
import { InfCard } from './inf_card';
import { InstagramSave } from '@/sections/dashboard/academy/instagram-Save';
import { TiktokSave } from '@/sections/dashboard/academy/tiktok-save';
import { YoutubeSave } from '@/sections/dashboard/academy/youtube-save';
import { TwitterSave } from '@/sections/dashboard/academy/twitter-save';
import { PinterestSave } from '@/sections/dashboard/academy/pinterest-save';
import { LinkedinSave } from '@/sections/dashboard/academy/linkedin-save';

const SavedSearchs = () => {
    const settings = useSettings();
    usePageView();
    return (
        <>
            <Seo title="Dashboard: Saved Searchs" />
            <Box
                component="main"
                sx={{ flexGrow: 1 }}
            >


                <Container maxWidth={settings.stretch ? false : 'xl'} >

                    <Typography variant="h4" sx={{ mt: 10, mb: 7, fontSize: '32px' }}>
                        Saved Searchs
                    </Typography>
                    <Card sx={{ my: 4 }}>
                        <InstagramSave />
                    </Card>
                    <Card sx={{ my: 4 }}>

                        <TiktokSave />
                    </Card>
                    <Card sx={{ my: 4 }}>

                        <YoutubeSave />
                    </Card>
                    <Card sx={{ my: 4 }}>

                        <TwitterSave />
                    </Card >
                    <Card sx={{ my: 4 }}>

                        <PinterestSave />
                    </Card >
                    <Card sx={{ my: 4 }}>

                        <LinkedinSave />
                    </Card >



                </Container >

            </Box >
        </>
    );
};

export default SavedSearchs;
