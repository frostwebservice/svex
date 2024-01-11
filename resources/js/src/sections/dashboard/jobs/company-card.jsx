import PropTypes from 'prop-types';
import CheckVerified01 from '@untitled-ui/icons-react/build/esm/CheckVerified01';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import { Avatar, Box, Card, CardContent, Link, Stack, SvgIcon, Typography,Divider,Button,Switch } from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { paths } from '@/paths';
import { getInitials } from '@/utils/get-initials';
import { CompanyJobs } from './company-jobs';
import "./manage.css";
export const JobCard = (props) => {
  const { company, ...other } = props;

  return (
    <Card {...other}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          justifyContent="space-between"
          spacing={2}
          direction={{
            xs: 'column',
            sm: 'row'
          }}
        >
          <Stack direction="row" spacing={3}>
            <Avatar
              component={RouterLink}
              href={paths.dashboard.jobs.companies.details}
              src={company.logo}
              variant="rounded"
            >
              {getInitials(company.name)}
            </Avatar>
            <div>
              <Link
                color="text.primary"
                component={RouterLink}
                href={paths.dashboard.jobs.companies.details}
                variant="h6"
              >
                {company.name}
              </Link>
              <Typography variant="body2">
                {company.shortDescription}
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                flexWrap="wrap"
                spacing={3}
                sx={{ mt: 1 }}
              >
                <Stack
                  alignItems="center"
                  spacing={1}
                  direction="row"
                >
                  <SvgIcon color="action">
                    <Users01Icon />
                  </SvgIcon>
                  <Typography
                    color="text.secondary"
                    noWrap
                    variant="overline"
                  >
                    {company.employees}
                  </Typography>
                </Stack>
                {/* <Stack
                  alignItems="center"
                  spacing={1}
                  direction="row"
                >
                  <SvgIcon color="action">
                    <Star01Icon />
                  </SvgIcon>
                  <Typography
                    color="text.secondary"
                    noWrap
                    variant="overline"
                  >
                    {company.averageRating}
                    /5
                  </Typography>
                </Stack> */}
                {company.isVerified && (
                  <Stack
                    alignItems="center"
                    direction="row"
                    spacing={0.5}
                  >
                    <SvgIcon
                      sx={{
                        color: 'background.paper',
                        '& path': {
                          fill: (theme) => theme.palette.success.main,
                          fillOpacity: 1
                        }
                      }}
                    >
                      <CheckVerified01 />
                    </SvgIcon>
                    <Typography
                      color="success"
                      noWrap
                      variant="overline"
                    >
                      Verified
                    </Typography>
                  </Stack>
                )}
              </Stack>
              
            </div>
          </Stack>
          <Stack direction="row">
            <Typography variant="text.secondary" sx={{fontSize:16,pt:0.8}}>
              Open
            </Typography>
            <Switch
              checked={true}
              // onChange={() => handleChange('app_message')}
            />
          </Stack>           

        </Stack>
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
                    Job Title: Instagram Influencer for a clothing brand who can market our products for a week
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
                    <Button size="small"
                      style={{ fontSize: 14 }}
                    >
                      Manage
                    </Button>
                  </Stack>
                  
                {/* </div> */}

              </Stack>
              <Typography variant="inherit" sx={{fontSize:14,px:2}}>
                  Job Brief: We are seeking a talented and creative Marketing Specialist with a strong focus on brand development to join our dynamic marketing team. As a Marketing Specialist, you will be responsible for developing and executing strategic marketing initiatives that enhance our brand presence, engage our target audience, and drive business growth. This role requires a deep understanding of brand strategy, creative thinking, and the ability to translate marketing objectives into impactful campaigns across various channels.
              </Typography>
            </Stack>
          </Card>
          <Card sx={{mt:1}}
            variant="outlined"
            {...other}>
            <Stack divider={<Divider />}>
              <Stack
                alignItems="center"
                direction="row"
                flexWrap="wrap"
                justifyContent="space-between"
                sx={{
                  px: 2,
                  py: 1.5
                }}
              >
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

              </Stack>
              <Stack
                // alignItems="center"
                direction="row"
                // flexWrap="wrap"
                sx={{
                  px: 2,
                  py: 1.5
                }}
              >
                <Stack>
                  <div style={{fontWeight:700,fontSize:14}}>25+</div>
                  <Typography
                    color="text.secondary"
                    variant="caption"
                  >
                    Number of Applicants
                  </Typography>
                </Stack>
                    
                <Stack sx={{ml:5}}>
                  <div style={{fontWeight:700,fontSize:14}}>Actively Hiring</div>
                  <Typography
                    color="text.secondary"
                    variant="caption"
                  >
                    Status
                  </Typography>
                </Stack>

              </Stack>
            </Stack>
          </Card>
        </Box>
      </CardContent>
    </Card>
  );
};

JobCard.propTypes = {
  company: PropTypes.object.isRequired
};
