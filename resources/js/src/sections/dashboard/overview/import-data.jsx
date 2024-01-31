import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
  MenuItem,
  TextField
} from '@mui/material';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useSettings } from '@/hooks/use-settings';
import { useNavigate } from 'react-router-dom';
import GraduationHat01Icon from '@/icons/untitled-ui/duocolor/graduation-hat-01';
import { useDialog } from '@/hooks/use-dialog';
import { CsvUploader } from './csv-uploader';
export const ImportData = (props) => {
  const [type, setType] = useState('instagram');
  const navigate = useNavigate();
  const uploadDialog = useDialog();
  const onUpgrade = (res) => {
    toast.success(res);
  };
  const importDB = () => {
    console.log(type);
  };
  const handleType = (v) => {
    setType(v);
  };
  return (
    <Card>
      <CardHeader title="Influencer Database Import" />
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Box>
            <TextField
              id="outlined-select-currency"
              fullWidth
              select
              label="Select Social Type"
              defaultValue="instagram"
              onChange={(e) => handleType(e.target.value)}
              helperText="Please select influencer type."
            >
              <MenuItem value="instagram">Instagram Influencer Import</MenuItem>
              <MenuItem value="tiktok">Tiktok Influencer Import</MenuItem>
              <MenuItem value="youtube">Youtube Influencer Import</MenuItem>
              <MenuItem value="twitter">Twitter Influencer Import</MenuItem>
              <MenuItem value="pinterest">Pinterest Influencer Import</MenuItem>
              <MenuItem value="linkedin">Linkedin Influencer Import</MenuItem>
            </TextField>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <Button
                variant="contained"
                onClick={() => uploadDialog.handleOpen()}
              >
                Import Data
              </Button>
            </Box>
          </Box>
        </Box>
      </CardContent>
      <CsvUploader
        onClose={uploadDialog.handleClose}
        open={uploadDialog.open}
        onUpgrade={onUpgrade}
        kind={type}
      />
    </Card>
  );
};

ImportData.propTypes = {
  onDismiss: PropTypes.func
};
