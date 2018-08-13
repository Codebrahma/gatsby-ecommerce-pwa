import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const CorouselItem = ({ productId, image }) => (
  <div className="carousel-item active">
    <Link to={`product/${productId}`} style={{ margin: '0' }}>
      <Img
        className="d-block w-100 demo-carousel-image"
        sizes={image}
        alt="home-page-item"
      />
    </Link>
  </div>
);

CorouselItem.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object]).isRequired,
  productId: PropTypes.string.isRequired,
};

export default CorouselItem;
