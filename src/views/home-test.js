import React from 'react'

import { Helmet } from 'react-helmet'

import './home-test.css'

const HomeTest = (props) => {
  return (
    <div className="home-test-container">
      <Helmet>
        <title>HomeTest - Idle Neat Tiger</title>
        <meta property="og:title" content="HomeTest - Idle Neat Tiger" />
      </Helmet>
      <button type="button" className="home-test-button button">
        Button
      </button>
    </div>
  )
}

export default HomeTest
