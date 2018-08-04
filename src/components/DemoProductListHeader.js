import React from 'react'
import PropTypes from 'prop-types'

const DemoProductListHeader = ({productCategory, categoryDescription}) => (
  <div className="demo-product-collection-header">
    <h3>{productCategory}</h3>
    {
      categoryDescription && (
          <p>
            {categoryDescription}
          </p>
      )
    }
  </div>
)

DemoProductListHeader.propTypes = {
  productCategory: PropTypes.string.isRequired,
  categoryDescription: PropTypes.string,
}

export default DemoProductListHeader