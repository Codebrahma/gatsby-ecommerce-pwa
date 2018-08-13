import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';

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
        totalPrice
          += (cartDetails[key].productPrice / 7.0)
          * cartDetails[key].purchaseQuantity;
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
        itemCount++;
        totalPrice
          += (cartDetails[key].productPrice / 7.0)
          * cartDetails[key].purchaseQuantity;
      });
    }

    return (
      <div className="checkout-details">
        <div className="container">
          <div className="checkout-detail row mb-2">
            <span>
              {itemCount}
              {' '}
items
            </span>
            <span>
              {`Rs. ${totalPrice.toFixed(2)}`}
            </span>
          </div>
          <div className="checkout-detail row">
            <span>
Shipping charges
            </span>
            <span>
0.00
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutDetails;
