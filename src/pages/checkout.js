import React from 'react';
import _ from 'lodash';
import {
  Container, Flex, Box, Lead, Text,
} from 'rebass';
import TakeMoney from '../components/TakeMoney';
import CheckoutPage from 'theme/components/CheckoutPage';

export default class Checkout extends React.Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || {};
    return (
      <CheckoutPage 
        cartDetails={cartItems}
      />
    )
  }
}
