import React, { Component } from 'react'
import DemoVariantType from "./DemoVariantType";
import DemoVariantItem from "./DemoVariantItem.js";
import PropTypes from 'prop-types';
import _ from 'lodash';

class DemoProductVariants extends Component {
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
    const {children, variantItems} = this.props
    return (
      <div className="demo-product-variants" >
        {children}
        <ul>
          {
            _.map(variantItems, (option, index) => (
              <div key={`${option}-${index}`}>
                <DemoVariantItem 
                    variantItem={option} 
                    activeVariant={() => this.activeVariant(option)}
                    isActive = {this.isActive(option)}
                />
              </div>
            ))
          }
        </ul>
      </div>
    )
  }
}

DemoProductVariants.propTypes = {
  variantItems: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default DemoProductVariants