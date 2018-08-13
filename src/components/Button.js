import React from 'react';
import PropType from 'prop-types';

const Button = (props) => (
    <button type={props.type} className={props.classes} disabled={props.disable} onClick={props.handleClick}>{props.children || props.buttonText}</button>
)

Button.propTypes = {
    classes: PropType.string,
    handleClick: PropType.func,
    disable: PropType.bool,
    buttonText: PropType.string,
    type: PropType.string
}

Button.defaultProps = {
    classes: "btn btn-dark",
    handleClick: () => { console.log('button clicked') },
    disable: false,
    buttonText: "Button",
    type: "button"
}

export default Button;