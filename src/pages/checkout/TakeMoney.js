import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

export default class TakeMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaymentSuccess: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 1500);
    }, 500);
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
    const { eventedLocalStorage } = this.props;
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(() => {
      localStorage.setItem('cart', JSON.stringify({}));
      eventedLocalStorage();
      this.setState({
        isPaymentSuccess: true,
      });
    });
  }

  offline = () => {
    this.setState({
      appOnline: false,
    });
  }

  render() {
    const { isPaymentSuccess } = this.state;
    const { appOnline } = this.state;
    const paymentContent = appOnline ? (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_rM2enW1rNROwx4ukBXGaIzhr"
        closed={this.onClosed}
      >
<<<<<<< 2b236085db07aaee61d984b0a0aee19ea69c372b
        <button type="submit" className="btn btn-dark center-block">
=======
        <button
          type="submit"
          className="btn btn-dark center-block"
        >
>>>>>>> apply rebass to homespage
          Proceed to Pay
        </button>
      </StripeCheckout>
    ) : (
<<<<<<< 2b236085db07aaee61d984b0a0aee19ea69c372b
      <p>
Please connect Internet to proceed for payment
      </p>
    );
    return (
      <div className="payment-active">
        {isPaymentSuccess ? (
          <div className="container p-2">
            <span className="d-inline">
Payment Success
            </span>
            <Link to="/" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          paymentContent
        )}
      </div>
    );
=======
        <p>Please connect Internet to proceed for payment</p>
      );
    return (
      <div className="payment-active">
        {
          isPaymentSuccess
            ? (<div className="container p-2">
              <span className="d-inline">Payment Success</span>
              <Link to='/' className="btn btn-primary">Continue Shopping</Link>
            </div>
            )
            : paymentContent
        }
      </div>
    )
>>>>>>> apply rebass to homespage
  }
}

TakeMoney.propTypes = {
  eventedLocalStorage: PropTypes.func.isRequired,
};
