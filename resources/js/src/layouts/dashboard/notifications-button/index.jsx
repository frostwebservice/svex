import { useCallback, useMemo, useState } from 'react';
import Bell01Icon from '@untitled-ui/icons-react/build/esm/Bell01';
import { Badge, IconButton, SvgIcon, Tooltip } from '@mui/material';
import { usePopover } from '@/hooks/use-popover';
import { notifications as initialNotifications } from './notifications';
import { NotificationsPopover } from './notifications-popover';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
const useNotifications = () => {
  // const [notifications, setNotifications] = useState(initialNotifications);
  const [notifications, setNotifications] = useState([]);
  const unread = useMemo(() => {
    return notifications.reduce(
      (acc, notification) => acc + (notification.read ? 0 : 1),
      0
    );
  }, [notifications]);

  const handleRemoveOne = useCallback((notificationId) => {
    setNotifications((prevState) => {
      return prevState.filter(
        (notification) => notification.id !== notificationId
      );
    });
  }, []);

  const handleMarkAllAsRead = useCallback(() => {
    setNotifications((prevState) => {
      return prevState.map((notification) => ({
        ...notification,
        read: true
      }));
    });
  }, []);

  return {
    handleMarkAllAsRead,
    handleRemoveOne,
    notifications,
    unread
  };
};

export const NotificationsButton = () => {
  const popover = usePopover();
  const { handleRemoveOne, handleMarkAllAsRead, unread } = useNotifications();
  const [notifications, setNotifications] = useState([]);
  const onparentNotification = (notifi) => {
    setNotifications(notifi);
  };
  return (
    <div className="small-show">
      <Tooltip title="Notifications">
        <IconButton
          ref={popover.anchorRef}
          onClick={popover.handleOpen}
          sx={{ margin: '4px', padding: '4px' }}
        >
          <Badge color="error" badgeContent={unread}>
            {notifications?.length == 0 ? (
              <SvgIcon>
                <Bell01Icon />
              </SvgIcon>
            ) : (
              <SvgIcon>
                <NotificationImportantIcon />
              </SvgIcon>
            )}
          </Badge>
        </IconButton>
      </Tooltip>
      <NotificationsPopover
        anchorEl={popover.anchorRef.current}
        onClose={popover.handleClose}
        onMarkAllAsRead={handleMarkAllAsRead}
        onRemoveOne={handleRemoveOne}
        open={popover.open}
        onparentNotification={onparentNotification}
      />
    </div>
  );
};
