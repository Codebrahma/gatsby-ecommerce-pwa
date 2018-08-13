import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'
import PropTypes from 'prop-types'
import { Box, Card, BackgroundImage, Text, } from "rebass";

import plus from '../../assets/icons/plus-solid.svg';
import cart from '../../assets/icons/shopping-cart-solid.svg';
import defaultImage from '../../assets/images/default.jpeg';

class ProductCard extends Component {
  state = {
    isInCart: false,
  }

  componentDidMount() {
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const { productId } = this.props;
    this.setState({
      isInCart: !!currentCartItems[productId],
    });
  }

  handleAddClick = () => {
    const {
      productId,
      images,
      productName,
      description,
      productPrice,
      addCardToCart,
    } = this.props;
    this.setState({
      isInCart: true,
    });
    addCardToCart({
      productId,
      images,
      productName,
      description,
      productPrice,
    });
  }


  render() {
    let imageSrc = this.props.images[0] ? this.props.images[0].originalSrc : require('../../assets/images/default.jpeg')

    return (
      <Box width={[1, 1 / 2, 1 / 3]} p={3}>
        <Card>
          <Link to={`/product/${this.props.productId}`} style={{ margin: '0' }}>
            {
              this.props.children || <BackgroundImage src={imageSrc} alt={this.props.productName} />
            }
          </Link>
          <Text id="demo-product-title" p={2}>{this.props.productName}</Text>
          <Text className="demo-product-card-details">{this.props.description}</Text>
          {
            this.state.isInCart
              ? (
                <span className="demo-product-card-footer">
                  <span>Rs.{this.props.productPrice}</span>
                  <img src={cart} className="icon" alt="cart" onClick={()=>{ navigateTo('/cart') }}/>
                </span>
              )
              : (
                <span className="demo-product-card-footer" onClick={this.handleAddClick}>
                  <span>Rs.{this.props.productPrice}</span>
                  <img src={plus} className="icon" alt="plus" />
                </span>
              )
          }
        </Card>
      </Box>
    )
  }
}

ProductCard.propTypes = {
  productId: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  images: PropTypes.oneOfType([PropTypes.array]).isRequired,
  description: PropTypes.string,
  addCardToCart: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
ProductCard.defaultProps = {
  description: '',
  children: null,
};

export default ProductCard;
