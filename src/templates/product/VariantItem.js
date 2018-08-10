import React from 'react'
import PropTypes from 'prop-types';

import Button from '../../components/Button';

const VariantItem = (props) => (
      <li>
        <Button 
          classes={`btn btn-light ${props.isActive ? "variant-active" : ""}`} 
          handleClick={props.activeVariant}
          buttonText={props.variantItem} />
      </li>
    )

VariantItem.propTypes = {
  variantItem: PropTypes.string.isRequired
}

export default VariantItem