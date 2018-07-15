import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios'
import ProductList from '../components/presentational/products/productList';
import ProductCard from '../components/presentational/products/productCard';
import './style.scss'

const newProducts = [
  {
    productName: "Men's watch Model 1",
    productImage: "https://cdn.shopify.com/s/files/1/0067/7986/3099/products/1.jpeg?v=1531631131",
    price: "400",
  },
  {
    productName: "Men's watch Model 6",
    productImage: "https://cdn.shopify.com/s/files/1/0067/7986/3099/products/1_5fbccc5a-7fe3-4070-9a9c-77c8f4a457a8.jpeg?v=1531647682",
    price: "250",
  },
  {
    productName: "Men's watch Model 4",
    productImage: "https://cdn.shopify.com/s/files/1/0067/7986/3099/products/1_28ab3d5a-d53c-421f-a0d1-13a9ee5af45d.jpeg?v=1531646859",
    price: "370",
  },
];

const topProducts = [
  {
    productName: "Men's watch Model 2",
    productImage: "https://cdn.shopify.com/s/files/1/0067/7986/3099/products/1.jpeg?v=1531631131",
    price: "500",
  },
  {
    productName: "Men's watch Model 3",
    productImage: "https://cdn.shopify.com/s/files/1/0067/7986/3099/products/1_5fbccc5a-7fe3-4070-9a9c-77c8f4a457a8.jpeg?v=1531647682",
    price: "210",
  },
  {
    productName: "Men's watch Model 8",
    productImage: "https://cdn.shopify.com/s/files/1/0067/7986/3099/products/1_28ab3d5a-d53c-421f-a0d1-13a9ee5af45d.jpeg?v=1531646859",
    price: "400",
  },
];

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="homepage-container">
        <div class="banner7-des">
          <div class="container">
            <div class="info desc1">
              <div class="container">
                <p class="title1">Shop your Favourite watches</p>
                <p class="title2">in a single place</p>
                <p class="title3">We'll give you a FREE delivery!</p>
                <p class="readmore"><Link to="/men"><span>Shop Now</span></Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="home_page_content">
          <div class="pos_title">
            <span>Newly Added Watches</span>
            <h2>
              New products
            </h2>	
          </div>
          <ProductList products={newProducts} />
        </div>
        
        <div className="home_page_content">
          <div class="pos_title">
            <span>Top sold Watches</span>
            <h2>
              Top Products
            </h2>	
          </div>
          <ProductList products={topProducts} />
        </div>
        <div className="home_page_content">
          <div class="pos_title">
            <span>Latest Offers</span>
            <h2>
              Get latest offers on
            </h2>	
          </div>
        </div>
        <div className="">
          <div className="static1_home3">
            <div className="top">
              <div className="advantage row">
                <div className="box2 col col-lg-6 col-md-12 col-xs-12 offered-img">
                  <div className="img1"><a className="shop" href="#">
                    <div className="item-product col-xs-12 col-sm-6 col-md-6 col-lg-12">
                    <article className="product-miniature js-product-miniature card-content">
                      <div className="img_block">
                        <img src="https://cdn.shopify.com/s/files/1/0067/7986/3099/products/1_28ab3d5a-d53c-421f-a0d1-13a9ee5af45d.jpeg?v=1531646859"
                          className="product-img img-responsive"
                          alt=""
                        />
                      </div>
                    </article>
                  </div>
                    </a>
                  </div>
                </div>
                <div className="box2 col col-lg-6 col-md-12 col-xs-12 text">
                  <div className="text">
                  <h2><span>Top Quality Men's Watches</span></h2>
                  <h3>Get it now to avail the offer!!!</h3>
                  <a className="shop" href="#">shop now</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="static1_home3">
            <div className="top">
              <div className="advantage row">
                <div className="box2 col col-lg-6 col-md-12 col-xs-12 text">
                  <div className="text">
                  <h2><span>Top Quality Men's Watches</span></h2>
                  <h3>Get it now to avail the offer!!!</h3>
                  <a className="shop" href="#">shop now</a></div>
                </div>
                <div className="box2 col col-lg-6 col-md-12 col-xs-12 offered-img">
                  <div className="img1"><a className="shop" href="#">
                  <div className="item-product col-xs-12 col-sm-6 col-md-6 col-lg-12">
                  <article className="product-miniature js-product-miniature card-content">
                    <div className="img_block">
                      <img src="https://cdn.shopify.com/s/files/1/0067/7986/3099/products/1_28ab3d5a-d53c-421f-a0d1-13a9ee5af45d.jpeg?v=1531646859"
                        className="product-img img-responsive"
                        alt=""
                      />
                    </div>
                  </article>
                </div>

                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default IndexPage
