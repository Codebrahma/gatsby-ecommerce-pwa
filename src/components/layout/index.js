import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Provider } from 'rebass';

import Header from './Header';
import InstallPrompt from './InstallPrompt';
import '../../assets/images/512.png';


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      cartLength: Object.keys(JSON.parse(localStorage.getItem('cart')) || {})
        .length,
      path: window.location.pathname,
    });
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('sw.js');
    }
    window.addEventListener('beforeinstallprompt', (e) => {
      let deferredPrompt = e;
      e.preventDefault();
      document.getElementById('install').style.display = 'flex';
      document
        .getElementById('install-button')
        .addEventListener('click', () => {
          document.getElementById('install').style.top = '-5em';
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then(() => {
            deferredPrompt = null;
          });
        });
    });
    window.addEventListener('localstorage update', this.eventedLocalStorage);
  }

  componentWillUnmount() {
    window.removeEventListener('localstorage update', this.eventedLocalStorage);
  }

  eventedLocalStorage = () => {
    this.setState({
      cartLength: Object.keys(JSON.parse(localStorage.getItem('cart')) || {})
        .length,
    });
  }

  render() {
    const { children } = this.props;
    const { cartLength, path } = this.state;
    return (
      <Provider>
        <Helmet defaultTitle="Progressive Web app">
          <html lang="en" />
        </Helmet>
        <InstallPrompt />
        <Header
          headPath={path}
          cartLength={cartLength}
        />
        {children}
      </Provider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
