import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link';
import { Container, Flex, Box, Button, Image, Text } from 'rebass';

import deleteIcon from '../assets/icons/baseline-delete-24px.svg';

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

  displayCheckoutInfo = () => (
    <div className="row">
      <div className="col col-lg-12 col-md-12 col-sm-6 p-2">
        {`Total: Rs. ${this.getCheckoutMoney().toFixed(2)}`}
      </div>
      <div className="col col-lg-12 col-md-12 col-sm-6">
        <GatsbyLink className="btn btn-dark" to="/checkout">
          Proceed to Checkout
        </GatsbyLink>
      </div>
    </div>
  )

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

    getCheckoutMoney = () => {
        const { cartItems } = this.state;
        let total = 0;
        if (cartItems) {
            Object.keys(cartItems).map((key) => {
                total = total + (+cartItems[key].productPrice * (cartItems[key].purchaseQuantity / 7))
            })
        }
        return total;
    }

    displayCheckoutInfo = () => (
        <Flex p={2} flexWrap='wrap' style={{ boxShadow: '1px 1px 4px 1px rgba(0,0,0,0.5)' }}>
            <Box width={[1 / 2, 1  / 2, 1]}>
                <Text textAlign='center' fontWeight='bold' mb={2}>
                    {`Total: Rs. ${(this.getCheckoutMoney()).toFixed(2)}`}
                </Text>
            </Box>
            <Box width={[1 / 2, 1 / 2, 1]}>
                <Text textAlign='center'>
                    <GatsbyLink to="/checkout"><Button bg='black' px={2}>Proceed to Checkout</Button></GatsbyLink>
                </Text>
            </Box>
        </Flex>
    )

    removeItemFromCart = (productId) => {
        let { cartItems } = this.state;
        delete cartItems[productId]
        localStorage.setItem('cart', JSON.stringify(cartItems))
        this.setState({
            cartItems
        })
        this.props.eventedLocalStorage()
    }

    showCartItems = () => {
        const { cartItems } = this.state;
        if (Object.keys(cartItems).length) {
            return Object.keys(cartItems).map((key) => {
                return (
                    <Flex flexWrap='wrap' mb={3} p={2} style={{ boxShadow: '1px 1px 4px 1px rgba(0,0,0,0.5)', position: 'relative' }}>
                        <Box width={[1, 1 / 2, 5 / 12]}>
                            <Image src={cartItems[key].images.length ? cartItems[key].images[0].originalSrc : require('../assets/images/default.jpeg')} alt="product-image" />
                        </Box>
                        <Box width={[1, 1 / 2, 7 / 12]} px={3}>
                            <Flex flexWrap='wrap'>
                                <Box width={[1]}>
                                    <GatsbyLink style={{ color: 'rgba(27,55,100, 1)' }} to={`/product/${key}`}>{cartItems[key].productName}</GatsbyLink>
                                </Box>
                                <Box width={[1]}>
                                    <Text>Rs. {cartItems[key].productPrice * (cartItems[key].purchaseQuantity / 7)}</Text>
                                </Box>
                                <Box width={1}>
                                    <Text>{`Quantity - ${cartItems[key].purchaseQuantity}`}</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box p={2} onClick={() => this.removeItemFromCart(cartItems[key].productId)} className="button-container">
                            <Image className="delete-icon" src={deleteIcon} alt="delete-icon" />
                        </Box>
                    </Flex>
                )
            })
        } else {
            return (
                <Container>
                    <Text textAlign='center'>Oops! No items in the cart.
                        <GatsbyLink to="/">Shop items.</GatsbyLink>
                    </Text>
                </Container>
            )
        }
    }

    render() {
        return (
            <Container>
                <Flex flexWrap='wrap'>
                    <Box width={[1, 1, 3 / 4]} p={3}>
                        {this.showCartItems()}
                    </Box>
                    <Box width={[1, 1, 1 / 4]} p={3}>
                        {
                            this.getCheckoutMoney() !== 0 &&
                            <div className="col col-lg-3 col-md-3 col-sm-12">
                                <div className="container p-2 px-4">
                                    {this.displayCheckoutInfo()}
                                </div>
                            </div>
                        }
                    </Box>
                </Flex>
            </Container>
        )
    }
}

Cart.propTypes = {
  eventedLocalStorage: PropTypes.func.isRequired,
};

export default Cart;
