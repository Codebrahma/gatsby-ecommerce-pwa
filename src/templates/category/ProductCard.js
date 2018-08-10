import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import plus from '../../assets/icons/plus-solid.svg'
import cart from '../../assets/icons/shopping-cart-solid.svg'

class ProductCard extends Component {

  state = {
    isInCart: false
  }
  
  componentDidMount() {
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const { productId } = this.props;
    this.setState({
      isInCart: currentCartItems[productId] ? true : false
    })
  }

  handleAddClick = () => {
    const { productId, images, productName, description, productPrice } = this.props;
    this.setState({
      isInCart: true
    })
    this.props.addCardToCart({ productId, images, productName, description, productPrice })
  }

  
  render() {
    let imageSrc = this.props.images[0] ? this.props.images[0].originalSrc : require('../../assets/images/default.jpeg')
    
    return (
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div className="demo-product-card">
          <Link to={`/product/${this.props.productId}`} style={{margin: '0'}}>
            { 
              this.props.children ||  <img src={imageSrc} alt={this.props.productName} />
          }
            <div className="demo-product-card-details">
              <p id="demo-product-title">{this.props.productName}</p>
              <p id="demo-product-description">{this.props.description}</p>
            </div>
          </Link>
          <div className="demo-product-card-footer">
            <span>Rs.{this.props.productPrice}</span>
              {
                this.state.isInCart
                  ? (
                      <span>
                        <Link to="/cart">
                          <img src={cart} className="icon" alt="icon" />
                        </Link>
                      </span>
                    )
                  : (
                      <span onClick={this.handleAddClick}>
                        <img src={plus} className="icon" alt="icon" />
                      </span>
                    )
              }
            
          </div>
        </div>
      </div>
    )
  }
}

ProductCard.propTypes = {
  productId: PropTypes.string.isRequired,
  productImage: PropTypes.string,
  productName: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default ProductCard