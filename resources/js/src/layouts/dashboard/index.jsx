import PropTypes from 'prop-types';
import { withAuthGuard } from '@/hocs/with-auth-guard';
import { useSettings } from '@/hooks/use-settings';
import { useSections } from './config';
import { HorizontalLayout } from './horizontal-layout';
import { VerticalLayout } from './vertical-layout';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { paths } from '@/paths';
import { Chip, SvgIcon } from '@mui/material';
import { useTranslation } from 'react-i18next';
import HomeSmileIcon from '@/icons/untitled-ui/duocolor/home-smile';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import { tokens } from '@/locales/tokens';
var newsec = [{ items: [] }];
const Layout = withAuthGuard((props) => {
  const { t } = useTranslation();
  const settings = useSettings();
  const sections = useSections();
  const [nsections, setNsections] = useState(sections[0].items);
  const { userinfo } = props;

  const [once, setOnce] = useState(false);
  const removeAdmin = (value) => {
    return value.title != 'Admin Panel';
  };
  useEffect(() => {
    // setNsections(sections[0].items);
    if (userinfo.id) {
      if (userinfo.is_admin == 1) {
        for (let i = 0; i < nsections.length; i++) {
          if (nsections[i]['title'] == 'Admin Panel') return;
        }
        let newItem = {
          title: 'Admin Panel',
          path: paths.dashboard.admin,
          icon: (
            <SvgIcon fontSize="small">
              <DashboardCustomizeOutlinedIcon />
            </SvgIcon>
          ),
          items: [
            {
              title: t(tokens.nav.admin),
              path: paths.dashboard.admin
            },
            {
              title: t(tokens.nav.usermanage),
              path: paths.dashboard.usermanage.index
            },
            {
              title: t(tokens.nav.orderList),
              path: paths.dashboard.orders.index
            },
            {
              title: t(tokens.nav.invoiceList),
              path: paths.dashboard.invoices.index
            },
            {
              title: 'Payment Gateway Settings',
              path: '/dashboard/admin/payment'
            }
          ]
        };
        setNsections([newItem, ...nsections]);
        setOnce(true);
      } else {
        setNsections(nsections.filter(removeAdmin));
      }
    }
  }, [userinfo]);

  newsec[0]['items'] = nsections;
  if (settings.layout === 'horizontal') {
    return (
      <HorizontalLayout
        sections={newsec}
        navColor={settings.navColor}
        userinfo={userinfo}
        {...props}
      />
    );
  }

  return (
    <VerticalLayout
      userinfo={userinfo}
      sections={newsec}
      navColor={settings.navColor}
      {...props}
    />
  );
});

Layout.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});

export default connect(mapStateToProps)(Layout);
