import React from 'react';
import _ from 'lodash';
import {
  Container, Flex, Box, Lead, Text,
} from 'rebass';
import TakeMoney from '../components/TakeMoney';
import CheckoutPage from 'theme/components/CheckoutPage';

export default class Checkout extends React.Component {
  renderPaymentSection = (payButton, onPaymentSuccess) => (
    <TakeMoney
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
