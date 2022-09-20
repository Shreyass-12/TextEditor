// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import { Link } from 'react-router-dom'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#030c38';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils -Dark Mode';
      setInterval(() => {
        document.title = 'Textutils is amazing';
      }, 1000);
      setInterval(() => {
        document.title = 'install textutils now';
      }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = ('TextUtils - Light Mode');
    }
  }
  return (
    <>
{/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="enter the text to analyze below" mode={mode} />
          {/* </Route>
        </Routes>
       
       </Router> */}
        </div>
      </>
      );
}

      export default App;
