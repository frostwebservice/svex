import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Layout from '@/layouts/dashboard';

const IndexPage = lazy(() => import('@/pages/dashboard/index'));
const AdminPage = lazy(() => import('@/pages/dashboard/admin'));
const Payment = lazy(() => import('@/pages/dashboard/payment'));
// const OrderSummary = lazy(() =>
//   import('@/pages/dashboard/payments/ordersummary')
// );

// Academy
const AcademyDashboardPage = lazy(() =>
  import('@/pages/dashboard/academy/dashboard')
);
const OutreachGroups = lazy(() =>
  import('@/pages/dashboard/academy/outreach-groups')
);
const CreateNewGroup = lazy(() =>
  import('@/pages/dashboard/academy/create-group')
);
const SavedSearchs = lazy(() =>
  import('@/pages/dashboard/academy/saved-searchs')
);
const FavInfs = lazy(() => import('@/pages/dashboard/academy/fav-infs'));

// Blog
const BlogPostListPage = lazy(() => import('@/pages/dashboard/blog/list'));
const BlogPostDetailPage = lazy(() => import('@/pages/dashboard/blog/detail'));
const BlogPostCreatePage = lazy(() => import('@/pages/dashboard/blog/create'));

// Customers
const CustomerListPage = lazy(() => import('@/pages/dashboard/customers/list'));
const CustomerDetailPage = lazy(() =>
  import('@/pages/dashboard/customers/detail')
);
const CustomerEditPage = lazy(() => import('@/pages/dashboard/customers/edit'));

const UserListPage = lazy(() => import('@/pages/dashboard/usermanage/list'));
const UserDetailPage = lazy(() =>
  import('@/pages/dashboard/usermanage/detail')
);
const UserEditPage = lazy(() => import('@/pages/dashboard/usermanage/edit'));

// Invoice
const InvoiceListPage = lazy(() => import('@/pages/dashboard/invoices/list'));
const InvoiceDetailPage = lazy(() =>
  import('@/pages/dashboard/invoices/detail')
);

// Jobs
const JobBrowsePage = lazy(() => import('@/pages/dashboard/jobs/browse'));
const InvitePage = lazy(() => import('@/pages/dashboard/jobs/invite'));
const JobManagePage = lazy(() => import('@/pages/dashboard/jobs/manage'));
const JobCreatePage = lazy(() => import('@/pages/dashboard/jobs/create'));
const JobEditPage = lazy(() => import('@/pages/dashboard/jobs/edit'));
const CompanyDetailPage = lazy(() =>
  import('@/pages/dashboard/jobs/companies/detail')
);

// Logistics
const LogisticsDashboardPage = lazy(() =>
  import('@/pages/dashboard/logistics/dashboard')
);
const LogisticsFleetPage = lazy(() =>
  import('@/pages/dashboard/logistics/fleet')
);

// Orders
const OrderListPage = lazy(() => import('@/pages/dashboard/orders/list'));
const OrderDetailPage = lazy(() => import('@/pages/dashboard/orders/detail'));

// Products
const ProductListPage = lazy(() => import('@/pages/dashboard/products/list'));
const ProductCreatePage = lazy(() =>
  import('@/pages/dashboard/products/create')
);

// Social
const SocialFeedPage = lazy(() => import('@/pages/dashboard/social/feed'));
const SocialProfilePage = lazy(() =>
  import('@/pages/dashboard/social/profile')
);
const SocialProfileEdit = lazy(() => import('@/pages/dashboard/social/edit'));
const SocialInfGlobalPage = lazy(() =>
  import('@/pages/dashboard/social/infglobalprofile')
);
const SocialInfPage = lazy(() => import('@/pages/dashboard/social/infprofile'));

