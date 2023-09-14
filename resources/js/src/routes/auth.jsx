import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { IssuerGuard } from '@/guards/issuer-guard';
import { GuestGuard } from '@/guards/guest-guard';
import { Layout as AuthLayout } from '@/layouts/auth/classic-layout';
import { Issuer } from '@/utils/auth';

// Amplify
const AmplifyConfirmRegisterPage = lazy(() => import('@/pages/auth/amplify/confirm-register'));
const AmplifyForgotPasswordPage = lazy(() => import('@/pages/auth/amplify/forgot-password'));
const AmplifyLoginPage = lazy(() => import('@/pages/auth/amplify/login'));
const AmplifyRegisterPage = lazy(() => import('@/pages/auth/amplify/register'));
const AmplifyResetPasswordPage = lazy(() => import('@/pages/auth/amplify/reset-password'));

// Auth0
const Auth0CallbackPage = lazy(() => import('@/pages/auth/auth0/callback'));
const Auth0LoginPage = lazy(() => import('@/pages/auth/auth0/login'));

// Firebase
const FirebaseLoginPage = lazy(() => import('@/pages/auth/firebase/login'));
const FirebaseRegisterPage = lazy(() => import('@/pages/auth/firebase/register'));

// auth
const AuthSignInPage = lazy(() => import('@/pages/auth/auth/SignIn'));
const AuthSignUpPage = lazy(() => import('@/pages/auth/auth/SignUp'));
const AuthFirstInfoPage = lazy(() => import('@/pages/auth/auth/FirstInfos'));
const AuthSuccessfulPage = lazy(() => import('@/pages/auth/auth/Successful'));
const AuthForgotPasswordPage = lazy(() => import('@/pages/auth/auth/ForgotPassword'));
const AuthResetPasswordPage = lazy(() => import('@/pages/auth/auth/ResetPassword'));
const AuthSecondInfoPage = lazy(() => import('@/pages/auth/auth/SecondInfo'));
const AuthSendEmailPage = lazy(() => import('@/pages/auth/auth/SendEmail'));
const AuthStartPage = lazy(() => import('@/pages/auth/auth/Start'));
const AuthTrialPage = lazy(() => import('@/pages/auth/auth/Trial'));
const AuthSocialHandlePage = lazy(() => import('@/pages/auth/auth/SocialHandle'));

// JWT
const JwtLoginPage = lazy(() => import('@/pages/auth/jwt/login'));
const JwtRegisterPage = lazy(() => import('@/pages/auth/jwt/register'));
const JwtEmailVerify = lazy(() => import('@/pages/auth/jwt/verify'));
const JwtRegisterStepOne = lazy(() => import('@/pages/auth/jwt/step-1'));
const JwtRegisterStepTwo = lazy(() => import('@/pages/auth/jwt/step-2'));
const JwtRegisterStepThree = lazy(() => import('@/pages/auth/jwt/step-3'));
const JwtRegisterStepFour = lazy(() => import('@/pages/auth/jwt/step-4'));
const JwtRegisterStepFive = lazy(() => import('@/pages/auth/jwt/step-5'));

export const authRoutes = [
  {
    path: 'auth',
    children: [
      {
        path: 'amplify',
        element: (
          <IssuerGuard issuer={Issuer.Amplify}>
            <GuestGuard>
              <AuthLayout>
                <Outlet />
              </AuthLayout>
            </GuestGuard>
          </IssuerGuard>
        ),
        children: [
          {
            path: 'confirm-register',
            element: <AmplifyConfirmRegisterPage />
          },
          {
            path: 'forgot-password',
            element: <AmplifyForgotPasswordPage />
          },
          {
            path: 'login',
            element: <AmplifyLoginPage />
          },
          {
            path: 'register',
            element: <AmplifyRegisterPage />
          },
          {
            path: 'reset-password',
            element: <AmplifyResetPasswordPage />
          }
        ]
      },
      {
        path: 'auth0',
        element: (
          <IssuerGuard issuer={Issuer.Auth0}>
            <GuestGuard>
              <Outlet />
            </GuestGuard>
          </IssuerGuard>
        ),
        children: [
          {
            path: 'callback',
            element: <Auth0CallbackPage />
          },
          {
            path: 'login',
            element: <Auth0LoginPage />
          }
        ]
      },
      {
        path: 'firebase',
        element: (
          <IssuerGuard issuer={Issuer.Firebase}>
            <GuestGuard>
              <AuthLayout>
                <Outlet />
              </AuthLayout>
            </GuestGuard>
          </IssuerGuard>
        ),
        children: [
          {
            path: 'login',
            element: <FirebaseLoginPage />
          },
          {
            path: 'register',
            element: <FirebaseRegisterPage />
          }
        ]
      },
      {
        path: 'jwt',
        element: (
          <IssuerGuard issuer={Issuer.JWT}>
            <GuestGuard>
              <AuthLayout>
                <Outlet />
              </AuthLayout>
            </GuestGuard>
          </IssuerGuard>
        ),
        children: [
          {
            path: 'login',
            element: <JwtLoginPage />
          },
          {
            path: 'register',
            element: <JwtRegisterPage />
          },
          {
            path: 'verify-email',
            element: <JwtEmailVerify />
          },
          {
            path: 'register/step-1',
            element: <JwtRegisterStepOne />
          },
          {
            path: 'register/step-2',
            element: <JwtRegisterStepTwo />
          },
          {
            path: 'register/step-3',
            element: <JwtRegisterStepThree />
          },
          {
            path: 'register/step-4',
            element: <JwtRegisterStepFour />
          },
          {
            path: 'register/step-5',
            element: <JwtRegisterStepFive />
          },
        ]
      },
      {
        path: 'auth',
        element: (
          <IssuerGuard issuer={Issuer.Auth}>
            <GuestGuard>
              <AuthLayout>
                <Outlet />
              </AuthLayout>
            </GuestGuard>
          </IssuerGuard>
        ),
        children: [
          {
            path: 'signin',
            element: <AuthSignInPage />
          },
          {
            path: 'signup',
            element: <AuthSignUpPage />
          },
          {
            path: 'sendemail',
            element: <AuthSendEmailPage />
          },
          {
            path: 'start',
            element: <AuthStartPage />
          },
          {
            path: 'firstInfos',
            element: <AuthFirstInfoPage />
          },
          {
            path: 'secondInfo',
            element: <AuthSecondInfoPage />
          },
          {
            path: 'socialHandle',
            element: <AuthSocialHandlePage />
          },
          {
            path: 'forgotpassword',
            element: <AuthForgotPasswordPage />
          },
          {
            path: 'resetpassword',
            element: <AuthResetPasswordPage />
          },
          {
            path: 'trial',
            element: <AuthTrialPage />
          },
          {
            path: 'successful',
            element: <AuthSuccessfulPage />
          },
        ]
      }
    ]
  }
];
