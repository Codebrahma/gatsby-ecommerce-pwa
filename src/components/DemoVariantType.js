import React from 'react'
import PropTypes from 'prop-types'

const DemoVariantType = (props) => (
      <span id="variant-title">{props.variantType}</span>
)

DemoVariantType.propTypes = {
  variantType: PropTypes.string.isRequired
}

export default DemoVariantType