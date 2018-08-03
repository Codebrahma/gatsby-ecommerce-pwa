import React from 'react'
import DemoVariantType from "./DemoVariantType";
import DemoVariantItem from "./DemoVariantItem.js";
import PropTypes from 'prop-types';

const DemoProductVariants = ({ variantItems }) => {
  return (
    <div className="demo-product-variants" >
      <ul>
        {
          _.map(variantItems, (item, index) => (
              <div key={`${item.name}-${index}`}>
                <DemoVariantType variantType={item.name} />
                <DemoVariantItem variantItem={item.value} />
              </div>
            ))
        }
      </ul>
    </div>
  )
}

DemoProductVariants.propTypes = {
  variantItems: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DemoProductVariants