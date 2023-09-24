import React from 'react';
import './Button.scss'

const Button = ({children, ...props}) => {
    return (
        <button {...props} id='button'>
            {children}
        </button>
    );
};

export default Button;