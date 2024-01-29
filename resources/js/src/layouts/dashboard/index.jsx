import PropTypes from 'prop-types';
import { withAuthGuard } from '@/hocs/with-auth-guard';
import { useSettings } from '@/hooks/use-settings';
import { useSections } from './config';
import { HorizontalLayout } from './horizontal-layout';
import { VerticalLayout } from './vertical-layout';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
var newsec = [{ items: [] }];
const Layout = withAuthGuard((props) => {
  const settings = useSettings();
  const sections = useSections();
  const [nsections, setNsections] = useState(sections[0].items);
  // const [newSec, setNewsec] = useState([]);
  const { userinfo } = props;
  const removeAdmin = (value) => {
    return (
      value.title != 'Admin Dashboard' &&
      value.title != 'Influencer Finder Tool'
    );
  };
  const removeFinder = (value) => {
    return value.title != 'Admin Dashboard';
  };
  useEffect(() => {
    if (userinfo.id) {
      if (userinfo.is_admin != 1 && userinfo.paid != '1') {
        setNsections(nsections.filter(removeAdmin));
      } else if (userinfo.is_admin != 1 && userinfo.paid == '1') {
        setNsections(nsections.filter(removeFinder));
      }
    }
  }, []);

  newsec[0]['items'] = nsections;
  if (settings.layout === 'horizontal') {
    return (
      <HorizontalLayout
        sections={newsec}
        navColor={settings.navColor}
        {...props}
      />
    );
  }

  return (
    <VerticalLayout sections={newsec} navColor={settings.navColor} {...props} />
  );
});

Layout.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});

export default connect(mapStateToProps)(Layout);
