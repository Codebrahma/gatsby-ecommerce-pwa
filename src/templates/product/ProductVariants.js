import React, { Component } from 'react'
import PropTypes from 'prop-types';
import _ from 'lodash';

import VariantItem from './VariantItem.js';

class ProductVariants extends Component {
  state = {
    currentItem: ""
  }

  componentDidMount() {
    this.setState({
      currentItem: this.props.variantItems[0]
    })
  }

  isActive = (item) => {
    return this.state.currentItem === item
  }

  activeVariant = (item) => {
    this.setState({
      currentItem: item,
    })
  }

  render() {
    const { children, variantItems } = this.props
    return (
      <div className="demo-product-variants" >
        {children}
        <ul>
          {
            _.map(variantItems, (option, index) => (
              <VariantItem
                key={`${option}-${index}`}
                variantItem={option}
                activeVariant={() => this.activeVariant(option)}
                isActive={this.isActive(option)}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

ProductVariants.propTypes = {
  variantItems: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ProductVariants