import React from 'react';
import PropTypes from 'prop-types';
import { Container, Caps } from 'rebass';
import Category from 'theme/components/CategoryList';

const Categories = (props) => {
  const { pageContext } = props;
  return (
    <Category
      categoryName={pageContext.productType}
      productsInCategory={pageContext.products}
      />
  );
};

Categories.propTypes = {
  pageContext: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Categories;
