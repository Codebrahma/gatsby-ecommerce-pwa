import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Helmet from 'react-helmet';
import './index.scss'
import '../components/css/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAppOnline: window.navigator.onLine,
    }
    window.addEventListener('online', this.cameOnline);    
    window.addEventListener('offline', this.cameOffline);    
  }
  
  cameOnline = () => {
    this.setState({
      isAppOnline: true,
    });
  }

  cameOffline = () => {
    this.setState({
      isAppOnline: false,
    })  
  }

  render() {
    const {
      children,
      location,
    } = this.props;

    return (
      <div>
        <Helmet defaultTitle="Progressive Web app" />
        <Header headPath = {location.pathname}/>
        {children({ ...this.props, isOnline: this.state.isOnline })}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
