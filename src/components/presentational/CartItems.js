import React from 'react'
import map from 'lodash'
import PropTypes from 'prop-types'
import Spinner from 'react-spinkit'

import './styles.scss';

export default class CartItems extends React.Component {
  render() {
    return (
      <ul className="cart-items">
      {
        _.map(this.props.items, item => (
          <li className="cart-item" key={item.productDetails.productName}>
          <div className="product-line-grid">
            <div className="product-line-grid-left col-md-3 col-xs-4">
              <span className="product-image media-middle">
                <img src={item.productDetails.images[0].originalSrc} alt="" />
              </span>
            </div>
            <div className="product-line-grid-body col-md-4 col-xs-8">
              <div className="product-line-info">
                <a href="#" className="label" data-id_customization="0">{item.productDetails.productName}</a>
              </div>
              <div className="product-line-info product-price h5 ">
                <div className="current-price">
                  <span className="price">USD.{item.productDetails.productPrice}</span>
                </div>
              </div>
              <br />
            </div>
            <div className="product-line-grid-right product-line-actions col-md-5 col-xs-12">
              <div className="row">
                <div className="col-sm-3 col-md-6 col-lg-6 col-cus-xs-4 ">
                  <div className=" bootstrap-touchspin">
                    <span className="input-group-addon bootstrap-touchspin-prefix" style={{display: "none"}}></span>
                      <input className="js-cart-line-product-quantity form-control"   type="text" defaultValue="1" value={item.quantityToAdded} name="product-quantity-spin" min="1"  />
                      <span className="input-group-addon bootstrap-touchspin-postfix" style={{display: "none"}}></span>
                      <span className="input-group-btn-vertical">
                        <button onClick={() => this.props.handleQuantityChange(item.productId, true)} className="btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-up" type="button">
                          <i className="material-icons touchspin-up"></i>
                        </button>
                        <button disabled={item.quantityToAdded < 2 } onClick={() => this.props.handleQuantityChange(item.productId, false)} className="btn btn-touchspin js-touchspin js-decrease-product-quantity bootstrap-touchspin-down" type="button">
                          <i className="material-icons touchspin-down"></i>
                        </button>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-cus-xs-6">
                  <div className="row">
                    <div className="col-sm-3 col-md-6 col-lg-6 col-cus-xs-6">
                      <span className="product-price">
                        <strong>
                          {`USD.${item.quantityToAdded * parseInt(item.productDetails.productPrice, 10)}`}
                        </strong>
                      </span>
                    </div>
                    <div className="col-sm-3 col-md-6 col-lg-6 col-cus-xs-6">
                      <div className="cart-line-product-actions">
                        <a onClick={() => this.props.handleDeleteItem(item.productId)} className="remove-from-cart" rel="nofollow"  data-link-action="delete-from-cart" data-id-product="25" data-id-product-attribute="0" data-id-customization="">
                          <i className="material-icons float-xs-left">delete</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </li>
        ): null)
      }
      </ul>
    )
  }
}

CartItems.propTypes = {
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

CartItems.defaultProps = {
  productImage: 'https://source.unsplash.com/random/300x400',
  productName: 'I am default',
  price: 10,
}
