import React from 'react'
import map from 'lodash'
import PropTypes from 'prop-types'


const CartItems = (props) => {
const items = [...props.items].slice(0,3)

return (
  <ul className="cart-items">
  {
    _.map(items, item => (
      <li className="cart-item" key={item.productName}>
      <div className="product-line-grid">
        <div className="product-line-grid-left col-md-3 col-xs-4">
          <span className="product-image media-middle">
            <img src={item.productImage} alt={item.productImage} />
          </span>
        </div>
        <div className="product-line-grid-body col-md-4 col-xs-8">
          <div className="product-line-info">
            <a href="#" className="label" data-id_customization="0">{item.productName}</a>
          </div>
          <div className="product-line-info product-price h5 ">
            <div className="current-price">
              <span className="price">${item.price}</span>
            </div>
          </div>
          <br />
        </div>
        <div className="product-line-grid-right product-line-actions col-md-5 col-xs-12">
          <div className="row">
            <div className="col-xs-4 hidden-md-up"></div>
              <div className="col-md-10 col-xs-6">
                <div className="row">
                  <div className="col-md-6 col-xs-6 qty">
                    <div className="input-group bootstrap-touchspin">
                      <span className="input-group-addon bootstrap-touchspin-prefix" style={{display: "none"}}></span>
                      <input className="js-cart-line-product-quantity form-control"   type="text" defaultValue="2" name="product-quantity-spin" min="1"  />
                      <span className="input-group-addon bootstrap-touchspin-postfix" style={{display: "none"}}></span>
                      <span className="input-group-btn-vertical">
                        <button className="btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-up" type="button">
                          <i className="material-icons touchspin-up"></i>
                        </button>
                        <button className="btn btn-touchspin js-touchspin js-decrease-product-quantity bootstrap-touchspin-down" type="button">
                          <i className="material-icons touchspin-down"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-2 price">
                    <span className="product-price">
                      <strong>
                        $P X Q
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-2 text-xs-right">
                <div className="cart-line-product-actions">
                  <a href="#" className="remove-from-cart" rel="nofollow"  data-link-action="delete-from-cart" data-id-product="25" data-id-product-attribute="0" data-id-customization="">
                    <i className="material-icons float-xs-left">delete</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </li>
    ))
  }
  </ul>
)
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

export default CartItems
