// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React, { useState } from 'react';
// import { BrowserRouter as Router,Route,Link,Routes,Switch } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  // create a state variable to show mode.
  const [mode, setMode] = useState('light')
  // create a state variable to show alert.
  const [alert, setAlert] = useState(null)

  // To display the alert.
  const showAlert = (message, type) => {
    setAlert([message, type])
    // showing alert till 2 seconds.
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  // dark mode feature 
  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      // document.body.style.backgroundColor='#808080'
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled.", "dark")
      // change title on runtime
      document.title = "Text Utils - Dark Mode"
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled.", "light")
      document.title = "Text Utils - Light Mode"
    }
  }

  // Adding navbar component with the help of bootstrap.
  return (
    <>
      <BrowserRouter >
        {/* This is Navbar component */}

        <Navbar title='TextUtils' about='About Us' mode={mode} toogleMode={toogleMode} />
        <div className="container my-2">
          {/* This is alert component. */}
          <Alert alert={alert} />
          <Routes>
            {/* This is TextForm component */}
            <Route path="/" element={<TextForm heading='Enter Text Here:' mode={mode} showAlert={showAlert} />} />

            {/* this is about component. */}
            <Route path='/about' element={<About />}>
              {/*  */}
            </Route>
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
