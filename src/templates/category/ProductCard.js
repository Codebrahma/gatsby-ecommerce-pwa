import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';
import PropTypes from 'prop-types';
import {
  Box, Card, BackgroundImage, Text, Truncate,
} from 'rebass';

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
    const {
      images, productId, productName, description, productPrice, children,
    } = this.props;
    const { isInCart } = this.state;
    const imageSrc = images[0] ? images[0].originalSrc : defaultImage;
    return (
      <Box width={[1, 1 / 2, 1 / 3]} p={3}>
        <Card>
          <Link to={`/product/${productId}`} style={{ margin: '0' }}>
            {
              children || <BackgroundImage src={imageSrc} alt={productName} />
            }
          </Link>
          <Truncate fontWeight="bold" p={2}>
            {productName}
          </Truncate>
          <Text className="demo-product-card-details">
            {description}
          </Text>
          {
            isInCart
              ? (
                <span className="demo-product-card-footer">
                  <span>
Rs.
                    {productPrice}
                  </span>
                  {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
                  <img src={cart} className="icon" alt="cart" onClick={() => { navigateTo('/cart'); }} />
                </span>
              )
              : (
                <span className="demo-product-card-footer" onClick={this.handleAddClick}>
                  <span>
Rs.
                    {productPrice}
                  </span>
                  <img src={plus} className="icon" alt="plus" />
                </span>
              )
          }
        </Card>
      </Box>
    );
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
