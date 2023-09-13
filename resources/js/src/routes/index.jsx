import { Outlet } from 'react-router-dom';
import { Layout as MarketingLayout } from '@/layouts/marketing';
import HomePage from '@/pages';
import Error401Page from '@/pages/401';
import Error404Page from '@/pages/404';
import Error500Page from '@/pages/500';
import ContactPage from '@/pages/contact';
import CheckoutPage from '@/pages/checkout';
import PricingPage from '@/pages/pricing';
import { authRoutes } from './auth';
import { authDemoRoutes } from './auth-demo';
import { componentsRoutes } from './components';
import { dashboardRoutes } from './dashboard';

export const routes = [
  {
    element: (
      <MarketingLayout>
        <Outlet />
      </MarketingLayout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'pricing',
        element: <PricingPage />
      },
      ...componentsRoutes
    ]
  },
  ...authRoutes,
  ...authDemoRoutes,
  ...dashboardRoutes,
  {
    path: 'checkout',
    element: <CheckoutPage />
  },
  {
    path: 'contact',
    element: <ContactPage />
  },
  {
    path: '401',
    element: <Error401Page />
  },
  {
    path: '404',
    element: <Error404Page />
  },
  {
    path: '500',
    element: <Error500Page />
  },
  {
    path: '*',
    element: <Error404Page />
  }
];
