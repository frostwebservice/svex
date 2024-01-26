import PropTypes from 'prop-types';
import CheckVerified01 from '@untitled-ui/icons-react/build/esm/CheckVerified01';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import { Avatar, Box, Card, CardContent, Link, Stack, SvgIcon, Typography,Divider,Button,Switch } from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { paths } from '@/paths';
import { getInitials } from '@/utils/get-initials';
import "./manage.css";
import { getJobs } from '@/actions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getUserProfile } from '@/actions';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
const JobCard = (props) => {
  const { job,active,openBar,userinfo,invite=false, ...other } = props;
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem('email'))
  console.log(userinfo)
  const handleChange = (job) => {
    axios.post('/api/update_jobactivity', {jobID:job.id,isActive:job.is_active})
    .then((response) => {
      dispatch(getJobs(email,1));
    }).catch(e => {
    });
  }
  const getBudget = (job)=>{
    if(job.barter) return job.barter;
    else if(job.revenue) return job.revenue;
    else if (job.custom) return job.custom;
    else{
      if(job.paid=="maxbudget")return "Max Budget";
      else if(job.paid=="flexible") return "Flexible";
      else return "Budget Range";
    };
  }
  const getPaymentType = (job)=>{
    if(job.barter) return "Barter";
    else if(job.revenue) return "Revenue";
    else if (job.custom) return "Custom";
    else return "Paid";
  }
  const getSocialMediaTypes=(str)=>{
    let strs = str?.split(",");
    let res = "";
    for(var i=0;i<strs?.length;i++){
      res+= strs[i].charAt(0)?.toUpperCase()+strs[i].slice(1);
      if(i!=strs.length-1) res+=", ";
    }
    return res;
  }
  const timeSince=(date)=> {

    var seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  const renderSocial = (job) => {
    return(
      <>
      {job.ig?(<Typography
        color="text.secondary"
        style={{ marginLeft:40 }}
        variant="caption"
      >
        Instagram • {job.ig}
      </Typography>):(<></>)}
      {job.tt?(<Typography
        color="text.secondary"
        style={{ marginLeft:40 }}
        variant="caption"
      >
        Tiktok • {job.tt}
      </Typography>):(<></>)}
      {job.yt?(<Typography
        color="text.secondary"
        style={{ marginLeft:40 }}
        variant="caption"
      >
        Youtube • {job.yt}
      </Typography>):(<></>)}
      {job.tw?(<Typography
        color="text.secondary"
        style={{ marginLeft:40 }}
        variant="caption"
      >
        Twitter • {job.tw}
      </Typography>):(<></>)}
      {job.pt?(<Typography
        color="text.secondary"
        style={{ marginLeft:40 }}
        variant="caption"
      >
        Pinterest • {job.pt}
      </Typography>):(<></>)}
      {job.li?(<Typography
        color="text.secondary"
        style={{ marginLeft:40 }}
        variant="caption"
      >
        LinkedIn • {job.li}
      </Typography>):(<></>)}
      {job.bw?(<Typography
        color="text.secondary"
        style={{ marginLeft:40 }}
        variant="caption"
      >
        Blog/Website • {job.bw}
      </Typography>):(<></>)}
      </>


    )
  }
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
              href={"/profile/"+userinfo?.firstname+"-"+userinfo?.lastname+"-"+userinfo?.id}
              src={job.avatar}
              target="_target"

              variant="circle"
            >
              {getInitials(job.firstname)}
            </Avatar>
            <div>
              <Link
                color="text.primary"
                component={RouterLink}
                target="_target"

                href={"/profile/"+userinfo?.firstname+"-"+userinfo?.lastname+"-"+userinfo?.id}
                variant="h6"
              >
                {job.fullname}
              </Link>
              <Typography variant="body2">
                Established since {job.companyfounded}
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
                    {/* {company.employees} */}
                    25 - 75
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
                {job.verification_token && (
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
          {openBar?(
            <Stack direction="row">
              <Typography variant="text.secondary" sx={{fontSize:16,pt:0.8}}>
                {job.is_active==1?"Open":"Close"}
              </Typography>
              <Switch
                checked={true}
                onChange={() => handleChange(job)}
              />
            </Stack>   
          )
          :(
            <></>
          )}
        

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
                    Job Title: {job.title}
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
                      {timeSince(job.created_at)} ago
                    </Typography>
                    <Button size="small"
                      component={RouterLink}
                      href={"/dashboard/jobs/manage/"+job.id}
                      style={{ fontSize: 14 }}
                    >
                      Manage
                    </Button>
                  </Stack>
                  
                {/* </div> */}

              </Stack>
              <Typography variant="inherit" sx={{fontSize:14,px:2}}>
                  Job Brief: {job.brief}
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
                    Niche • {job.niche}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="caption"
                    style={{ marginLeft:40 }}
                  >
                    Social media types • {getSocialMediaTypes(job.socialtypes)}
                  </Typography>
                  {renderSocial(job)}
                  <Typography
                    color="text.secondary"
                    style={{ marginLeft:40 }}
                    variant="caption"
                  >
                    Budget • {getBudget(job)}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    style={{ marginLeft:40 }}
                    variant="caption"
                  >
                    Job type • {job.shoutoutonly=="shoutoutonly"?"Shoutout Only":"Content Creation & Shoutouts"}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    style={{ marginLeft:40 }}
                    variant="caption"
                  >
                    Payment type • {getPaymentType(job)}
                  </Typography>
                </div>

              </Stack>
              <Stack
                justifyContent="space-between"
                direction={{
                  xs: 'column',
                  sm: 'row'
                }}
                sx={{
                  px: 2,
                  py: 1.5
                }}
              >
                <Stack  alignItems="center" direction="row" spacing={3}>
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
                {invite?(
                <Stack  alignItems="center" direction="row" spacing={3}>
                <Button size="small"
                    variant="contained"
                  // component={RouterLink}
                  // href={"/dashboard/jobs"}
                  style={{ fontSize: 14 }}
                >
                  Invite On This Project
                  <SvgIcon fontSize='2'>
                    <ArrowRightIcon />
                  </SvgIcon>
                </Button>
              </Stack>
                ):(<></>)}


              </Stack>
            </Stack>
          </Card>
        </Box>
      </CardContent>
    </Card>
  );
};

JobCard.propTypes = {
  job: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  userinfo: state.profile.userinfo
});

export default connect(mapStateToProps)(JobCard);