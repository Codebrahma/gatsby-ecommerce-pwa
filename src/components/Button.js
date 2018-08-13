import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type,
  classes,
  disable,
  handleClick,
  children,
  buttonText,
}) => (
  <button
    type={type}
    className={classes}
    disabled={disable}
    onClick={handleClick}
  >
    {children || buttonText}
  </button>
);

Button.propTypes = {
  classes: PropTypes.string,
  handleClick: PropTypes.func,
  disable: PropTypes.bool,
  buttonText: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

Button.defaultProps = {
  classes: 'btn btn-dark',
  handleClick: () => {
    console.log('button clicked');
  },
  disable: false,
  buttonText: 'Button',
  type: 'button',
  children: null,
};

export default Button;
