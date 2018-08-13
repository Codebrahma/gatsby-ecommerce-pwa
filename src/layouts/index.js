import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import { Provider } from "rebass";
import { injectGlobal } from 'styled-components'

import Header from './Header';
import InstallPrompt from './InstallPrompt';

import './index.scss'
import './custom.scss';

import '../assets/images/512.png';


injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    this.setState({
      isAppOnline: window.navigator.onLine,
      cartLength: Object.keys(JSON.parse(localStorage.getItem('cart')) || {}).length
    })
    window.addEventListener('online', this.cameOnline);
    window.addEventListener('offline', this.cameOffline);
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").then(function (reg) {
        console.log("service worker registered!", reg);
      }).catch(function (err) {
        console.log("error registering service worker", err);
      });
    }
    window.addEventListener('beforeinstallprompt', (e) => {
      let deferredPrompt = e;
      e.preventDefault();
      document.getElementById('install').style.display = 'flex';
      document.getElementById("install-button").addEventListener('click', () => {
        document.getElementById('install').style.top = '-5em';
        deferredPrompt.prompt();
        deferredPrompt.userChoice
          .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
          });
      });
    });
  }
  eventedLocalStorage = () => {
    this.setState({
      cartLength: Object.keys(JSON.parse(localStorage.getItem('cart')) || {}).length
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

  addItemToCart = (product) => {
    let currentCartItems = JSON.parse(localStorage.getItem('cart')) || {}
    const toBeAddedProduct = Object.assign({}, product)
    currentCartItems[toBeAddedProduct.productId] = toBeAddedProduct
    currentCartItems[toBeAddedProduct.productId].purchaseQuantity = 7
    localStorage.setItem('cart',JSON.stringify(currentCartItems))
    this.eventedLocalStorage()
  }

  render() {
    const {
      children,
      location,
    } = this.props;

    return (
      <Provider>
        <Helmet defaultTitle="Progressive Web app" >
          <html lang="en"/>
        </Helmet>
        <InstallPrompt />
        <Header 
          headPath = {location.pathname}
          cartLength = {this.state.cartLength} />
        {children({ ...this.props, eventedLocalStorage: this.eventedLocalStorage, addItemToCart: this.addItemToCart })}
      </Provider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
