import React from 'react'
import ProductCard from './productCard'
import map from 'lodash'

const products = [
  {
    name: 'One',
    image: 'https://source.unsplash.com/random/350x400',
    price: 10,
    size: 10,
    color: 'blue',
  },
  {
    name: 'Two',
    image: 'https://source.unsplash.com/random/350x400',
    price: 13,
    size: 12,
    color: 'red',
  },
  {
    name: 'Three',
    image: 'https://source.unsplash.com/random/350x400',
    price: 29,
    size: 14,
    color: 'green',
  },
  {
    name: 'Four',
    image: 'https://source.unsplash.com/random/350x400',
    price: 18,
    size: 11,
    color: 'yellow',
  },
  {
    name: 'Five',
    image: 'https://source.unsplash.com/random/350x400',
    price: 45,
    size: 13,
    color: 'pink',
  },
  {
    name: 'Six',
    image: 'https://source.unsplash.com/random/350x400',
    price: 10,
    size: 10,
    color: 'red',
  },
  {
    name: 'Seven',
    image: 'https://source.unsplash.com/random/350x400',
    price: 10,
    size: 10,
    color: 'blue',
  },
  {
    name: 'Eight',
    image: 'https://source.unsplash.com/random/350x400',
    price: 13,
    size: 12,
    color: 'red',
  },
  {
    name: 'Nine',
    image: 'https://source.unsplash.com/random/350x400',
    price: 29,
    size: 14,
    color: 'green',
  },
  {
    name: 'Ten',
    image: 'https://source.unsplash.com/random/350x400',
    price: 18,
    size: 11,
    color: 'yellow',
  },
  {
    name: 'Eleven',
    image: 'https://source.unsplash.com/random/350x400',
    price: 45,
    size: 13,
    color: 'pink',
  },
  {
    name: 'Twelve',
    image: 'https://source.unsplash.com/random/350x400',
    price: 10,
    size: 10,
    color: 'red',
  },
  {
    name: 'Thirteen',
    image: 'https://source.unsplash.com/random/350x400',
    price: 10,
    size: 10,
    color: 'blue',
  },
  {
    name: 'Fourteen',
    image: 'https://source.unsplash.com/random/350x400',
    price: 13,
    size: 12,
    color: 'red',
  },
  {
    name: 'Fifteen',
    image: 'https://source.unsplash.com/random/350x400',
    price: 29,
    size: 14,
    color: 'green',
  },
  {
    name: 'Sixteen',
    image: 'https://source.unsplash.com/random/350x400',
    price: 18,
    size: 11,
    color: 'yellow',
  },
  {
    name: 'Seventeen',
    image: 'https://source.unsplash.com/random/350x400',
    price: 45,
    size: 13,
    color: 'pink',
  },
  {
    name: 'Eighteen',
    image: 'https://source.unsplash.com/random/350x400',
    price: 10,
    size: 10,
    color: 'red',
  },
]

const ProductList = ({ products }) => (
  <section id="product-list">
    <div className="js-product-list right-column">
      <div className="products row product_content grid">
        {_.map(products, product => (
          <ProductCard
            key={product.name}
            productName={product.name}
            productImage={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  </section>
)

export default ProductList
