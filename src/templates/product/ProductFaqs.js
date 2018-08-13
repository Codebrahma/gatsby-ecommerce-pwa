import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ProductFaqs = ({ faqs }) => (
  <div className="demo-product-faq-container">
    <h3 id="faq-header">
      {"FAQ'S"}
    </h3>
    {_.map(faqs, (faq, index) => (
      <div className="demo-product-faq" key={index}>
        <span id="faq-question">
          {faq.question}
        </span>
        <span id="faq-answer">
          {faq.answer}
        </span>
      </div>
    ))}
  </div>
);

ProductFaqs.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.object),
};
ProductFaqs.defaultProps = {
  faqs: [],
};

export default ProductFaqs;
