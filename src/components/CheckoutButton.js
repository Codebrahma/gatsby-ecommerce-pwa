import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from 'rebass';

import TakeMoney from './TakeMoney';

const CheckoutButton = ({ eventedLocalStorage }) => (
  <Container mt={2}>
    <Text textAlign="center">
      <TakeMoney eventedLocalStorage={eventedLocalStorage} />
    </Text>
  </Container>
);

CheckoutButton.propTypes = {
  eventedLocalStorage: PropTypes.func.isRequired,
};

export default CheckoutButton;
