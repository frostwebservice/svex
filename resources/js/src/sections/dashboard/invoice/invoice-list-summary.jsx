import ClockIcon from '@untitled-ui/icons-react/build/esm/Clock';
import ReceiptCheckIcon from '@untitled-ui/icons-react/build/esm/ReceiptCheck';
import ReceiptIcon from '@untitled-ui/icons-react/build/esm/Receipt';
import { useState } from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

export const InvoiceListSummary = (props) => {
  const { count, items } = props;
  const { once, setOnce } = useState(0);
  const [total, setTotal] = useState(0);
  if (once == 0) {
    const sum = items.reduce((accumulator, object) => {
      return accumulator + object.totalAmount;
    }, 0);
    setTotal(sum);
    setOnce(1);
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Stack alignItems="center" direction="row" spacing={2}>
                <Avatar
                  sx={{
                    height: 48,
                    width: 48
                  }}
                >
                  <ReceiptIcon />
                </Avatar>
                <div>
                  <Typography color="text.secondary" variant="body2">
                    Total
                  </Typography>
                  <Typography variant="h6">${total}</Typography>
                  <Typography color="text.secondary" variant="body2">
                    from {count} invoices
                  </Typography>
                </div>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Stack alignItems="center" direction="row" spacing={2}>
                <Avatar
                  sx={{
                    backgroundColor: 'success.lightest',
                    color: 'success.main',
                    height: 48,
                    width: 48
                  }}
                >
                  <ReceiptCheckIcon />
                </Avatar>
                <div>
                  <Typography color="text.secondary" variant="body2">
                    Paid
                  </Typography>
                  <Typography variant="h6">${total}</Typography>
                  <Typography color="text.secondary" variant="body2">
                    from {count} invoices
                  </Typography>
                </div>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Stack alignItems="center" direction="row" spacing={2}>
                <Avatar
                  sx={{
                    backgroundColor: 'warning.lightest',
                    color: 'warning.main',
                    height: 48,
                    width: 48
                  }}
                >
                  <ClockIcon />
                </Avatar>
                <div>
                  <Typography color="text.secondary" variant="body2">
                    Pending
                  </Typography>
                  <Typography variant="h6">$0.00</Typography>
                  <Typography color="text.secondary" variant="body2">
                    from 0 invoices
                  </Typography>
                </div>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
