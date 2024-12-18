export const paths = {
  index: '/',
  checkout: '/checkout',
  contact: '/contact',
  pricing: '/pricing',
  auth: {
    auth0: {
      callback: '/auth/auth0/callback',
      login: '/auth/auth0/login'
    },
    auth: {
      signin: '/auth/auth/signin',
      signup: '/auth/auth/signup',
      firstInfos: '/auth/auth/FirstInfos',
      secondInfos: '/auth/auth/SecondInfo',
      sendemail: '/auth/auth/SendEmail',
      start: '/auth/auth/Start',
      socialHandle: '/auth/auth/SocialHandle',
      trial: '/auth/auth/trial',
      forgotPassword: '/auth/auth/ForgotPassword',
      resetPassword: '/auth/auth/ResetPassword',
      successful: '/auth/auth/Successful'
    },
    jwt: {
      login: '/auth/jwt/login',
      register: '/auth/jwt/register',
      verify: '/auth/jwt/verify-email',
      step1: '/auth/jwt/register/step-1',
      step2: '/auth/jwt/register/step-2',
      step3: '/auth/jwt/register/step-3',
      step4: '/auth/jwt/register/step-4',
      step5: '/auth/jwt/register/step-5'
    },
    firebase: {
      login: '/auth/firebase/login',
      register: '/auth/firebase/register'
    },
    amplify: {
      confirmRegister: '/auth/amplify/confirm-register',
      forgotPassword: '/auth/amplify/forgot-password',
      login: '/auth/amplify/login',
      register: '/auth/amplify/register',
      resetPassword: '/auth/amplify/reset-password'
    }
  },
  authDemo: {
    forgotPassword: {
      classic: '/auth-demo/forgot-password/classic',
      modern: '/auth-demo/forgot-password/modern'
    },
    login: {
      classic: '/auth-demo/login/classic',
      modern: '/auth-demo/login/modern'
    },
    register: {
      classic: '/auth-demo/register/classic',
      modern: '/auth-demo/register/modern'
    },
    resetPassword: {
      classic: '/auth-demo/reset-password/classic',
      modern: '/auth-demo/reset-password/modern'
    },
    verifyCode: {
      classic: '/auth-demo/verify-code/classic',
      modern: '/auth-demo/verify-code/modern'
    }
  },
  profile: {
    brand: '',
    influencer: ''
  },
  academy: {
    index: '/inf-finder',
    outreachgroups: '/inf-finder/outreach-groups',
    savedsearchs: '/inf-finder/saved-searchs',
    favinfs: '/inf-finder/fav-infs'
    // courseDetails: '/academy/courses/:courseId'
  },
  dashboard: {
    index: '/dashboard',
    admin: '/dashboard/admin',
    account: '/dashboard/account',
    analytics: '/dashboard/analytics',
    blank: '/dashboard/blank',
    blog: {
      index: '/dashboard/blog',
      postDetails: '/dashboard/blog/:postId',
      postCreate: '/dashboard/blog/create'
    },
    calendar: '/dashboard/calendar',
    chat: '/dashboard/chat',
    crypto: '/dashboard/crypto',
    customers: {
      index: '/dashboard/customers',
      details: '/dashboard/customers/:customerId',
      edit: '/dashboard/customers/:customerId/edit'
    },
    usermanage: {
      index: '/dashboard/usermanage',
      details: '/dashboard/usermanage/:usermanageId',
      edit: '/dashboard/usermanage/:usermanageId/edit'
    },

    ecommerce: '/dashboard/ecommerce',
    fileManager: '/dashboard/file-manager',
    invoices: {
      index: '/dashboard/invoices',
      details: '/dashboard/invoices/:orderId'
    },
    jobs: {
      index: '/dashboard/jobs',
      create: '/dashboard/jobs/create',
      companies: {
        details: '/dashboard/jobs/companies/:companyId'
      }
    },
    kanban: '/dashboard/kanban',
    logistics: {
      index: '/dashboard/logistics',
      fleet: '/dashboard/logistics/fleet'
    },
    mail: '/dashboard/mail',
    orders: {
      index: '/dashboard/orders',
      details: '/dashboard/orders/:orderId'
    },
    products: {
      index: '/dashboard/products',
      create: '/dashboard/products/create'
    },
    social: {
      index: '/dashboard/social',
      profile: '/dashboard/social/profile',
      feed: '/dashboard/social/feed'
    }
  },
  components: {
    index: '/components',
    dataDisplay: {
      detailLists: '/components/data-display/detail-lists',
      tables: '/components/data-display/tables',
      quickStats: '/components/data-display/quick-stats'
    },
    lists: {
      groupedLists: '/components/lists/grouped-lists',
      gridLists: '/components/lists/grid-lists'
    },
    forms: '/components/forms',
    modals: '/components/modals',
    charts: '/components/charts',
    buttons: '/components/buttons',
    typography: '/components/typography',
    colors: '/components/colors',
    inputs: '/components/inputs'
  },
  docs: 'https://material-kit-pro-react-docs.devias.io',
  401: '/401',
  404: '/404',
  500: '/500'
};
