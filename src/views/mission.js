import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './mission.css'

const Mission = (props) => {
  return (
    <div className="mission-container">
      <Helmet>
        <title>Delineate</title>
      </Helmet>
      <div className="mission-mission">
        <Link to="/" className="mission-text">
          <span>Delineate</span>
        </Link>
        <Link to="/mission" className="mission-text02">
          <span>Our Mission</span>
        </Link>
        <Link to="/explore" className="mission-text04">
          <span>Explore</span>
        </Link>
        <Link to="/contribute" className="mission-text06">
          <span>Contribute</span>
        </Link>
        <span className="mission-text08">
          <span>
            <span>
              Ethereum is supposed to be transparent.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>DeFi applications are supposed to be verifiably safe.</span>
            <br></br>
            <span></span>
            <br></br>
            <span>None of this is true for non-technical users.</span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Our mission is to keep blockchain users safe by empowering them
              with the ability to verify the contracts they interact with.
            </span>
          </span>
        </span>
        <span className="mission-text25">
          <span>to portray precisely</span>
        </span>
      </div>
    </div>
  )
}

export default Mission
