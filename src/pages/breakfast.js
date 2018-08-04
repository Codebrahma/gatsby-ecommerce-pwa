import React, { Component } from "react";
import DemoProductList from "../components/DemoProductList";
import '../components/demo-products-list.scss';

class Breakfast extends Component {

  render() {
    const { data } = this.props;
    let filteredProducts = data.allShopifyProduct.edges.filter(data => data.node.productType === 'Breakfast');
    const products = filteredProducts.map((data) => ({
      productName: data.node.title,
      price: data.node.priceRange.minVariantPrice.amount,
      productImage: (data.node.images.length !== 0 && data.node.images[0].originalSrc) || require('../utils/images/default.jpeg'),
      productId: data.node.id
    }));
    return (
      <div className="container">
        <div className="row">
          <div className="demo-product-collection">
            <div className="demo-product-collection-header">
              <h3>Breakfast Collection</h3>
              <p>
              Who needs the headache of cooking breakfast every day ? Allow us to serve you with a curated set of breakfast dishes. Yes, we have the classic favorites that are up on the site but we slip in a surprise every so often. Each breakfast consists of a nourishing dish and a yummy juice. Hits the spot !
              </p>
            </div>
            <DemoProductList products={products} />
          </div>
        </div>
      </div>
    )
  }
}

export default Breakfast

export const query = graphql`
query breakfastProductsQuery {
  allShopifyProduct {
    edges {
      node {
        images {
          originalSrc
        }
        id
        productType
        description
        title
        priceRange{
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`