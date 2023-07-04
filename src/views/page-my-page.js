import React from 'react'

import { Helmet } from 'react-helmet'

import './page-my-page.css'

const Page1MyPage = (props) => {
  return (
    <div className="page-my-page-container">
      <Helmet>
        <title>Page1MyPage - Idle Neat Tiger</title>
        <meta property="og:title" content="Page1MyPage - Idle Neat Tiger" />
      </Helmet>
      <span>Text</span>
    </div>
  )
}

export default Page1MyPage
