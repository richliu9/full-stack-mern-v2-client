import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setUserNumber } from '../../redux/userNumberSlice';
import { setServerMessage } from '../../redux/serverMessageSlice';
import { getUserNumber, putUserNumber } from '../../api/api';
import { DISPLAY_TYPE_INFO, DISPLAY_TYPE_SUCCESS } from '../../constants/constants.js';
import './inputPanel.css';

const InputBox = ({ serverStatus, setServerStatus }) => {
  const inputRef = useRef(null);
  const userNumber = useSelector((state) => state.userNumber.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUserNumber = async () => {
      const response = (await getUserNumber()).data.userNumber;
      dispatch(setUserNumber({ userNumber: response }));
      dispatch(setServerMessage({ message: response, isLoading: true, displayType: DISPLAY_TYPE_INFO }));
    }

    loadUserNumber();
  }, []);

  const handleOnClick = async () => {
    const val = parseInt(inputRef.current.value);
    if (val > 99999 || isNaN(val)) return;

    dispatch(setUserNumber({ userNumber: val }))
    if (await putUserNumber(val)) {
      console.log("Server has saved your data");
      dispatch(setServerMessage({ message: val, isLoading: false, displayType: DISPLAY_TYPE_SUCCESS }));
    }
  }

  return (
    <div className="inputBox">
      <div>
        <h1>Your inputted number is: {userNumber}</h1>
        {/* <p>{serverStatus}</p> */}
      </div>
      <div className="inputForm">
        <h3 style={{ marginTop: 0, marginBottom: 0 }}>Please input a number below</h3>
        <input
          type="text"
          ref={inputRef}
        />
        <button onClick={handleOnClick}>Submit</button>
      </div>
    </div>
  );
}

export default InputBox;
