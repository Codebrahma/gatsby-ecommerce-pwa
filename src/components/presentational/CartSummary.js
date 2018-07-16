import React from 'react'
import PropTypes from 'prop-types'

const CartSummary = (props) => (
  <div className="card cart-summary">
    <div className="cart-detailed-totals">
      <div className="card-block">
        <div className="cart-summary-line" id="cart-subtotal-products">
          <span className="label js-subtotal">
            {props.totalItems} items
          </span>
          <span className="value">${props.price}</span>
        </div>
        <div className="cart-summary-line" id="cart-subtotal-shipping">
          <span className="label">
            Shipping
          </span>
          <span className="value">$7.00</span>
          <div>
            <small className="value"></small>
          </div>
        </div>
      </div>
      <hr className="separator" />
      <div className="card-block">
        <div className="cart-summary-line cart-total">
          <span className="label">Total (tax excl.)</span>
          <span className="value">$160.60</span>
        </div>
        <div className="cart-summary-line">
          <small className="label">Taxes</small>
          <small className="value">$6.42</small>
        </div>
      </div>
      <hr className="separator" />
    </div>
    <div className="checkout cart-detailed-actions card-block">
      <div className="text-sm-center">
        <a href="#" className="btn btn-primary">Proceed to checkout</a>
      </div>
    </div>
  </div>
)

CartSummary.propTypes = {
  totalItems: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

CartSummary.defaultProps = {
  totalItems: 0,
  productName: 'I am default',
  price: "10",
}

export default CartSummary
