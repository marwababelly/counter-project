import React, { useState } from "react";
import Buttons from "./Buttons";
import classes from './Counter.module.css';

const Counter = () => {
    const [counter,setCounter] = useState('00');

    const resetHandlerBtn = () => {
        setCounter(0);
    };

    const dicrementHandlerBtn = () => {
        setCounter(counter - 1);
    };

    const incrementHandlerBtn = () => {
        setCounter(counter + 1);
    };

    const showNumber = counter > 0 && counter < 10 ? '0'+ counter : counter === 0 ? '00' : counter;

    return (
        <div className={classes.container}>
            <h2 className={classes.number}>{showNumber}</h2>
            <Buttons
                resetHandlerBtn={resetHandlerBtn}
                dicrementHandlerBtn={dicrementHandlerBtn}
                incrementHandlerBtn={incrementHandlerBtn}
            />
        </div>
    );
};

export default Counter;