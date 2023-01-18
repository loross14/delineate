import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contributeview.css'

const Contributeview = (props) => {
  return (
    <div className="contributeview-container">
      <Helmet>
        <title>Delineate</title>
      </Helmet>
      <div className="contributeview-contributeview">
        <img
          alt="Rectangle1575"
          src="/playground_assets/rectangle1575-7kdj-200h.png"
          className="contributeview-rectangle1"
        />
        <span className="contributeview-text">
          <span>enter smart contract address...</span>
        </span>
        <img
          alt="Rectangle2579"
          src="/playground_assets/rectangle2579-0dv-200h.png"
          className="contributeview-rectangle2"
        />
        <span className="contributeview-text02">
          <span>Go</span>
        </span>
        <img
          alt="Rectangle3581"
          src="/playground_assets/rectangle3581-hwz-700h.png"
          className="contributeview-rectangle3"
        />
        <img
          alt="Rectangle4582"
          src="/playground_assets/rectangle4582-pacl-700h.png"
          className="contributeview-rectangle4"
        />
        <span className="contributeview-text04">
          <span>
            <span>File 2:</span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>enter notes</span>
            <br></br>
            <span></span>
            <br></br>
            <span>or</span>
            <br></br>
            <span></span>
            <br></br>
            <span>leave blank if not suspicious</span>
          </span>
        </span>
        <img
          alt="ScreenShot20230113at2321583"
          src="/playground_assets/screenshot20230113at2321583-8p7k-700h.png"
          className="contributeview-screen-shot20230113at2321"
        />
        <span className="contributeview-text21">
          <span>
            <span>File 1:</span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>enter notes</span>
            <br></br>
            <span></span>
            <br></br>
            <span>or</span>
            <br></br>
            <span></span>
            <br></br>
            <span>leave blank if not suspicious</span>
          </span>
        </span>
        <span className="contributeview-text38">
          <span>File 3:</span>
        </span>
        <Link to="/" className="contributeview-text40">
          <span>Delineate</span>
        </Link>
        <span className="contributeview-text42">
          <span>
            contract address: 0x4d224452801ACEd8B2F0aebE155379bb5D594381
          </span>
        </span>
        <span className="contributeview-text44">
          <span>to portray precisely</span>
        </span>
      </div>
    </div>
  )
}

export default Contributeview
