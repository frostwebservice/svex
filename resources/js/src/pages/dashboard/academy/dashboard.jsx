import { subDays, subHours, subMinutes, subSeconds } from 'date-fns';
import {
  Box,
  Button,
  Tabs,
  Tab,
  Container,
  Card,
  Stack,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Seo } from '@/components/seo';
import { usePageView } from '@/hooks/use-page-view';
import { useSettings } from '@/hooks/use-settings';
import './inf_finder.css';
import { useCallback, useState, useEffect } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/Youtube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedinIcon from '@mui/icons-material/Linkedin';
import { InfCard } from './inf_card';
import InstagramSearch from '@/sections/dashboard/academy/instagram-search';
import TiktokSearch from '@/sections/dashboard/academy/tiktok-search';
import YoutubeSearch from '@/sections/dashboard/academy/youtube-search';
import TwitterSearch from '@/sections/dashboard/academy/twitter-search';
import PinterestSearch from '@/sections/dashboard/academy/pinterest-search';
import LinkedinSearch from '@/sections/dashboard/academy/linkedin-search';
import { connect, useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import usePagination from '@/utils/pagination';
const now = new Date();

const TiktokIcon = ({ color = '#000000' }) => {
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

const Page = (props) => {
  let obj = {
    time: new Date().getTime(),
    value: 'email',
    expire: 3000000
  };
  // You can only store strings
  let objStr = JSON.stringify(obj);
  localStorage.setItem('time_token', objStr);
  const { results, runTab } = props;
  const dispatch = useDispatch();
  const settings = useSettings();
  const [sortOptions, setSortOptions] = useState([]);
  const [selectedSort, setSelectedSort] = useState('');
  const [infcounter, setInfcounter] = useState(0);
  const [infs, setInfs] = useState([]);
  const [changedFlag, setchangedFlag] = useState(true);
  useEffect(() => {
    if (sortOptions[0]) {
      setSelectedSort(sortOptions[0].value);
    }
  }, [sortOptions]);
  useEffect(() => {
    if (results.searchresults && results.searchresults.result.length) {
      let result = results.searchresults;
      setInfs(arrange(result.result, selectedSort));
    }
    let nextFlag = !changedFlag;
    setchangedFlag(nextFlag);
  }, [selectedSort]);

  useEffect(() => {
    if (results.searchresults) {
      let result = results.searchresults;
      if (result.tab == 'instagram') {
        setSortOptions([
          {
            label: 'Follower Count(High to Low)',
            value: 'follower_order'
          },
          {
            label: 'Engagement(High to Low)',
            value: 'engagement_order'
          },
          {
            label: 'Avg Likes(High to Low)',
            value: 'avglikes_order'
          },
          {
            label: 'Avg Comments(High to Low)',
            value: 'avgcomments_order'
          }
        ]);
        if (sortOptions[0]) {
          setSelectedSort(sortOptions[0].value);
          setInfs(arrange(result.result, sortOptions[0].value));
        }
      } else if (result.tab == 'tiktok') {
        setSortOptions([
          {
            label: 'Follower Count(High to Low)',
            value: 'follower_order'
          },
          {
            label: 'Engagement(High to Low)',
            value: 'engagement_order'
          },
          // {
          //   label: 'Total Likes/Hearts(High to Low)',
          //   value: 'totallikes_order'
          // },
          {
            label: 'Avg Likes(High to Low)',
            value: 'avglikes_order'
          },
          {
            label: 'Avg Comments(High to Low)',
            value: 'avgcomments_order'
          }
        ]);
        if (sortOptions[0])
          setInfs(arrange(result.result, sortOptions[0].value));
        setSelectedSort(sortOptions[0].value);
      } else if (result.tab == 'youtube') {
        setSortOptions([
          {
            label: 'Follower Count(High to Low)',
            value: 'follower_order'
          },
          {
            label: 'Engagement(High to Low)',
            value: 'engagement_order'
          },
          // {
          //   label: 'Total Favorites(High to Low)',
          //   value: 'totalfav_order'
          // },
          {
            label: 'Avg Likes(High to Low)',
            value: 'avglikes_order'
          },
          {
            label: 'Avg Comments(High to Low)',
            value: 'avgcomments_order'
          }
        ]);
        if (sortOptions[0])
          setInfs(arrange(result.result, sortOptions[0].value));
        setSelectedSort(sortOptions[0].value);
      } else if (result.tab == 'twitter') {
        setSortOptions([
          {
            label: 'Follower Count(High to Low)',
            value: 'follower_order'
          },
          {
            label: 'Engagement(High to Low)',
            value: 'engagement_order'
          },
          // {
          //   label: 'Total Likes/Hearts(High to Low)',
          //   value: 'totallikes_order'
          // },
          {
            label: 'Avg Likes(High to Low)',
            value: 'avglikes_order'
          },
          {
            label: 'Avg Comments(High to Low)',
            value: 'avgcomments_order'
          }
        ]);
        if (sortOptions[0])
          setInfs(arrange(result.result, sortOptions[0].value));
        setSelectedSort(sortOptions[0].value);
      } else if (result.tab == 'pinterest') {
        setSortOptions([
          {
            label: 'Follower Count(High to Low)',
            value: 'follower_order'
          },
          // {
          //   label: 'Total Favorites(High to Low)',
          //   value: 'totalfav_order'
          // },
          // {
          //   label: 'Total Likes(High to Low)',
          //   value: 'totallikes_order'
          // },
          {
            label: 'Avg Likes(High to Low)',
            value: 'avglikes_order'
          },
          {
            label: 'Avg Comments(High to Low)',
            value: 'avgcomments_order'
          }
        ]);
        if (sortOptions[0])
          setInfs(arrange(result.result, sortOptions[0].value));
        setSelectedSort(sortOptions[0].value);
      } else if (result.tab == 'linkedin') {
        setSortOptions([
          {
            label: 'Follower Count(High to Low)',
            value: 'follower_order'
          },
          {
            label: 'Connections Count(High to Low)',
            value: 'connections_order'
          },
          {
            label: 'Engagement(High to Low)',
            value: 'engagement_order'
          },
          // {
          //   label: 'Total Likes/Hearts(High to Low)',
          //   value: 'totallikes_order'
          // },
          {
            label: 'Avg Likes(High to Low)',
            value: 'avglikes_order'
          },
          {
            label: 'Avg Comments(High to Low)',
            value: 'avgcomments_order'
          }
        ]);
        if (sortOptions[0])
          setInfs(arrange(result.result, sortOptions[0].value));
        setSelectedSort(sortOptions[0].value);
      }
      setInfcounter(result.result.length);
    }
  }, [dispatch, results]);
  const arrange = (array, option) => {
    if (option == '') return array;
    if (option == 'follower_order')
      return [...array].sort((a, b) => b.follower_count - a.follower_count);
    else if (option == 'engagement_order')
      return [...array].sort((a, b) => b.engagement_rate - a.engagement_rate);
    else if (option == 'avglikes_order')
      return [...array].sort((a, b) => b.avg_like - a.avg_like);
    else if (option == 'avgcomments_order')
      return [...array].sort((a, b) => b.avg_comment - a.avg_comment);
    else if (option == 'connections_order')
      return [...array].sort((a, b) => b.connections - a.connections);
  };
  usePageView();

  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);

  const handleSortChange = (value) => {
    setSelectedSort(value);
  };
  const tabs = [
    { label: 'Instagram', value: 'instagram' },
    { label: 'Tiktok', value: 'tiktok' },
    { label: 'Youtube', value: 'youtube' },
    { label: 'Twitter', value: 'twitter' },
    { label: 'Pinterest', value: 'pinterest' },
    { label: 'Linkedin', value: 'linkedin' }
  ];
  const [currentTab, setCurrentTab] = useState('instagram');
  const renderLabel = (type) => {
    if (type == 'Instagram')
      return (
        <>
          <InstagramIcon style={{ display: 'inline-block' }} />{' '}
          <span>{type}</span>
        </>
      );
    if (type == 'Youtube')
      return (
        <>
          <YoutubeIcon style={{ display: 'inline-block' }} />{' '}
          <span>{type}</span>
        </>
      );
    if (type == 'Tiktok')
      return (
        <>
          <TiktokIcon
            color={currentTab == 'tiktok' ? '#2970FF' : 'grey'}
            style={{ display: 'inline-block' }}
          />{' '}
          <span>{type}</span>
        </>
      );
    if (type == 'Twitter')
      return (
        <>
          <TwitterIcon style={{ display: 'inline-block' }} />{' '}
          <span>{type}</span>
        </>
      );
    if (type == 'Pinterest')
      return (
        <>
          <PinterestIcon style={{ display: 'inline-block' }} />{' '}
          <span>{type}</span>
        </>
      );
    if (type == 'Linkedin')
      return (
        <>
          <LinkedinIcon style={{ display: 'inline-block' }} />{' '}
          <span>{type}</span>
        </>
      );
  };
  useEffect(() => {
    if (runTab) {
      if (runTab.runsavestate) {
        if (runTab.runsavestate.tab != '') {
          setCurrentTab(runTab.runsavestate.tab);
        }
      }
    }
  }, [runTab]);

  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(infs.length / PER_PAGE);
  const _DATA = usePagination(infs, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <Seo title="Dashboard: Influencer Finder Tool" />
      <Box component="main" sx={{ flexGrow: 1 }} style={{}}>
        <Box
          sx={{
            backgroundColor: 'primary.darkest',
            color: 'primary.contrastText',
            position: 'relative',
            marginBottom: '90px'
          }}
        >
          <Container
            maxWidth={settings.stretch ? false : 'xl'}
            style={{
              position: 'inherit',
              bottom: '-76px'
            }}
          >
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
              Easily search and filter for influencers that fit your brand’s
              needs.
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
                    className="custom-tab"
                    sx={{ fontSize: 18 }}
                    key={tab.value}
                    label={renderLabel(tab.label)}
                    value={tab.value}
                  />
                ))}
              </Tabs>
              <Box>
                {currentTab == 'instagram' && <InstagramSearch />}
                {currentTab == 'youtube' && <YoutubeSearch />}
                {currentTab == 'tiktok' && <TiktokSearch />}
                {currentTab == 'twitter' && <TwitterSearch />}
                {currentTab == 'pinterest' && <PinterestSearch />}
                {currentTab == 'linkedin' && <LinkedinSearch />}
              </Box>
            </Card>
          </Container>
        </Box>
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Stack
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            spacing={3}
            sx={{ px: 3, pt: 5 }}
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
                {infcounter} Influencers found
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex'
              }}
            >
              <span
                style={{
                  fontWeight: 500,
                  whiteSpace: 'normal',
                  marginRight: 15,
                  display: 'flex',
                  alignItems: 'center',
                  mr: 5
                }}
              >
                Sort by
              </span>
              <TextField
                sx={{ minWidth: '200px' }}
                label="Sort By"
                name="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                value={selectedSort}
                select
                SelectProps={{ native: true }}
                // value={`${sortBy}|${sortDir}`}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Box>
          </Stack>
          <Box key={changedFlag} sx={{ p: 0.5 }} style={{ boxShadow: 'none' }}>
            {_DATA.currentData().map((data) => {
              return (
                <InfCard
                  key={data.id}
                  influencer={data}
                  currentTab={currentTab}
                />
              );
            })}
          </Box>
          <Pagination
            count={count}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  results: state.searchresult,
  runTab: state.runsavestate
});
export default connect(mapStateToProps)(Page);
