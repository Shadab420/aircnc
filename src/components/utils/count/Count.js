import React from 'react';
import './count.scss'

const Count = ({name, currentVal, setVal}) => {
    return (
        <div>
            <span className="d-flex count-span justify-content-between">
                <h3>{name}</h3>
                <span className="count-btn" onClick={() => { setVal(currentVal-1); }}>-</span>
                <p>{currentVal}</p>
                <span className="count-btn" onClick={() => { setVal(currentVal+1); }}>+</span>
            </span>
            
        </div>
    );
};

export default Count;