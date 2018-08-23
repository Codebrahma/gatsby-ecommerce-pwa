import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    window.addEventListener('online', this.online);
    window.addEventListener('offline', this.offline);
    this.setState({
      appOnline: window.navigator.onLine,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.online);
    window.removeEventListener('offline', this.offline);
  }

  online = () => {
    this.setState({
      appOnline: true,
    });
  }

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(() => {
      this.props.onPaymentSuccess();
      if (this.props.clearCartOnPayment) {
        localStorage.setItem('cart', JSON.stringify({}));
        window.dispatchEvent(new CustomEvent('localstorage update'));
      }
    });
  }

  offline = () => {
    this.setState({
      appOnline: false,
    });
  }

  render() {
    const { appOnline } = this.state;
    console.log(this.props)
    return (
      <div>
        {
          appOnline ? (
            <StripeCheckout
              token={this.onToken}
              stripeKey="pk_test_rM2enW1rNROwx4ukBXGaIzhr"
              closed={this.onClosed}
            >
              { this.props.payButton() }
            </StripeCheckout>
          ) : (
            <p>Please connect Internet to proceed for payment</p>
          )
        }
      </div>
    );
  }
}
