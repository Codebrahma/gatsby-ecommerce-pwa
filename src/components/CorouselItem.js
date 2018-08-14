import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const CarouselItem = ({ productId, image }) => (
  <Link to={`product/${productId}`} style={{ margin: '0' }}>
    <Img className="d-block w-100 demo-carousel-image" sizes={image} alt="home-page-item" />
  </Link>
);

CarouselItem.propTypes = {
  productId: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CarouselItem;
