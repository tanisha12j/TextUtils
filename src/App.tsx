// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route
// } from "react-router-dom";

interface AlertMessage {
  msg: string;
  type: string;
}

function App() {
  const [mode, setMode] = useState<string>('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState<AlertMessage | null>(null);

  const showAlert = (message: string, type: string) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date().toString()} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About mode={mode} />
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} /> 
            {/* </Route> */}
        </div>
    </>
  );
}

export default App;
