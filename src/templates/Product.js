import React, { Component } from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import Product from 'theme/components/ProductPage';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.initalProductCount = 1;
  }

  componentDidMount() {
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const { pageContext } = this.props;
    const { productId } = pageContext;
    this.setState({
      itemCount: currentCartItems[productId]
        ? currentCartItems[productId].purchaseQuantity
        : this.initalProductCount,
      isInCart: !!currentCartItems[productId],
    });
  }

  getCurrentItemCountInCart = () => {
    const { itemCount } = this.state;
    return itemCount;
  }

  initialiseProductData = (initalProductCount) => {
    (this.initalProductCount = initalProductCount);
  }

  updateCart = (newItemCount) => {
    const { pageContext: { productId } } = this.props;
    const { isInCart } = this.state;
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    if (isInCart) {
      currentCartItems[productId].purchaseQuantity = newItemCount;
      if (currentCartItems[productId].purchaseQuantity === 0) {
        delete currentCartItems[productId];
        this.setState({
          isInCart: false,
        });
      }
      localStorage.setItem('cart', JSON.stringify(currentCartItems));
    }
  }

  changeItemCount = (newItemCount) => {
    const updatedCount = newItemCount > 0 ? newItemCount : 0;
    this.setState({
      itemCount: updatedCount,
    });
    this.updateCart(updatedCount);
    window.dispatchEvent(new CustomEvent('localstorage update'));
  }

  addItemToCart = () => {
    const { pageContext } = this.props;
    const { productId } = pageContext;
    const { itemCount } = this.state;
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    currentCartItems[productId] = pageContext;
    currentCartItems[productId].purchaseQuantity = itemCount;
    localStorage.setItem('cart', JSON.stringify(currentCartItems));
    this.setState({
      isInCart: true,
    });
    window.dispatchEvent(new CustomEvent('localstorage update'));
  }

  handleBuyNow = () => {
    this.addItemToCart();
    navigate('/cart');
  }

  render() {
    const { pageContext } = this.props;
    const { itemCount, isInCart } = this.state;

    return (
      <Product
        itemCount={itemCount}
        isInCart={isInCart}
        productData={pageContext}
        buyNow={this.handleBuyNow}
        addItemToCart={this.addItemToCart}
        changeItemCount={this.changeItemCount}
        getCurrentItemCountInCart={this.getCurrentItemCountInCart}
        initialiseProductData={this.initialiseProductData}
      />
    );
  }
}

ProductItem.propTypes = {
  pageContext: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ProductItem;
