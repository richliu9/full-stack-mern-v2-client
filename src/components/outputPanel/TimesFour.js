import React from "react";
import { useSelector } from 'react-redux';

const TimesFour = () => {
  const userNumber = useSelector((state => state.userNumber.value))

  return (
    <h3>{userNumber} * 4 = {userNumber * 4}</h3>
  );
}

export default TimesFour;