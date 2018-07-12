import React from 'react'
import PropTypes from 'prop-types'
import '../../css/productCard.scss'

const ProductCard = (props) => (
  <div className="item-product col-xs-12 col-sm-6 col-md-6 col-lg-3">
    <article className="product-miniature js-product-miniature">
      <div className="img_block">
        <img src={props.productImage} alt={props.productName} />
  	  </div>
      <div className="product_desc">
        <h1 itemProp="name"><a href="#" className="product_name">{props.productName}</a></h1>
        <div className="product-price-and-shipping">
          <span itemProp="price" className="price">${props.price}</span>
          <div className="product-quantity">
            <button type="button" className="btn btn-light qty">
              <i className="fa fa-minus" />
            </button>
            <button className="btn btn-primary add-to-cart qty" type="submit">
              <i className="fa fa-shopping-cart" />
              <span>  Add to cart</span>
            </button>
            <button type="button" className="btn btn-dark qty">
              <i className="fa fa-plus" />
            </button>
            <div className="quantityDisp qty">0</div>
          </div>
        </div>
      </div>
    </article>
  </div>
)

ProductCard.propTypes = {
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

ProductCard.defaultProps = {
  productImage: "https://source.unsplash.com/random/300x300",
  productName: "I am default",
  price: 10,
}

export default ProductCard
