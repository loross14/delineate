import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './explore.css'

const Explore = (props) => {
  return (
    <div className="explore-container">
      <Helmet>
        <title>Delineate</title>
      </Helmet>
      <div className="explore-explore">
        <Link to="/" className="explore-text">
          <span>Delineate</span>
        </Link>
        <Link to="/mission" className="explore-text02">
          <span>Our Mission</span>
        </Link>
        <Link to="/explore" className="explore-text04">
          <span>Explore</span>
        </Link>
        <Link to="/contribute" className="explore-text06">
          <span>Contribute</span>
        </Link>
        <span className="explore-text08">
          <span>
            <span>Explore Notable Smart Contracts And See How They Work</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Coming Soon...</span>
          </span>
        </span>
        <span className="explore-text15">
          <span>to portray precisely</span>
        </span>
      </div>
    </div>
  )
}

export default Explore
