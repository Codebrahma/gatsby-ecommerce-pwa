import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Helmet from 'react-helmet';
import './index.scss'
import '../components/css/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import DemoHeader from './demoHeader';


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };  
  }
  componentDidMount() {
    this.setState({
      isAppOnline: window.navigator.onLine,
      cartLength: (JSON.parse(localStorage.getItem('cart')) || []).length
    })
    window.addEventListener('online', this.cameOnline);    
    window.addEventListener('offline', this.cameOffline);
  
  }
  eventedLocalStorage = () => {
    this.setState({
      cartLength: (JSON.parse(localStorage.getItem('cart')) || []).length
    })
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
        <DemoHeader 
          headPath = {location.pathname}
          cartLength = {this.state.cartLength}
        />
        {children({ ...this.props, eventedLocalStorage: this.eventedLocalStorage })}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
