import Briefcase01Icon from '@untitled-ui/icons-react/build/esm/Briefcase01';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  SvgIcon,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
export const OverviewJobs = (props) => {
  const navigate = useNavigate();
  return(
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <SvgIcon color="primary">
          <Briefcase01Icon />
        </SvgIcon>
        <Typography
          color="primary.main"
          sx={{ pl: 1 }}
          variant="subtitle2"
        >
          Jobs
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{ mt: 2 }}
      >
        Post a job
      </Typography>
      <Typography
        color="text.secondary"
        sx={{ mt: 1 }}
        variant="body2"
      >
        Unlock the potential of your brand with a diverse range of skilled influencers, ready to amplify your message and engage audiences.
      </Typography>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="inherit"
        endIcon={(
          <SvgIcon>
            <ArrowRightIcon />
          </SvgIcon>
        )}
        size="small"
        onClick={()=>navigate("/dashboard/jobs/create/")}
      >
        Post a job
      </Button>
    </CardActions>
  </Card>
)};
