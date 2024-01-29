import PropTypes from 'prop-types';
import CheckVerified01 from '@untitled-ui/icons-react/build/esm/CheckVerified01';
import DotsVerticalIcon from '@untitled-ui/icons-react/build/esm/DotsVertical';

import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Link,
  Stack,
  SvgIcon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Popover,
  IconButton,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { paths } from '@/paths';
import CloseIcon from '@mui/icons-material/Close';
import { getInitials } from '@/utils/get-initials';
import { CardBottom } from './card-bottom';
import MessageChatSquareIcon from '@untitled-ui/icons-react/build/esm/MessageChatSquare';
import HeartIcon from '@untitled-ui/icons-react/build/esm/Heart';
import { useState, useCallback } from 'react';

export const OutreachMemberCard = (props) => {
  const { company, order, reRender, ...other } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const deleteUser = (groupID) => {
    axios
      .post('/api/delete_user_group', {
        group_inf_id: groupID
      })
      .then((response) => {
        setAnchorEl(null);
        reRender();
      });
  };
  return (
    <Card {...other} style={{ marginTop: 30 }}>
      <CardContent>
        <Grid container>
          {company.map((group, index) => (
            <Grid item className="custom-grid-item" xs={12} md={4} sm={6}>
              <Card>
                <Stack
                  // alignItems="center"
                  direction="row"
                  flexWrap="wrap"
                  justifyContent="space-between"
                  sx={{
                    px: 2,
                    py: 1.5
                  }}
                  style={{ position: 'relative' }}
                >
                  <Stack
                    // alignItems="flex-start"
                    spacing={2}
                    direction={{
                      xs: 'column',
                      sm: 'row'
                    }}
                  >
                    <Avatar
                      component={RouterLink}
                      href={paths.dashboard.jobs.companies.details}
                      src={group.detail.profile_pic_url_hd}
                      sx={{ width: 40, height: 40 }}
                      // variant="rounded"
                    >
                      {/* {getInitials(company.name)} */}
                    </Avatar>

                    <div>
                      <Link
                        component={RouterLink}
                        href={paths.dashboard.jobs.companies.details}
                        variant="h6"
                        style={{ fontSize: 14 }}
                        sx={{ color: 'text.primary' }}
                      >
                        {group.detail.username}
                      </Link>
                      {/* <div className='verified-image'></div> */}
                      <Typography
                        sx={{ color: 'text.primary' }}
                        style={{ fontSize: 14 }}
                      >
                        Social Media Influencer
                      </Typography>
                      <Typography
                        color="text.secondary"
                        className="font-inter location-pointer"
                        variant="overline"
                        style={{ fontSize: 12, marginTop: 17 }}
                      ></Typography>
                      <Typography
                        color="primary"
                        variant="overline"
                        // variant="subtitle2"
                        style={{ fontSize: 10 }}
                      >
                        {group.detail.city + ',' + group.detail.Country}
                      </Typography>
                    </div>
                  </Stack>
                  {order == 0 ? (
                    <></>
                  ) : (
                    <Stack
                      alignItems="center"
                      direction="row"
                      className="vertical-dots"
                      style={{ position: 'absolute', right: 5, top: 5 }}
                      // spacing={2}
                    >
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
                        id={group.id}
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
                          <ListItem sx={{ width: 100, px: 1 }} disableGutters>
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
                                  onClick={() => deleteUser(group.id)}
                                >
                                  Delete
                                </Typography>
                              }
                            />
                          </ListItem>
                        </List>
                      </Popover>
                    </Stack>
                  )}
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

OutreachMemberCard.propTypes = {
  company: PropTypes.object.isRequired
};
