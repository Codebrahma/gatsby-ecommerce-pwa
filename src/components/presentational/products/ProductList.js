import React from 'react'
import ProductCard from './productCard'
import map from 'lodash'

const ProductList = ({ products }) => (
  <section id="product-list">
    <div className="js-product-list right-column">
      <div className="products product_content grid">
        {_.map(products, product => (
          <ProductCard
            key={product.name}
            productName={product.productName}
            productImage={product.productImage}
            price={product.price}
            productId={product.productId}
          />
        ))}
      </div>
    </div>
  </section>
)

export default ProductList
