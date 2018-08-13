import React, { Component } from "react";
import _ from 'lodash'
import Img from 'gatsby-image';
import { Container, Flex, Carousel, Box, Circle, Card } from "rebass";
import Link from 'gatsby-link';

import HomeStep from "./homepage/HomeStep";
import ProductCard from "../templates/category/ProductCard";

import './homepage/home.scss';

const planSteps = [
  {
    image: require('../assets/images/goals_1.png'),
    stepTitle: "set your goals",
    stepDescription: "Want to lose weight? Build Lean Muscle? Light the room up?"
  },
  {
    image: require('../assets/images/plan_choose_2.png'),
    stepTitle: "choose your plan",
    stepDescription: "Use our product finder or connect with an expert at Grow Fit to figure out your unique health fingerprint and the right program. "
  },
  {
    image: require('../assets/images/eat_smart_3.png'),
    stepTitle: "#eatsmart",
    stepDescription: "Choose from our delicious foods, delivered to you at your convenience, to make a change. Your friendly Grow Fit nutritionist will support you with recipes and hacks."
  },
  {
    image: require('../assets/images/win_life_4.png'),
    stepTitle: "win at life",
    stepDescription: "Our scientifically-developed, patent-pending products are proven to work. So just chomp away, experience the upgraded you and bask in the compliments."
  }
]

class HomePage extends Component {
  state = {
    currentIndex: 0,
    carouselItems: [],
  }

  componentDidMount() {
    const carouselItems = [
      {
        image: this.props.data.banner1.childImageSharp.sizes,
        productId: "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg2NTU2MDk2NzM="
      },
      {
        image: this.props.data.banner2.childImageSharp.sizes,
        productId: "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzkyNTg4NzE3NTM="
      },
      {
        image: this.props.data.banner3.childImageSharp.sizes,
        productId: "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg4MjY3MjAyMDE="
      }
    ];
    this.setState({
      currentIndex: 0,
      carouselItems,
    })
  }

  goToNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % 3
    }))
  }

  goToPrev = () => {
    this.setState((prevState) => ({
      currentIndex: this.state.currentIndex < 1 ? this.state.carouselItems.length - 1 : prevState.currentIndex - 1
    }))
  }

  renderHomeCarousel = () => (this.state.carouselItems.length > 0 &&
    <Carousel index={this.state.currentIndex}>
      {
        _.map(this.state.carouselItems, (item) => {
          return (
            <Box>
              <div style={{ height:'100%', backgroundColor: 'orange', display: 'grid' }}>
              <div className="carousel-button-prev" onClick={this.goToPrev}>
                <span><strong>{`<`}</strong></span>
              </div>
              <Link to={`product/${item.productId}`} style={{ margin: "0" }}>
                <Img className="d-block w-100 demo-carousel-image" sizes={item.image} alt="home-page-item" />
              </Link>
              <div className="carousel-button-next" onClick={this.goToNext}>
                <span><strong>{`>`}</strong></span>
              </div>
              </div>
            </Box>
          )
        })
      }
    </Carousel>
  )


  renderHomeSteps = () => (
    <Flex flexWrap='wrap'>
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
        "node": {
          "images": [
            {
              "originalSrc": this.props.data.featuredProductOne.childImageSharp.sizes
            }
          ],
          "id": "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg2ODk4MTMwMDE=",
          "productType": "Packaged Foods - South Indian",
          "description": "A healthier take on South India’s favourite breakfast",
          "image": [{
            "originalSrc": "https://cdn.shopify.com/s/files/1/1057/7864/products/BAMBOO-SEED-DOSA.jpg?v=1517824551",
          }],
          "title": "Bamboo Seed Dosa",
          "priceRange": {
            "minVariantPrice": {
              "amount": "190.0",
              "currencyCode": "INR"
            }
          }
        }
      },
      {
        "node": {
          "images": [
            {
              "originalSrc": this.props.data.featuredProductTwo.childImageSharp.sizes
            }
          ],
          "id": "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg3MDY0NTcxNjE=",
          "productType": "Cookies",
          "description": "A filling snack to keep your health on track",
          "image": [{
            "originalSrc": "https://cdn.shopify.com/s/files/1/1057/7864/products/High_Fibre_Cookie_large-min.jpg?v=1533206149",
          }],
          "title": "High Fibre Cookie",
          "priceRange": {
            "minVariantPrice": {
              "amount": "90.0",
              "currencyCode": "INR"
            }
          }
        }
      },
      {
        "node": {
          "images": [
            {
              "originalSrc": this.props.data.featuredProductThree.childImageSharp.sizes
            }
          ],
          "id": "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg2NTU2MTc4MDE=",
          "productType": "Smoothie All India",
          "description": "Amplify your workout",
          "image": [{
            "originalSrc": "https://cdn.shopify.com/s/files/1/1057/7864/products/Physique-builder-Post-Workout-Smoothie-1.jpg?v=1518684204",
          }],
          "title": "Physique Builder Post Workout Smoothie - Pack of 7",
          "priceRange": {
            "minVariantPrice": {
              "amount": "1260.0",
              "currencyCode": "INR"
            }
          }
        }
      },
    ]

    return (
      <Box px={0}>
          {this.renderHomeCarousel()}
        <Container my={4}>
          {this.renderHomeSteps()}
        </Container>
        <Container >
          <div className="demo-product-collection-header">
            <p>Featured Products</p>
          </div>
          <Flex>
            {
              _.map(featuredProducts, ({ node }, index) => {
                return <ProductCard
                  key={index}
                  productId={node.id}
                  productName={node.title}
                  description={node.description}
                  productPrice={node.priceRange.minVariantPrice.amount}
                  images={node.image}
                  addCardToCart={this.props.addItemToCart}
                >
                  <Img sizes={node.images[0].originalSrc} alt={node.title} />
                </ProductCard>
              })
            }
          </Flex>
        </Container >
      </Box>
    )
  }
}


export default HomePage

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
`