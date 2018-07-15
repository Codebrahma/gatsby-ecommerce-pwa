import React from 'react'
import Link from 'gatsby-link'
import ProductList from '../components/presentational/products/ProductList'
import ProductFilter from '../components/presentational/filters/ProductFilter'

const MenCategory = ({ data }) => {
  const products = data.allShopifyProduct.edges.map((data) => {
    return {
      productName: data.node.title,
      price: data.node.priceRange.minVariantPrice.amount,
      productImage: data.node.images[0].originalSrc,
    }
  })
  console.log('products ', products)
  return (
    <section id="wrapper">
      <div className="container">
        <h3 className="category-welcome">Welcome to MEN categories</h3>
        <div className="row">
          <div
            id="left-column"
            className="col-xs-12 col-sm-12 col-md-3 col-lg-2 center"
          >
            <ProductFilter />
          </div>
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
      <Link to="/">Go back to the homepage</Link>
    </section>
  );
}

export default MenCategory

export const query = graphql`
  query womenProductQuery {
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
