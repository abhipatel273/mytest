import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <div className='container'>
      <h1>{props.title}</h1>
    </div>
  );
}


Navbar.propTypes = {title: PropTypes.string.isRequired};

Navbar.defaultProps ={
  title: "set title here"
}

