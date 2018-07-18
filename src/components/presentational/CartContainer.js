import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import CartItems from './CartItems'
import CartSummary from './CartSummary'

export default class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartUpdated: false,
    }
  }

  componentDidMount() {
    this.computeAndUpdateState(this.props.cart);
  }

  computeAndUpdateState(cart) {
    const itemQuantityMap = {}
    let totalQuantity = 0;
    let totalPrice = 0;
    _.forEach(cart, item => {
      const {
        productDetails
      } = item;
      totalQuantity = totalQuantity + item.quantityToAdded;
      totalPrice = totalPrice + (item.quantityToAdded * parseInt(productDetails.productPrice, 10));
      itemQuantityMap[item.productId] = {
        productPrice: parseInt(productDetails.productPrice, 10),
        productImage: productDetails.images[0] ? productDetails.images[0].originalSrc : '',
        productTitle: productDetails.name,
        productTotalPrice: item.quantityToAdded * parseInt(productDetails.productPrice, 10),
        ...productDetails,
      }
    });
    console.log('setting state ');
    this.setState({
      ...this.state,
      cartUpdated: false,
      cartData: itemQuantityMap,
      totalPrice,
      totalQuantity,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.computeAndUpdateState(nextProps.cart);
  }

  handleQuantitChange = (lineItemId, increment) => {
    const currentCartItem = this.state.cartData[lineItemId];
    const currentQuantity = currentCartItem.quantity;
    const newQuantity = increment ? currentQuantity + 1 : currentQuantity - 1
    const productPrice = currentCartItem.productPrice;

    this.setState({
      ...this.state,
      cartUpdated: true,
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
      cartUpdated: true,      
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

  handleUpdateCart = () => {
    const updatedCartData = _.map(this.state.cartData, cartItem => ({
      id: cartItem.lineItemId,
      quantity: cartItem.quantity,
    }));
    this.props.saveNewCart(updatedCartData)
  }

  render() {

    return (
      <section id="main">
        <div className="cart-grid row">
          <div className="cart-grid-body col-xs-12 col-lg-8">
            <div className="card cart-container">
            <div className="cart-header">
              <div className="card-block cart-title">
                <h1 className="h1">Shopping Cart</h1>
              </div>
              {
                /*
                this.state.cartUpdated &&
                <div className="text-sm-center btn-cart-update" onClick={this.handleUpdateCart}>
                  <a className="btn btn-primary">Update Cart</a>
                </div>
                */
              }
              </div>
              <hr className="separator" />
              <div className="cart-overview js-cart">
              {
                <CartItems
                  items={this.state.cartData}
                  handleQuantitChange={this.handleQuantitChange}
                  handleDeleteItem={this.handleDeleteItem}
                  {...this.props}
                />
                
              }
              </div>
            </div>
            <Link to="/" className="label">
              <i className="material-icons">chevron_left</i>
              Continue shopping
            </Link>
          </div>
          <div className="cart-grid-right col-xs-12 col-lg-4">
            {
              /*
              <CartSummary
                  totalItems={this.state.totalQuantity}
                  price={this.state.totalPrice}
              />
              */ 
            }
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
