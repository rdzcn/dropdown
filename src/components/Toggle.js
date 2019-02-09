import React from 'react';

const Toggle = (props) => {
  return (
    <div className="dd-header" onClick={props.toggleDropDownBody}>
      {props.title && <div className="dd-header-text">{props.title}</div>}
      <div className="dd-header-icon">^</div>  
    </div>
  )
}

export default Toggle;