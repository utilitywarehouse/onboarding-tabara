import React from 'react';
import "./Button.scss";

 interface ButtonProps {
    onButtonClick: () => void;
}

const Button = ({onButtonClick}: ButtonProps) => {

    return (
        <div className="quoteBtn" data-testid="button" onClick={onButtonClick}>
            Click!
        </div>
    )
}

export default Button;