import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Heading, Text, Caps } from 'rebass';

const ProductFaqs = ({ faqs }) => (
  <div style={{ margin: '20px 0' }}>
    <Heading fontWeight={500} mb={20} color="#212529">
      <Caps fontSize={24} letterSpacing={1}>
        {"faq's"}
      </Caps>
    </Heading>
    {_.map(faqs, (faq, index) => (
      <div key={index} style={{ margin: '10px 0', textTransform: 'capitalize' }}>
        <Text fontWeight={600} py={3}>
          {faq.question}
        </Text>
        <Text>
          {faq.answer}
        </Text>
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
