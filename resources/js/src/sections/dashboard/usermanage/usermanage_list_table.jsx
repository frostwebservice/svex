import numeral from 'numeral';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  IconButton,
  Link,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import {useState, useEffect} from 'react'
import axios from "axios";
import { RouterLink } from '@/components/router-link';
import { Scrollbar } from '@/components/scrollbar';
import { paths } from '@/paths';
import { getInitials } from '@/utils/get-initials';

export const UsermanageListTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => { },
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  useEffect(() => {
        getUsers();
    }, []);
  const [users, setUsers] = useState([]);
//   const response =ref('');
  const getUsers =  async () => {
    try{

       await axios.post(location.protocol + '//' + location.host +"/api/user-getuser")
       .then((response)=>{
            console.log(response);
        setUsers(response.data);

       });
    } catch(error){
        console.error( error);
    }
   
    // 
    // console.log(response.data);
   
    
}

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);
  const enableBulkActions = selected.length > 0;

  return (
    <Box sx={{ position: 'relative' }}>
      {enableBulkActions && (
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: 'center',
            backgroundColor: (theme) => theme.palette.mode === 'dark'
              ? 'neutral.800'
              : 'neutral.50',
            display: enableBulkActions ? 'flex' : 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            px: 2,
            py: 0.5,
            zIndex: 10
          }}
        >
          <Checkbox
            checked={selectedAll}
            indeterminate={selectedSome}
            onChange={(event) => {
              if (event.target.checked) {
                onSelectAll?.();
              } else {
                onDeselectAll?.();
              }
            }}
          />
          <Button
            color="inherit"
            size="small"
          >
            Delete
          </Button>
          <Button
            color="inherit"
            size="small"
          >
            Edit
          </Button>
        </Stack>
      )}
      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAll}
                  indeterminate={selectedSome}
                  onChange={(event) => {
                    if (event.target.checked) {
                      onSelectAll?.();
                    } else {
                      onDeselectAll?.();
                    }
                  }}
                />
              </TableCell>
              <TableCell>
                UserName
              </TableCell>
              <TableCell>
                FullName
              </TableCell>
              <TableCell>
                Email
              </TableCell>
              <TableCell>
                Status
              </TableCell>
              <TableCell align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((users) => {
              const isSelected = selected.includes(users.id);
            //   const location = `${users.city}, ${users.state}, ${users.country}`;
            //   const totalSpent = numeral(users.totalSpent).format(`${users.currency}0,0.00`);

              return (
                <TableRow
                  hover
                  key={users.id}
                  selected={isSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      onChange={(event) => {
                        if (event.target.checked) {
                          onSelectOne?.(users.id);
                        } else {
                          onDeselectOne?.(users.id);
                        }
                      }}
                      value={isSelected}
                    />
                  </TableCell>
                  <TableCell>
                    {/* <Stack
                      alignItems="center"
                      direction="row"
                      spacing={1}
                    >
                      <Avatar
                        src={users.avatar}
                        sx={{
                          height: 42,
                          width: 42
                        }}
                      >
                        {getInitials(users.username)}
                      </Avatar>
                      <div>
                        <Link
                          color="inherit"
                          component={RouterLink}
                          href={paths.dashboard.customers.details}
                          variant="subtitle2"
                        >
                          {users.username}
                        </Link>
                        <Typography
                          color="text.secondary"
                          variant="body2"
                        >
                          {users.email}
                        </Typography>
                      </div>
                    </Stack> */}
                  </TableCell>
                  <TableCell>
                    {users.fuiiname}
                  </TableCell>
                  <TableCell>
                    {users.email}
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">
                      {users.status}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      component={RouterLink}
                      href={paths.dashboard.customers.edit}
                    >
                      <SvgIcon>
                        <Edit02Icon />
                      </SvgIcon>
                    </IconButton>
                    <IconButton
                      component={RouterLink}
                      href={paths.dashboard.customers.details}
                    >
                      <SvgIcon>
                        <ArrowRightIcon />
                      </SvgIcon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Box>
  );
};

UsermanageListTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
