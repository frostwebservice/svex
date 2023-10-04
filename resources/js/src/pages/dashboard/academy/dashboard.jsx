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
import { InstagramSearch } from '@/sections/dashboard/academy/instagram-search';
import { TiktokSearch } from '@/sections/dashboard/academy/tiktok-search';
import { YoutubeSearch } from '@/sections/dashboard/academy/youtube-search';

const now = new Date();

const TiktokIcon = ({ color = "#000000" }) => {
  return (

    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="24px"
      height="24px"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>


  );
};
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
  }
];
// }, [onSortChange]);
const Page = () => {
  const settings = useSettings();
  const courses = useCourses();

  usePageView();

  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);

  const handleSortChange = useCallback((event) => {
    // const [sortBy, sortDir] = event.target.value.split('|');

    // onSortChange?.({
    //   sortBy,
    //   sortDir
    // });
  }, []);
  const tabs = [
    { label: "Instagram", value: "instagram" },
    { label: "Tiktok", value: "tiktok" },
    { label: "Youtube", value: "youtube" },
    { label: "Twitter", value: "twitter" },
    { label: "Pinterest", value: "pinterest" },
    { label: "Linkedin", value: "linkedin" },
  ]
  const [currentTab, setCurrentTab] = useState("instagram");
  const renderLabel = (type) => {
    console.log(type)
    if (type == "Instagram") return (<><InstagramIcon style={{ display: "inline-block" }} /> <span>{type}</span></>);
    if (type == "Youtube") return (<><YoutubeIcon style={{ display: "inline-block" }} /> <span>{type}</span></>);
    if (type == "Tiktok") return (<><TiktokIcon color={currentTab == "tiktok" ? "#2970FF" : "grey"} style={{ display: "inline-block" }} /> <span>{type}</span></>);
    if (type == "Twitter") return (<><TwitterIcon style={{ display: "inline-block" }} /> <span>{type}</span></>);
    if (type == "Pinterest") return (<><PinterestIcon style={{ display: "inline-block" }} /> <span>{type}</span></>);
    if (type == "Linkedin") return (<><LinkedinIcon style={{ display: "inline-block" }} /> <span>{type}</span></>);


  }
  return (
    <>
      <Seo title="Dashboard: Influencer Finder Tool" />
      <Box
        component="main"
        sx={{ flexGrow: 1 }}
      >

        <Box
          sx={{
            backgroundColor: 'primary.darkest',
            color: 'primary.contrastText',
            py: '120px'
          }}
        >
          <Container maxWidth="xl">
            <Typography
              color="inherit"
              variant="h5"
              style={{ fontSize: 32, textAlign: 'center' }}
            >
              Connect with the Best Social Media Influencers!
            </Typography>
            <Typography
              color="inherit"
              sx={{ mt: 1, mb: 6 }}
              style={{ fontSize: 18, textAlign: 'center' }}
            >
              Easily search and filter for influencers that fit your brand’s needs.
            </Typography>
            <Card>
              <Tabs
                indicatorColor="primary"
                onChange={handleTabsChange}
                scrollButtons="auto"
                textColor="primary"
                sx={{
                  p: 3
                }}
                value={currentTab}
                variant="scrollable"
              >
                {tabs.map((tab) => (
                  <Tab
                    className='custom-tab'
                    sx={{ fontSize: 18 }}
                    key={tab.value}
                    label={renderLabel(tab.label)}
                    value={tab.value}
                  />
                ))}
              </Tabs>
              <Box>
                {currentTab == 'instagram' && (
                  <InstagramSearch />
                )}
                {currentTab == 'youtube' && (
                  <YoutubeSearch />

                )}
                {currentTab == 'tiktok' && (
                  <TiktokSearch />

                )}
                {currentTab == 'twitter' && (
                  <InstagramSearch />
                )}
                {currentTab == 'pinterest' && (
                  <InstagramSearch />
                )}
                {currentTab == 'linkedin' && (
                  <InstagramSearch />
                )}
              </Box>


            </Card>


          </Container>
        </Box>
        <Container maxWidth={settings.stretch ? false : 'xl'} >

          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            spacing={3}
            sx={{ p: 3 }}
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
              {/* <OutlinedInput
                defaultValue=""
                fullWidth
                // inputProps={{ ref: queryRef }}
                placeholder="Search customers"
                startAdornment={(
                  <InputAdornment position="start">
                    <SvgIcon>
                      <SearchMdIcon />
                    </SvgIcon>
                  </InputAdornment>
                )}
              /> */}
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
          {/* <Box sx={{ py: '64px' }}>
          <Container maxWidth={settings.stretch ? false : 'xl'}>
            <Grid
              container
              spacing={{
                xs: 3,
                lg: 4
              }}
            >
              <Grid xs={12}>
                <Typography variant="h6">
                  Welcome back, Anika
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ mt: 1 }}
                  variant="body2"
                >
                  Nice progress so far, keep it up!
                </Typography>
              </Grid>
              <Grid
                xs={12}
                md={9}
              >
                <AcademyDailyProgress
                  timeCurrent={20}
                  timeGoal={35}
                />
              </Grid>
              <Grid
                xs={12}
                md={3}
              >
                <AcademyFind />
              </Grid>
              <Grid xs={12}>
                <Stack
                  alignItems="flex-start"
                  direction="row"
                  justifyContent="space-between"
                  spacing={3}
                >
                  <Typography variant="h6">
                    My Courses
                  </Typography>
                  <Button
                    color="inherit"
                    endIcon={(
                      <SvgIcon>
                        <ArrowRightIcon />
                      </SvgIcon>
                    )}
                  >
                    See all
                  </Button>
                </Stack>
              </Grid>
              {courses.map((course) => (
                <Grid
                  key={course.id}
                  xs={12}
                  md={4}
                >
                  <CourseCard course={course} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box> */}
        </Container>
      </Box>
    </>
  );
};

export default Page;
