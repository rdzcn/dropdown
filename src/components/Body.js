import React from 'react';
import { Link } from 'react-router-dom';

const Body = (props) => {
  return (
    <div className="dd-body">
      <div className="body-close" onClick={props.toggleDropDown}>
        <i className="icon-close"></i>
      </div>
      <div className="body-content">
        <ul>
          <li><Link to="#">Contact user</Link> </li>
          <li><Link to="#">Send link</Link> </li>
          <li><Link to="#">Hide post</Link> </li>
          <li><Link to="#">Snooze user</Link> </li>
          <li><Link to="#">Report post</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default Body;