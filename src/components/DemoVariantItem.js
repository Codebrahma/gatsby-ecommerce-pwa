import React from 'react'
import PropTypes from "prop-types";

const DemoVariantItem = (props) => (
  <li><button className="btn btn-light">
  {props.variantItem}
  </button></li>
)

DemoVariantItem.propTypes = {
  variantItem: PropTypes.string.isRequired
}

export default DemoVariantItem