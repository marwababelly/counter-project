import React from "react";
import classes from './Buttons.module.css';

const Buttons = ({
    resetHandlerBtn,
    dicrementHandlerBtn,
    incrementHandlerBtn
}) => {
    return (
        <div className={classes.btns}>
            <button onClick={resetHandlerBtn}>Reset</button>
            <button onClick={dicrementHandlerBtn}>Dicrement</button>
            <button onClick={incrementHandlerBtn}>increment</button>
        </div>
    );
};

export default Buttons;