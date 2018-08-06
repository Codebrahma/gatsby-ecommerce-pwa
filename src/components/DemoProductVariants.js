import React from 'react'
import DemoVariantType from "./DemoVariantType";
import DemoVariantItem from "./DemoVariantItem.js";
import PropTypes from 'prop-types';
import _ from 'lodash';

const DemoProductVariants = ({ children, variantItems }) => {
  return (
    <div className="demo-product-variants" >
      {children}
      <ul>
        {
          _.map(variantItems, (option, index) => (
            <div key={`${option}-${index}`}>
              <DemoVariantItem variantItem={option} />
            </div>
          ))
        }
      </ul>
    </div>
  )
}

DemoProductVariants.propTypes = {
  variantItems: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default DemoProductVariants