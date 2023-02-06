import React from 'react'

const Alert = (props) => {


    const captalise = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (

    
      
    //   <div style={{ height: "60 px" }}>
      props.mode && 
      <div className={`alert alert-${props.mode.typ} alert-dismissible fade show`} role="alert">
              <strong>   {captalise(props.mode.typ  )}:</strong> {props.mode.msg}    
              {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
          </div>  

    //   </div>

  )
}

export default Alert
