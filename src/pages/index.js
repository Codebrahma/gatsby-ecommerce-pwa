import React, { Component } from 'react';
import _ from 'lodash';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import {
  Container, Flex, Carousel, Box, Caps, Relative,
} from 'rebass';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  position, background, width, borderRadius, zIndex, opacity, top, space, color, left, right,
} from 'styled-system';

import ProductCard from '../templates/category/ProductCard';
import HomeStep from '../components/HomeStep';

import goalsImage from '../assets/images/goals_1.png';
import chooseImage from '../assets/images/plan_choose_2.png';
import smartImage from '../assets/images/eat_smart_3.png';
import winLifeImage from '../assets/images/win_life_4.png';

const CarouselButton = styled.div`
  ${position}
  ${background}
  ${width}
  ${space}
  ${borderRadius}
  ${zIndex}
  ${opacity}
  ${color}
  ${top}
  ${left}
  ${right}
`;

const planSteps = [
  {
    image: goalsImage,
    stepTitle: 'set your goals',
    stepDescription:
      'Want to lose weight? Build Lean Muscle? Light the room up?',
  },
  {
    image: chooseImage,
    stepTitle: 'choose your plan',
    stepDescription:
      'Use our product finder or connect with an expert at Grow Fit to figure out your unique health fingerprint and the right program. ',
  },
  {
    image: smartImage,
    stepTitle: '#eatsmart',
    stepDescription:
      'Choose from our delicious foods, delivered to you at your convenience, to make a change. Your friendly Grow Fit nutritionist will support you with recipes and hacks.',
  },
  {
    image: winLifeImage,
    stepTitle: 'win at life',
    stepDescription:
      'Our scientifically-developed, patent-pending products are proven to work. So just chomp away, experience the upgraded you and bask in the compliments.',
  },
];

class HomePage extends Component {
  state = {
    currentIndex: 0,
    carouselItems: [],
  }

  componentDidMount() {
    const { data } = this.props;
    const carouselItems = [
      {
        image: data.banner1.childImageSharp.sizes,
        productId:
          'Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg2NTU2MDk2NzM=',
      },
      {
        image: data.banner2.childImageSharp.sizes,
        productId:
          'Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzkyNTg4NzE3NTM=',
      },
      {
        image: data.banner3.childImageSharp.sizes,
        productId:
          'Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg4MjY3MjAyMDE=',
      },
    ];
    this.setState({
      currentIndex: 0,
      carouselItems,
    });
  }

