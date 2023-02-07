import React, { useState } from 'react'
import ResTextArea from './ResTextArea'



const TextArea = (props) => {

  const [text, setText] = useState("Enter your text here...");
  const [showresult, setShowresult] = useState(false);
  const [response, setResponse] = useState();

  const onChangeHandler = (e) => {
    setText(e.target.value)
  }

  const onUpperCase = () => {
    setResponse(text.toUpperCase())
    setShowresult(true)
    props.showAlert("Converted to UpperCase", "success")

  }


  const onLowerCase = () => {
    setResponse(text.toLowerCase())
    setShowresult(true)
    props.showAlert("Converted to LowerCase", "success")

  }

  const onClearText = () => {
    setText("")
    setShowresult(false)
    props.showAlert("Text cleared", "success")

  }

  return (
    <>
      <div className="container mt-3" style={{ 'color': props.mode === 'dark' ? 'var(--bs-white)': '' }}>
        <h2>Enter Your Text</h2>
        <textarea className="form-control " value={text} onChange={onChangeHandler} aria-label="With textarea" rows="8" style={{ 'color': props.mode === 'dark' ? 'var(--bs-white)' : '', 'backgroundColor': props.mode === 'dark' ? 'var(--bs-gray-700)' : '' }}></textarea>
        <button disabled={text.length===0} type="button" className="btn btn-primary col-2 m-2" onClick={onUpperCase}>Upper case</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary col-2 m-2" onClick={onLowerCase}>Lower case</button>
        <button disabled={text.length === 0} type="button" className="btn btn-primary col-2 m-2" onClick={onClearText}>Clear text</button>

        {/* <button type="button" className="btn btn-primary col-2 m-2">Primary</button> */}
      </div>
      {showresult ? <ResTextArea status={setShowresult} ans={response} mode={props.mode} showAlert={props.showAlert} /> : null}

    </>
  )
}

export default TextArea
