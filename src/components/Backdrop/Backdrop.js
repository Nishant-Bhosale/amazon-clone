import React from 'react'
import './Backdrop.css'
const Backdrop = (props) => {
   return (
      <div className="backdrop-black" onClick={props.clicked}>
         
      </div>
   )
}

export default Backdrop;