import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import HomeTest from './views/home-test'
import TestPage from './views/test-page'
import Dmsgbjhshgjfjgjmytergevhfhdfn from './views/dmsgbjhshgjfjgjmytergevhfhdfn'
import Screen1 from './views/screen-1'
import Page1MyPage from './views/page-my-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={HomeTest} exact path="/home-test" />
        <Route component={TestPage} exact path="/test-page" />
        <Route
          component={Dmsgbjhshgjfjgjmytergevhfhdfn}
          exact
          path="/dmsgbjhshgjfjgjmytergevhfhdfn"
        />
        <Route component={Screen1} exact path="/" />
        <Route component={Page1MyPage} exact path="/page-my-page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
