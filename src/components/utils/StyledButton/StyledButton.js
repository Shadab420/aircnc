import React from 'react';
import './styledButton.scss';

const StyledButton = (props) => {
    const { btnClass, btnText, onClk, type} = props;

    return (
    <button type={type} className={btnClass} onClick={onClk}>{btnText}</button>
    );
};

export default StyledButton;