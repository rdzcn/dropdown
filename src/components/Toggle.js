import React from 'react';

const Toggle = (props) => {
  return (
    <div className="dd-toggle" onClick={props.toggleDropDown}>
      {props.title && <div className="dd-toggle-title">{props.title}</div>}
      <div className="dd-toggle-icon">
        <i className={`icon-${[props.iconName]}`}></i>
      </div>  
    </div>
  )
}

export default Toggle;