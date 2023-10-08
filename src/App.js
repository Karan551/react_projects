// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const toogleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      // document.body.style.backgroundColor='#808080'
      document.body.style.backgroundColor='#042743'
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  // Adding navbar component with the help of bootstrap.
  return (<>
    <Navbar title='TextUtils' about='About Us' mode={mode} toogleMode={toogleMode} />
    <div className="container my-3">
      <TextForm heading='Enter Text Here:' mode={mode} />
    </div>
    {/* <div className="container my-3">
      <About />
    </div> */}
  </>
  );
}

export default App;
