import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';
import PropTypes from 'prop-types';
import {
  Flex, Box, Card, BackgroundImage, Text, Truncate, Container,
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
    const desc = description.indexOf('-->') === -1 ? description : description.slice(description.indexOf('-->') + 3, description.indexOf(' &lt;'));
    return (
      <Box width={[1, 1 / 2, 1 / 3]} p={3}>
        <Card p={0}>
          <Link to={`/product/${productId}`} style={{ margin: '0' }}>
            {
              children || <BackgroundImage src={imageSrc} alt={productName} />
            }
          </Link>
          <Container>
            <Truncate textAlign="center" fontWeight="bold" p={2}>
              {productName}
            </Truncate>
            <Text className="demo-product-card-details" mb={2}>
              {desc}
            </Text>
          </Container>
          {
            isInCart
              ? (
                <Flex className="card-footer">
                  <Box width={3 / 4} px={4} py={2}>
                    Rs.
                    {productPrice}
                  </Box>
                  {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
                  <Box className="card-footer-button" onClick={() => { navigateTo('/cart'); }} width={1 / 4} pt={2}>
                    <img src={cart} alt="cart" style={{ maxHeight: '15px', width: 'auto' }} />
                  </Box>
                </Flex>
              )
              : (
                <Flex className="card-footer">
                  <Box width={3 / 4} px={4} py={2}>
                    Rs.
                    {productPrice}
                  </Box>
                  <Box className="card-footer-button" width={1 / 4} onClick={this.handleAddClick} pt={2}>
                    <img src={plus} alt="plus" style={{ maxHeight: '15px', width: 'auto' }} />
                  </Box>
                </Flex>
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
