import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout as DashboardLayout } from '@/layouts/dashboard';

const IndexPage = lazy(() => import('@/pages/dashboard/index'));

// Academy
const AcademyDashboardPage = lazy(() => import('@/pages/dashboard/academy/dashboard'));
const AcademyCoursePage = lazy(() => import('@/pages/dashboard/academy/course'));

// Blog
const BlogPostListPage = lazy(() => import('@/pages/dashboard/blog/list'));
const BlogPostDetailPage = lazy(() => import('@/pages/dashboard/blog/detail'));
const BlogPostCreatePage = lazy(() => import('@/pages/dashboard/blog/create'));

// Customers
const CustomerListPage = lazy(() => import('@/pages/dashboard/customers/list'));
const CustomerDetailPage = lazy(() => import('@/pages/dashboard/customers/detail'));
const CustomerEditPage = lazy(() => import('@/pages/dashboard/customers/edit'));


const UserListPage = lazy(() => import('@/pages/dashboard/usermanage/list'));
const UserDetailPage = lazy(() => import('@/pages/dashboard/usermanage/detail'));
const UserEditPage = lazy(() => import('@/pages/dashboard/usermanage/edit'));

// Invoice
const InvoiceListPage = lazy(() => import('@/pages/dashboard/invoices/list'));
const InvoiceDetailPage = lazy(() => import('@/pages/dashboard/invoices/detail'));

// Jobs
const JobBrowsePage = lazy(() => import('@/pages/dashboard/jobs/browse'));
const JobCreatePage = lazy(() => import('@/pages/dashboard/jobs/create'));
const CompanyDetailPage = lazy(() => import('@/pages/dashboard/jobs/companies/detail'));

// Logistics
const LogisticsDashboardPage = lazy(() => import('@/pages/dashboard/logistics/dashboard'));
const LogisticsFleetPage = lazy(() => import('@/pages/dashboard/logistics/fleet'));

// Orders
const OrderListPage = lazy(() => import('@/pages/dashboard/orders/list'));
const OrderDetailPage = lazy(() => import('@/pages/dashboard/orders/detail'));

// Products
const ProductListPage = lazy(() => import('@/pages/dashboard/products/list'));
const ProductCreatePage = lazy(() => import('@/pages/dashboard/products/create'));

// Social
const SocialFeedPage = lazy(() => import('@/pages/dashboard/social/feed'));
const SocialProfilePage = lazy(() => import('@/pages/dashboard/social/profile'));

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
      <DashboardLayout>
        <Suspense>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <IndexPage />
      },
      {
        path: 'academy',
        children: [
          {
            index: true,
            element: <AcademyDashboardPage />
          },
          {
            path: 'courses',
            children: [
              {
                path: ':courseId',
                element: <AcademyCoursePage />
              }
            ]
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
            path: 'companies',
            children: [
              {
                path: ':companyId',
                element: <CompanyDetailPage />
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
  }
];
