import React from 'react';
import { Box, Image, Text } from 'rebass';

const HomeStep = props => (
  <Box width={[1, 1 / 2, 1 / 4]} p={3}>
    <Image src={props.image} alt="step" mb={3} />
    <Text children={props.stepTitle} textAlign="center" fontWeight="bold" mb={2} />
    <Text children={props.stepDescription} textAlign="center" />
  </Box>
);

export default HomeStep;
