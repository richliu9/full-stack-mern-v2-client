import React from 'react';
import { useSelector } from 'react-redux';
import TimesThree from './TimesThree';

const TimesTwo = () => {
  const userNumber = useSelector((state => state.userNumber.value))

  return (
    <>
      <h3>{userNumber} * 2 = {userNumber * 2}</h3>
      <TimesThree />
    </>
  );
}

export default TimesTwo;