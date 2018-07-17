import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import CartItems from './CartItems'
import CartSummary from './CartSummary'

export default class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    const itemQuantityMap = {}
    let totalQuantity = 0;
    _.forEach(this.props.cart.lineItems, item => {
      totalQuantity = totalQuantity + item.quantity,
      itemQuantityMap[item.id] = {
        quantity: item.quantity,
        variantId: item.variant.id,
        lineItemId: item.id,
        productPrice: parseInt(item.variant.price, 10),
        productImage: item.variant.image,
        productTitle: item.title,
        productTotalPrice: item.quantity * item.variant.price,
      }
    });
    this.setState({
      cartData: itemQuantityMap,
      totalPrice: parseInt(this.props.cart.totalPrice, 10),
      totalQuantity,
    });
  }

  handleQuantitChange = (lineItemId, increment) => {
    const currentCartItem = this.state.cartData[lineItemId];
    const currentQuantity = currentCartItem.quantity;
    const newQuantity = increment ? currentQuantity + 1 : currentQuantity - 1
    const productPrice = currentCartItem.productPrice;

    this.setState({
      ...this.state,
      totalPrice: increment ? this.state.totalPrice + productPrice : this.state.totalPrice - productPrice,
      totalQuantity: increment ? this.state.totalQuantity + 1 : this.state.totalQuantity - 1,
      cartData: {
        ...this.state.cartData,
        [lineItemId]: {
          ...currentCartItem,
          quantity: newQuantity,
          productTotalPrice: newQuantity * currentCartItem.productPrice,
        }
      }
    });
  }

  handleDeleteItem = (lineItemId) => {
    const currentCartItem = this.state.cartData[lineItemId];
    const productPrice = currentCartItem.productPrice;

    this.setState({
      ...this.state,
      totalPrice: this.state.totalPrice - (currentCartItem.productPrice * currentCartItem.quantity),
      totalQuantity: this.state.totalQuantity - currentCartItem.quantity,
      cartData: {
        ...this.state.cartData,
        [lineItemId]: {
          ...currentCartItem,
          quantity: 0,
          productTotalPrice: 0,
        }
      }
    });
  }

  render() {
    if (!this.state.cartData) {
      return <div></div>
    }
    return (
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
                this.props.cart.lineItems.length === 0
                  ? <span className="no-items">There are no more items in your cart</span>
                  : <CartItems 
                        items={this.state.cartData}
                        handleQuantitChange={this.handleQuantitChange}
                        handleDeleteItem={this.handleDeleteItem}
                        {...this.props}/>
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
                totalItems={this.state.totalQuantity}
                price={this.state.totalPrice}
            />
          </div>
        </div>
      </section>
    )
  }
}

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
