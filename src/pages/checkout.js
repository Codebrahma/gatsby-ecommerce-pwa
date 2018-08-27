import React from 'react';
import Payment from '../components/Payment';
import CheckoutPage from 'theme/components/CheckOutPage';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  renderPaymentSection = (payButton, onPaymentSuccess) => (
    <Payment
      payButton={payButton}
      onPaymentSuccess={onPaymentSuccess}
      clearCartOnPayment={true}
      />
  )

  componentDidMount() {
    this.setState({
      cartItems: JSON.parse(localStorage.getItem('cart')) || {},
    })
  }
  
  render() {
    return (
      <CheckoutPage 
        cartDetails={this.state.cartItems}
        payment={this.renderPaymentSection}
      />
    )
  }
}
