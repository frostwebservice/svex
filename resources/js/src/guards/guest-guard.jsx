import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from '@/hooks/use-router';
import { paths } from '@/paths';

export const GuestGuard = (props) => {
  const { children } = props;
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const curloc = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]
  const check = useCallback(() => {
    if (isAuthenticated) {
      if (curloc == "firstinfos" || curloc == "secondinfo" || curloc == "socialhandle") {
        setChecked(true);
      } else {
        router.replace(paths.dashboard.index);
      }

    } else {
      setChecked(true);
    }
  }, [isAuthenticated, router]);

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
  // not authenticated / authorized.

  return <>{children}</>;
};

GuestGuard.propTypes = {
  children: PropTypes.node
};
