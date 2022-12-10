import React from 'react';
import { useSelector } from 'react-redux';
import './OutputPanel.css';
import TimesTwo from './TimesTwo';
import { SuccessSnackBar } from '../snackbars/snackbars.js';

const OutputPanel = () => {
  const userNumber = useSelector((state) => state.userNumber.value);

  return (
    <div className="body">
      <h3>{userNumber} * 1 = {userNumber * 1}</h3>
      <TimesTwo />
      <SuccessSnackBar />
    </div>
  );
}

export default OutputPanel;