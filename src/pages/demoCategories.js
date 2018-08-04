import React, { Component } from "react";
import DemoProductList from "../components/DemoProductList";
import '../components/demo-products-list.scss';
import _ from 'lodash';

class DemoCategories extends Component {

    render() {
        const { data, pathContext } = this.props;
        const products = _.filter(data.allShopifyProduct.edges, ({ node }) => node.productType === pathContext.productType)
        const type = pathContext.productType === '' ? 'Other' : pathContext.productType.split('-').join(' ');
        return (
            <div className="container">
                <div className="row">
                    <div className="demo-product-collection">
                        <div className="demo-product-collection-header">
                            <h3>{`${type} collection`}</h3>
                        </div>
                        <DemoProductList products={products} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DemoCategories

export const query = graphql`
query categoriesQuery {
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