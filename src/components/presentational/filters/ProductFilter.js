import React, { Component } from 'react'
import FilterBy from './FilterBy'

const sizes = [10, 11, 12, 13, 14]
const colors = ['red', 'green', 'blue', 'pink', 'yellow']

const ProductFilter = () => (
  <div className="container">
    <div className="row">
      <FilterBy label="size" filterWhat={sizes} />
      <FilterBy label="color" filterWhat={colors} />
    </div>
  </div>
)

export default ProductFilter
