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
import { InfCard } from './inf_card';

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
const useCourses = () => {
  return [
    {
      id: 'c3a2b7331eef8329e2a87c79',
      description: 'Introductory course for design and framework basics',
      duration: '78 hours',
      media: '/assets/courses/course-1.png',
      progress: 23,
      title: 'React and Redux Tutorial'
    },
    {
      id: '3f02f696f869ecd1c68e95a3',
      description: 'Introductory course for design and framework basics',
      duration: '14 hours',
      media: '/assets/courses/course-2.png',
      progress: 52,
      title: 'React and Express Tutorial'
    },
    {
      id: 'f6e76a6474038384cd9e032b',
      description: 'Introductory course for design and framework basics',
      duration: '21 hours',
      media: '/assets/courses/course-3.png',
      progress: 90,
      title: 'React Crash Course: Beginner'
    }
  ];
};
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
const Favinfs = () => {
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
          <Typography variant="h4" sx={{ mt: 10, mb: 7, fontSize: '32px' }}>
            Favorite Influencers
          </Typography>
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
              <Typography
                color="#00359E"
                sx={{ mt: 1, fontSize: 28, fontWeight: 700 }}
                variant="body2"
              >
                42 Influencers found
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex'
            }}>
              <span style={{
                fontWeight: 500, whiteSpace: 'normal', marginRight: 15, display: 'flex'
                , alignItems: 'center', mr: 5
              }}>Sort by</span>
              <TextField
                label="Sort By"
                name="sort"
                onChange={handleSortChange}
                select
                SelectProps={{ native: true }}
              // value={`${sortBy}|${sortDir}`}
              >
                {sortOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Box>
          </Stack>
          <Box sx={{ p: 0.5 }} style={{ boxShadow: 'none' }}>

            {companies.map((company) => (
              <InfCard
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

export default Favinfs;

