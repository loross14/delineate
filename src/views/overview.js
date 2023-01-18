import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './overview.css'

const Overview = (props) => {
  return (
    <div className="overview-container">
      <Helmet>
        <title>Delineate</title>
      </Helmet>
      <div className="overview-overview">
        <img
          alt="Rectangle1125"
          src="/playground_assets/rectangle1125-kfm-200h.png"
          className="overview-rectangle1"
        />
        <Link to="/" className="overview-text">
          <span>Delineate</span>
        </Link>
        <span className="overview-text02">
          <span>enter smart contract address...</span>
        </span>
        <span className="overview-text04">
          <span>
            contract address: 0x4d224452801ACEd8B2F0aebE155379bb5D594381
          </span>
        </span>
        <img
          alt="Rectangle2129"
          src="/playground_assets/rectangle2129-2kkx-200h.png"
          className="overview-rectangle2"
        />
        <span className="overview-text06">
          <span>Go</span>
        </span>
        <img
          alt="Rectangle4132"
          src="/playground_assets/rectangle4132-vzhi-700h.png"
          className="overview-rectangle4"
        />
        <span className="overview-text08">
          <span className="overview-text09">
            <span>Purpose:</span>
            <br></br>
            <span></span>
          </span>
          <span className="overview-text13">
            <span></span>
            <br></br>
            <span>
              This contract address is a typical ERC-20 token implementation.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              This contract asks for permission to use spend your tokens!
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
          <span className="overview-text29">
            <span>
              Risk Assessment:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
          </span>
          <span>
            <span></span>
            <br></br>
            <span>Medium</span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </span>
        <Link to="/detailedview" className="overview-text41">
          <span>Detailed View-&gt;</span>
        </Link>
        <span className="overview-text43">
          <span>to portray precisely</span>
        </span>
      </div>
    </div>
  )
}

export default Overview
