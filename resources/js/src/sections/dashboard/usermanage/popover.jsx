import {
  SvgIcon,
  Popover,
  List,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import DotsVerticalIcon from '@untitled-ui/icons-react/build/esm/DotsVertical';

import { useState, useEffect } from 'react';
import { RouterLink } from '@/components/router-link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CloseIcon from '@mui/icons-material/Close';
import './custom.css';
export const PopoverContent = (props) => {
  const { user, deleteUser } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Typography color="#2ECC71" noWrap sx={{ fontSize: 14 }}>
        <IconButton
          style={{
            padding: '0'
          }}
          onClick={(e) => handlePopover(e)}
          aria-describedby={id}
        >
          <SvgIcon fontSize="small">
            <DotsVerticalIcon />
          </SvgIcon>
        </IconButton>
      </Typography>
      <Popover
        id={user.id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{
          horizontal: 'right'
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }}
      >
        <List>
          <ListItem disableGutters divider className="custom-item">
            <ListItemAvatar sx={{ display: 'contents', mx: 5 }}>
              <SvgIcon fontSize="small" sx={{ mr: 1 }}>
                <VisibilityIcon />
              </SvgIcon>
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{ textDecoration: 'none' }}
                  variant="contained"
                  color="black"
                  component={RouterLink}
                  href={
                    '/profile/' +
                    user.firstname +
                    '-' +
                    user.lastname +
                    '-' +
                    user.id
                  }
                  className="about-list-font"
                >
                  View
                </Typography>
              }
            />
          </ListItem>
          <ListItem className="custom-item" disableGutters divider>
            <ListItemAvatar sx={{ display: 'contents', mx: 5 }}>
              <SvgIcon fontSize="small" sx={{ mr: 1 }}>
                <ModeEditIcon />
              </SvgIcon>
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{ textDecoration: 'none' }}
                  color="black"
                  variant="subtitle2"
                  component={RouterLink}
                  href={'/profile/edit/' + user.id}
                  className="about-list-font"
                >
                  Edit
                </Typography>
              }
            />
          </ListItem>

          <ListItem className="custom-item" disableGutters divider>
            <ListItemAvatar sx={{ display: 'contents', mx: 5 }}>
              <SvgIcon fontSize="small" sx={{ mr: 1 }}>
                <CloseIcon />
              </SvgIcon>
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{ cursor: 'pointer' }}
                  variant="subtitle2"
                  className="about-list-font"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Popover>
    </>
  );
};
