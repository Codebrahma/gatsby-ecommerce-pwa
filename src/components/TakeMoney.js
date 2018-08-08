import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Link from 'gatsby-link'

export default class TakeMoney extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPaymentSuccess: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 1500);
    }, 500);
    window.addEventListener('online', this.online)
    window.addEventListener('offline', this.offline)
    this.setState({
      appOnline: window.navigator.onLine
    })
  }

  online = () => {
    this.setState({
      appOnline: true
    })
  }

  offline = () => {
    this.setState({
      appOnline: false
    })
  }

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(() => {
      localStorage.setItem('cart', JSON.stringify({}));
      this.props.eventedLocalStorage();
      this.setState({
        isPaymentSuccess: true,
      })
    })
  }

  componentWillUnmount() {
    window.removeEventListener('online');
    window.removeEventListener('offline');
  }

  render() {
    const { isPaymentSuccess } = this.state
    const { isOnline } = this.props;
    const paymentContent = isOnline ? (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_rM2enW1rNROwx4ukBXGaIzhr"
        closed={this.onClosed}
      >   
        <button
          type="submit"
          className="btn btn-dark center-block" 
          disabled={!this.state.appOnline}
        >
          Proceed to Pay
        </button>
      </StripeCheckout>
    ) : (
      <p>Please connect Internet to proceed for payment</p>
    );
    return (
      <div className="payment-active">
        {
          isPaymentSuccess
            ? ( <div className="container p-2">
                  <span className="d-inline">Payment Success</span>
                  <Link to='/' className="btn btn-primary">Continue Shopping</Link>
                </div>
              )
            : paymentContent               
        }  
      </div>
    )
    }
}
