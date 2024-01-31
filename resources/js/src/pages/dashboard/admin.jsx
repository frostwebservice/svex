import { addDays, subDays, subHours, subMinutes } from 'date-fns';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Seo } from '@/components/seo';
import { usePageView } from '@/hooks/use-page-view';
import { useSettings } from '@/hooks/use-settings';
import { OverviewBanner } from '@/sections/dashboard/overview/overview-banner';
import { OverviewJobPanel } from '@/sections/dashboard/overview/overview-job';
import { OverviewCustomer } from '@/sections/dashboard/overview/overview-customer';
import { TrialUsersRegistered } from '@/sections/dashboard/overview/trial-users-reg';
import { OverviewEvents } from '@/sections/dashboard/overview/overview-events';
import { Announcements } from '@/sections/dashboard/overview/announcements';
import { OverviewTransactions } from '@/sections/dashboard/overview/overview-transactions';
import { PaidMemberships } from '@/sections/dashboard/overview/paid-memberships';
import { OverviewSubscriptionUsage } from '@/sections/dashboard/overview/overview-subscription-usage';
import { OverviewHelp } from '@/sections/dashboard/overview/overview-help';
import { OverviewJobs } from '@/sections/dashboard/overview/overview-jobs';
import { OverviewOpenTickets } from '@/sections/dashboard/overview/overview-open-tickets';
import { OverviewTips } from '@/sections/dashboard/overview/overview-tips';
import { OverviewOrders } from '@/sections/dashboard/overview/overview-order';
import { OverviewInvoices } from '@/sections/dashboard/overview/overview-invoice';
import { OverviewPayment } from '@/sections/dashboard/overview/overview-payment';
import { ImportData } from '@/sections/dashboard/overview/import-data';
import { AdminTips } from '@/sections/dashboard/overview/admin-tips';

const now = new Date();

const Page = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Seo title="Dashboard: Overview" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Grid
            container
            disableEqualOverflow
            spacing={{
              xs: 3,
              lg: 4
            }}
          >
            <Grid xs={12}>
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <div>
                  <Typography variant="h4">Overview</Typography>
                </div>
              </Stack>
            </Grid>
            <Grid xs={12} md={4}>
              <TrialUsersRegistered amount={31} />
            </Grid>
            <Grid xs={12} md={4}>
              <PaidMemberships amount={12} />
            </Grid>
            <Grid xs={12} md={4}>
              <OverviewOpenTickets amount={5} />
            </Grid>
            <Grid xs={12} md={6}>
              <OverviewBanner />
            </Grid>
            <Grid xs={12} md={6}>
              <OverviewJobPanel />
            </Grid>
            <Grid xs={12} md={6}>
              <AdminTips sx={{ height: '100%' }} />
            </Grid>
            <Grid xs={12} md={8}>
              <OverviewSubscriptionUsage />
            </Grid>
            <Grid xs={12} md={4}>
              <Announcements />
            </Grid>
            <Grid xs={12} md={6}>
              <OverviewCustomer />
            </Grid>
            <Grid xs={12} md={6}>
              <OverviewOrders />
            </Grid>
            <Grid xs={12} md={6}>
              <OverviewInvoices />
            </Grid>
            <Grid xs={12} md={6}>
              <OverviewPayment />
            </Grid>
            <Grid xs={12} md={6}>
              <ImportData />
            </Grid>
            <Grid xs={12} md={6}>
              <OverviewJobs />
            </Grid>
            <Grid xs={12} md={6}>
              <OverviewHelp />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Page;
