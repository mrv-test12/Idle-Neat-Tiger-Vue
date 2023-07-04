import React from 'react'

import { Helmet } from 'react-helmet'

import './test-page.css'

const TestPage = (props) => {
  return (
    <div className="test-page-container">
      <Helmet>
        <title>testPage - Idle Neat Tiger</title>
        <meta property="og:title" content="testPage - Idle Neat Tiger" />
      </Helmet>
      <button type="button" className="button">
        Button
      </button>
    </div>
  )
}

export default TestPage
