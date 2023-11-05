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
import "./inf_finder.css"
import { useCallback, useState } from 'react'
import { OutreachCard } from './outreach-card';

const now = new Date();

const sortOptions = [
    {
        label: 'Last update (newest)',
        value: 'updatedAt|desc'
    },
    {
        label: 'Last update (oldest)',
        value: 'updatedAt|asc'
    },
    {
        label: 'Total orders (highest)',
        value: 'totalOrders|desc'
    },
    {
        label: 'Total orders (lowest)',
        value: 'totalOrders|asc'
    }
];
const companies = [
    {
        id: 'FR-58F46',
        averageRating: 4.3,
        employees: '25-50',
        isVerified: true,
        jobs: [
            {
                id: '52cf72df2a519538d3d8a18d',
                currency: '$',
                isRemote: true,
                publishedAt: subHours(now, 1).getTime(),
                salaryMax: '600',
                salaryMin: '400',
                title: 'Instagram Influencer for a clothing brand who can market our products for a week',
                jobType: 'Content creation & Shortouts',
                paymentType: 'paid'
            }
        ],
        logo: '/assets/avatars/brandlogo.png',
        name: 'Canada Goose',
        shortDescription: 'Established since 2010'
    },
    {
        id: 'FR-58F46',
        averageRating: 4.3,
        employees: '25-50',
        isVerified: true,
        jobs: [
            {
                id: '52cf72df2a519538d3d8a18d',
                currency: '$',
                isRemote: true,
                publishedAt: subHours(now, 1).getTime(),
                salaryMax: '600',
                salaryMin: '400',
                title: 'Instagram Influencer for a clothing brand who can market our products for a week',
                jobType: 'Content creation & Shortouts',
                paymentType: 'paid'
            }
        ],
        logo: '/assets/avatars/brandlogo.png',
        name: 'Canada Goose',
        shortDescription: 'Established since 2010'
    }
];
const OutreachGroups = () => {
    const settings = useSettings();
    usePageView();

    const handleSortChange = useCallback((event) => {
        // const [sortBy, sortDir] = event.target.value.split('|');

        // onSortChange?.({
        //   sortBy,
        //   sortDir
        // });
    }, []);

    return (
        <>
            <Seo title="Dashboard: Favorite Influencers" />
            <Box
                component="main"
                sx={{ flexGrow: 1 }}
            >
                <Container maxWidth={settings.stretch ? false : 'xl'} >

                    <Stack
                        alignItems="center"
                        direction="row"
                        flexWrap="wrap"
                        spacing={3}
                    // sx={{ p: 3 }}
                    >
                        <Box
                            component="form"
                            // onSubmit={handleQueryChange}
                            sx={{ flexGrow: 1 }}
                        >
                            <Typography variant="h4" sx={{ mt: 10, mb: 7, fontSize: '32px' }}>
                                Outreach Groups
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex'
                        }}>
                            <Button
                                size="small"
                                className="right-btn"
                                variant="contained"
                            >
                                Create New Outreach Group
                            </Button>
                        </Box>
                    </Stack>
                    <Box sx={{ p: 0.5 }} style={{ boxShadow: 'none' }}>

                        {companies.map((company) => (
                            <OutreachCard
                                key={company.id}
                                company={company}
                            />
                        ))}

                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default OutreachGroups;

