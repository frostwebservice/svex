import { useCallback, useState } from 'react';
import { subDays, subHours, subMinutes, subMonths } from 'date-fns';
import {
  Box,
  Container,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import { Seo } from '@/components/seo';
import { useMockedUser } from '@/hooks/use-mocked-user';
import { usePageView } from '@/hooks/use-page-view';
import AccountBillingSettings from '@/sections/dashboard/account/account-billing-settings';
import AccountGeneralSettings from '@/sections/dashboard/account/account-general-settings';
import { AccountNotificationsSettings } from '@/sections/dashboard/account/account-notifications-settings';
import { useSettings } from '@/hooks/use-settings';
import AccountTeamSettings from '@/sections/dashboard/account/account-team-settings';
import AccountSecuritySettings from '@/sections/dashboard/account/account-security-settings';
import './account.css';

const now = new Date();

const tabs = [
  { label: 'General', value: 'general' },
  { label: 'Billing', value: 'billing' },
  { label: 'Team', value: 'team' },
  { label: 'Notifications', value: 'notifications' },
  { label: 'Security', value: 'security' }
];

const Page = () => {
  let obj = {
    time: new Date().getTime(),
    value: 'email',
    expire: 3000000
  };
  // You can only store strings
  let objStr = JSON.stringify(obj);
  localStorage.setItem('time_token', objStr);

  const user = useMockedUser();
  const [currentTab, setCurrentTab] = useState(
    new URLSearchParams(window.location.search).get('tab') == null
      ? 'general'
      : 'billing'
  );
  const settings = useSettings();

  usePageView();

  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);

  return (
    <>
      <Seo title="Dashboard: Account" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Stack spacing={3} sx={{ mb: 3 }}>
            <Typography variant="h4">Account</Typography>
            <div>
              <Tabs
                indicatorColor="primary"
                onChange={handleTabsChange}
                scrollButtons="auto"
                textColor="primary"
                value={currentTab}
                variant="scrollable"
              >
                {tabs.map((tab) => (
                  <Tab key={tab.value} label={tab.label} value={tab.value} />
                ))}
              </Tabs>
              <Divider />
            </div>
          </Stack>
          {currentTab === 'general' && (
            <AccountGeneralSettings
              avatar={user.avatar || ''}
              email={user.email || ''}
              name={user.name || ''}
            />
          )}
          {currentTab === 'billing' && (
            <AccountBillingSettings
              plan="startup"
              invoices={[
                {
                  id: '5547409069c59755261f5546',
                  amount: 4.99,
                  createdAt: subMonths(now, 1).getTime()
                },
                {
                  id: 'a3e17f4b551ff8766903f31f',
                  amount: 4.99,
                  createdAt: subMonths(now, 2).getTime()
                },
                {
                  id: '28ca7c66fc360d8203644256',
                  amount: 4.99,
                  createdAt: subMonths(now, 3).getTime()
                }
              ]}
            />
          )}
          {currentTab === 'team' && (
            <AccountTeamSettings
              members={[
                {
                  avatar: '/assets/avatars/avatar-cao-yu.png',
                  email: 'cao.yu@devias.io',
                  name: 'Cao Yu',
                  role: 'Owner'
                },
                {
                  avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
                  email: 'siegbert.gottfried@devias.io',
                  name: 'Siegbert Gottfried',
                  role: 'Standard'
                }
              ]}
            />
          )}
          {currentTab === 'notifications' && <AccountNotificationsSettings />}
          {currentTab === 'security' && (
            <AccountSecuritySettings
              loginEvents={[
                {
                  id: '1bd6d44321cb78fd915462fa',
                  createdAt: subDays(
                    subHours(subMinutes(now, 5), 7),
                    1
                  ).getTime(),
                  ip: '95.130.17.84',
                  type: 'Credential login',
                  userAgent: 'Chrome, Mac OS 10.15.7'
                },
                {
                  id: 'bde169c2fe9adea5d4598ea9',
                  createdAt: subDays(
                    subHours(subMinutes(now, 25), 9),
                    1
                  ).getTime(),
                  ip: '95.130.17.84',
                  type: 'Credential login',
                  userAgent: 'Chrome, Mac OS 10.15.7'
                }
              ]}
            />
          )}
        </Container>
      </Box>
    </>
  );
};

export default Page;
