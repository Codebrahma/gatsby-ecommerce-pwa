import React, { Fragment } from 'react';
import _ from 'lodash';
import { createCart, addToCart, removeFromCart } from '../utils/shopifyUtils';

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      quantityToAdded: 1,
      availableItem: false,
    }
    
  }
  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const productId = this.props.pathContext.variants[0].id;
    const currentIndex = _.findIndex(cart, (data) => productId === data.productId);

    this.setState({
      isAppOnline: window.navigator.onLine,
      cartData: JSON.parse(localStorage.getItem('cart')) || [],
      quantityToAdded: currentIndex !== -1 ? cart[currentIndex].quantityToAdded : 1,
      availableItem: currentIndex !== -1,
    })
    window.addEventListener('online', this.cameOnline);    
    window.addEventListener('offline', this.cameOffline);    
  }
  
  cameOnline = () => {
    this.setState({
      isAppOnline: true,
    });
  }
  
  cameOffline = () => {
    this.setState({
      isAppOnline: false,
    })  
  }

  handleQuantityChange = (increment) => {
    const productId = this.props.pathContext.variants[0].id;
    const currentIndex = _.findIndex(this.state.cartData, (data) => productId === data.productId);
    const currentCartData = Object.assign([], this.state.cartData);
    if (currentIndex !== -1) {
      currentCartData[currentIndex].quantityToAdded = currentCartData[currentIndex].quantityToAdded + (increment ? 1 : -1);
      this.setState({
        cartData: currentCartData,
        quantityToAdded: this.state.quantityToAdded + (increment ? 1 : -1),
        availableItem: true,
      })
      localStorage.setItem('cart', JSON.stringify(currentCartData));
    } else {
      this.setState({
        quantityToAdded: this.state.quantityToAdded + (increment ? 1 : -1),
      });
    }
    this.props.eventedLocalStorage();
  }

  handleAddToCart = (event) => {
    event.preventDefault();
  
    const productId = this.props.pathContext.variants[0].id;
    const currentIndex = _.findIndex(this.state.cartData, (data) => productId === data.productId);
    let cart = this.state.cartData;
    if (currentIndex === -1) {
      
      cart.push({
        productId,
        productDetails: this.props.pathContext,
        quantityToAdded: this.state.quantityToAdded,
        
      })
    } else {
      
      cart[currentIndex] = {
        productId,
        productDetails: this.props.pathContext,
        quantityToAdded: cart[currentIndex].quantityToAdded,
      };
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({
      cartData: cart,
      availableItem: true,
    })
    this.props.eventedLocalStorage();
  }

  handleThumbClick = (clickedImgSrc) => {
    this.setState({
      currentMainImageSrc: clickedImgSrc,
    })
  }

  renderProductImages = () => (
    <Fragment>
      <div className="col-md-2">
        <section className="page-content" id="content">
          <div className="images-container">
            <div className="js-qv-mask mask pos_content">
              <div className="product-images js-qv-product-images owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage" >
                    <div className="owl-item cloned" style={{ width: '98px' }}>
                      <div className="thumb-container hidden-sm image-container">
                        {
                          this.props.pathContext.images && this.props.pathContext.images.map((img) => (
                            <img
                              onClick={() => this.handleThumbClick(img.originalSrc)}
                              key={img.originalSrc}
                              className="thumb js-thumb  selected product-image"
                              data-image-medium-src="http://demo.posthemes.com/pos_nevara/197-medium_default/compete-track-tote.jpg" data-image-large-src="http://demo.posthemes.com/pos_nevara/197-large_default/compete-track-tote.jpg"
                              src={img.originalSrc}
                              alt=""
                              title=""
                              width="100"
                              itemProp="image"
                            />
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="col-xs-12 col-md-4 image-container">
        <img
          className="thumb js-thumb  selected product-image"
          src={this.state.currentMainImageSrc || this.props.pathContext.images && this.props.pathContext.images[0].originalSrc}
          alt=""
          title=""
          width="200"
          itemProp="image"
          style={{ width: "100%" }}
        />
      </div>
    </Fragment>
  )

  renderProductInfo = () => {
    const buttonContent = !this.state.availableItem ? 'Add To Cart' : 'In Cart';
    return (
      <div className="col-md-6 item-info">
        <h1 className="h1 namne_details" itemProp="name">{this.props.pathContext.productName}</h1>
        <p className="reference">Catgories: Watches</p>

        <div className="product-prices">
          <div className="product-price h5 " itemProp="offers" itemScope="" itemType="https://schema.org/Offer">
            <link itemProp="availability" />
              <meta itemProp="priceCurrency" content="USD" />
              <div className="current-price">
                <span itemProp="price" content="76.8">${this.props.pathContext.productPrice}</span>
              </div>
          </div>
          <div className="tax-shipping-delivery-label">
          </div>
        </div>
        <div className="product-information">
          <div id="product-description-short-25" className="product-desc" itemProp="description">
            <p><span >{this.props.productDescription}</span></p>
          </div>
          <div className="product-actions">
            <form id="add-to-cart-or-refresh">
              <input type="hidden" name="token" value="2e4ad0eed781d60ec07b010a09cbed5a" />
              <input type="hidden" name="id_product" value="25" id="product_page_product_id" />
              <input type="hidden" name="id_customization" value="0" id="product_customization_id" />
              <div className="product-variants">
          </div>
          <section className="product-discounts">
          </section>
          <div className="product-add-to-cart">
            <span className="control-label">Quantity</span>
              <div className="product-quantity clearfix">
              <div className="qty">
              <div className="input-group bootstrap-touchspin">
                <span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: 'none' }}>
                </span>
                <input
                  type="text"
                  name="qty"
                  id="quantity_wanted"
                  value={this.state.quantityToAdded }
                  className="input-group form-control"
                  min="1"
                  aria-label="Quantity"
                  readOnly
                />
                <span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: 'none' }}>
                </span>
                <span className="input-group-btn-vertical">
                <button
                  className="btn btn-touchspin js-touchspin bootstrap-touchspin-up"
                  type="button"
                  onClick={() => {this.handleQuantityChange(true)}}
                >
                  <i className="material-icons touchspin-up"></i>
                </button>
                <button
                  disabled={this.state.quantityToAdded <= 1}
                  className="btn btn-touchspin js-touchspin bootstrap-touchspin-down"
                  type="button"
                  onClick={() => {this.handleQuantityChange(false)}}
                >
                <i className="material-icons touchspin-down"></i></button></span>
              </div>
          </div>
          <div className="add">
            <button
              className="btn btn-primary add-to-cart"
              data-button-action="add-to-cart"
              onClick={this.handleAddToCart}
              disabled={this.state.availableItem}
            >
              <i className="fa fa-shopping-cart"></i>
              {buttonContent}
            </button>
          </div>
        </div>
        <span id="product-availability">
        </span>
        <p className="product-minimal-quantity">
        </p>
      </div>
      <input className="product-refresh ps-hidden-by-js" name="refresh" type="submit" value="Refresh" style={{ display: 'none' }} />
      </form>
    </div>
    </div>
    </div>
  )
  }

  render() {
    return (
      <div className="product-item">
        <div className="container">
          <div className="row">
            <div id="content-wrapper" className="col-xs-12">
              <div className="row">
                { this.renderProductImages() }
                { this.renderProductInfo() }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
