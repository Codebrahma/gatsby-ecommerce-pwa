import React, { Component } from "react";
import _ from "lodash"
import Link from 'gatsby-link'
import './products.scss';
import ProductFaqs from "../components/ProductFaqs.js";
import ProductSubscription from "../components/ProductSubscription.js";
import ProductVariants from "../components/ProductVariants.js";
import VariantType from "../components/VariantType.js";
import facebook from "../assets/icons/facebook-f-brands.svg";
import twitter from "../assets/icons/twitter-brands.svg";
import plus from "../assets/icons/plus-solid.svg";
import minus from "../assets/icons/minus-solid.svg";
import download from "../assets/icons/download-solid.svg"


class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 7
    }
  }

  getItemFromCart = () => {
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const { productId } = this.props.pathContext;
    if(this.isItemInCart()){
      return currentCartItems[productId]
    } else {
      return null
    }
  }

  componentDidMount() {
    let item = this.getItemFromCart()
    this.setState({
      itemCount: item ? item.purchaseQuantity : 0
    })
  }

  isItemInCart() {
    const { productId } = this.props.pathContext;
    let currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    if (currentCartItems[productId]) {
      return true
    }
    return false
  }

  updateCart = (change) => {
    const { productId } = this.props.pathContext;
    let currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    if (this.isItemInCart()) {
      if (currentCartItems[productId].purchaseQuantity + change === 0) {
        delete currentCartItems[productId]
      } else {
        currentCartItems[productId].purchaseQuantity += change
      }
      localStorage.setItem('cart', JSON.stringify(currentCartItems));
    }
    this.props.eventedLocalStorage();
  }

  changeItemCount = (change) => {
    this.setState(prevState => ({
      itemCount: prevState.itemCount + change,
    }))
    this.props.eventedLocalStorage();
    this.updateCart(change);
  }

  addItemToCart = () => {
    const { productId } = this.props.pathContext;
    let currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    if (currentCartItems[productId]) {
      currentCartItems[productId].purchaseQuantity += this.state.itemCount
    } else {
      currentCartItems[productId] = this.props.pathContext;
      currentCartItems[productId].purchaseQuantity = this.state.itemCount
    }
    localStorage.setItem('cart', JSON.stringify(currentCartItems));
    this.props.eventedLocalStorage();
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
          <button onClick={() => this.changeItemCount(-7)} className="btn btn-light minus-btn" disabled={!this.state.itemCount}>
            <img src={minus} className="icon" alt="icon" />
          </button>
          <input type="text" disabled min="0" value={this.state.itemCount} />
          <button onClick={() => this.changeItemCount(7)} className="btn btn-light plus-btn">
            <img src={plus} className="icon" alt="icon" />
          </button>
        </div>
        <span id="price">Rs. {(this.props.pathContext.productPrice / 7.0) * ((this.state.itemCount === 0) ? 7 : this.state.itemCount)}</span>
      </div>
      <div id="action-button">
        <button className={`btn btn-${this.isItemInCart() ? "light" : "dark"}`} onClick={this.addItemToCart} disabled={!this.state.itemCount}>
          {this.isItemInCart() ? "In Cart" : "add to cart"}
        </button>
        <button className="btn btn-dark">buy now</button>
      </div>
    </div>
  )

  renderSocialIcons = () => (
    <div id="social-icons">
      <ul>
        <li>
          <a href="#">
            <img src={facebook} className="icon" alt="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} className="icon" alt="icon" />
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
    return (
      <div className="container">
        <div className="demo-product-item row">
          <div className="demo-product-item-image col-md-6 col-sm-12">
            <img
              src={(this.props.pathContext.images && this.props.pathContext.images.length !== 0 && this.props.pathContext.images[0].originalSrc) || require('../assets/images/default.jpeg')}
              alt={this.props.pathContext.productName}
            />
          </div>
          <div className="demo-product-item-details col-md-6 col-sm-12" >
            <h1 id="demo-product-title">{this.props.pathContext.productName}</h1>
            {this.renderVariants()}
            {this.renderProductActions()}
            {this.renderSocialIcons()}
            <span id="behind-science">
              <img src={download} className="icon" alt="icon" />
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
          <ProductFaqs faqs={this.props.pathContext.faqs} />
        </div>
      </div>
    )
  }
}

export default ProductItem
