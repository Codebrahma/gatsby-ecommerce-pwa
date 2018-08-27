import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  Container, Row, Text, Heading, Flex, Box, Image, Link, Button, Border, ButtonOutline, Caps,
} from 'rebass';
import defaultImage from '../assets/images/default.jpeg';
import Layout from '../components/layout';
import ProductVariants from '../components/ProductVariants';
import VariantType from '../components/VariantType';
import ProductSubscription from '../components/ProductSubscription';
import ProductFaqs from '../components/ProductFaqs';

import facebook from '../assets/icons/facebook-f-brands.svg';
import twitter from '../assets/icons/twitter-brands.svg';
import plus from '../assets/icons/plus-solid.svg';
import minus from '../assets/icons/minus-solid.svg';
import download from '../assets/icons/download-solid.svg';

export default class ProductPage extends React.Component {
  componentDidMount() {
    const { initialiseProductData } = this.props;
    initialiseProductData(7);
  }

  renderVariants = () => {
    const { productData } = this.props;

    const options = {};
    _.map(productData.variants, (variant) => {
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
    const {
      itemCount, isInCart, productData, buyNow, addItemToCart, changeItemCount,
    } = this.props;
    const ActionButton = ({ renderCondition, buttonText, handleClick }) => (
      <Button
        bg={renderCondition ? '#f5f5f5' : '#000'}
        color={!renderCondition ? '#f5f5f5' : '#000'}
        my={10}
        mr={10}
        style={{ cursor: (!renderCondition ? 'pointer' : 'not-allowed'), minWidth: '170px' }}
        disabled={renderCondition}
        onClick={handleClick}
      >
        <Text py={10} px={15}>
          <Caps fontSize={14} letterSpacing={1}>
            {buttonText}
          </Caps>
        </Text>
      </Button>
    );
    const CountButton = ({
      imageIcon, handleClick, alternate, renderCondition, disable,
    }) => (
      <Button
        bg="#f5f5f5"
        onClick={handleClick}
        style={{ cursor: (renderCondition ? 'not-allowed' : 'pointer') }}
        disabled={disable}
      >
        <Image w={15} src={imageIcon} alt={alternate} />
      </Button>
    );
    return (
      <div>
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
                handleClick={() => changeItemCount(itemCount - 7)}
                renderCondition={!itemCount}
                imageIcon={minus}
                alternate="minus"
                disable={!itemCount}
              />
              <Border borderColor="#000" w={50} style={{ display: 'inline-block' }}>
                <Text textAlign="center" p={2} fontSize={16}>
                  {itemCount}
                </Text>
              </Border>
              <CountButton
                handleClick={() => changeItemCount(itemCount + 7)}
                imageIcon={plus}
                alternate="plus"
              />
            </Border>
          </Box>
          <Box ml={20}>
            <Text fontSize={22} fontWeight={500}>
              Rs.
              {((productData.productPrice / 7.0) * ((itemCount === 0) ? 7 : itemCount)).toFixed(2)}
            </Text>
          </Box>
        </Flex>
        <div>
          <ActionButton
            renderCondition={(!itemCount || isInCart)}
            handleClick={addItemToCart}
            buttonText={isInCart ? 'in Cart' : 'add to cart'}
          />
          <ActionButton
            renderCondition={!itemCount}
            handleClick={buyNow}
            buttonText="buy now"
          />
        </div>
      </div>
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
    const { productData } = this.props;
    return (
      <div>
        <Flex flexWrap="wrap" my={2}>
          {_.map(productData.tags, (tag, index) => (
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
    const { productData } = this.props;
    return (
      <Border my={3} borderColor="#e4e0db">
        <Heading
          bg="#f5f5f5"
          fontWeight={500}
          p={15}
          style={
            {
              textAlign: 'center',
              maxWidth: '300px',
              borderRight: '1px solid #e4e0db',
            }
          }
        >
          <Caps fontSize={16} letterSpacing={1}>
            Description
          </Caps>
        </Heading>
        <Border borderColor="#e4e0db" borderTop={1}>
          <Text p={20} fontSize={16} lineHeight={1.5} color="#212529">
            {productData.description}
          </Text>
        </Border>
      </Border>
    );
  }

  render() {
    const { productData } = this.props;
    const imageSrc = (
      productData.images
      && productData.images.length !== 0
      && productData.images[0].originalSrc
    ) || defaultImage;

    return (
      <Layout>
        <Container>
          <Row>
            <Flex flexWrap="wrap" my={3}>
              <Box width={[1, 1, 1 / 2]} px={20}>
                <Image
                  src={imageSrc}
                  alt={productData.productName}
                />
              </Box>
              <Box width={[1, 1, 1 / 2]} px={20}>
                <Heading my={3}>
                  <Caps fontSize={20} letterSpacing={1}>
                    {productData.productName}
                  </Caps>
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
            <ProductFaqs faqs={productData.faqs} />
          </Row>
        </Container>
      </Layout>
    );
  }
}

ProductPage.propTypes = {
  initialiseProductData: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  productData: PropTypes.object.isRequired,
  itemCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isInCart: PropTypes.bool,
  buyNow: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  changeItemCount: PropTypes.func.isRequired,
};

ProductPage.defaultProps = {
  itemCount: 0,
  isInCart: false,
};
