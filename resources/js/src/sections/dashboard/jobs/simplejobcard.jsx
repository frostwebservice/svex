import PropTypes from 'prop-types';
import CheckVerified01 from '@untitled-ui/icons-react/build/esm/CheckVerified01';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import { Avatar, Box, Card, CardContent, Link, Stack, SvgIcon, Typography,Divider,Button,Switch } from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { paths } from '@/paths';
import { getInitials } from '@/utils/get-initials';
import { CompanyJobs } from './company-jobs';
import { connect } from 'react-redux';
import "./manage.css";
const SimpleJobCard = (props) => {
  const { jobs,order, ...other } = props;

  const job = jobs?.filter(obj => {
    return obj.id == order
  })
  console.log(job)
  return (
    <Card {...other}>
      <CardContent>

        <Box sx={{ mt: 2 }}>
          <Card
            variant="outlined"
            {...other}>
            <Stack divider={<Divider />}>
              <Stack
                alignItems="flex-start"
                direction="row"
                flexWrap="wrap"
                justifyContent="space-between"
                sx={{
                  px: 2,
                  py: 1.5
                }}
              >
                {/* <div className='top'> */}
                  <Typography variant="subtitle1" sx={{fontSize:16}}>
                    {job[0]?.title}
                  </Typography>
                  <Stack
                    alignItems="center"
                    direction="row"
                    spacing={2}
                    // className='right-panel'
                  >
                    <Typography
                      color="text.secondary"
                      variant="caption"
                      style={{ fontSize: 12 }}
                    >
                      5d ago
                    </Typography>
                  </Stack>
                  <div>
                  <Typography
                    color="text.secondary"
                    variant="caption"
                  >
                    Niche • Clothing
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="caption"
                    style={{ marginLeft:40 }}
                  >
                    Social media types • Instagram, Tiktok 
                  </Typography>
                  <Typography
                    color="text.secondary"
                    style={{ marginLeft:40 }}
                    variant="caption"
                  >
                    Instagram • 3 permanent posts & # stories
                  </Typography>
                  <Typography
                    color="text.secondary"
                    style={{ marginLeft:40 }}
                    variant="caption"
                  >
                    Tiktok • 1 permanent tiktok post
                  </Typography>
                  <Typography
                    color="text.secondary"
                    style={{ marginLeft:40 }}
                    variant="caption"
                  >
                    Budget • $400-$600
                  </Typography>
                  <Typography
                    color="text.secondary"
                    style={{ marginLeft:40 }}
                    variant="caption"
                  >
                    Job type • Content creation & Shoutouts
                  </Typography>
                  <Typography
                    color="text.secondary"
                    style={{ marginLeft:40 }}
                    variant="caption"
                  >
                    Payment type • Paid
                  </Typography>
                </div>
                {/* </div> */}

              </Stack>
            </Stack>
          </Card>
        </Box>
      </CardContent>
    </Card>
  );
};


const mapStateToProps = state => ({
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(SimpleJobCard);