import React from 'react'
import PropTypes from "prop-types";

const VariantItem = (props) => (
      <li>
        <button 
          className={`btn btn-light ${props.isActive ? "variant-active" : ""}`} 
          onClick={props.activeVariant}
        >
          {props.variantItem}
        </button>
      </li>
    )

VariantItem.propTypes = {
  variantItem: PropTypes.string.isRequired
}

export default VariantItem