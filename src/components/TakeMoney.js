import React from 'react'
import ReactDOM from 'react-dom';
import StripeCheckout from 'react-stripe-checkout';
import Link from 'gatsby-link'

export default class TakeMoney extends React.Component {
  state = {
    isPaymentSuccess: false,
  }
  
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 1500);
    }, 500);
  }

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(() => {
      localStorage.setItem('cart', JSON.stringify([]));
      this.props.eventedLocalStorage();
      this.setState((prevState) => ({
        isPaymentSuccess: true,
      }))
    })
  }

  onClosed = () => {
    
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
          className="btn btn-primary btn-continue center-block"
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
            ? ( <div className="after-payment">
                  <span className="payment-success">Payment Success</span>
                  <Link to='/' className="btn btn-primary btn-continue">Continue Shopping</Link>
                </div>
              )
            : paymentContent               
        }  
      </div>
    )
    }
}
