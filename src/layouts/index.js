import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
<<<<<<< HEAD
import './index.css'
import '../components/css/custom.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
=======
import Helmet from 'react-helmet';
import './index.scss'
import '../components/css/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> added home page

const Layout = ({ children }) => (
  <div>
    <Helmet defaultTitle="Progressive Web app" />
    <Header />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
