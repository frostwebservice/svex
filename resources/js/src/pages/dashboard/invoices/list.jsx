import { useCallback, useEffect, useRef, useState } from 'react';
import FilterFunnel01Icon from '@untitled-ui/icons-react/build/esm/FilterFunnel01';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import {
  Box,
  Button,
  Divider,
  Stack,
  Container,
  SvgIcon,
  Typography,
  useMediaQuery,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { invoicesApi } from '@/api/invoices';
import { Seo } from '@/components/seo';
import { useMounted } from '@/hooks/use-mounted';
import { usePageView } from '@/hooks/use-page-view';
import { InvoiceListContainer } from '@/sections/dashboard/invoice/invoice-list-container';
import { InvoiceListSidebar } from '@/sections/dashboard/invoice/invoice-list-sidebar';
import InvoiceListSummary from '@/sections/dashboard/invoice/invoice-list-summary';
import { InvoiceListTable } from '@/sections/dashboard/invoice/invoice-list-table';
import { useSettings } from '@/hooks/use-settings';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './invoice.css';
const useInvoicesSearch = () => {
  const [state, setState] = useState({
    filters: {
      customers: [],
      endDate: undefined,
      query: '',
      startDate: undefined
    },
    page: 0,
    rowsPerPage: 5,
    invoices: []
  });
  useEffect(() => {
    axios.post('/api/get_invoices', {}).then((response) => {
      setState((prevState) => ({
        ...prevState,
        invoices: response.data
      }));
    });
  }, []);

  const handleFiltersChange = useCallback((filters) => {
    setState((prevState) => ({
      ...prevState,
      filters,
      page: 0
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
    handlePageChange,
    handleRowsPerPageChange,
    state
  };
};

const useInvoicesStore = (searchState) => {
  const isMounted = useMounted();
  const [state, setState] = useState({
    invoices: [],
    invoicesCount: 0
  });

  const handleInvoicesGet = useCallback(async () => {
    try {
      const response = await invoicesApi.getInvoices(searchState);

      if (isMounted()) {
        setState({
          invoices: response.data,
          invoicesCount: response.count
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, [searchState, isMounted]);

  useEffect(
    () => {
      handleInvoicesGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchState]
  );

  return {
    ...state
  };
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
  // You can only store strings
  let objStr = JSON.stringify(obj);
  localStorage.setItem('time_token', objStr);
  const rootRef = useRef(null);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const invoicesSearch = useInvoicesSearch();
  const invoicesStore = useInvoicesStore(invoicesSearch.state);
  const [group, setGroup] = useState(true);
  const [openSidebar, setOpenSidebar] = useState(lgUp);
  const settings = useSettings();
  usePageView();

  const handleGroupChange = useCallback((event) => {
    setGroup(event.target.checked);
  }, []);

  const handleFiltersToggle = useCallback(() => {
    setOpenSidebar((prevState) => !prevState);
  }, []);

  const handleFiltersClose = useCallback(() => {
    setOpenSidebar(false);
  }, []);

  return (
    <>
      <Seo title="Dashboard: Invoice List" />
      <Divider />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Box ref={rootRef}>
            <Grid container spacing={3}>
              <Grid xs={12} lg={4}>
                <InvoiceListSidebar
                  container={rootRef.current}
                  filters={invoicesSearch.state.filters}
                  group={group}
                  onFiltersChange={invoicesSearch.handleFiltersChange}
                  onClose={handleFiltersClose}
                  onGroupChange={handleGroupChange}
                  open={openSidebar}
                />
              </Grid>
              <Grid xs={12} lg={8}>
                <InvoiceListContainer open={openSidebar}>
                  <Stack spacing={4}>
                    <Stack
                      alignItems="flex-start"
                      direction="row"
                      justifyContent="space-between"
                      spacing={3}
                    >
                      <div>
                        <Typography variant="h4">Invoices</Typography>
                      </div>
                      <Stack alignItems="center" direction="row" spacing={1}>
                        <Button
                          color="inherit"
                          startIcon={
                            <SvgIcon>
                              <FilterFunnel01Icon />
                            </SvgIcon>
                          }
                          onClick={handleFiltersToggle}
                        >
                          Filters
                        </Button>
                      </Stack>
                    </Stack>
                    <InvoiceListSummary
                      items={invoicesStore.invoices}
                      count={invoicesStore.invoicesCount}
                    />
                    <InvoiceListTable
                      count={invoicesStore.invoicesCount}
                      group={group}
                      items={invoicesStore.invoices}
                      onPageChange={invoicesSearch.handlePageChange}
                      onRowsPerPageChange={
                        invoicesSearch.handleRowsPerPageChange
                      }
                      page={invoicesSearch.state.page}
                      rowsPerPage={invoicesSearch.state.rowsPerPage}
                    />
                  </Stack>
                </InvoiceListContainer>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});
export default connect(mapStateToProps)(Page);