  goToNext = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % 3,
    }));
  }

  goToPrev = () => {
    const { currentIndex, carouselItems } = this.state;
    this.setState(prevState => ({
      currentIndex:
        currentIndex < 1
          ? carouselItems.length - 1
          : prevState.currentIndex - 1,
    }));
  }

  renderHomeCarousel = () => {
    const { carouselItems, currentIndex } = this.state;

    return (carouselItems.length > 0
      && (
        <Relative>
          <Carousel index={currentIndex}>
            {
              _.map(carouselItems, item => (
                <Box key={item.productId}>
                  <CarouselButton
                    position="absolute"
                    background="rgb(158, 158, 158)"
                    width="fit-content"
                    borderRadius="50%"
                    zIndex={2}
                    opacity={0.3}
                    color="white"
                    top="45%"
                    p={3}
                    left="2%"
                    onClick={this.goToPrev}
                  >
                    <span>
                      <strong>
                        {'<'}
                      </strong>
                    </span>
                  </CarouselButton>
                  <Link to={`product/${item.productId}`} style={{ margin: '0' }}>
                    <Img className="carousel-image" width="100vw" height="65vh" style={{ margin: '0 auto' }} sizes={item.image} alt="home-page-item" />
                  </Link>
                  <CarouselButton
                    position="absolute"
                    background="rgb(158, 158, 158)"
                    width="fit-content"
                    borderRadius="50%"
                    zIndex={2}
                    opacity={0.3}
                    color="white"
                    top="45%"
                    p={3}
                    right="2%"
                    onClick={this.goToNext}
                  >
                    <span>
                      <strong>
                        {'>'}
                      </strong>
                    </span>
                  </CarouselButton>
                </Box>
              ))
            }
          </Carousel>
        </Relative>
      )
    );
  }


  renderHomeSteps = () => (
    <Flex flexWrap="wrap">
      {
        _.map(planSteps, (step, index) => (
          <HomeStep
            key={index}
            image={step.image}
            stepTitle={step.stepTitle}
            stepDescription={step.stepDescription}
          />
        ))
      }
    </Flex>
  )

  render() {
    const { data, addItemToCart } = this.props;
    const featuredProducts = [
      {
        node: {
          images: [
            {
              originalSrc: data.featuredProductOne.childImageSharp
                .sizes,
            },
          ],
          id: 'Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg2ODk4MTMwMDE=',
          productType: 'Packaged Foods - South Indian',
          description: 'A healthier take on South India’s favourite breakfast',
          image: [
            {
              originalSrc:
                'https://cdn.shopify.com/s/files/1/1057/7864/products/BAMBOO-SEED-DOSA.jpg?v=1517824551',
            },
          ],
          title: 'Bamboo Seed Dosa',
          priceRange: {
            minVariantPrice: {
              amount: '190.0',
              currencyCode: 'INR',
            },
          },
        },
      },
      {
        node: {
          images: [
            {
              originalSrc: data.featuredProductTwo.childImageSharp
                .sizes,
            },
          ],
          id: 'Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg3MDY0NTcxNjE=',
          productType: 'Cookies',
          description: 'A filling snack to keep your health on track',
          image: [{
            originalSrc: 'https://cdn.shopify.com/s/files/1/1057/7864/products/High_Fibre_Cookie_large-min.jpg?v=1533206149',
          }],
          title: 'High Fibre Cookie',
          priceRange: {
            minVariantPrice: {
              amount: '90.0',
              currencyCode: 'INR',
            },
          },
        },
      },
      {
        node: {
          images: [
            {
              originalSrc: data.featuredProductThree.childImageSharp
                .sizes,
            },
          ],
          id: 'Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg2NTU2MTc4MDE=',
          productType: 'Smoothie All India',
          description: 'Amplify your workout',
          image: [{
            originalSrc: 'https://cdn.shopify.com/s/files/1/1057/7864/products/Physique-builder-Post-Workout-Smoothie-1.jpg?v=1518684204',
          }],
          title: 'Physique Builder Post Workout Smoothie - Pack of 7',
          priceRange: {
            minVariantPrice: {
              amount: '1260.0',
              currencyCode: 'INR',
            },
          },
        },
      },
    ];

    return (
      <Box px={0} mt={2}>
        {this.renderHomeCarousel()}
        <Container my={5}>
          {this.renderHomeSteps()}
        </Container>
        <Container>
          <Caps textAlign="center" fontSize={2}>
            Featured Products
          </Caps>
          <Flex flexWrap="wrap">
            {
              _.map(featuredProducts, ({ node }, index) => (
                <ProductCard
                  key={index}
                  productId={node.id}
                  productName={node.title}
                  description={node.description}
                  productPrice={node.priceRange.minVariantPrice.amount}
                  images={node.image}
                  addCardToCart={addItemToCart}
                >
                  <Img sizes={node.images[0].originalSrc} alt={node.title} />
                </ProductCard>
              ))
            }
          </Flex>
        </Container>
      </Box>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default HomePage;

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query BannerQuery {
        banner1: file(relativePath: {eq: "banner-1.jpg"}) {
        childImageSharp {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
      }
    }
    banner2: file(relativePath: {eq: "banner-2.jpg"}) {
        childImageSharp {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
      }
    }
    banner3: file(relativePath: {eq: "banner-3.jpg"}) {
        childImageSharp {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
      }
    }
    featuredProductOne: file(relativePath: {eq: "feat-products1.jpg"}) {
        childImageSharp {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
      }
    }
    featuredProductTwo: file(relativePath: {eq: "feat-products2.jpg"}) {
        childImageSharp {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
      }
    }
    featuredProductThree: file(relativePath: {eq: "feat-products3.jpg"}) {
        childImageSharp {
      sizes(maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
      }
    }
  }
`;
/* eslint-enable no-undef */
