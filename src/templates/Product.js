import React, { Component } from 'react';
import _ from 'lodash';
import { navigateTo } from 'gatsby-link';
import PropTypes from 'prop-types';
import {
  Container, Row, Text, Heading, Flex, Box, Image, Link, Button, Border, ButtonOutline,
} from 'rebass';

import ProductFaqs from './product/ProductFaqs';
import ProductSubscription from './product/ProductSubscription';
import ProductVariants from './product/ProductVariants';
import VariantType from './product/VariantType';

import facebook from '../assets/icons/facebook-f-brands.svg';
import twitter from '../assets/icons/twitter-brands.svg';
import plus from '../assets/icons/plus-solid.svg';
import minus from '../assets/icons/minus-solid.svg';
import download from '../assets/icons/download-solid.svg';
import defaultImage from '../assets/images/default.jpeg';


class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const { pathContext } = this.props;
    const { productId } = pathContext;
    this.setState({
      itemCount: currentCartItems[productId]
        ? currentCartItems[productId].purchaseQuantity
        : 7,
      isInCart: !!currentCartItems[productId],
    });
  }

  updateCart = (change) => {
    const { pathContext } = this.props;
    const { productId } = pathContext;
    const { isInCart } = this.state;
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    if (isInCart) {
      currentCartItems[productId].purchaseQuantity += change;
      if (currentCartItems[productId].purchaseQuantity === 0) {
        delete currentCartItems[productId];
        this.setState({
          isInCart: false,
        });
      }
      localStorage.setItem('cart', JSON.stringify(currentCartItems));
    }
  }

  changeItemCount = (change) => {
    const { eventedLocalStorage } = this.props;
    this.setState(prevState => ({
      itemCount: prevState.itemCount + change,
    }));
    this.updateCart(change);
    eventedLocalStorage();
  }

  addItemToCart = () => {
    const { pathContext, eventedLocalStorage } = this.props;
    const { productId } = pathContext;
    const { itemCount } = this.state;
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    currentCartItems[productId] = pathContext;
    currentCartItems[productId].purchaseQuantity = itemCount;
    localStorage.setItem('cart', JSON.stringify(currentCartItems));
    this.setState({
      isInCart: true,
    });
    eventedLocalStorage();
  }

  handleBuyNow = () => {
    this.addItemToCart();
    navigateTo('/cart');
  }

  renderVariants = () => {
    const { pathContext } = this.props;
    const options = {};
    _.map(pathContext.variants, (variant) => {
      _.map(variant.selectedOptions, (item) => {
        const { name, value } = item;
        if (options[name]) {
          options[name].push(value);
        } else {
          options[name] = [];
          options[name].push(value);
        }
      });
    });
    return Object.keys(options).map(key => (
      <ProductVariants key={key} variantItems={_.uniq(options[key])}>
        <VariantType variantType={key} />
      </ProductVariants>
    ));
  }

  renderProductActions = () => {
    const { itemCount, isInCart } = this.state;
    const { pathContext } = this.props;
    const ActionButton = ({ renderCondition, buttonText, handleClick }) => (
      <Button
        bg={renderCondition ? '#f5f5f5' : '#000'}
        color={!renderCondition ? '#f5f5f5' : '#000'}
        my={10}
        mr={10}
        style={{ textTransform: 'uppercase', cursor: (!renderCondition ? 'pointer' : 'not-allowed'), minWidth: '45%' }}
        disable={renderCondition}
        onClick={handleClick}
      >
        <Text py={10} px={15}>
          {buttonText}
        </Text>
      </Button>
    );
    const CountButton = ({
      imageIcon, handleClick, alternate, renderCondition,
    }) => (
      <Button
        bg="#f5f5f5"
        disable={renderCondition}
        onClick={handleClick}
        style={{ cursor: (renderCondition ? 'not-allowed' : 'pointer') }}
      >
        <Image w={15} src={imageIcon} alt={alternate} />
      </Button>
    );
    return (
      <Container>
        <Flex alignItems="center" my={10}>
          <Box>
            <Border
              borderColor="#000"
              my={10}
              style={
                {
                  borderRadius: '8px',
                  width: 'fit-content',
                  zIndex: 99,
                  overflow: 'hidden',
                }
              }
            >
              <CountButton
                handleClick={() => this.changeItemCount(-7)}
                renderCondition={!itemCount}
                imageIcon={minus}
                alternate="minus"
              />
              <Border borderColor="#000" w={50} style={{ display: 'inline-block' }}>
                <Text textAlign="center" p={2} fontSize={16}>
                  {itemCount}
                </Text>
              </Border>
              <CountButton
                handleClick={() => this.changeItemCount(7)}
                imageIcon={plus}
                alternate="plus"
              />
            </Border>
          </Box>
          <Box ml={20}>
            <Text fontSize={22} fontWeight={500}>
              Rs.
              {((pathContext.productPrice / 7.0) * ((itemCount === 0) ? 7 : itemCount)).toFixed(2)}
            </Text>
          </Box>
        </Flex>
        <div>
          <ActionButton
            renderCondition={(!itemCount || isInCart)}
            handleClick={this.addItemToCart}
            buttonText={isInCart ? 'in Cart' : 'add to cart'}
          />
          <ActionButton
            renderCondition={!itemCount}
            handleClick={this.handleBuyNow}
            buttonText="buy now"
          />
        </div>
      </Container>
    );
  }

  renderSocialIcons = () => {
    const SocialIcon = ({ linkTo, imageIcon, alternate }) => (
      <Link href={linkTo} bg="#000" m={3} style={{ borderRadius: '50%', maxHeight: '50px' }}>
        <Box p={3}>
          <Image w={20} style={{ maxHeight: '20px' }} src={imageIcon} alt={alternate} />
        </Box>
      </Link>
    );
    return (
      <Flex alignItems="center">
        <SocialIcon
          linkTo="https://www.facebook.com/getgrowfit/"
          imageIcon={facebook}
          alternate="facebook"
        />
        <SocialIcon
          linkTo="https://twitter.com/getgrowfit?lang=en"
          imageIcon={twitter}
          alternate="twitter"
        />
      </Flex>
    );
  }

  renderTags = () => {
    const { pathContext } = this.props;
    return (
      <div>
        <Flex flexWrap="wrap" my={2}>
          {_.map(pathContext.tags, (tag, index) => (
            <Box m={2} key={`${tag}-${index}`}>
              <ButtonOutline color="#000" style={{ textTransform: 'capitalize', padding: '10px 15px' }}>
                {tag}
              </ButtonOutline>
            </Box>
          ))}
        </Flex>
      </div>
    );
  }

  renderDescription = () => {
    const { pathContext } = this.props;
    return (
      <Border my={3} borderColor="#e4e0db">
        <Heading
          fontSize={18}
          bg="#f5f5f5"
          fontWeight={500}
          p={15}
          style={
            {
              textTransform: 'uppercase',
              textAlign: 'center',
              maxWidth: '300px',
              borderRight: '1px solid #e4e0db',
            }
          }
        >
          Description
        </Heading>
        <Border borderColor="#e4e0db" borderTop={1}>
          <Text p={20} fontSize={16} lineHeight={1.5} color="#212529">
            {pathContext.description}
          </Text>
        </Border>
      </Border>
    );
  }

  render() {
    const { pathContext } = this.props;

    const imageSrc = (
      pathContext.images
      && pathContext.images.length !== 0
      && pathContext.images[0].originalSrc
    ) || defaultImage;

    return (
      <Container>
        <Row>
          <Flex flexWrap="wrap" my={3}>
            <Box width={[1, 1, 1 / 2]} px={20}>
              <Image
                src={imageSrc}
                alt={pathContext.productName}
              />
            </Box>
            <Box width={[1, 1, 1 / 2]} px={20}>
              <Heading my={3} style={{ textTransform: 'uppercase' }}>
                {pathContext.productName}
              </Heading>
              {this.renderVariants()}
              {this.renderProductActions()}
              {this.renderSocialIcons()}
              <Text bg="#32baaf" color="#fff" p={1} fontSize={14} fontWeight={600} style={{ borderRadius: '5px', width: 'fit-content' }}>
                <Image src={download} w={15} mx={2} alt="download" style={{ display: 'inline-block' }} />
                Read the science behind the program
              </Text>
              {this.renderTags()}
            </Box>
          </Flex>
        </Row>
        <Row px={20}>
          {this.renderDescription()}
        </Row>
        <Row px={20}>
          <Box style={{ width: '100%' }}>
            <ProductSubscription />
          </Box>
        </Row>
        <Row px={20}>
          <ProductFaqs faqs={pathContext.faqs} />
        </Row>
      </Container>
    );
  }
}

ProductItem.propTypes = {
  pathContext: PropTypes.oneOfType([PropTypes.object]).isRequired,
  eventedLocalStorage: PropTypes.func.isRequired,
};

export default ProductItem;
