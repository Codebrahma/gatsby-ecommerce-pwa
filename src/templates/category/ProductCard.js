import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import plus from '../../assets/icons/plus-solid.svg';
import cart from '../../assets/icons/shopping-cart-solid.svg';

class ProductCard extends Component {
  state = {
    isInCart: false,
  }

  componentDidMount() {
    const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
    const { productId } = this.props;
    this.setState({
      isInCart: !!currentCartItems[productId],
    });
  }

  handleAddClick = () => {
    const {
      productId,
      images,
      productName,
      description,
      productPrice,
      addCardToCart,
    } = this.props;
    this.setState({
      isInCart: true,
    });
    addCardToCart({
      productId,
      images,
      productName,
      description,
      productPrice,
    });
  }

  render() {
    const {
      images,
      productId,
      productName,
      description,
      productPrice,
      children,
    } = this.props;
    const { isInCart } = this.state;
    const imageSrc = images[0]
      ? images[0].originalSrc
      : require('../../assets/images/default.jpeg');

    return (
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div className="demo-product-card">
          <Link to={`/product/${productId}`} style={{ margin: '0' }}>
            {children || (
              <img src={imageSrc} alt={productName} />
            )}
            <div className="demo-product-card-details">
              <p id="demo-product-title">
                {productName}
              </p>
              <p id="demo-product-description">
                {description}
              </p>
            </div>
          </Link>
          <div className="demo-product-card-footer">
            <span>
Rs.
              {productPrice}
            </span>
            {isInCart ? (
              <span>
                <Link to="/cart">
                  <img src={cart} className="icon" alt="cart" />
                </Link>
              </span>
            ) : (
              <span onClick={this.handleAddClick}>
                <img src={plus} className="icon" alt="plus" />
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productId: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  images: PropTypes.oneOfType([PropTypes.array]).isRequired,
  description: PropTypes.string,
  addCardToCart: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
ProductCard.defaultProps = {
  description: '',
  children: null,
};

export default ProductCard;
