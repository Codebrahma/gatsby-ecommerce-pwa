import React, { Component } from "react";
import DemoProductList from "../components/DemoProductList";


class SkinCare extends Component {

  render() {
    const { data } = this.props;
    let filteredProducts = data.allShopifyProduct.edges.filter(data => data.node.productType === 'Skin care plan');
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
              <h3>Skin care plan</h3>
            </div>
            <DemoProductList products={products} />
          </div>
        </div>
      </div>
    )
  }
}

export default SkinCare

export const query = graphql`
query skinCareProductQuery {
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