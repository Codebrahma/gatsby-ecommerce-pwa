import React, { Component } from 'react';
import _ from 'lodash';
import Link, { navigateTo } from 'gatsby-link';
import PropTypes from 'prop-types';

import ProductFaqs from './product/ProductFaqs';
import ProductSubscription from './product/ProductSubscription';
import ProductVariants from './product/ProductVariants';
import VariantType from './product/VariantType';
import Button from '../components/Button';

import './product/product.scss';

import facebook from '../assets/icons/facebook-f-brands.svg';
import twitter from '../assets/icons/twitter-brands.svg';
import plus from '../assets/icons/plus-solid.svg';
import minus from '../assets/icons/minus-solid.svg';
import download from '../assets/icons/download-solid.svg';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const { pathContext } = this.props;
    const { productId } = pathContext;
    this.setState({
      itemCount: currentCartItems[productId]
        ? currentCartItems[productId].purchaseQuantity
        : 7,
      isInCart: !!currentCartItems[productId],
    });
  }

  updateCart = (change) => {
    const { pathContext } = this.props;
    const { productId } = pathContext;
    const { isInCart } = this.state;
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    if (isInCart) {
      currentCartItems[productId].purchaseQuantity += change;
      if (currentCartItems[productId].purchaseQuantity === 0) {
        delete currentCartItems[productId];
        this.setState({
          isInCart: false,
        });
      }
      localStorage.setItem('cart', JSON.stringify(currentCartItems));
    }
  }

  changeItemCount = (change) => {
    const { eventedLocalStorage } = this.props;
    this.setState(prevState => ({
      itemCount: prevState.itemCount + change,
    }));
    this.updateCart(change);
    eventedLocalStorage();
  }

  addItemToCart = () => {
    const { pathContext, eventedLocalStorage } = this.props;
    const { productId } = pathContext;
    const { itemCount } = this.state;
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    currentCartItems[productId] = pathContext;
    currentCartItems[productId].purchaseQuantity = itemCount;
    localStorage.setItem('cart', JSON.stringify(currentCartItems));
    this.setState({
      isInCart: true,
    });
    eventedLocalStorage();
  }

  handleBuyNow = () => {
    this.addItemToCart();
    navigateTo('/cart');
  }

  renderVariants = () => {
    const { pathContext } = this.props;
    const options = {};
    _.map(pathContext.variants, (variant) => {
      _.map(variant.selectedOptions, (item) => {
        const { name, value } = item;
        if (options[name]) {
          options[name].push(value);
        } else {
          options[name] = [];
          options[name].push(value);
        }
      });
    });
    return Object.keys(options).map(key => (
      <ProductVariants key={key} variantItems={_.uniq(options[key])}>
        <VariantType variantType={key} />
      </ProductVariants>
    ));
  }

  renderProductActions = () => {
    const { itemCount, isInCart } = this.state;
    const { pathContext } = this.props;
    return (
      <div className="demo-product-actions">
        <div id="action-input">
          <div id="quantity">
            <Button
              handleClick={() => this.changeItemCount(-7)}
              classes={`btn btn-light minus-btn ${
                !itemCount ? 'cursor-disabled' : ''
              }`}
              disable={!itemCount}
            >
              <img src={minus} className="icon" alt="minus" />
            </Button>
            <div className="quantity-num container p-1 text-center">
              {itemCount}
            </div>
            <Button
              handleClick={() => this.changeItemCount(7)}
              classes="btn btn-light plus-btn"
            >
              <img src={plus} className="icon" alt="plus" />
            </Button>
          </div>
          <span id="price">
            Rs.
            {' '}
            {(
              (pathContext.productPrice / 7.0)
              * (itemCount === 0 ? 7 : itemCount)
            ).toFixed(2)}
          </span>
        </div>
        <div id="action-button">
          <Button
            classes={`btn btn-${
              isInCart ? 'info cursor-disabled' : 'dark'
            }`}
            handleClick={this.addItemToCart}
            disable={!itemCount || isInCart}
            buttonText={isInCart ? 'in Cart' : 'add to cart'}
          />
          <Button
            disable={!itemCount}
            handleClick={this.handleBuyNow}
            buttonText="buy now"
          />
        </div>
      </div>
    );
  }

  renderSocialIcons = () => (
    <div id="social-icons">
      <ul>
        <li>
          <a href="https://www.facebook.com/getgrowfit/">
            <img src={facebook} className="icon" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/getgrowfit?lang=en">
            <img src={twitter} className="icon" alt="twitter" />
          </a>
        </li>
      </ul>
    </div>
  )

  renderTags = () => {
    const { pathContext } = this.props;
    return (
      <div className="demo-product-tags">
        <ul>
          {_.map(pathContext.tags, (tag, index) => (
            <li key={index}>
              <Link to="/ProductItem" activeClassName="active-item">
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderDescription = () => {
    const { pathContext } = this.props;
    return (
      <div className="demo-product-description">
        <div className="title">
          <span>
  Description
          </span>
        </div>
        <div className="demo-product-details">
          {pathContext.description}
        </div>
      </div>
    );
  }

  render() {
    const { pathContext } = this.props;
    const imageSrc = (pathContext.images
        && pathContext.images.length !== 0
        && pathContext.images[0].originalSrc)
      || require('../assets/images/default.jpeg');

    return (
      <div className="container">
        <div className="demo-product-item row">
          <div className="demo-product-item-image col-md-6 col-sm-12">
            <img src={imageSrc} alt={pathContext.productName} />
          </div>
          <div className="demo-product-item-details col-md-6 col-sm-12">
            <h1 id="demo-product-title">
              {pathContext.productName}
            </h1>
            {this.renderVariants()}
            {this.renderProductActions()}
            {this.renderSocialIcons()}
            <span id="behind-science">
              <img src={download} className="icon" alt="download" />
              Read the science behind the program
            </span>
            {this.renderTags()}
          </div>
        </div>
        <div className="container">
          {this.renderDescription()}
        </div>
        <div className="container">
          <ProductSubscription />
        </div>
        <div className="container">
          <ProductFaqs faqs={pathContext.faqs} />
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  pathContext: PropTypes.oneOfType([PropTypes.object]).isRequired,
  eventedLocalStorage: PropTypes.func.isRequired,
};

export default ProductItem;
