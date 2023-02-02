import React, { useState } from 'react'
import NavBar from './components/NavBar'
import TextArea from './components/TextArea'
import About from './components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {


  const [mode, setMode] = useState('light');


  const setToggle = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'var(--bs-gray-800)'

    } else {
      setMode('light')
      document.body.style.backgroundColor = ''
    }

  }


  return (
    <>

      <BrowserRouter>
        <NavBar title="Text Editor" toggle={setToggle} mode={mode} />
        <Routes>
          <Route path="/" element={<TextArea mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>







    </>
  )
}

export default App
