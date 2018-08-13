import React from 'react'
import PropTypes from 'prop-types'

const VariantType = (props) => (
      <span id="variant-title">{props.variantType}</span>
)

VariantType.propTypes = {
  variantType: PropTypes.string.isRequired
}

export default VariantType