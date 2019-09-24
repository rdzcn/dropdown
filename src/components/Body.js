import React from 'react';
import { Link } from 'react-router-dom';

const Body = (props) => {
  return (
    <div className={props.opensToTop ? "dd-body-upward" : "dd-body-downward"}>
      <div className="body-close" onClick={props.toggleDropDown}>
        <span className="close-label">Close</span>
        <i className="icon-close"></i>
      </div>
      <div className="body-content">
        <ul>
          <Link to="#"><li>Contact user</li></Link>
          <Link to="#"><li>Send link</li></Link>
          <Link to="#"><li>Hide post</li></Link>
          <Link to="#"><li>Snooze user</li></Link>
          <Link to="#"><li>Report post</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Body;