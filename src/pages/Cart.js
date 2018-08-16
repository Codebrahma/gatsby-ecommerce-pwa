import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link';
import {
  Container, Flex, Box, Button, Image, Text, Absolute, Relative,
} from 'rebass';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  borderLeft, borderTop, letterSpacing, textColor,
} from 'styled-system';

import deleteIcon from '../assets/icons/baseline-delete-24px.svg';
import defaultImage from '../assets/images/default.jpeg';

const ButtonBox = styled.div`
  ${borderLeft}
  ${borderTop}
`;

const ProductLink = styled.div`
  ${letterSpacing}
  ${textColor}
`;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: {},
    };
  }

  componentDidMount() {
    this.setState({
      cartItems: JSON.parse(localStorage.getItem('cart')) || {},
    });
  }

  componentWillUnmount = () => {
    window.removeEventListener('online', this.online);
    window.removeEventListener('offline', this.offline);
  }

  getCheckoutMoney = () => {
    const { cartItems } = this.state;
    let total = 0;
    if (cartItems) {
      Object.keys(cartItems).map((key) => {
        total += +cartItems[key].productPrice * (cartItems[key].purchaseQuantity / 7);
        return true;
      });
    }
    return total;
  }

  removeItemFromCart = (productId) => {
    const { cartItems } = this.state;
    const { eventedLocalStorage } = this.props;
    delete cartItems[productId];
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.setState({
      cartItems,
    });
    eventedLocalStorage();
  }

  displayCheckoutInfo = () => (
    <Flex p={2} flexWrap="wrap">
      <Box width={[1, 1 / 2, 1]}>
        <Text textAlign="center" fontWeight="bold" fontSize={1} mb={3}>
          {`Total: Rs. ${(this.getCheckoutMoney()).toFixed(2)}`}
        </Text>
      </Box>
      <Box width={[1, 1 / 2, 1]}>
        <Text textAlign="center">
          <GatsbyLink to="/checkout">
            <Button bg="black" px={2}>
              Proceed to Checkout
            </Button>
          </GatsbyLink>
        </Text>
      </Box>
    </Flex>
  )

  showCartItems = () => {
    const { cartItems } = this.state;
    if (Object.keys(cartItems).length) {
      return Object.keys(cartItems).map(key => (
        <Relative>
          <Flex key={cartItems[key].productId} flexWrap="wrap" mb={3} p={2} style={{ boxShadow: '1px 1px 4px 1px rgba(0,0,0,0.5)' }}>
            <Box bg="rgba(158,158,158, 0.1)" style={{ height: '25vh', overflow: 'hidden' }} width={[1, 1 / 2, 5 / 12]}>
              <Image
                style={{
                  width: 'auto',
                  height: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                src={
                cartItems[key].images.length
                  ? cartItems[key].images[0].originalSrc
                  : defaultImage
              }
                alt="product-image"
              />
            </Box>
            <Box width={[1, 1 / 2, 7 / 12]} px={3}>
              <Flex flexWrap="wrap">
                <Box width={[1]} py={2}>
                  <ProductLink textColor="rgba(27,55,100, 1)" letterSpacing="0.075em">
                    <Text fontWeight="bold" fontSize={1}>
                      <GatsbyLink style={{ textDecoration: 'none' }} to={`/product/${key}`}>
                        {cartItems[key].productName}
                      </GatsbyLink>
                    </Text>
                  </ProductLink>
                </Box>
                <Box width={[1]} pt={2}>
                  <Text fontSize={1}>
                  Rs.
                    {cartItems[key].productPrice * (cartItems[key].purchaseQuantity / 7)}
                  </Text>
                </Box>
                <Box width={1} pt={2}>
                  <Text fontSize={1}>
                    {`Quantity - ${cartItems[key].purchaseQuantity}`}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Absolute bottom={0} right={0}>
              <ButtonBox borderLeft="1px solid rgba(26, 26, 26, 0.5)" borderTop="1px solid rgba(26, 26, 26, 0.5)">
                <Box
                  p={2}
                  onClick={() => this.removeItemFromCart(cartItems[key].productId)}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <Image src={deleteIcon} alt="delete-icon" />
                </Box>
              </ButtonBox>
            </Absolute>
          </Flex>
        </Relative>
      ));
    }
    return (
      <Container>
        <Text textAlign="center">
          Oops! No items in the cart.
          <GatsbyLink to="/">
            Shop items.
          </GatsbyLink>
        </Text>
      </Container>
    );
  }

  render() {
    return (
      <Container>
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 3 / 4]} p={3}>
            {this.showCartItems()}
          </Box>
          <Box width={[1, 1, 1 / 4]} p={3}>
            {
              this.getCheckoutMoney() !== 0
              && this.displayCheckoutInfo()
            }
          </Box>
        </Flex>
      </Container>
    );
  }
}

Cart.propTypes = {
  eventedLocalStorage: PropTypes.func.isRequired,
};

export default Cart;
