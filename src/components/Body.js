import React from 'react';
import { Link } from 'react-router-dom';

const Body = (props) => {
  return (
    <div className="content">
      <div classname="body-list">
        <ul>
          <li><Link to="#">Lorem Ipsum is the best in this world</Link> </li>
          <li><Link to="#">Lorem Ipsum is the best in this world</Link> </li>
          <li><Link to="#">Lorem Ipsum is the best in this world</Link> </li>
          <li><Link to="#">Lorem Ipsum is the best in this world</Link> </li>
          <li><Link to="#">Lorem Ipsum is the best in this world</Link> </li>
        </ul>
      </div>
      <div className="close-button">
      
      </div>
    </div>
  )
}

export default Body;