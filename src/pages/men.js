import React from 'react'
import Link from 'gatsby-link'
import ProductList from '../components/presentational/products/ProductList'
import ProductFilter from '../components/presentational/filters/ProductFilter'

const MenCategory = ({ data }) => {
  const products = data.allShopifyProduct.edges.map((data) => {
    return {
      productName: 'Dummy',
      price: 100,
      productImage: data.node.images[0].originalSrc,
    }
  })
  return (
    <div>
      <h1>Welcome to MEN categories</h1>
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
          productType
          description
        }
      }
    }
  }
`;
