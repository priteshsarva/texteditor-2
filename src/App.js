import React, { useState } from 'react'
import NavBar from './components/NavBar'
import TextArea from './components/TextArea'
import About from './components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Alert from './components/Alert'

const App = () => {


  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  var showAlert = (message, type)=>{

    setAlert ({
       msg: message, 
       typ: type })
       setTimeout(() => {
         setAlert(null)
       }, 1500);
     

  }


  const setToggle = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'var(--bs-gray-800)'
      showAlert("Dark mode Enabled","success")

    } else {
      setMode('light')
      showAlert("Light mode Enabled", "success")

      document.body.style.backgroundColor = ''
    }

  }


  return (
    <>
    
      {/* <TextArea mode={mode} /> */}
      <BrowserRouter>
        <NavBar title="Text Editor" toggle={setToggle} mode={mode} />
        <Alert mode={alert}/>
        <Routes>
          <Route path="/" element={<TextArea mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>







    </>
  )
}

export default App
