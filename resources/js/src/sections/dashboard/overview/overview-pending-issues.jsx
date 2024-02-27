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
import { useSelector } from '@/store';
import { useState, useEffect } from 'react';

export const OverviewPendingIssues = (props) => {
  const { amount } = props;
  const mails = useSelector((state) => state.mail.cntemails);
  const [mailCnt, setMailCnt] = useState(0);

  useEffect(() => {
    if (mails.allIds.length != 0) {
      let cnt = 0;
      mails.allIds.map((emailId) => {
        if (!mails.byId[emailId].isUnread.seen) {
          cnt++;
        }
      });
      setMailCnt(cnt);
    }
  }, [mails]);
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
          <img src="/assets/iconly/iconly-glass-info.svg" width={48} />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="text.secondary" variant="body2">
            Unread Messages
          </Typography>
          <Typography color="text.primary" variant="h4">
            {mailCnt}
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
          onClick={() => navigate('/dashboard/mail')}
        >
          View all message
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewPendingIssues.propTypes = {
  amount: PropTypes.number.isRequired
};
