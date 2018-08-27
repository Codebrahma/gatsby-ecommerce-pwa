import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCarouselButton = styled.div`
  position: absolute;
  background: rgb(158, 158, 158);
  width: fit-content;
  border-radius: 50%;
  zIndex: 2;
  opacity: 0.8;
  color: white;
  top: 45%;
  cursor: pointer;
  padding: 20px;
  ${({ position }) => (position === 'left' ? 'left: 2%' : 'right: 2%')}
`;

const CarouselButton = ({ content, position, onClick }) => (
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
);

CarouselButton.propTypes = {
  content: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CarouselButton;
