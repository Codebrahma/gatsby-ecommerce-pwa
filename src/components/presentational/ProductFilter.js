import React, { Component } from 'react'
import CustomCheckbox from './CustomCheckbox'
import map from 'lodash'
import './filter.scss'

const sizes = [10, 11, 12, 13, 14]
const colors = ['red', 'green', 'blue', 'pink', 'yellow']

class ProductFilter extends Component {
  handleChange = e => {
    console.log(e.target.value)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="filterBy ">
            <h4>SIZE</h4>
            {_.map(sizes,size => (
              <div key={size}>
                <CustomCheckbox
                  filter={size}
                  id={`filterBySize${size}`}
                  name="size"
                  handleChange={this.handleChange}
                />
                <div className="color-box">{size}</div>
              </div>
            ))}
          </div>
          <div className="filterBy">
            <h4>COLOR</h4>
            {_.map(colors,color => (
              <div key={color}>
                <CustomCheckbox
                  filter={color}
                  id={`filterBySize${color}`}
                  name="color"
                  handleChange={this.handleChange}
                />
                <div className={`color-box ${color}`}>
                  {color.slice(0, 1).toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ProductFilter
