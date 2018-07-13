import React from 'react'
import Link from 'gatsby-link'
import ProductList from '../components/presentational/products/ProductList'
import ProductFilter from '../components/presentational/ProductFilter'

const MenCategory = () => (
  <section id="wrapper">
    <div className="container">
      <h1 className="category-welcome">Welcome to MEN categories</h1>
      <div className="row">
        <div id="left-column" className="col-xs-12 col-sm-12 col-md-3 col-lg-2 center">
            <ProductFilter />
        </div>
        <div id="content-wrapper" className="left-column col-xs-12 col-sm-12 col-md-9 col-lg-10">
          <section id="main">
            <ProductList />
          </section>
        </div>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </section>
)

export default MenCategory
