import React from 'react'
import './Error.scss';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="error flex-center-col">
      <div>
        <Link to='/'><h1>Go Back <span>Home</span>?</h1></Link>
        {(Math.random() > .01) ? 
        <p>No page to be found here...</p> : 
        <p>Only <Link to='/the-eminence-in-shadow'>shadows</Link> to be found here...</p>}
      </div>
    </div>
  )
}

export default Error;