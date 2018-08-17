import React, { Component } from 'react';
import { Link, navigate } from 'gatsby';
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
  style,
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

const overflow = style({
  prop: 'overflow',
  cssProperty: 'overflow',
});

const ProductDetails = styled.p`
  ${textAlign}
  ${space}
  ${lineHeight}
  ${height}
  ${display}
  ${letterSpacing}
  ${overflow}
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

  addItemToCart = (product) => {
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const toBeAddedProduct = Object.assign({}, product);
    currentCartItems[toBeAddedProduct.productId] = toBeAddedProduct;
    currentCartItems[toBeAddedProduct.productId].purchaseQuantity = 7;
    localStorage.setItem('cart', JSON.stringify(currentCartItems));
    window.dispatchEvent(new CustomEvent('localstorage update'));
  }

  handleAddClick = () => {
    const {
      productId,
      images,
      productName,
      description,
      productPrice,
    } = this.props;
    this.setState({
      isInCart: true,
    });
    this.addItemToCart({
      productId,
      images,
      productName,
      description,
      productPrice,
    });
  }

  renderCardFooter = () => {
    const { productPrice } = this.props;
    const { isInCart } = this.state;
    const CardButton = ({
      imageIcon, alternate, handleClick,
    }) => (
      <Border borderTop="1px solid rgba(26,26,26, 0.5)">
        <Flex>
          <Box width={3 / 4} px={4} py={2}>
            <Text fontWeight={550}>
              {`Rs. ${productPrice}`}
            </Text>
          </Box>
          {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
          <Box style={{ borderLeft: '1px solid rgba(26, 26, 26, 0.5)', cursor: 'pointer' }} onClick={handleClick} width={1 / 4} pt={2}>
            <ButtonImage src={imageIcon} alt={alternate} maxHeight="15px" maxWidth="auto" />
          </Box>
          {/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */}
        </Flex>
      </Border>
    );
    return (
      isInCart
        ? (
          <CardButton
            imageIcon={cart}
            alt="cart"
            handleClick={() => { navigate('/cart'); }}
          />
        )
        : (
          <CardButton
            imageIcon={plus}
            alt="plus"
            handleClick={this.handleAddClick}
          />
        )
    );
  }

  render() {
    const {
      images, productId, productName, description, children,
    } = this.props;
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
              overflow="hidden"
            >
              {desc}
            </ProductDetails>
          </Container>
          { this.renderCardFooter() }
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
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
ProductCard.defaultProps = {
  description: '',
  children: null,
};

export default ProductCard;
