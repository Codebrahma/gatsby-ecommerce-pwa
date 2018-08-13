import React, { Component } from 'react';
import _ from 'lodash';
import Link, { navigateTo } from 'gatsby-link';
import { Container, Row, Text, Flex, Box } from 'rebass';

import ProductFaqs from './product/ProductFaqs.js';
import ProductSubscription from './product/ProductSubscription.js';
import ProductVariants from './product/ProductVariants.js';
import VariantType from './product/VariantType.js';
import Button from '../components/Button';

import './product/product.scss';

import facebook from '../assets/icons/facebook-f-brands.svg';
import twitter from '../assets/icons/twitter-brands.svg';
import plus from '../assets/icons/plus-solid.svg';
import minus from '../assets/icons/minus-solid.svg';
import download from '../assets/icons/download-solid.svg';
import defaultImage from '../assets/images/default.jpeg';



class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const { productId } = this.props.pathContext;
    this.setState({
      itemCount: currentCartItems[productId] ? currentCartItems[productId].purchaseQuantity : 7,
      isInCart: currentCartItems[productId] ? true : false
    })
  }

  updateCart = (change) => {
    const { productId } = this.props.pathContext;
    let currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    if (this.state.isInCart) {
      currentCartItems[productId].purchaseQuantity += change
      if (currentCartItems[productId].purchaseQuantity === 0) {
        delete currentCartItems[productId]
        this.setState({
          isInCart: false
        })
      }
      localStorage.setItem('cart', JSON.stringify(currentCartItems));
    }
  }

  changeItemCount = (change) => {
    this.setState(prevState => ({
      itemCount: prevState.itemCount + change,
    }))
    this.updateCart(change);
    this.props.eventedLocalStorage();
  }

  addItemToCart = () => {
    const { productId } = this.props.pathContext;
    let currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    currentCartItems[productId] = this.props.pathContext;
    currentCartItems[productId].purchaseQuantity = this.state.itemCount
    localStorage.setItem('cart', JSON.stringify(currentCartItems));
    this.setState({
      isInCart: true
    })
    this.props.eventedLocalStorage();
  }

  handleBuyNow = () => {
    this.addItemToCart();
    navigateTo('/cart');
  }

  renderVariants = () => {
    let options = {};
    _.map(this.props.pathContext.variants, (variant) => {
      _.map(variant.selectedOptions, item => {
        let { name, value } = item;
        if (options[name]) {
          options[name].push(value)
        } else {
          options[name] = [];
          options[name].push(value)
        }
      })
    })
    return Object.keys(options).map(
      key => (
        <ProductVariants key={key} variantItems={_.uniq(options[key])} >
          <VariantType variantType={key} />
        </ProductVariants>
      )
    )
  }

  renderProductActions = () => (
    <div className="demo-product-actions">
      <div id="action-input">
        <div id="quantity">
          <Button handleClick={() => this.changeItemCount(-7)} classes={`minus-btn min-w-35 bg-white-btn ${!this.state.itemCount ? 'cursor-disabled' : ''}`} disable={!this.state.itemCount}>
            <img src={minus} className="icon" alt="minus" />
          </Button>
          <Text className="quantity-num min-w-35" textAlign='center' p={2} fontSize={16}>{this.state.itemCount}</Text>
          <Button handleClick={() => this.changeItemCount(7)} classes="min-w-35  plus-btn bg-white-btn">
            <img src={plus} className="icon" alt="plus" />
          </Button>
        </div>
        <span id="price">Rs. {((this.props.pathContext.productPrice / 7.0) * ((this.state.itemCount === 0) ? 7 : this.state.itemCount)).toFixed(2)}</span>
      </div>
      <div id="action-button">
        <Button classes={`bg-${this.state.isInCart ? "white-btn cursor-disabled" : "black-btn"}`} handleClick={this.addItemToCart} disable={!this.state.itemCount || this.state.isInCart} buttonText={this.state.isInCart ? "in Cart" : "add to cart"} />
        <Button classes='bg-black-btn' disable={!this.state.itemCount} handleClick={this.handleBuyNow} buttonText="buy now"/>
      </div>
    </div>
  )

  renderSocialIcons = () => (
    <div id="social-icons">
      <ul>
        <li>
          <a href="#">
            <img src={facebook} className="icon" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} className="icon" alt="twitter" />
          </a>
        </li>
      </ul>
    </div>
  )

  renderTags = () => (
    <div className="demo-product-tags">
      <ul>
        {
          _.map(this.props.pathContext.tags, (tag, index) => (
            <li key={index} >
              <Link to="/ProductItem" activeClassName="active-item">{tag}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )

  renderDescription = () => (
    <div className="demo-product-description">
      <div className="title">
        <span>Description</span>
      </div>
      <div className="demo-product-details">
        {this.props.pathContext.description}
      </div>
    </div>
  )

  render() {
    let imageSrc = (
      this.props.pathContext.images 
      && this.props.pathContext.images.length !== 0 
      && this.props.pathContext.images[0].originalSrc
    ) || defaultImage;

    return (
      <Container>
        <Row className="demo-product-item row">
        <Flex flexWrap='wrap'>
          <Box width={[1, 1, 1/2]} px={20} className="demo-product-item-image">
            <img
              src={imageSrc}
              alt={this.props.pathContext.productName}
            />
          </Box>
          <Box width={[1, 1, 1/2]} px={20} className="demo-product-item-details" >
            <h1 id="demo-product-item-title">{this.props.pathContext.productName}</h1>
            {this.renderVariants()}
            {this.renderProductActions()}
            {this.renderSocialIcons()}
            <span id="behind-science">
              <img src={download} className="icon" alt="download" />
              Read the science behind the program
            </span>
            {this.renderTags()}
          </Box>
          </Flex>
        </Row>
        <Row px={20}>
          {this.renderDescription()}
        </Row>
        <Row px={20}>
        <Box style={{width: '100%'}}>
          <ProductSubscription />
          </Box>
        </Row>
        <Row px={20}>
          <ProductFaqs faqs={this.props.pathContext.faqs} />
        </Row>
      </Container>
    )
  }
}

export default ProductItem
