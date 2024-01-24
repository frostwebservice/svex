import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react';
const sliderSettings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const OverviewTips = (props) => {
  const { sx } = props;
  const [tips, setTips] = useState([]);
  const [called, setCalled] = useState(true);

  const getTips = () => {
    axios.post('/api/get_tips', {}).then((response) => {
      setTips(response.data);
    });
  };
  if (called) {
    getTips();
    setCalled(false);
  }
  return (
    <Card sx={sx}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ mb: 6 }}>
          <img src="/assets/next-tip.svg" />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            '& .slick-slider': {
              cursor: 'grab'
            },
            '& .slick-slider, & .slick-list, & .slick-track': {
              height: '100%'
            },
            '& .slick-dots': {
              top: -50,
              bottom: 'unset',
              left: -10,
              textAlign: 'left'
            }
          }}
        >
          <Slider {...sliderSettings}>
            {tips.map((tip) => (
              <div key={tip.tip_title}>
                <Typography variant="h6">{tip.tip_title}</Typography>
                <Typography
                  color="text.secondary"
                  sx={{ mt: 1 }}
                  variant="body1"
                >
                  {tip.tip_content}
                </Typography>
              </div>
            ))}
          </Slider>
        </Box>
      </CardContent>
    </Card>
  );
};

OverviewTips.propTypes = {
  sx: PropTypes.object
};
