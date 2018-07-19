import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const CartSummary = (props) => (
  <div className="card cart-summary">
    <div className="cart-detailed-totals">
      <div className="card-block">
        <div className="cart-summary-line" id="cart-subtotal-products">
          <span className="label js-subtotal">
            {props.totalItems} items
          </span>
          <span className="value">USD {props.price}</span>
        </div>
        <div className="cart-summary-line" id="cart-subtotal-shipping">
          <span className="label">
            Shipping
          </span>
          <span className="value">USD 0.00</span>
          <div>
            <small className="value"></small>
          </div>
        </div>
      </div>
      <hr className="separator" />
    </div>
    {
      props.displayInCart && (
        <div className="checkout cart-detailed-actions card-block">
          <div className="text-sm-center">
            <Link to="/order" className="btn btn-primary btn-continue">Proceed to checkout</Link>
          </div>
        </div>
      )
    }
  </div>
)

CartSummary.propTypes = {
  totalItems: PropTypes.number.isRequired,
  displayInCart: PropTypes.bool.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

CartSummary.defaultProps = {
  totalItems: 0,
  displayInCart: true,
  price: "0",
}

export default CartSummary
