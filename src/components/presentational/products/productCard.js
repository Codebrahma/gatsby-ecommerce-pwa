import React from 'react'
import PropTypes from 'prop-types'
import '../../css/productCard.scss'

const ProductCard = props => (
  <div className="item-product col-xs-12 col-sm-6 col-md-6 col-lg-4">
    <article className="product-miniature js-product-miniature card-content">
      <div className="img_block">
        <img src={props.productImage} alt={props.productName} className="product-img"/>
      </div>
      <div className="product_desc">
        <h1 itemProp="name">
          <a href="#" className="product_name">
            {props.productName}
          </a>
        </h1>
        <div className="product-price-and-shipping">
          <span itemProp="price" className="price">
            ${props.price}
          </span>
         
        </div>
      </div>
      <div className="view-card" onClick={() => props.onClickView(props.id)}>
        <span>
          View Item
        </span>
      </div>
    </article>
  </div>
)

ProductCard.propTypes = {
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClickView: PropTypes.func
}

ProductCard.defaultProps = {
  productImage: 'https://source.unsplash.com/random/300x400',
  productName: 'I am default',
  price: 10,
  onClickView: (id) => { console.log(id) }
}

export default ProductCard
