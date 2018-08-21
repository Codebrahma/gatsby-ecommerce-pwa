import React from 'react';
import styled from 'styled-components';

const StyledCarouselButton = styled.div`
  position: absolute;
  background: rgb(158, 158, 158);
  width: fit-content;
  border-radius: 50%;
  zIndex=2;
  opacity=0.3;
  color: white;
  top: 45%;
  cursor: pointer;
  ${props => props.position === 'left' ? 'left: 2%' : 'right: 2%'}
`;

export default ({content, position, onClick}) => (
  <StyledCarouselButton
    onClick={onClick}
    position={position}
  >
    <span>
      <strong>
        {content}
      </strong>
    </span>
  </StyledCarouselButton>
)