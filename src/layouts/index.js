import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './Header';
import InstallPrompt from './InstallPrompt';

import './index.scss';
import './custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../assets/images/512.png';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      cartLength: Object.keys(JSON.parse(localStorage.getItem('cart')) || {})
        .length,
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
  }

  eventedLocalStorage = () => {
    this.setState({
      cartLength: Object.keys(JSON.parse(localStorage.getItem('cart')) || {})
        .length,
    });
  }

  addItemToCart = (product) => {
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const toBeAddedProduct = Object.assign({}, product);
    currentCartItems[toBeAddedProduct.productId] = toBeAddedProduct;
    currentCartItems[toBeAddedProduct.productId].purchaseQuantity = 7;
    localStorage.setItem('cart', JSON.stringify(currentCartItems));
    this.eventedLocalStorage();
  }

  render() {
    const { children, location } = this.props;
    const { cartLength } = this.state;
    return (
      <div>
        <Helmet defaultTitle="Progressive Web app">
          <html lang="en" />
        </Helmet>
        <InstallPrompt />
        <Header
          headPath={location.pathname}
          cartLength={cartLength}
        />
        {children({
          ...this.props,
          eventedLocalStorage: this.eventedLocalStorage,
          addItemToCart: this.addItemToCart,
        })}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
