import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import { Container, Flex, Box } from 'rebass';

class CheckoutDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const cartDetails = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      cartDetails,
    });
    let totalPrice = 0;
    if (cartDetails) {
      Object.keys(cartDetails).map((key) => {
        totalPrice += (cartDetails[key].productPrice / 7.0) * cartDetails[key].purchaseQuantity;
        return true;
      });
    }
    if (totalPrice === 0) {
      navigateTo('/cart');
    }
  }

  render() {
    const { cartDetails } = this.state;
    let itemCount = 0;
    let totalPrice = 0;
    if (cartDetails) {
      Object.keys(cartDetails).map((key) => {
        itemCount += 1;
        totalPrice += (cartDetails[key].productPrice / 7.0) * cartDetails[key].purchaseQuantity;
        return true;
      });
    }

    return (
      <Container p={2} style={{ boxShadow: '1px 1px 4px 1px rgba(158,158,158, 0.5)' }}>
        <Flex flexWrap="wrap">
          <Box width={[1]}>
            <span>
              {itemCount}
              {' '}
              items
            </span>
            <span style={{ float: 'right' }}>
              {`Rs. ${totalPrice.toFixed(2)}`}
            </span>
          </Box>
          <Box width={[1]}>
            <span>
              Shipping charges
            </span>
            <span style={{ float: 'right' }}>
              0.00
            </span>
          </Box>
        </Flex>
      </Container>
    );
  }
}

export default CheckoutDetails;
