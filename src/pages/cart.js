import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link';
import CartPage from 'theme/components/Cart';

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
    delete cartItems[productId];
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.setState({
      cartItems,
    });
    window.dispatchEvent(new CustomEvent('localstorage update'));
  }

  render() {
    const checkOutCost = this.getCheckoutMoney();
    return (
      <CartPage
        cartItems={this.state.cartItems}
        checkOutCost={checkOutCost}
        removeItemFromCart={this.removeItemFromCart}
      />
    );
  }
}

export default Cart;
