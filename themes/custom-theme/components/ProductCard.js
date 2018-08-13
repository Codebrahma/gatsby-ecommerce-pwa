import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import plus from '../assets/icons/plus-solid.svg'

const ProductCard = props => (
  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <div className="demo-product-card">
      <Link to={`/product/${props.productId}`} style={{margin: '0'}}>
        { props.children ||  <img src={props.productImage} alt={props.productName} />}
        <div className="demo-product-card-details">
          <p id="demo-product-title">{props.productName}</p>
          <p id="demo-product-description">{props.description}</p>
        </div>
      </Link>
      <div className="demo-product-card-footer">
        <span>Rs.{props.price}</span>
        <span><img src={plus} className="icon" alt="icon" /></span>
      </div>
    </div>
  </div>
)

ProductCard.propTypes = {
  productId: PropTypes.string.isRequired,
  productImage: PropTypes.string,
  productName: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default ProductCard