import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';
import PropTypes from 'prop-types';
import {
  Flex, Box, Card, BackgroundImage, Truncate, Container, Text,
} from 'rebass';

import styled from 'styled-components';
import {
  borderTop,
  borderLeft,
  maxWidth,
  maxHeight,
  textAlign,
  space,
  lineHeight,
  height,
  display,
  letterSpacing,
} from 'styled-system';

import plus from '../../assets/icons/plus-solid.svg';
import cart from '../../assets/icons/shopping-cart-solid.svg';
import defaultImage from '../../assets/images/default.jpeg';

const Border = styled.div`
  ${borderTop}
  ${borderLeft}
`;

const ButtonImage = styled.img`
  ${maxHeight}
  ${maxWidth}
`;

const ProductDetails = styled.p`
  ${textAlign}
  ${space}
  ${lineHeight}
  ${height}
  ${display}
  ${letterSpacing}
`;

class ProductCard extends Component {
  state = {
    isInCart: false,
  }

  componentDidMount() {
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const { productId } = this.props;
    this.setState({
      isInCart: currentCartItems[productId],
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
        <Card p={0} style={{ boxShadow: '0px 0px 9px 0.5px rgba(0,0,0,0.5)' }}>
          <Link to={`/product/${productId}`} style={{ margin: '0' }}>
            {
              children || <BackgroundImage src={imageSrc} alt={productName} />
            }
          </Link>
          <Container>
            <Truncate textAlign="center" fontWeight="bold" p={2}>
              {productName}
            </Truncate>
            <ProductDetails
              textAlign="center"
              pb="2%"
              pr="5%"
              pl="5%"
              lineHeight="1.5em"
              height="4.5em"
              display="-webkit-box"
              letterSpacing="0.05em"
              className="demo-product-card-details"
            >
              {desc}
            </ProductDetails>
          </Container>
          {
            isInCart
              ? (
                <Border borderTop="1px solid rgba(26,26,26, 0.5)">
                  <Flex>
                    <Box width={3 / 4} px={4} py={2}>
                      Rs.
                      {productPrice}
                    </Box>
                    {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
                    <Box className="card-footer-button" onClick={() => { navigateTo('/cart'); }} width={1 / 4} pt={2}>
                      <ButtonImage src={cart} alt="cart" maxHeight="15px" maxWidth="auto" />
                    </Box>
                  </Flex>
                </Border>
              )
              : (
                <Border borderTop="1px solid rgba(26,26,26, 0.5)">
                  <Flex>
                    <Box width={3 / 4} px={4} py={2}>
                      <Text fontWeight={550}>
                        {`Rs. ${productPrice}`}
                      </Text>
                    </Box>
                    <Box className="card-footer-button" width={1 / 4} onClick={this.handleAddClick} pt={2}>
                      <ButtonImage src={plus} alt="plus" maxHeight="15px" maxWidth="auto" />
                    </Box>
                  </Flex>
                </Border>
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
  // addCardToCart: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
ProductCard.defaultProps = {
  description: '',
  children: null,
};

export default ProductCard;
