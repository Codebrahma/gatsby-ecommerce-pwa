import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import CartItems from './CartItems'
import CartSummary from './CartSummary'

export default class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      cartUpdated: false,
    }
  }

  componentDidMount() {
    this.setState({
      cartData: JSON.parse(localStorage.getItem('cart')) || [],
    })
    
  }
  handleQuantityChange = (productId, increment) => {
    const currentIndex = _.findIndex(this.state.cartData, (data) => productId === data.productId);
    const currentCartData = Object.assign([], this.state.cartData);
    currentCartData[currentIndex].quantityToAdded = currentCartData[currentIndex].quantityToAdded + (increment ? 1 : -1);
    localStorage.setItem('cart', JSON.stringify(currentCartData));
    this.setState({
      cartData: currentCartData,
    })
    this.props.eventedLocalStorage();
  }

  handleDeleteItem = (productId) => {
    const currentIndex = _.findIndex(this.state.cartData, (data) => productId === data.productId);
    const newCardData = _.concat(_.slice(this.state.cartData, 0, currentIndex), _.slice(this.state.cartData, currentIndex + 1, this.state.cartData.length))
    localStorage.setItem('cart', JSON.stringify(newCardData));
    this.setState({
      cartData: newCardData,
    })
    this.props.eventedLocalStorage();
  }
  
  render() {

    const price = _.reduce(this.state.cartData, (accumulator, cartData) => (accumulator + cartData.quantityToAdded * parseInt(cartData.productDetails.productPrice, 10)), 0);
    const totalItems = _.reduce(this.state.cartData, (accumulator, cartData) => (accumulator + cartData.quantityToAdded), 0);
    return (
      <section id="main">
        <div className="cart-grid row">
          <div className="cart-grid-body col-xs-12 col-lg-8">
            <div className="card cart-container">
              <div className="cart-header">
                <div className="card-block cart-title">
                  <h1 className="h1">Shopping Cart</h1>
                </div>  
              </div>
              <hr className="separator" />
              <div className="cart-overview js-cart">
              { 
                (this.state.cartData && this.state.cartData.length > 0) ? (
                  <CartItems
                    items={this.state.cartData}
                    handleQuantityChange={this.handleQuantityChange}
                    handleDeleteItem={this.handleDeleteItem}
                    {...this.props}
                  />
                ) : (
                  <div className="no-item">
                    No item in the cart.
                  </div>
                )
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
              <CartSummary
                totalItems={totalItems}
                price={price}
              />
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
