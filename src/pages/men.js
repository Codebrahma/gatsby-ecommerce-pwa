import React from 'react'
import Link from 'gatsby-link'
import ProductList from '../components/presentational/products/ProductList'

const MenCategory = () => (
  <div>
    <h1>Welcome to MEN categories</h1>
    <ProductList />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default MenCategory
