import { useCallback, useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import { invoicesApi } from '@/api/invoices';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { useDialog } from '@/hooks/use-dialog';
import { useMounted } from '@/hooks/use-mounted';
import { usePageView } from '@/hooks/use-page-view';
import { paths } from '@/paths';
import { InvoicePdfDialog } from '@/sections/dashboard/invoice/invoice-pdf-dialog';
import { InvoicePdfDocument } from '@/sections/dashboard/invoice/invoice-pdf-document';
import { InvoicePreview } from '@/sections/dashboard/invoice/invoice-preview';
import { getInitials } from '@/utils/get-initials';

const useInvoice = () => {
  const isMounted = useMounted();
  const [invoice, setInvoice] = useState(null);
  const handleInvoiceGet = useCallback(async () => {
    try {
      axios
        .post('/api/get_invoice_detail', {
          id: window.location.pathname.split('/')[3]
        })
        .then((response) => {
          if (isMounted()) {
            let inv = response.data;
            inv.dueDate = Date.parse(inv.dueDate);
            inv.issueDate = Date.parse(inv.issueDate);
            // console.log(inv);
            setInvoice(inv);
          }
        });
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      handleInvoiceGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return invoice;
};

const Page = () => {
  const invoice = useInvoice();
  const dialog = useDialog();
  usePageView();

  if (!invoice) {
    return null;
  }

  return (
    <>
      <Seo title="Dashboard: Invoice Details" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack divider={<Divider />} spacing={4}>
            <Stack spacing={4}>
              <div>
                <Link
                  color="text.primary"
                  component={RouterLink}
                  href={paths.dashboard.invoices.index}
                  sx={{
                    alignItems: 'center',
                    display: 'inline-flex'
                  }}
                  underline="hover"
                >
                  <SvgIcon sx={{ mr: 1 }}>
                    <ArrowLeftIcon />
                  </SvgIcon>
                  <Typography variant="subtitle2">Invoices</Typography>
                </Link>
              </div>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={4}
              >
                <Stack alignItems="center" direction="row" spacing={2}>
                  <Avatar
                    sx={{
                      height: 42,
                      width: 42
                    }}
                  >
                    {getInitials(invoice.customer.name)}
                  </Avatar>
                  <div>
                    <Typography variant="h4">{invoice.number}</Typography>
                    <Typography color="text.secondary" variant="body2">
                      {invoice.customer.name}
                    </Typography>
                  </div>
                </Stack>
                <Stack alignItems="center" direction="row" spacing={2}>
                  <Button color="inherit" onClick={dialog.handleOpen}>
                    Preview
                  </Button>
                  <PDFDownloadLink
                    document={<InvoicePdfDocument invoice={invoice} />}
                    fileName="invoice"
                    style={{ textDecoration: 'none' }}
                  >
                    <Button color="primary" variant="contained">
                      Download
                    </Button>
                  </PDFDownloadLink>
                </Stack>
              </Stack>
            </Stack>
            <InvoicePreview invoice={invoice} />
          </Stack>
        </Container>
      </Box>
      <InvoicePdfDialog
        invoice={invoice}
        onClose={dialog.handleClose}
        open={dialog.open}
      />
    </>
  );
};

export default Page;
