import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { wait } from '@/utils/wait';

export const PaymentEditForm = (props) => {
  const [paypalvalues, setPaypalvalues] = useState({});
  const [stripevalues, setStripevalues] = useState({});
  const [key, setKey] = useState(0);
  useEffect(() => {
    axios.post('/api/get_paypal', {}).then((response) => {
      setPaypalvalues({
        paypal_mode: response.data.mode,
        paypal_client_id: response.data.client_id,
        paypal_secret: response.data.secret,
        paypal_plain_id: response.data.plain_id,
        currency: response.data.currency,
        costofunlimited_access: response.data.unlimited_access
      });
      setKey(key + 1);
    });
    axios.post('/api/get_stripe', {}).then((response) => {
      setStripevalues({
        stripe_publishable_key: response.data.pub_key,
        stripe_secret_key: response.data.sec_key,
        stripe_webhook_secret: response.data.webhook_sec,
        stripe_subscription_plan_id: response.data.sub_id,
        currency: response.data.currency,
        costofunlimited_access: response.data.unlimited_access
      });
      setKey(key + 1);
    });
  }, []);

  const paypal = useFormik({
    initialValues: paypalvalues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      paypal_mode: Yup.string().max(255).required('This Field is required'),
      paypal_client_id: Yup.string()
        .max(255)
        .required('This Field is required'),
      paypal_secret: Yup.string().max(255).required('This Field is required'),
      paypal_plain_id: Yup.string().max(255).required('This Field is required'),
      currency: Yup.string().max(255).required('This Field is required'),
      costofunlimited_access: Yup.string()
        .max(255)
        .required('This Field is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        axios.post('/api/update_paypal', { values }).then((response) => {
          helpers.setStatus({ success: true });
          helpers.setSubmitting(false);
          toast.success('Paypal settings updated');
        });
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });
  const stripe = useFormik({
    initialValues: stripevalues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      stripe_publishable_key: Yup.string()
        .max(255)
        .required('This Field is required'),
      stripe_secret_key: Yup.string()
        .max(255)
        .required('This Field is required'),
      stripe_webhook_secret: Yup.string()
        .max(255)
        .required('This Field is required'),
      stripe_subscription_plan_id: Yup.string()
        .max(255)
        .required('This Field is required'),
      currency: Yup.string().max(255).required('This Field is required'),
      costofunlimited_access: Yup.string()
        .max(255)
        .required('This Field is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        axios.post('/api/update_stripe', { values }).then((response) => {
          helpers.setStatus({ success: true });
          helpers.setSubmitting(false);
          toast.success('Stripe settings updated');
        });
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });
  return (
    <>
      <form onSubmit={paypal.handleSubmit}>
        <Card key={key}>
          <CardHeader title="Paypal Settings" />
          <CardContent sx={{ py: 0 }}>
            <TextField
              defaultValue="Please Input Here."
              sx={{ mb: 1 }}
              error={
                !!(paypal.touched.paypal_mode && paypal.errors.paypal_mode)
              }
              fullWidth
              helperText={
                paypal.touched.paypal_mode && paypal.errors.paypal_mode
              }
              label="Paypal Mode"
              name="paypal_mode"
              onBlur={paypal.handleBlur}
              onChange={paypal.handleChange}
              required
              value={paypal.values.paypal_mode}
            />
            <TextField
              defaultValue="Please Input Here."
              sx={{ mb: 1 }}
              error={
                !!(
                  paypal.touched.paypal_client_id &&
                  paypal.errors.paypal_client_id
                )
              }
              fullWidth
              helperText={
                paypal.touched.paypal_client_id &&
                paypal.errors.paypal_client_id
              }
              label="Paypal Client ID"
              name="paypal_client_id"
              onBlur={paypal.handleBlur}
              onChange={paypal.handleChange}
              required
              value={paypal.values.paypal_client_id}
            />
            <TextField
              defaultValue="Please Input Here."
              sx={{ mb: 1 }}
              error={
                !!(paypal.touched.paypal_secret && paypal.errors.paypal_secret)
              }
              fullWidth
              helperText={
                paypal.touched.paypal_secret && paypal.errors.paypal_secret
              }
              label="Paypal Secret"
              name="paypal_secret"
              onBlur={paypal.handleBlur}
              onChange={paypal.handleChange}
              required
              value={paypal.values.paypal_secret}
            />
            <TextField
              defaultValue="Please Input Here."
              sx={{ mb: 1 }}
              error={
                !!(
                  paypal.touched.paypal_plain_id &&
                  paypal.errors.paypal_plain_id
                )
              }
              fullWidth
              helperText={
                paypal.touched.paypal_plain_id && paypal.errors.paypal_plain_id
              }
              label="Paypal Plain ID"
              name="paypal_plain_id"
              onBlur={paypal.handleBlur}
              onChange={paypal.handleChange}
              required
              value={paypal.values.paypal_plain_id}
            />
            <TextField
              defaultValue="Please Input Here."
              sx={{ mb: 1 }}
              error={!!(paypal.touched.currency && paypal.errors.currency)}
              fullWidth
              helperText={paypal.touched.currency && paypal.errors.currency}
              label="Currency"
              name="currency"
              onBlur={paypal.handleBlur}
              onChange={paypal.handleChange}
              required
              value={paypal.values.currency}
            />
            <TextField
              defaultValue="Please Input Here."
              sx={{ mb: 1 }}
              error={
                !!(
                  paypal.touched.costofunlimited_access &&
                  paypal.errors.costofunlimited_access
                )
              }
              fullWidth
              helperText={
                paypal.touched.costofunlimited_access &&
                paypal.errors.costofunlimited_access
              }
              label="Cost of unlimited access"
              name="costofunlimited_access"
              onBlur={paypal.handleBlur}
              onChange={paypal.handleChange}
              required
              value={paypal.values.costofunlimited_access}
            />
          </CardContent>
          <Stack
            direction={{
              xs: 'column',
              sm: 'row'
            }}
            flexWrap="wrap"
            spacing={3}
            sx={{ p: 3, pt: 1 }}
          >
            <Button
              disabled={paypal.isSubmitting}
              type="submit"
              variant="contained"
            >
              Update
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              disabled={paypal.isSubmitting}
              href="/dashboard/admin"
            >
              Cancel
            </Button>
          </Stack>
        </Card>
      </form>
      <form onSubmit={stripe.handleSubmit}>
        <Card key={key}>
          <CardHeader title="Stripe Settings" />
          <CardContent sx={{ py: 0 }}>
            <TextField
              defaultValue="Please Input Here."
              sx={{ mb: 1 }}
              error={
                !!(
                  stripe.touched.stripe_publishable_key &&
                  stripe.errors.stripe_publishable_key
                )
              }
              fullWidth
              helperText={
                stripe.touched.stripe_publishable_key &&
                stripe.errors.stripe_publishable_key
              }
              label="Stripe Publishable Key"
              name="stripe_publishable_key"
              onBlur={stripe.handleBlur}
              onChange={stripe.handleChange}
              required
              value={stripe.values.stripe_publishable_key}
            />
            <TextField
              defaultValue="Please Input Here."
              sx={{ mb: 1 }}
              error={
                !!(
                  stripe.touched.stripe_secret_key &&
                  stripe.errors.stripe_secret_key
                )
              }
              fullWidth
              helperText={
                stripe.touched.stripe_secret_key &&
                stripe.errors.stripe_secret_key
              }
              label="Stripe Secret Key"
              name="stripe_secret_key"
              onBlur={stripe.handleBlur}
              onChange={stripe.handleChange}
              required
              value={stripe.values.stripe_secret_key}
            />
            <TextField
              defaultValue="Please Input Here."
              sx={{ mb: 1 }}
              error={
                !!(
                  stripe.touched.stripe_webhook_secret &&
                  stripe.errors.stripe_webhook_secret
                )
              }
              fullWidth
              helperText={
                stripe.touched.stripe_webhook_secret &&
                stripe.errors.stripe_webhook_secret
              }
              label="Stripe Webhook Secret"
              name="stripe_webhook_secret"
              onBlur={stripe.handleBlur}
              onChange={stripe.handleChange}
              required
              value={stripe.values.stripe_webhook_secret}
            />
            <TextField
              defaultValue="Please Input Here."
              sx={{ mb: 1 }}
              error={
                !!(
                  stripe.touched.stripe_subscription_plan_id &&
                  stripe.errors.stripe_subscription_plan_id
                )
              }
              fullWidth
              helperText={
                stripe.touched.stripe_subscription_plan_id &&
                stripe.errors.stripe_subscription_plan_id
              }
              label="Stripe subscription plan ID"
              name="stripe_subscription_plan_id"
              onBlur={stripe.handleBlur}
              onChange={stripe.handleChange}
              required
              value={stripe.values.stripe_subscription_plan_id}
            />
            <TextField
              defaultValue="Please Input Here."
              sx={{ mb: 1 }}
              error={!!(stripe.touched.currency && stripe.errors.currency)}
              fullWidth
              helperText={stripe.touched.currency && stripe.errors.currency}
              label="Currency"
              name="currency"
              onBlur={stripe.handleBlur}
              onChange={stripe.handleChange}
              required
              value={stripe.values.currency}
            />
            <TextField
              defaultValue="Please Input Here."
              sx={{ mb: 1 }}
              error={
                !!(
                  stripe.touched.costofunlimited_access &&
                  stripe.errors.costofunlimited_access
                )
              }
              fullWidth
              helperText={
                stripe.touched.costofunlimited_access &&
                stripe.errors.costofunlimited_access
              }
              label="Cost of unlimited access"
              name="costofunlimited_access"
              onBlur={stripe.handleBlur}
              onChange={stripe.handleChange}
              required
              value={stripe.values.costofunlimited_access}
            />
          </CardContent>
          <Stack
            direction={{
              xs: 'column',
              sm: 'row'
            }}
            flexWrap="wrap"
            spacing={3}
            sx={{ p: 3, pt: 1 }}
          >
            <Button
              disabled={stripe.isSubmitting}
              type="submit"
              variant="contained"
            >
              Update
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              disabled={stripe.isSubmitting}
              href="/dashboard/admin"
            >
              Cancel
            </Button>
          </Stack>
        </Card>
      </form>
    </>
  );
};
