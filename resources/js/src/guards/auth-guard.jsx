import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from '@/hooks/use-router';
import { paths } from '@/paths';
import { Issuer } from '@/utils/auth';
import { useNavigate } from 'react-router-dom';

const loginPaths = {
  [Issuer.Amplify]: paths.auth.amplify.login,
  [Issuer.Auth0]: paths.auth.auth0.login,
  [Issuer.Firebase]: paths.auth.firebase.login,
  [Issuer.Auth]: paths.auth.auth.login,
  [Issuer.JWT]: paths.auth.jwt.login
};

export const AuthGuard = (props) => {
  const { children } = props;
  const router = useRouter();
  const { isAuthenticated, issuer } = useAuth();
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const check = useCallback(() => {
    if (!isAuthenticated) {
      const searchParams = new URLSearchParams({ returnTo: window.location.href }).toString();
      const href = loginPaths[issuer] + `?${searchParams}`;
      navigate("/auth/auth/SignIn");
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, issuer, router]);

  // Only check on mount, this allows us to redirect the user manually when auth state changes
  useEffect(() => {
    check();
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  if (!checked) {
    return null;
  }

  // If got here, it means that the redirect did not occur, and that tells us that the user is
  // authenticated / authorized.

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};
