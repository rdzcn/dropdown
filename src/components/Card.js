import React from 'react';
import DropDown from './DropDown';

const Card = (props) => {
  return (
    <div className="card">
      <div className="dd-container card-item">
        <DropDown iconName="info" title="" />
      </div>
      <div className="component component-1 card-item">
        <p>Component 1</p>
      </div>
      <div className="image-container card-item">
        <img src="http://lorempixel.com/640/270" alt="" />
      </div>
      <div className="component component-2 card-item">
        <p>Component 2</p>
      </div>
      <div className="dd-container card-item">
        <DropDown iconName="down-arrow" title="More" />
      </div>
    </div>  
  )
}

export default Card;