import React from 'react';
import Payment from '../components/Payment';
import CheckoutPage from 'theme/components/CheckoutPage';

export default class Checkout extends React.Component {
  renderPaymentSection = (payButton, onPaymentSuccess) => (
    <Payment
      payButton={payButton}
      onPaymentSuccess={onPaymentSuccess}
      clearCartOnPayment={true}
      />
  )
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || {};
    return (
      <CheckoutPage 
        cartDetails={cartItems}
        payment={this.renderPaymentSection}
      />
    )
  }
}
