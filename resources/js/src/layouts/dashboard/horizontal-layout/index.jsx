import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MobileNav } from '../mobile-nav';
import { TopNav } from './top-nav';
import { useMobileNav } from './use-mobile-nav';

const HorizontalLayoutRoot = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%'
});

const HorizontalLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});

export const HorizontalLayout = (props) => {
  const { children, navColor, sections, userinfo } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const mobileNav = useMobileNav();

  return (
    <>
      <TopNav
        color={navColor}
        userinfo={userinfo}
        onMobileNav={mobileNav.handleOpen}
        sections={sections}
      />
      {!lgUp && (
        <MobileNav
          color={navColor}
          onClose={mobileNav.handleClose}
          open={mobileNav.open}
          sections={sections}
        />
      )}
      <HorizontalLayoutRoot>
        <HorizontalLayoutContainer>{children}</HorizontalLayoutContainer>
      </HorizontalLayoutRoot>
    </>
  );
};

HorizontalLayout.propTypes = {
  children: PropTypes.node,
  navColor: PropTypes.oneOf(['blend-in', 'discreet', 'evident']),
  sections: PropTypes.array
};
