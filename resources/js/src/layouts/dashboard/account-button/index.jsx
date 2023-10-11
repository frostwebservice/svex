import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import { Avatar, Box, ButtonBase, SvgIcon } from '@mui/material';
import { useMockedUser } from '@/hooks/use-mocked-user';
import { usePopover } from '@/hooks/use-popover';
import AccountPopover from './account-popover';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
const AccountButton = (props) => {
  const { userinfo } = props;
  const user = useMockedUser();
  const popover = usePopover();

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={popover.handleOpen}
        ref={popover.anchorRef}
        sx={{
          alignItems: 'center',
          display: 'flex',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: 'divider',
          height: 40,
          width: 40,
          borderRadius: '50%'
        }}
      >
        <Avatar
          sx={{
            height: 32,
            width: 32
          }}
          // src={user.avatar}
          src={userinfo && userinfo.avatar ? userinfo.avatar : `https://ui-avatars.com/api/?name=${userinfo.companyname}&background=2970FF&color=fff&rounded=true`}

        >
          <SvgIcon>
            <User01Icon />
          </SvgIcon>
        </Avatar>
      </Box>
      <AccountPopover
        anchorEl={popover.anchorRef.current}
        onClose={popover.handleClose}
        open={popover.open}
      />
    </>
  );
};
const mapStateToProps = state => ({
  userinfo: state.profile.userinfo,
});

export default connect(mapStateToProps)(AccountButton);