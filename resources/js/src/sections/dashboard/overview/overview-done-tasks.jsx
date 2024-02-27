import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
export const OverviewDoneTasks = (props) => {
  const { amount } = props;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios
      .post('/api/get_total_infs', {})
      .then((response) => {
        setTotal(response.data);
      })
      .catch((e) => {});
  }, []);
  const navigate = useNavigate();
  return (
    <Card>
      <Stack
        alignItems="center"
        direction={{
          xs: 'column',
          sm: 'row'
        }}
        spacing={3}
        sx={{
          px: 4,
          py: 3
        }}
      >
        <div>
          <img src="/assets/iconly/iconly-glass-tick.svg" width={48} />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="text.secondary" variant="body2">
            Fresh Influencers
          </Typography>
          <Typography color="text.primary" variant="h4">
            {total}
          </Typography>
        </Box>
      </Stack>
      <Divider />
      <CardActions>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          onClick={() => navigate('/inf-finder')}
        >
          Search All Influencers
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewDoneTasks.propTypes = {
  amount: PropTypes.number.isRequired
};
