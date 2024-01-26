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
import { OverviewDoneTasks } from '@/sections/dashboard/overview/overview-done-tasks';
import { OverviewEvents } from '@/sections/dashboard/overview/overview-events';
import { OverviewInbox } from '@/sections/dashboard/overview/overview-inbox';
import { OverviewTransactions } from '@/sections/dashboard/overview/overview-transactions';
import { OverviewPendingIssues } from '@/sections/dashboard/overview/overview-pending-issues';
import { OverviewSubscriptionUsage } from '@/sections/dashboard/overview/overview-subscription-usage';
import { OverviewHelp } from '@/sections/dashboard/overview/overview-help';
import { OverviewJobs } from '@/sections/dashboard/overview/overview-jobs';
import { OverviewOpenTickets } from '@/sections/dashboard/overview/overview-open-tickets';
import { OverviewTips } from '@/sections/dashboard/overview/overview-tips';

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
              <OverviewDoneTasks amount={31} />
            </Grid>
            <Grid xs={12} md={4}>
              <OverviewPendingIssues amount={12} />
            </Grid>
            <Grid xs={12} md={4}>
              <OverviewOpenTickets amount={5} />
            </Grid>
            <Grid xs={12} md={7}>
              <OverviewBanner />
            </Grid>
            <Grid xs={12} md={5}>
              <OverviewTips sx={{ height: '100%' }} />
            </Grid>
            <Grid xs={12} md={8}>
              <OverviewSubscriptionUsage />
            </Grid>
            <Grid xs={12} md={4}>
              <OverviewInbox />
            </Grid>
            {/* <Grid
              xs={12}
              md={7}
            >
              <OverviewTransactions
                transactions={[
                  {
                    id: 'd46800328cd510a668253b45',
                    amount: 25000,
                    createdAt: now.getTime(),
                    currency: 'usd',
                    sender: 'Devias',
                    status: 'on_hold',
                    type: 'receive'
                  },
                  {
                    id: 'b4b19b21656e44b487441c50',
                    amount: 6843,
                    createdAt: subDays(now, 1).getTime(),
                    currency: 'usd',
                    sender: 'Zimbru',
                    status: 'confirmed',
                    type: 'send'
                  },
                  {
                    id: '56c09ad91f6d44cb313397db',
                    amount: 91823,
                    createdAt: subDays(now, 1).getTime(),
                    currency: 'usd',
                    sender: 'Vertical Jelly',
                    status: 'failed',
                    type: 'send'
                  },
                  {
                    id: 'aaeb96c5a131a55d9623f44d',
                    amount: 49550,
                    createdAt: subDays(now, 3).getTime(),
                    currency: 'usd',
                    sender: 'Devias',
                    status: 'confirmed',
                    type: 'receive'
                  }
                ]}
              />
            </Grid>
            <Grid
              xs={12}
              md={5}
            >
              <OverviewEvents
                events={[
                  {
                    id: '3bfa0bc6cbc99bf747c94d51',
                    createdAt: addDays(now, 1),
                    description: '17:00 to 18:00',
                    title: 'Meeting with Partners'
                  },
                  {
                    id: 'dd6c8ce8655ac222b01f24f9',
                    createdAt: addDays(now, 4),
                    description: '17:00 to 18:00',
                    title: 'Weekly Meeting'
                  },
                  {
                    id: 'f274902e2bf226865b3cf947',
                    createdAt: addDays(now, 4),
                    description: '17:00 to 18:00',
                    title: 'Weekly Meeting'
                  },
                  {
                    id: 'd2a66e24110f52acb0cd0b9f',
                    createdAt: addDays(now, 7),
                    description: '17:00 to 18:00',
                    title: 'Weekly Meeting'
                  }
                ]}
              />
            </Grid> */}
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
