import React, { Component } from "react";
import DemoProductList from "../components/DemoProductList";
import '../components/demo-products-list.scss';
import DemoProductListHeader from "../components/DemoProductListHeader";

class WeightLoss extends Component {

  render() {
    const { data } = this.props;
    let filteredProducts = data.allShopifyProduct.edges.filter(data => data.node.productType === 'Diet plan');
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
            <DemoProductListHeader 
                productCategory="weight loss" 
                categoryDescription="something" 
            />
            <DemoProductList products={products} />
          </div>
        </div>
      </div>
    )
  }
}

export default WeightLoss

export const query = graphql`
query weightLossProductQuery {
  allShopifyProduct {
    edges {
      node {
        images {
          originalSrc
        }
        id
        productType
        productType
        description
        title
        priceRange{
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants {
          id
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
}
`