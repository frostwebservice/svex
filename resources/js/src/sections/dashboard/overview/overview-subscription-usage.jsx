import PropTypes from 'prop-types';
import { Box, Card, CardHeader, Tab, Tabs,  Unstable_Grid2 as Grid ,CardMedia} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chart } from '@/components/chart';
import "./custom.css";
export const OverviewSubscriptionUsage = (props) => {
  const { } = props;

  return (
    <Card>
      <CardHeader
        title="Latest Blog Posts"

      />
      <Grid
        container
        disableEqualOverflow
        spacing={{
          xs: 3,
          lg: 4
        }}
        style={{padding:"0 23px"}}
      >
        <Grid
          xs={12}
          md={4}
        >
          <Card className='square-card'>
            <div style={{ position: "relative" }}>
              <CardMedia style={{ height: "350px" }}   component="img" image={"/assets/gallery/gallery-1.jpg"} title="Pancakes" alt="Pancakes"/> 
              <div style={{position: "absolute", color: "white",bottom: 15,width:'85%',left: "50%",transform: "translateX(-50%)",}}> Top 3 Influencer Marketing Trends to Watch Out for in 2024</div>
            </div>
          </Card>
        </Grid>
        <Grid
          xs={12}
          md={4}
        >
          <Card className='square-card'>
            <div style={{ position: "relative" }}>
              <CardMedia style={{ height: "350px"  }}   component="img" image={"/assets/gallery/gallery-2.jpg"} title="Pancakes" alt="Pancakes"/> 
              <div style={{position: "absolute", color: "white",bottom: 15,width:'85%',left: "50%",transform: "translateX(-50%)",}}> 11 Influencer Marketing Trends and Tips for Success in 2024</div>
            </div>
          </Card>
        </Grid>
        <Grid
          xs={12}
          md={4}
        >
          <Card className='square-card'>
            <div style={{ position: "relative" }}>
              <CardMedia style={{ height: "350px"  }}   component="img" image={"/assets/gallery/gallery-3.jpg"} title="Pancakes" alt="Pancakes"/> 
              <div style={{position: "absolute", color: "white",bottom: 15,width:'85%',left: "50%",transform: "translateX(-50%)",}}> How to Find Instagram Influencers in Your Niche</div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

OverviewSubscriptionUsage.propTypes = {
  chartSeries: PropTypes.array.isRequired
};
