import React from 'react';
import Proptypes from 'prop-types';
import { Box, Image, Text } from 'rebass';

const HomeStep = ({ image, stepTitle, stepDescription }) => (
  <Box width={[1, 1 / 2, 1 / 4]} p={3}>
    <Image src={image} alt="step" mb={3} />
    <Text textAlign="center" fontWeight="bold" mb={2}>
      {stepTitle}
    </Text>
    <Text textAlign="center">
      {stepDescription}
    </Text>
  </Box>
);

HomeStep.propTypes = {
  image: Proptypes.string.isRequired,
  stepTitle: Proptypes.string.isRequired,
  stepDescription: Proptypes.string.isRequired,
};

export default HomeStep;
