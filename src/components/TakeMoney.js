import React from 'react'
import ReactDOM from 'react-dom';
import StripeCheckout from 'react-stripe-checkout';
import Link from 'gatsby-link'

export default class TakeMoney extends React.Component {
  state = {
    isPaymentSuccess: false,
  }
  
  componentDidMount() {
    const tesNode = ReactDOM.findDOMNode(this.refs.payment).getBoundingClientRect();
    setTimeout(() => {
      window.scrollTo(0, tesNode.y);
    }, 500);
  }

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    })
  }

  onClosed = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    this.props.eventedLocalStorage();
    this.setState((prevState) => ({
      isPaymentSuccess: true,
    }))
  }

  render() {
    const { isPaymentSuccess } = this.state
    return (
      <div className="payment-active">
        {
          isPaymentSuccess
            ? ( <div className="after-payment">
                  <span className="payment-success">Payment Success</span>
                  <Link to='/' className="btn btn-primary btn-continue">Continue Shopping</Link>
                </div>
              )
            : (
                <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_rM2enW1rNROwx4ukBXGaIzhr"
                  closed={this.onClosed}
                >
                    <button ref="payment" type="submit" disabled={!this.props.isOnline} className="btn btn-primary btn-continue center-block">
                      Proceed to Pay
                    </button>
                    {!this.props.isOnline && <p>Please connect Internet to proceed for payment</p>}
                </StripeCheckout>
              )
        }
      </div>
    )
  }
}
