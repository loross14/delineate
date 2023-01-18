import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contribute.css'

const Contribute = (props) => {
  return (
    <div className="contribute-container">
      <Helmet>
        <title>Delineate</title>
      </Helmet>
      <div className="contribute-contribute">
        <Link to="/" className="contribute-text">
          <span>Delineate</span>
        </Link>
        <Link to="/mission" className="contribute-text02">
          <span>Our Mission</span>
        </Link>
        <Link to="/explore" className="contribute-text04">
          <span>Explore</span>
        </Link>
        <Link to="/contribute" className="contribute-text06">
          <span>Contribute</span>
        </Link>
        <span className="contribute-text08">
          <span>to portray precisely</span>
        </span>
        <span className="contribute-text10">
          <span>
            <span>
              Submit and annotate
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>suspicious contracts</span>
          </span>
        </span>
        <Link to="/contributeview" className="contribute-navlink">
          <img
            id="delineate_button"
            alt="Vector113"
            src="/playground_assets/vector113-1kq1.svg"
            className="contribute-vector"
          />
        </Link>
        <img
          alt="Rectangle15115"
          src="/playground_assets/rectangle15115-w5d-200h.png"
          className="contribute-rectangle1"
        />
        <span className="contribute-text15">
          <span>enter smart contract address...</span>
        </span>
      </div>
    </div>
  )
}

export default Contribute
