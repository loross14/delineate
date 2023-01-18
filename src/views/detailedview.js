import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './detailedview.css'

const Detailedview = (props) => {
  return (
    <div className="detailedview-container">
      <Helmet>
        <title>Delineate</title>
      </Helmet>
      <div className="detailedview-detailedview">
        <img
          alt="Rectangle118"
          src="/playground_assets/rectangle118-io-200h.png"
          className="detailedview-rectangle1"
        />
        <Link to="/" className="detailedview-text">
          <span>Delineate</span>
        </Link>
        <span className="detailedview-text02">
          <span>enter smart contract address...</span>
        </span>
        <img
          alt="Rectangle2115"
          src="/playground_assets/rectangle2115-tkms-200h.png"
          className="detailedview-rectangle2"
        />
        <span className="detailedview-text04">
          <span>Go</span>
        </span>
        <img
          alt="Rectangle3117"
          src="/playground_assets/rectangle3117-qeo-700h.png"
          className="detailedview-rectangle3"
        />
        <img
          alt="Rectangle4118"
          src="/playground_assets/rectangle4118-2ktj-700h.png"
          className="detailedview-rectangle4"
        />
        <img
          alt="ScreenShot20230113at2321119"
          src="/playground_assets/screenshot20230113at2321119-tl4-700h.png"
          className="detailedview-screen-shot20230113at2321"
        />
        <span className="detailedview-text06">
          <span>
            <span>File 1:</span>
            <br></br>
            <span>
              file 1 (simpleToken.sol) is a very typical Solidity contract.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              The purpose of this contract is to create a “constructor”, or a
              basic outline for building upon. In this case, the constructor is
              for a typical ERC-20 token, which is to be expected.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              ERC-20 tokens are the most common type of cryptocurrency on
              Ethereum, and this is a standard implementation.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>Risk Level: Extremely Low Risk</span>
          </span>
        </span>
        <span className="detailedview-text23">
          <span>File 2:</span>
          <br></br>
          <span>file 2 (context.sol) is a very typical Solidity contract.</span>
          <br></br>
          <br></br>
          <span>
            The purpose of this contract is to provide accessible information on
            token transactions. This information could be used by analytics
            platforms or by the token’s creator.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <span>Risk Level: Extremely Low Risk</span>
        </span>
        <span className="detailedview-text34">
          <span>File 3:</span>
          <br></br>
          <span>
            file 3 (IERC20Metadata.sol) is a very typical Solidity contract.
          </span>
          <br></br>
          <br></br>
        </span>
        <Link to="/overview" className="detailedview-text40">
          <span>&lt;-Overview</span>
        </Link>
        <span className="detailedview-text42">
          <span>
            contract address: 0x4d224452801ACEd8B2F0aebE155379bb5D594381
          </span>
        </span>
        <span className="detailedview-text44">
          <span>to portray precisely</span>
        </span>
      </div>
    </div>
  )
}

export default Detailedview
