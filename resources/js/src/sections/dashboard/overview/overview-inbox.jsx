import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import RefreshCcw01Icon from '@untitled-ui/icons-react/build/esm/RefreshCcw01';
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
export const OverviewInbox = (props) => {
  const { messages } = props;

  return (
    <Card>
      <CardHeader
        title="Announcements"
        action={(
          <Stack spacing={2}>
            <Pagination count={0} variant="outlined" shape='rounded'/>
        </Stack>
        )}
      />
      <List disablePadding>
        {messages.map((message) => {
          const ago = message.createdAt

          return (
            <ListItem
            alignItems="flex-start"
              key={message.id}
              sx={{
                '&:hover': {
                  backgroundColor: 'action.hover',
                  cursor: 'pointer'
                }
              }}
            >
              <ListItemAvatar>
                <Avatar src={message.senderAvatar} />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={(
                  <Typography
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                    variant="subtitle2"
                  >
                    {message.senderName}
                  </Typography>
                )}
                secondary={(
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
                    {message.content}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ whiteSpace: 'wrap',mt:2 }}
                    variant="subtitle2"
                  >
                    {ago}
                  </Typography>
                </>
                )}
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

OverviewInbox.propTypes = {
  messages: PropTypes.array.isRequired
};
