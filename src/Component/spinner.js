import React from 'react'
import loading from './SpinnerAnimation.gif';
const spinner=()=>{
  
    return (
      <div className="text-center">
        <img   src={loading} alt="loading"/>
      </div>
    )
  
}
export default spinner;
