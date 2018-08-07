import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import './index.scss'
import '../components/css/custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import '../assets/images/512.png';

const InstallPrompt = () => (
  <div id="install" style={{ display: 'none', padding: '0.5em 1em 0.5em 1em', height: '4em', justifyContent: 'space-between' }} className="alert alert-info" role="alert">
    <span style={{ lineHeight: '2.5em', fontSize: '1.1em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Install our app now!</span>
    <button id="install-button" className="btn btn-info" style={{ padding: '0.3em' }}>Add to homescreen</button>
  </div>
)

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
      document.getElementById("install-button").addEventListener('click', (e) => {
        document.getElementById('install').style.display = 'none';
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
        <InstallPrompt />
        <Header 
          headPath = {location.pathname}
          cartLength = {this.state.cartLength} />
        {children({ ...this.props, eventedLocalStorage: this.eventedLocalStorage })}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
