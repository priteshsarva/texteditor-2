import React from 'react'

const ResTextArea = (props) => {

    const statushide =()=>{
        props.status(false)
    }

    const onClickCopy= (e)=>{
        navigator.clipboard.writeText(props.ans);
    }



    return (
        <>
            <div className="container mt-3" style={{ 'color': props.mode === 'dark' ? 'var(--bs-white)' : '' }}>
               
               
                <div className='row justify-content-between'>
                    <p className='col-6 fs-3 m-0 fw-bold'>Result</p>
                    <button type="button" className="btn btn-warning col-2 m-2  " onClick={statushide}>Reset</button>
                </div>


                <p className="form-control text-break" style={{ 'color': props.mode === 'dark' ? 'var(--bs-white)' : '', 'border': 'none', 'backgroundColor': props.mode === 'dark' ? 'var(--bs-gray-700)' : '', }}>{props.ans}</p>
            </div>



            <div className="container mt-3" style={{ 'color': props.mode === 'dark' ? 'var(--bs-white)' : '' }}>
                <div className="row justify-content-between">
                    <div className="col-6" >
                <h3 >Your Text Summary</h3>
                <p> Words: {props.ans.split(' ').length} & letters: {props.ans.length}<br></br>
                    {0.08 * props.ans.split(' ').length} Minutes to read 
                </p>
            </div>
                    <div className="col-auto">
                    <button type="button" className="btn btn-success " onClick={onClickCopy}>Copy Text</button>
                                   </div>
            </div>
            </div>


        </>
    )
}

export default ResTextArea
