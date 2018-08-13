import React from 'react';
import PropTypes from 'prop-types';

const HomeStep = ({ image, stepTitle, stepDescription }) => (
  <div className="demo-each-step col-lg-3 col-md-6 cols-sm-6 cols-xs-12">
    <img src={image} alt="step" />
    <span>
      {stepTitle}
    </span>
    <p>
      {stepDescription}
    </p>
  </div>
);

HomeStep.propTypes = {
  image: PropTypes.node.isRequired,
  stepTitle: PropTypes.string.isRequired,
  stepDescription: PropTypes.string,
};

HomeStep.defaultProps = {
  stepDescription: '',
};

export default HomeStep;
