import React from 'react';
import './spinner.styles.sass';

const Spinner = ()=>{
    return (
        <div className="spinner-overlay">
            <div className="spinner-container"></div>
        </div>
    ); 
};

export default Spinner;