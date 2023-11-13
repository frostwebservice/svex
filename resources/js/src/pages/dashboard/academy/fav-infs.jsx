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
import { useEffect } from 'react';
import { getFavs } from '@/actions';
import { useDispatch, connect } from "react-redux";


const now = new Date();

const sortOptions = [
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
];

const Favinfs = (props) => {
  const { results, runTab } = props;
  const [infs, setInfs] = useState([])
  const dispatch = useDispatch()
  const settings = useSettings();
  const [counter, setCounter] = useState(0)
  const [sortOrder, setSortOrder] = useState("follower_order")
  usePageView();
  const email = JSON.parse(localStorage.getItem('email'));

  const handleSortChange = (order) => {
    setSortOrder(order);
    console.log(infs)
  };
  useEffect(() => {
    dispatch(getFavs({ email: email }));

  }, [dispatch])
  useEffect(() => {
    if (results.favs) {
      let result = results.favs
      setInfs(result)
      setCounter(result.length)
    }

  }, [results])
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
                {counter} Influencers found
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
                onChange={(e) => handleSortChange(e.target.value)}
                select
                SelectProps={{ native: true }}
                value={sortOrder}
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

            {infs.map((inf) => (
              <InfCard
                key={inf.id}
                influencer={inf.data[0]}
                currentTab={inf.tab}

              />
            ))}

          </Box>
        </Container>
      </Box>
    </>
  );
};
const mapStateToProps = state => ({
  results: state.favs,
})
export default connect(mapStateToProps)(Favinfs);

