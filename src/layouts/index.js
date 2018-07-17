import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Helmet from 'react-helmet';
import './index.scss'
import '../components/css/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children, location }) => (
  <div>
    <Helmet defaultTitle="Progressive Web app" />
    <Header headPath = {location.pathname}/>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
