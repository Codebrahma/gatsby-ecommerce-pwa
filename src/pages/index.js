import React, { Component } from "react";
import Link from 'gatsby-link'
import _ from 'lodash'
import DemoProductList from "../components/DemoProductList";
import DemoCorouselItem from "../components/DemoCorouselItem";
import DemoHomeStep from "../components/DemoHomeStep";
import './demo-home.scss';

const featuredProducts = [
  {
      "node": {
      "images": [
        {
          "originalSrc": "https://cdn.shopify.com/s/files/1/1057/7864/products/BAMBOO-SEED-DOSA.jpg?v=1517824551"
        }
      ],
      "id": "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg2ODk4MTMwMDE=",
      "productType": "Packaged Foods - South Indian",
      "description": "A healthier take on South India’s favourite breakfast",
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
          "originalSrc": "https://cdn.shopify.com/s/files/1/1057/7864/products/High_Fibre_Cookie_large-min.jpg?v=1533206149"
        }
      ],
      "id": "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg3MDY0NTcxNjE=",
      "productType": "Cookies",
      "description": "A filling snack to keep your health on track",
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
          "originalSrc": "https://cdn.shopify.com/s/files/1/1057/7864/products/Physique-builder-Post-Workout-Smoothie-1.jpg?v=1518684204"
        }
      ],
      "id": "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg2NTU2MTc4MDE=",
      "productType": "Smoothie All India",
      "description": "Amplify your workout",
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

const corouselItems = [
  {
    image: require('../utils/images/banner-1.jpg'),
    productId: "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg2NTU2MDk2NzM=" 
  },
  {
    image: require('../utils/images/banner-2.jpg'),
    productId: "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzkyNTg4NzE3NTM=" 
  },
  {
    image: require('../utils/images/banner-3.jpg'),
    productId: "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzg4MjY3MjAyMDE=" 
  }
]

const planSteps = [
  {
    image: require('../utils/images/goals_1.png'),
    stepTitle: "set your goals",
    stepDescription: "Want to lose weight? Build Lean Muscle? Light the room up?"
  },
  {
    image: require('../utils/images/plan_choose_2.png'),
    stepTitle: "choose your plan",
    stepDescription: "Use our product finder or connect with an expert at Grow Fit to figure out your unique health fingerprint and the right program. "
  },
  {
    image: require('../utils/images/eat_smart_3.png'),
    stepTitle: "#eatsmart",
    stepDescription: "Choose from our delicious foods, delivered to you at your convenience, to make a change. Your friendly Grow Fit nutritionist will support you with recipes and hacks."
  },
  {
    image: require('../utils/images/win_life_4.png'),
    stepTitle: "win at life",
    stepDescription: "Our scientifically-developed, patent-pending products are proven to work. So just chomp away, experience the upgraded you and bask in the compliments."
  }
]

class HomePage extends Component{
    state = {
      currentIndex: 0,
    }

    componentDidMount() {
      this.setState({
        currentIndex: 0
      })
    }

    goToNext = () => {
      this.setState((prevState)=> ({
        currentIndex: (prevState.currentIndex + 1) % 3
      }))
    }

    goToPrev = () => {
      this.setState((prevState) => ({
        currentIndex:this.state.currentIndex<1 ? corouselItems.length-1 : prevState.currentIndex-1
      }))
    }
  
  renderHomeCarousel = () => (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <DemoCorouselItem 
            image={corouselItems[this.state.currentIndex].image} 
            productId={corouselItems[this.state.currentIndex].productId} 
        />
        <div className="carousel-control-prev" onClick={this.goToPrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </div>
        <div className="carousel-control-next" onClick={this.goToNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </div>
      </div>
    )

  renderHomeSteps = () => (
    <div className="demo-steps row">
    {
      _.map(planSteps, (step,index) => (
        <DemoHomeStep
            key={index} 
            image={step.image}
            stepTitle={step.stepTitle}
            stepDescription={step.stepDescription}
        />
      ))
    }
    </div>
  )

  render() {
    return (
      <div className="container">
        {this.renderHomeCarousel()}
        <div className="demo-product-collection">
          {this.renderHomeSteps()}
            <div className="demo-product-collection-header">
              <p>Featured Products</p>
            </div>
            <DemoProductList products={featuredProducts} />
        </div>
      </div>
    )
  }
} 


export default HomePage