import { useCallback, useEffect, useMemo, useState } from 'react';
import Download01Icon from '@untitled-ui/icons-react/build/esm/Download01';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import Upload01Icon from '@untitled-ui/icons-react/build/esm/Upload01';
import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import { customersApi } from '@/api/customers';
import { Seo } from '@/components/seo';
import { useMounted } from '@/hooks/use-mounted';
import { usePageView } from '@/hooks/use-page-view';
import { useSelection } from '@/hooks/use-selection';
import { CustomerListSearch } from '@/sections/dashboard/customer/customer-list-search';
import { UsermanageListTable } from '@/sections/dashboard/usermanage/usermanage_list_table';
import { useSettings } from '@/hooks/use-settings';
import { ExportJsonCsv } from 'react-export-json-csv';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
const useCustomersSearch = () => {
  const [state, setState] = useState({
    filters: {
      query: undefined,
      hasAcceptedMarketing: undefined,
      isProspect: undefined,
      isReturning: undefined
    },
    page: 0,
    rowsPerPage: 5,
    sortBy: 'updatedAt',
    sortDir: 'desc'
  });
  const handleFiltersChange = useCallback((filters) => {
    setState((prevState) => ({
      ...prevState,
      filters
    }));
  }, []);

  const handleSortChange = useCallback((sort) => {
    setState((prevState) => ({
      ...prevState,
      sortBy: sort.sortBy,
      sortDir: sort.sortDir
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

const useCustomersStore = (searchState) => {
  const isMounted = useMounted();
  const [state, setState] = useState({
    customers: [],
    customersCount: 0
  });

  const handleCustomersGet = useCallback(async () => {
    try {
      axios.post('/api/user-getuser').then((response) => {
        if (isMounted()) {
          setState({
            customers: response.data,
            customersCount: response.data.length
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  }, [searchState, isMounted]);

  useEffect(
    () => {
      handleCustomersGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchState]
  );

  return {
    ...state
  };
};

const useCustomersIds = (customers = []) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
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
  const customersSearch = useCustomersSearch();
  const customersStore = useCustomersStore(customersSearch.state);
  const customersIds = useCustomersIds(customersStore.customers);
  const settings = useSettings();
  usePageView();
  const [csv, setCsv] = useState([]);
  const headers = [
    {
      key: 'id',
      name: 'ID'
    },
    {
      key: 'email',
      name: 'Email'
    },
    {
      key: 'firstname',
      name: 'FirstName'
    },
    {
      key: 'name',
      name: 'Name'
    },
    {
      key: 'regdate',
      name: 'Registration Date'
    }
  ];
  const downloadCSV = () => {
    customersStore.customers.map((customer, index) => {
      setCsv((oldArray) => [
        ...oldArray,
        {
          id: index + 1,
          email: customer.email,
          firstname: customer.firstname,
          name: customer.fullname,
          regdate: customer.created_at
        }
      ]);
    });
    setTimeout(() => {
      $('.export')[0].click();
    }, '1000');
  };
  return (
    <>
      <Seo title="Dashboard: Customer List" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Stack spacing={4}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Brand Users</Typography>
              </Stack>
              <Stack alignItems="center" direction="row" spacing={3}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ backgroundColor: 'blue' }}
                  startIcon={
                    <SvgIcon>
                      <Download01Icon />
                    </SvgIcon>
                  }
                  onClick={downloadCSV}
                >
                  Download CSV
                </Button>
                <ExportJsonCsv
                  headers={headers}
                  items={csv}
                  fileTitle="users.csv"
                  className="export"
                  style={{ display: 'none' }}
                >
                  Export
                </ExportJsonCsv>
              </Stack>
            </Stack>
            <Card>
              {/* <CustomerListSearch
                onFiltersChange={customersSearch.handleFiltersChange}
                onSortChange={customersSearch.handleSortChange}
                sortBy={customersSearch.state.sortBy}
                sortDir={customersSearch.state.sortDir}
              /> */}
              <UsermanageListTable
                count={customersStore.customersCount}
                users={customersStore.customers}
                onPageChange={customersSearch.handlePageChange}
                onRowsPerPageChange={customersSearch.handleRowsPerPageChange}
                page={customersSearch.state.page}
                rowsPerPage={customersSearch.state.rowsPerPage}
              />
            </Card>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  userinfo: state.profile.userinfo
});
export default connect(mapStateToProps)(Page);
