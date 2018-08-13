import React from 'react';
import PropTypes from 'prop-types';

import TakeMoney from './TakeMoney';

const CheckoutButton = ({ eventedLocalStorage }) => (
  <div className="container">
    <div className="row text-center py-2">
      <div className="col col-lg-12 col-md-12 col-sm-12">
        <TakeMoney eventedLocalStorage={eventedLocalStorage} />
      </div>
    </div>
  </div>
);

CheckoutButton.propTypes = {
  eventedLocalStorage: PropTypes.func.isRequired,
};

export default CheckoutButton;
