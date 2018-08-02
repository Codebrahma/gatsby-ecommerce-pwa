import React from 'react'
import DemoVariantType from "./DemoVariantType";
import DemoVariantItem from "./DemoVariantItem.js";

const DemoProductVariants = ({variantType, variantItems}) => (
  <div className="demo-product-variants" >
      <DemoVariantType variantType={variantType} />
      <ul>
        {
          _.map(variantItems, (item,index) => (
            <DemoVariantItem variantItem={item} key={index} /> 
          ))
        }
      </ul>
    </div>
)

export default DemoProductVariants