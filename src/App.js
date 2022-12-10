import React, { useState } from 'react';
import InputPanel from './components/inputPanel/InputPanel.js';
import OutputPanel from './components/outputPanel/OutputPanel.js';

function App() {
  const [userNum, setUserNum] = useState(0);
  const [serverStatus, setServerStatus] = useState('No messages from the server');

  return (
    <>
      <InputPanel serverStatus={serverStatus} setServerStatus={setServerStatus} />
      <OutputPanel />
    </>
  );
}

export default App;
