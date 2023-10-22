import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { format } from 'date-fns';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import { connect, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
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
import { PropertyList } from '@/components/property-list';
import { PropertyListItem } from '@/components/property-list-item';
import { AccountPlanIcon } from './account-plan-icon';
import { getBillingInfo } from '@/actions';
var tmpBilling = {
  billing_name: "",
  card_number: "",
  country: "",
  zip_code: ""
}
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
  const { plan, invoices = [], userinfo, billinginfo } = props;
  const [selectedPlan, setSelectedPlan] = useState(userinfo.trial == 1 ? "standard" : "startup");
  const [currentPlan, setCurrentPlan] = useState(userinfo.trial == 1 ? "standard" : "startup");
  const [isEdit, setIsEdit] = useState(false);
  const [billing, setBilling] = useState(billinginfo);
  console.log(billing)
  const handleEdit = ((status) => {
    setIsEdit((prevState) => !prevState);
    if (!status) return;
    // console.log("in", billing)
    axios.post('/api/update_billing_info', { value: billing, user_email: JSON.parse(localStorage.getItem('email')) })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error('Error getting Notify Settings', error);
      })

  });
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem('email'));

  useEffect(() => {
    dispatch(getBillingInfo({ email }));


  }, [dispatch])
  return (
    <Stack
      spacing={4}
      {...props}>
      <Card>
        <CardHeader
          title="Change Plan"
          subheader="You can upgrade and downgrade whenever you want"
        />
        <CardContent sx={{ pt: 0 }}>
          <div>
            <Grid
              container
              spacing={3}
            >
              {plans.map((plan) => {
                const isSelected = plan.id === selectedPlan;
                const isCurrent = plan.id === currentPlan;
                const price = numeral(plan.price).format('$0,0.00');

                return (
                  <Grid
                    key={plan.id}
                    xs={12}
                    sm={4}
                  >
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
                          <Typography variant="h5">
                            {price}
                          </Typography>
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
                            <Typography
                              color="primary.main"
                              variant="caption"
                            >
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
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography variant="h6">
              Billing details
            </Typography>
            <Button
              color="inherit"
              onClick={() => handleEdit(isEdit)}
              startIcon={(
                <SvgIcon>
                  {isEdit ? <PlusIcon /> : <Edit02Icon />}

                </SvgIcon>
              )}
            >
              {isEdit ? "Save" : "Edit"}

            </Button>
          </Box>
          {
            isEdit ? (
              <Box
                sx={{
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                  mt: 3
                }}
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                  sx={{ m: 2 }}
                >
                  <TextField
                    value={billing.billing_name ? billing.billing_name : ""}
                    onChange={(e) => {
                      tmpBilling.billing_name = e.target.value
                      setBilling({
                        ...billing,
                        billing_name: e.target.value
                      });
                    }}
                    label="Billing name"
                    placeholder='Your Billing Name'
                    // disabled={!editlast}
                    sx={{
                      flexGrow: 1,
                      ...(!isEdit && {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderStyle: 'dotted'
                        }
                      })
                    }}
                  />
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  sx={{ m: 2 }}
                  spacing={2}
                >
                  <TextField
                    value={billing.card_number ? billing.card_number : ""}
                    onChange={(e) => {
                      setBilling({
                        ...billing,
                        card_number: e.target.value
                      });
                    }}
                    label="Card number"
                    placeholder='Your Card Number'
                    // disabled={!editlast}
                    sx={{
                      flexGrow: 1,
                      ...(!isEdit && {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderStyle: 'dotted'
                        }
                      })
                    }}
                  />
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  sx={{ m: 2 }}
                  spacing={2}
                >
                  <TextField
                    value={billing.country ? billing.country : ""}
                    onChange={(e) => {
                      setBilling({
                        ...billing,
                        country: e.target.value
                      });
                    }}
                    label="Country"
                    placeholder='Your Country'
                    // disabled={!editlast}
                    sx={{
                      flexGrow: 1,
                      ...(!isEdit && {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderStyle: 'dotted'
                        }
                      })
                    }}
                  />
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  sx={{ m: 2 }}
                  spacing={2}
                >
                  <TextField
                    value={billing.zip_code ? billing.zip_code : ""}
                    onChange={(e) => {
                      setBilling({
                        ...billing,
                        zip_code: e.target.value
                      });
                    }}
                    label="Zip / Postal code"
                    placeholder='Your Zip / Postal code'
                    // disabled={!editlast}
                    sx={{
                      flexGrow: 1,
                      ...(!isEdit && {
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderStyle: 'dotted'
                        }
                      })
                    }}
                  />
                </Stack>

              </Box>
            ) : (
              <Box
                sx={{
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                  mt: 3
                }}
              >
                <PropertyList>
                  <PropertyListItem
                    align="horizontal"
                    divider
                    label="Billing name"
                    value={billinginfo.billing_name ? billinginfo.billing_name : "No billing name"}
                  />
                  <PropertyListItem
                    align="horizontal"
                    divider
                    label="Card number"
                    value={billinginfo.card_number ? billinginfo.card_number : "No Card number"}
                  />
                  <PropertyListItem
                    align="horizontal"
                    divider
                    label="Country"
                    value={billinginfo.country ? billinginfo.country : "No country name"}

                  />
                  <PropertyListItem
                    align="horizontal"
                    label="Zip / Postal code"
                    value={billinginfo.zip_code ? billinginfo.zip_code : "No zip/postal code"}

                  />
                </PropertyList>
              </Box>
            )
          }


          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ mt: 3 }}
          >
            We cannot refund once you purchased a subscription, but you can always
            <Link
              href="#"
              sx={{ ml: '4px' }}
              underline="none"
              variant="body2"
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
            <Button variant="contained">
              Upgrade Plan
            </Button>
          </Box>
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
              <TableCell>
                Date
              </TableCell>
              <TableCell>
                Total (incl. tax)
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => {
              const createdAt = format(invoice.createdAt, 'dd MMM yyyy');
              const amount = numeral(invoice.amount).format('$0,0.00');

              return (
                <TableRow key={invoice.id}>
                  <TableCell>
                    {createdAt}
                  </TableCell>
                  <TableCell>
                    {amount}
                  </TableCell>
                  <TableCell align="right">
                    <Link
                      color="inherit"
                      underline="always"
                      href="#"
                    >
                      View Invoice
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </Stack >
  );
};

AccountBillingSettings.propTypes = {
  plan: PropTypes.string,
  invoices: PropTypes.array
};
const mapStateToProps = state => ({
  userinfo: state.profile.userinfo,
  billinginfo: state.billinginfo
});

export default connect(mapStateToProps)(AccountBillingSettings);
