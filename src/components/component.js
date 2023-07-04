import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return <div className="component-container"></div>
}

AppComponent.defaultProps = {
  button: 'Button',
}

AppComponent.propTypes = {
  button: PropTypes.string,
}

export default AppComponent
