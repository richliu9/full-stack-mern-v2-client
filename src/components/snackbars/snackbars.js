import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { DISPLAY_TYPE_INFO, DISPLAY_TYPE_SUCCESS } from '../../constants/constants.js';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SuccessSnackBar = (props) => {
  const [infoOpen, setInfoOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const serverMessageSliceValue = useSelector((state) => state.serverMessageSlice.value);

  useEffect(() => {
    if (serverMessageSliceValue.isLoading === true) {
      setInfoOpen(true);
      setSuccessOpen(false);
    } else if (serverMessageSliceValue.isLoading === false) {
      setInfoOpen(false);
      setSuccessOpen(true);
    }
  }, [serverMessageSliceValue]);

  const handleClose = () => { setInfoOpen(false); setSuccessOpen(false); }

  return (
    <>
      <Snackbar open={successOpen} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          {serverMessageSliceValue.message}
        </Alert>
      </Snackbar>
      <Snackbar open={infoOpen} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='info' sx={{ width: '100%' }}>
          {serverMessageSliceValue.message}
        </Alert>
      </Snackbar>
    </>
  );
}
