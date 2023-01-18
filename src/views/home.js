import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Delineate</title>
      </Helmet>
      <div className="home-home">
        <img
          id="searchbar"
          alt="Rectangle113"
          src="/playground_assets/rectangle113-gg9r-200h.png"
          className="home-rectangle1"
        />
        <span className="home-text">
          <span>
            <span>Understand Smart Contracts.</span>
            <br></br>
            <span>Prevent Being Hacked.</span>
          </span>
        </span>
        <span className="home-text05">
          <span>enter smart contract address...</span>
        </span>
        <Link to="/overview" className="home-navlink">
          <img
            id="delineate_button"
            alt="Vector113"
            src="/playground_assets/vector113-1kq1.svg"
            className="home-vector"
          />
        </Link>
        <span className="home-text07">
          <span>Delineate</span>
        </span>
        <Link to="/mission" className="home-text09">
          <span>Our Mission</span>
        </Link>
        <Link to="/explore" className="home-text11">
          <span>Explore</span>
        </Link>
        <Link to="/contribute" className="home-text13">
          <span>Contribute</span>
        </Link>
        <span className="home-text15">
          <span>to portray precisely</span>
        </span>
      </div>
    </div>
  )
}

export default Home
