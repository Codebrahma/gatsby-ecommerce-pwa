import React from 'react'
import ProductCard from './productCard'

const ProductList = () => (
  <section id="product-list">
    <div className="js-product-list">
      <div className="products row product_content grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </section>
)

export default ProductList
