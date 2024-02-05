import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { format } from 'date-fns';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import { connect, useDispatch } from 'react-redux';
import { RouterLink } from '@/components/router-link';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Link,
  Stack,
  TextField,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import $ from 'jquery';
import { PropertyList } from '@/components/property-list';
import { PropertyListItem } from '@/components/property-list-item';
import { AccountPlanIcon } from './account-plan-icon';
// import { getBillingInfo } from '@/actions';
import './bill.css';
import OrderSummary from './payments/ordersummary';
import PaypalForm from './payments/paypalForm';

var tmpBilling = {
  billing_name: '',
  card_number: '',
  country: '',
  zip_code: ''
};
const plans = [
  {
    id: 'startup',
    icon: <AccountPlanIcon name="startup" />,
    name: 'Free Plan',
    price: 0
  },
  {
    id: 'standard',
    icon: <AccountPlanIcon name="standard" />,
    name: 'Standard',
    price: 99
  }
];

const AccountBillingSettings = (props) => {
  const { plan, userinfo, billinginfo } = props;
  const [selectedPlan, setSelectedPlan] = useState(
    userinfo.paid == '1' ? 'standard' : 'startup'
  );
  const [currentPlan, setCurrentPlan] = useState(
    userinfo.paid == '1' ? 'standard' : 'startup'
  );

  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    axios.post('/api/get_invoices', {}).then((response) => {
      setInvoices(response.data);
    });
  }, [userinfo]);
  const [isEdit, setIsEdit] = useState(false);
  const [billing, setBilling] = useState(billinginfo);
  const [paytype, setPaytype] = useState('stripe');
  const payNow = () => {
    $('#submit')[0].click();
  };
  const handlePaytype = (p) => {
    setPaytype(p);
  };
  const handleEdit = (status) => {
    setBilling(billinginfo);
    setIsEdit((prevState) => !prevState);
    if (!status) return;
    axios
      .post('/api/update_billing_info', {
        value: billing,
        user_email: JSON.parse(localStorage.getItem('email'))
      })
      .then((response) => {
        // dispatch(getBillingInfo({ email }));
      })
      .catch((error) => {
        console.error('Error getting Notify Settings', error);
      });
  };
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem('email'));
  const cancelPay = () => {
    setSelectedPlan('startup');
  };
  useEffect(() => {
    setCurrentPlan(userinfo.paid == '1' ? 'standard' : 'startup');
    setSelectedPlan(userinfo.paid == '1' ? 'standard' : 'startup');
  }, [userinfo]);
  return (
    <Stack spacing={4} {...props}>
      <Card>
        <CardHeader
          title="Change Plan"
          subheader="You can upgrade and downgrade whenever you want"
        />
        <CardContent sx={{ pt: 0 }}>
          <div>
            <Grid container spacing={3}>
              {plans.map((plan) => {
                const isSelected = plan.id === selectedPlan;
                const isCurrent = plan.id === currentPlan;
                const price = numeral(plan.price).format('$0,0.00');

                return (
                  <Grid key={plan.id} xs={12} sm={4}>
                    <Card
                      onClick={() => setSelectedPlan(plan.id)}
                      sx={{
                        cursor: 'pointer',
                        ...(isSelected && {
                          borderColor: 'primary.main',
                          borderWidth: 2,
                          m: '-1px'
                        })
                      }}
                      variant="outlined"
                    >
                      <CardContent>
                        <Box
                          sx={{
                            height: 52,
                            width: 52,
                            '& img': {
                              height: 'auto',
                              width: '100%'
                            }
                          }}
                        >
                          {plan.icon}
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            mb: 1,
                            mt: 1
                          }}
                        >
                          <Typography variant="h5">{price}</Typography>
                          <Typography
                            color="text.secondary"
                            sx={{
                              mt: 'auto',
                              ml: '4px'
                            }}
                            variant="body2"
                          >
                            /mo
                          </Typography>
                        </Box>
                        <Stack
                          alignItems="center"
                          direction="row"
                          justifyContent="space-between"
                          spacing={3}
                        >
                          <Typography variant="overline">
                            {plan.name}
                          </Typography>
                          {isCurrent && (
                            <Typography color="primary.main" variant="caption">
                              Using now
                            </Typography>
                          )}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </div>
          <Divider sx={{ my: 3 }} />
          {selectedPlan == 'startup' ? (
            <></>
          ) : (
            <>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant="h6">Billing details</Typography>
              </Box>
              <TextField
                sx={{ my: 2 }}
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="stripe"
                onChange={(e) => handlePaytype(e.target.value)}
                helperText="Please select your payment method."
              >
                <MenuItem value="stripe">Stripe</MenuItem>
                <MenuItem value="paypal">Paypal</MenuItem>
              </TextField>
              {paytype == 'paypal' ? <PaypalForm /> : <></>}
              {paytype == 'stripe' ? <OrderSummary /> : <></>}

              <Typography color="text.secondary" variant="body2" sx={{ mt: 3 }}>
                We cannot refund once you purchased a subscription, but you can
                always
                <Link
                  sx={{ ml: '4px' }}
                  underline="none"
                  variant="body2"
                  onClick={cancelPay}
                >
                  Cancel
                </Link>
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  mt: 3
                }}
              >
                <Button variant="contained" onClick={payNow}>
                  Upgrade Plan
                </Button>
              </Box>
            </>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          title="Invoice history"
          subheader="You can view and download all your previous invoices here. If you’ve just made a payment, it may take a few hours for it to appear in the table below."
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Total (incl. tax)</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => {
              const createdAt = format(
                Date.parse(invoice.issueDate),
                'dd MMM yyyy'
              );
              const amount = numeral(invoice.totalAmount).format('$0,0.00');
              if (invoice.email == JSON.parse(localStorage.getItem('email'))) {
                return (
                  <TableRow key={invoice.id}>
                    <TableCell>{createdAt}</TableCell>
                    <TableCell>{amount}</TableCell>
                    <TableCell align="right">
                      <Link
                        color="inherit"
                        component={RouterLink}
                        href={'/dashboard/invoices/' + invoice.id}
                      >
                        View Invoice
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </Card>
    </Stack>
  );
};

AccountBillingSettings.propTypes = {
  plan: PropTypes.string,
  invoices: PropTypes.array
};
const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo,
  billinginfo: state.billinginfo.billinginfo
});

export default connect(mapStateToProps)(AccountBillingSettings);
