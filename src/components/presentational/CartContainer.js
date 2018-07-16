import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import CartItems from './CartItems'
import CartSummary from './CartSummary'

const CartContainer = (props) => (
  <section id="main">
    <div className="cart-grid row">
      <div className="cart-grid-body col-xs-12 col-lg-8">
        <div className="card cart-container">
          <div className="card-block">
            <h1 className="h1">Shopping Cart</h1>
          </div>
          <hr className="separator" />
          <div className="cart-overview js-cart">
          {
            props.cart.lineItems.length === 0
              ? <span className="no-items">There are no more items in your cart</span>
              : <CartItems items={props.cart.lineItems}/>
          }
          </div>
        </div>
        <Link to="/" className="label">
          <i className="material-icons">chevron_left</i>
          Continue shopping
        </Link>
      </div>
      <div className="cart-grid-right col-xs-12 col-lg-4">
        <CartSummary
            // totalItems={props.items.length}
            price={props.cart.totalPrice}
        />
      </div>
    </div>
  </section>
)

CartContainer.propTypes = {
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

CartContainer.defaultProps = {
  productImage: 'https://source.unsplash.com/random/300x400',
  productName: 'I am default',
  price: 10,
}

export default CartContainer
