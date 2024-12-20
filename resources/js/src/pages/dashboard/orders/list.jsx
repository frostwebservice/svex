import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import {
  Box,
  Button,
  Divider,
  Stack,
  SvgIcon,
  Container,
  Typography
} from '@mui/material';
import { ordersApi } from '@/api/orders';
import { Seo } from '@/components/seo';
import { useDialog } from '@/hooks/use-dialog';
import { useMounted } from '@/hooks/use-mounted';
import { usePageView } from '@/hooks/use-page-view';
import { OrderDrawer } from '@/sections/dashboard/order/order-drawer';
import { OrderListContainer } from '@/sections/dashboard/order/order-list-container';
import { OrderListSearch } from '@/sections/dashboard/order/order-list-search';
import { OrderListTable } from '@/sections/dashboard/order/order-list-table';
import { useSettings } from '@/hooks/use-settings';
import './order.css';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const useOrdersSearch = () => {
  const [state, setState] = useState({
    filters: {
      query: undefined,
      status: undefined
    },
    page: 0,
    rowsPerPage: 5,
    sortBy: 'createdAt',
    sortDir: 'desc',
    orders: []
  });
  useEffect(() => {
    axios.post('/api/get_orders', {}).then((response) => {
      setState((prevState) => ({
        ...prevState,
        orders: response.data
      }));
    });
  }, []);
  const handleFiltersChange = useCallback((filters) => {
    setState((prevState) => ({
      ...prevState,
      filters
    }));
  }, []);

  const handleSortChange = useCallback((sortDir) => {
    setState((prevState) => ({
      ...prevState,
      sortDir
    }));
  }, []);

  const handlePageChange = useCallback((event, page) => {
    setState((prevState) => ({
      ...prevState,
      page
    }));
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setState((prevState) => ({
      ...prevState,
      rowsPerPage: parseInt(event.target.value, 10)
    }));
  }, []);

  return {
    handleFiltersChange,
    handleSortChange,
    handlePageChange,
    handleRowsPerPageChange,
    state
  };
};

const useOrdersStore = (searchState) => {
  const isMounted = useMounted();
  const [state, setState] = useState({
    orders: [],
    ordersCount: 0
  });

  const handleOrdersGet = useCallback(async () => {
    try {
      const response = await ordersApi.getOrders(searchState);

      if (isMounted()) {
        setState({
          orders: response.data,
          ordersCount: response.count
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, [searchState, isMounted]);

  useEffect(
    () => {
      handleOrdersGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchState]
  );

  return {
    ...state
  };
};

const useCurrentOrder = (orders, orderId) => {
  return useMemo(() => {
    if (!orderId) {
      return undefined;
    }

    return orders.find((order) => order.id === orderId);
  }, [orders, orderId]);
};

const Page = (props) => {
  const { userinfo } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (userinfo.is_admin == 0) navigate('/dashboard');
  }, [userinfo]);
  let obj = {
    time: new Date().getTime(),
    value: 'email',
    expire: 3000000
  };
  let objStr = JSON.stringify(obj);
  localStorage.setItem('time_token', objStr);
  const rootRef = useRef(null);
  const ordersSearch = useOrdersSearch();
  const ordersStore = useOrdersStore(ordersSearch.state);
  const dialog = useDialog();
  const currentOrder = useCurrentOrder(ordersStore.orders, dialog.data);
  const settings = useSettings();
  usePageView();

  const handleOrderOpen = useCallback(
    (orderId) => {
      // Close drawer if is the same order

      if (dialog.open && dialog.data === orderId) {
        dialog.handleClose();
        return;
      }

      dialog.handleOpen(orderId);
    },
    [dialog]
  );

  return (
    <>
      <Seo title="Dashboard: Order List" />
      <Box
        component="main"
        ref={rootRef}
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <div>
            <Box ref={rootRef}>
              <Box sx={{ p: 3 }}>
                <Stack
                  alignItems="flex-start"
                  direction="row"
                  justifyContent="space-between"
                  spacing={4}
                >
                  <div>
                    <Typography variant="h4">Orders</Typography>
                  </div>
                </Stack>
              </Box>

              <OrderListSearch
                onFiltersChange={ordersSearch.handleFiltersChange}
                onSortChange={ordersSearch.handleSortChange}
                sortBy={ordersSearch.state.sortBy}
                sortDir={ordersSearch.state.sortDir}
              />
              <Divider />
              <OrderListTable
                count={ordersStore.ordersCount}
                items={ordersStore.orders}
                onPageChange={ordersSearch.handlePageChange}
                onRowsPerPageChange={ordersSearch.handleRowsPerPageChange}
                onSelect={handleOrderOpen}
                page={ordersSearch.state.page}
                rowsPerPage={ordersSearch.state.rowsPerPage}
              />

              <OrderDrawer
                container={rootRef.current}
                onClose={dialog.handleClose}
                open={dialog.open}
                order={currentOrder}
              />
            </Box>
          </div>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});
export default connect(mapStateToProps)(Page);
