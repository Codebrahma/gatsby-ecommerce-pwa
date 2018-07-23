import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios'
import ProductList from '../components/presentational/products/ProductList';
import ProductCard from '../components/presentational/products/productCard';
import './style.scss'
import { createCart } from '../utils/shopifyUtils';

const newProducts = [
  {
    productName: "Ceramic Table lamp",
    productImage: "https://cdn.shopify.com/s/files/1/0015/0113/4915/products/Ceramic_Table_Lamp.jpg?v=1532332977",
    price: "270",
    productId: "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEzMjQ3OTgwNTAzNzE=",
  },
  {
    productName: "Ceramic Table lamp",
    productImage: "https://cdn.shopify.com/s/files/1/0015/0113/4915/products/Ceramic_Table_Lamp.jpg?v=1532332977",
    price: "270",
    productId: "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEzMjQ3OTgwNTAzNzE=",
  },
  {
    productName: "Ceramic Table lamp",
    productImage: "https://cdn.shopify.com/s/files/1/0015/0113/4915/products/Ceramic_Table_Lamp.jpg?v=1532332977",
    price: "270",
    productId: "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEzMjQ3OTgwNTAzNzE=",
  }
];

const topProducts = [
  {
    productName: "Ceramic Table lamp",
    productImage: "https://cdn.shopify.com/s/files/1/0015/0113/4915/products/Ceramic_Table_Lamp.jpg?v=1532332977",
    price: "270",
    productId: "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEzMjQ3OTgwNTAzNzE=",
  },
  {
    productName: "Ceramic Table lamp",
    productImage: "https://cdn.shopify.com/s/files/1/0015/0113/4915/products/Ceramic_Table_Lamp.jpg?v=1532332977",
    price: "270",
    productId: "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEzMjQ3OTgwNTAzNzE=",
  },
  {
    productName: "Ceramic Table lamp",
    productImage: "https://cdn.shopify.com/s/files/1/0015/0113/4915/products/Ceramic_Table_Lamp.jpg?v=1532332977",
    price: "270",
    productId: "Shopify__Product__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEzMjQ3OTgwNTAzNzE=",
  }
];

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    createCart()
      .catch(err => console.log('Error creating cart ', err));
  }

  render() {
    return (
      <div className="container">
        <div className="homepage-container">
          <div className="banner7-des">
            <div className="container">
              <div className="info desc1">
                <div className="container">
                  <p className="title1">Best collection of house decors</p>
                  <p className="title2">in a single place</p>
                  <p className="title3">We'll give you a FREE delivery!</p>
                  <p className="readmore"><Link to="/men"><span>Shop Now</span></Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="home_page_content">
            <div className="pos_title">
              <span>Newly Added products</span>
              <h2>
                New products
              </h2>
            </div>
            <ProductList products={newProducts} />
          </div>

          <div className="home_page_content">
            <div className="pos_title">
              <span>Top sold Watches</span>
              <h2>
                Top Products
              </h2>
            </div>
            <ProductList products={topProducts} />
          </div>
          <div className="home_page_content">
            <div className="pos_title">
              <span>Latest Offers</span>
              <h2>
                Get latest offers on
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
