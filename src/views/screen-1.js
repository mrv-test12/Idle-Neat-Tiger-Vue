import React from 'react'

import { Helmet } from 'react-helmet'

import './screen-1.css'

const Screen1 = (props) => {
  return (
    <div className="screen1-container">
      <Helmet>
        <title>Idle Neat Tiger</title>
        <meta property="og:title" content="Idle Neat Tiger" />
      </Helmet>
    </div>
  )
}

export default Screen1
