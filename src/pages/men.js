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
  return (
    <div>
      <ProductList
        products={products}
      />
      <Link to="/">Go back to the homepage</Link>
    </div>
  );  
}

export default MenCategory

export const query = graphql`
  query productQuery {
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
