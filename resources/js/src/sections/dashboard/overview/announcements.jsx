import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import RefreshCcw01Icon from '@untitled-ui/icons-react/build/esm/RefreshCcw01';
import { useState } from 'react';
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  ListItemAvatar,
  ListItemText,
  SvgIcon,
  Typography
} from '@mui/material';
import { customLocale } from '@/utils/date-locale';
import Pagination from '@mui/material/Pagination';
import usePagination from '@/utils/pagination';
import './overview.css';
export const Announcements = (props) => {
  const [announcements, setAccouncements] = useState([]);
  const [called, setCalled] = useState(true);
  if (called) {
    axios.post('/api/get_announcements', {}).then((response) => {
      setAccouncements(response.data);
      setCalled(false);
    });
  }
  const [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(announcements.length / PER_PAGE);
  const _DATA = usePagination(announcements, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <Card>
      <CardHeader
        title="Announcements"
        action={
          <Stack spacing={2}>
            <Pagination
              count={count}
              // size="small"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
          </Stack>
        }
      />
      <List disablePadding>
        {_DATA.currentData().map((announcement) => {
          const ago = announcement.updated_at;

          return (
            <ListItem
              alignItems="flex-start"
              key={announcement.id}
              sx={{
                '&:hover': {
                  backgroundColor: 'action.hover',
                  cursor: 'pointer'
                }
              }}
            >
              <ListItemAvatar>
                <Avatar src="/favicon-32x32.png" />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                    variant="subtitle2"
                  >
                    {announcement.a_title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      color="text.secondary"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'wrap'
                      }}
                      variant="body2"
                    >
                      {announcement.a_content}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ whiteSpace: 'wrap', mt: 2 }}
                      variant="subtitle2"
                    >
                      {[
                        new Date(ago).getMonth() + 1,
                        new Date(ago).getDate(),
                        new Date(ago).getFullYear()
                      ].join('/')}
                    </Typography>
                  </>
                }
                sx={{ pr: 2 }}
              />
            </ListItem>
          );
        })}
      </List>
      {/* <Divider />
      <CardActions>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon>
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
        >
          Go to chat
        </Button>
      </CardActions> */}
    </Card>
  );
};
