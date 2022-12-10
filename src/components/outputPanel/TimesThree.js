import React from 'react';
import { useSelector } from 'react-redux';
import TimesFour from './TimesFour';

const TimesThree = () => {
  const userNumber = useSelector((state => state.userNumber.value))

  return (
    <>
      <h3>{userNumber} * 3 = {userNumber * 3}</h3>
      <TimesFour />
    </>
  );
}

export default TimesThree;