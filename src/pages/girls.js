import React from 'react'
import Link from 'gatsby-link'
import ProductList from '../components/presentational/products/ProductList'
import Sidebar from '../components/presentational/products/Sidebar'

const MenCategory = ({ data }) => {
  
  const filteredProducts = data.allShopifyProduct.edges.filter(data => data.node.productType === 'Girls');
  const products = filteredProducts.map((data) => ({
    productName: data.node.title,
    price: data.node.priceRange.minVariantPrice.amount,
    productImage: data.node.images[0].originalSrc,
    productId: data.node.id
  }));

  return (
    <section id="wrapper">
      <div className="container">
        <div className="row">
          <Sidebar />
          <div
            id="content-wrapper"
            className="left-column col-xs-12 col-sm-12 col-md-9 col-lg-10"
          >
            <section id="main">
            <ProductList
              products={products}
            />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenCategory

export const query = graphql`
  query girlsProductQuery {
    allShopifyProduct {
      edges {
        node {
          images {
            originalSrc
          }
          id
          title
          productType
          description
          priceRange {
            minVariantPrice{
              amount
            }
          }
          variants {
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
`;
