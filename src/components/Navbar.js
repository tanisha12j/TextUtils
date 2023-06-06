import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.aboutText}</a>
        </li>
  
      </ul>
      
    </div>
  </nav>
  )
}
Navbar.propTypes={title :PropTypes.string,
                  aboutText: PropTypes.string}
Navbar.defaultProps = {
    title: 'See title here',
    aboutText: 'About text here'
}