import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import {
  Container, Flex, Carousel, Box, Caps, Relative,
} from 'rebass';
import { injectGlobal } from 'styled-components';
import ProductCard from '../components/ProductCard';
import HomeStep from '../components/HomeStep';

import goalsImage from '../assets/images/goals_1.png';
import chooseImage from '../assets/images/plan_choose_2.png';
import smartImage from '../assets/images/eat_smart_3.png';
import winLifeImage from '../assets/images/win_life_4.png';
import Layout from '../components/layout';
import CarouselButton from '../components/CarouselButton';

/* eslint-disable no-unused-expressions */
injectGlobal`
* { box-sizing: border-box; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif }
body { margin: 0; overflow-x: hidden; font-size: 0.75em }
`;
/* eslint-enable no-unused-expressions */

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

const addProductToCart = (product, purchaseQuantity) => {
  const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
  const toBeAddedProduct = {
    ...product,
    purchaseQuantity,
  };
  currentCartItems[toBeAddedProduct.productId] = toBeAddedProduct;
  localStorage.setItem('cart', JSON.stringify(currentCartItems));
  window.dispatchEvent(new CustomEvent('localstorage update'));
};

class HomePage extends Component {
  state = {
    currentIndex: 0,
    carouselItems: [],
  }

  componentDidMount() {
    const carouselItems = [
      {
        image: require('../assets/images/banner-1.jpg'),
        productId:
          'Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg2NTU2MDk2NzM=',
      },
      {
        image: require('../assets/images/banner-2.jpg'),
        productId:
          'Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzkyNTg4NzE3NTM=',
      },
      {
        image: require('../assets/images/banner-3.jpg'),
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
          <CarouselButton content={'<'} position="left" onClick={this.goToPrev} />
          <Carousel index={currentIndex}>
            {
              _.map(carouselItems, item => (
                <Box key={item.productId}>
                  <Link to={`product/${item.productId}`} style={{ margin: '0' }}>
                    <img style={{ margin: '0 auto', width: '100vw', height: '60vh' }} src={item.image} alt="home-page-item" />
                  </Link>
                </Box>
              ))
            }
          </Carousel>
          <CarouselButton content={'>'} position="right" onClick={this.goToNext} />
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
    const featuredProducts = [
      {
        node: {
          images: [
            {
              originalSrc: '',
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
              originalSrc: ''
                .fluid,
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
              originalSrc: ''
                .fluid,
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
      <Layout>
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
                  onAddToCartClick={addProductToCart}
                />
              ))
            }
            </Flex>
          </Container>
        </Box>
      </Layout>
    );
  }
}

export default HomePage;

/* eslint-disable no-undef */
// export const pageQuery = graphql`
//   query {
//         banner1: file(relativePath: {eq: "banner-1.jpg"}) {
//         childImageSharp {
//       fluid(maxWidth: 1240 ) {
//         ...GatsbyImageSharpFluid
//       }
//       }
//     }
//     banner2: file(relativePath: {eq: "banner-2.jpg"}) {
//         childImageSharp {
//       fluid(maxWidth: 1240 ) {
//         ...GatsbyImageSharpFluid
//       }
//       }
//     }
//     banner3: file(relativePath: {eq: "banner-3.jpg"}) {
//         childImageSharp {
//       fluid(maxWidth: 1240 ) {
//         ...GatsbyImageSharpFluid
//       }
//       }
//     }
//     featuredProductOne: file(relativePath: {eq: "feat-products1.jpg"}) {
//         childImageSharp {
//       fluid(maxWidth: 300) {
//         ...GatsbyImageSharpFluid
//       }
//       }
//     }
//     featuredProductTwo: file(relativePath: {eq: "feat-products2.jpg"}) {
//         childImageSharp {
//       fluid(maxWidth: 300) {
//         ...GatsbyImageSharpFluid
//       }
//       }
//     }
//     featuredProductThree: file(relativePath: {eq: "feat-products3.jpg"}) {
//         childImageSharp {
//       fluid(maxWidth: 300) {
//         ...GatsbyImageSharpFluid
//       }
//       }
//     }
//   }
// `;
/* eslint-enable no-undef */
