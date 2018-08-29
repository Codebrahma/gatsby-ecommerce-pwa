import React from 'react';

import styled from 'styled-components';
import { style, space } from 'styled-system';
import { Column } from 'rebass';
import back from '../../../assets/icons/arrow-left-solid.svg';

const cursor = style({
  prop: 'cursor',
  cssProperty: 'cursor',
});

const Button = styled.div`
  ${cursor}
  ${space}
`;

const BackButton = () => (
  <Column flex="0.5 auto" mb={0} pt={3}>
    <Button
      onClick={() => window.history.back()}
      cursor="pointer"
      ml={3}
    >
      <img src={back} alt="go back" className="icon icon-mobile" height="15" width="15" />
    </Button>
  </Column>
);


export default BackButton;
