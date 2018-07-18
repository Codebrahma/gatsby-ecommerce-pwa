import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import CartItems from './CartItems'
import CartSummary from './CartSummary'

export default class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: JSON.parse(localStorage.getItem('cart')),
      cartUpdated: false,
    }
  }

  handleQuantityChange = (productId, increment) => {
    const currentIndex = _.findIndex(this.state.cartData, (data) => productId === data.productId);
    const currentCartData = this.state.cartData;
    currentCartData[currentIndex].quantityToAdded = currentCartData[currentIndex].quantityToAdded + (increment ? 1 : -1);
    
    this.setState({
      cartData: currentCartData,
    })
  }

  handleDeleteItem = (productId) => {
    console.log('product Id ', productId);
  }

  handleUpdateCart = () => {

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
                  handleQuantityChange={this.handleQuantityChange}
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