// Other
const AccountPage = lazy(() => import('@/pages/dashboard/account'));
const AnalyticsPage = lazy(() => import('@/pages/dashboard/analytics'));
const BlankPage = lazy(() => import('@/pages/dashboard/blank'));
// const CalendarPage = lazy(() => import('@/pages/dashboard/calendar'));
const ChatPage = lazy(() => import('@/pages/dashboard/chat'));
const CryptoPage = lazy(() => import('@/pages/dashboard/crypto'));
const EcommercePage = lazy(() => import('@/pages/dashboard/ecommerce'));
const FileManagerPage = lazy(() => import('@/pages/dashboard/file-manager'));
const KanbanPage = lazy(() => import('@/pages/dashboard/kanban'));
const MailPage = lazy(() => import('@/pages/dashboard/mail'));

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <Layout>
        <Suspense>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <IndexPage />
      },
      {
        path: 'admin',
        children: [
          {
            index: true,
            element: <AdminPage />
          },
          {
            path: 'payment',
            element: <Payment />
          }
        ]
      },
      {
        path: 'blog',
        children: [
          {
            index: true,
            element: <BlogPostListPage />
          },
          {
            path: 'create',
            element: <BlogPostCreatePage />
          },
          {
            path: ':postId',
            element: <BlogPostDetailPage />
          }
        ]
      },
      {
        path: 'customers',
        children: [
          {
            index: true,
            element: <CustomerListPage />
          },
          {
            path: ':customerId',
            element: <CustomerDetailPage />
          },
          {
            path: ':customerId/edit',
            element: <CustomerEditPage />
          }
        ]
      },
      {
        path: 'usermanage',
        children: [
          {
            index: true,
            element: <UserListPage />
          },
          {
            path: ':usermanageId',
            element: <UserDetailPage />
          },
          {
            path: ':usermanageId/edit',
            element: <UserEditPage />
          }
        ]
      },
      {
        path: 'invoices',
        children: [
          {
            index: true,
            element: <InvoiceListPage />
          },
          {
            path: ':invoiceId',
            element: <InvoiceDetailPage />
          }
        ]
      },
      {
        path: 'jobs',
        children: [
          {
            index: true,
            element: <JobBrowsePage />
          },
          {
            path: 'create',
            element: <JobCreatePage />
          },
          {
            path: 'invite',
            element: <InvitePage />
          },
          {
            path: 'edit',
            children: [
              {
                path: ':jobId',
                element: <JobEditPage />
              }
            ]
          },
          {
            path: 'companies',
            children: [
              {
                path: ':companyId',
                element: <CompanyDetailPage />
              }
            ]
          },
          {
            path: 'manage',
            children: [
              {
                path: ':jobId',
                element: <JobManagePage />
              }
            ]
          }
        ]
      },
      {
        path: 'logistics',
        children: [
          {
            index: true,
            element: <LogisticsDashboardPage />
          },
          {
            path: 'fleet',
            element: <LogisticsFleetPage />
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            index: true,
            element: <OrderListPage />
          },
          {
            path: ':orderId',
            element: <OrderDetailPage />
          }
        ]
      },
      {
        path: 'products',
        children: [
          {
            index: true,
            element: <ProductListPage />
          },
          {
            path: 'create',
            element: <ProductCreatePage />
          }
        ]
      },
      {
        path: 'social',
        children: [
          {
            path: 'feed',
            element: <SocialFeedPage />
          },
          {
            path: 'profile',
            element: <SocialProfilePage />
          }
        ]
      },
      {
        path: 'account',
        element: <AccountPage />
      },
      {
        path: 'analytics',
        element: <AnalyticsPage />
      },
      {
        path: 'blank',
        element: <BlankPage />
      },
      // {
      //   path: 'calendar',
      //   element: <CalendarPage />
      // },
      {
        path: 'chat',
        element: <ChatPage />
      },
      {
        path: 'crypto',
        element: <CryptoPage />
      },
      {
        path: 'ecommerce',
        element: <EcommercePage />
      },
      {
        path: 'file-manager',
        element: <FileManagerPage />
      },
      {
        path: 'kanban',
        element: <KanbanPage />
      },
      {
        path: 'mail',
        element: <MailPage />
      }
    ]
  },
  {
    path: 'inf-finder',
    element: (
      <Layout>
        <Suspense>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <AcademyDashboardPage />
      },
      {
        path: 'outreach-groups',
        element: <OutreachGroups />
      },
      {
        path: 'saved-searchs',
        element: <SavedSearchs />
      },
      {
        path: 'fav-infs',
        element: <FavInfs />
      },
      {
        path: 'new-group',
        element: <CreateNewGroup />
      }
    ]
  },
  {
    path: 'profile',
    element: (
      <Layout>
        <Suspense>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [
      {
        path: 'inf',
        children: [
          {
            path: ':userEmail',
            element: <SocialInfGlobalPage />
          },
          {
            path: ':socialType',
            children: [
              {
                path: ':userName',
                element: <SocialInfPage />
              }
            ]
          }
        ]
      },
      {
        path: 'edit',
        children: [
          {
            path: ':userId',
            element: <SocialProfileEdit />
          }
        ]
      },
      {
        path: ':brandId',
        element: <SocialProfilePage />
      }
    ]
  }
];
