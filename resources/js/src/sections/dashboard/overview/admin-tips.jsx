import Slider from 'react-slick';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  TextField
} from '@mui/material';
import { useState, useEffect } from 'react';
const sliderSettings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const AdminTips = (props) => {
  const { sx } = props;
  const [called, setCalled] = useState(true);
  const [first, setFirst] = useState({ title: '', content: '' });
  const [second, setSecond] = useState({ title: '', content: '' });
  const [third, setThird] = useState({ title: '', content: '' });
  const getTips = () => {
    axios.post('/api/get_tips', {}).then((response) => {
      if (response.data.length == 3) {
        setFirst({
          title: response.data[0].tip_title,
          content: response.data[0].tip_content
        });
        setSecond({
          title: response.data[1].tip_title,
          content: response.data[1].tip_content
        });
        setThird({
          title: response.data[2].tip_title,
          content: response.data[2].tip_content
        });
        setCalled(false);
      }
    });
  };
  if (called) {
    getTips();
  }
  const saveTip = (order) => {
    if (order == 'first') {
      axios
        .post('/api/update_tips', {
          id: 1,
          tip_title: first.title,
          tip_content: first.content
        })
        .then((response) => {});
    } else if (order == 'second') {
      axios
        .post('/api/update_tips', {
          id: 2,
          tip_title: second.title,
          tip_content: second.content
        })
        .then((response) => {});
    } else if (order == 'third') {
      axios
        .post('/api/update_tips', {
          id: 3,
          tip_title: third.title,
          tip_content: third.content
        })
        .then((response) => {});
    }
  };
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
            <div key={first.title}>
              <Box sx={{ flexGrow: 1, p: 1 }}>
                <TextField
                  value={first.title}
                  onChange={(e) =>
                    setFirst({ ...first, title: e.target.value })
                  }
                  fullWidth
                  label="First Tip"
                  name="first_title"
                  placeholder="First Tip"
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box sx={{ flexGrow: 1, p: 1 }}>
                <TextField
                  value={first.content}
                  onChange={(e) =>
                    setFirst({ ...first, content: e.target.value })
                  }
                  fullWidth
                  label="First Tip Content"
                  name="first_content"
                  placeholder="First Tip Content"
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box sx={{ flexGrow: 1, p: 1 }}>
                <Button
                  size="small"
                  sx={{ width: 200 }}
                  variant="contained"
                  onClick={() => saveTip('first')}
                >
                  Save First Tip
                </Button>
              </Box>
            </div>

            <div key={second.title}>
              <Box sx={{ flexGrow: 1, p: 1 }}>
                <TextField
                  value={second.title}
                  onChange={(e) =>
                    setSecond({ ...second, title: e.target.value })
                  }
                  fullWidth
                  label="Second Tip"
                  name="second_title"
                  placeholder="Second Tip"
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box sx={{ flexGrow: 1, p: 1 }}>
                <TextField
                  value={second.content}
                  onChange={(e) =>
                    setSecond({ ...second, content: e.target.value })
                  }
                  fullWidth
                  label="Second Tip Content"
                  name="second_content"
                  placeholder="Second Tip Content"
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box sx={{ flexGrow: 1, p: 1 }}>
                <Button
                  size="small"
                  sx={{ width: 200 }}
                  variant="contained"
                  onClick={() => saveTip('second')}
                >
                  Save Second Tip
                </Button>
              </Box>
            </div>
            <div key={third.title}>
              <Box sx={{ flexGrow: 1, p: 1 }}>
                <TextField
                  value={third.title}
                  onChange={(e) =>
                    setThird({ ...third, title: e.target.value })
                  }
                  fullWidth
                  label="Third Tip"
                  name="third_title"
                  placeholder="Third Tip"
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box sx={{ flexGrow: 1, p: 1 }}>
                <TextField
                  value={third.content}
                  onChange={(e) =>
                    setThird({ ...third, content: e.target.value })
                  }
                  fullWidth
                  label="Third Tip Content"
                  name="third_content"
                  placeholder="Third Tip Content"
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box sx={{ flexGrow: 1, p: 1 }}>
                <Button
                  size="small"
                  sx={{ width: 200 }}
                  variant="contained"
                  onClick={() => saveTip('third')}
                >
                  Save Third Tip
                </Button>
              </Box>
            </div>
          </Slider>
        </Box>
      </CardContent>
    </Card>
  );
};

AdminTips.propTypes = {
  sx: PropTypes.object
};
