import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import './index.css'
import '../components/css/custom.scss'

const Layout = ({ children }) => (
  <div>
    <Header />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
