import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const DemoProductCard = props => (
  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <div className="demo-product-card">
      <Link to={`/product/${props.productId}`} >
        <img src={props.productImage} alt={props.productName} />
        <div className="demo-product-card-details">
          <p id="demo-product-title">{props.productName}</p>
          <p>{props.description.slice(0,25)}</p>
        </div>
      </Link>
      <div className="demo-product-card-footer">
        <span>Rs.{props.price}</span>
        <span><i className="far fa-plus"></i></span>
      </div>
    </div>
  </div>
)

DemoProductCard.propTypes = {
  productId: PropTypes.string.isRequired,
  productImage: PropTypes.string,
  productName: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default DemoProductCard