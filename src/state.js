import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

function State() {
    let [presentState, setPresentState] = useState(false);

    let [time, setTime] = useState('00:00:00')

    function toggleState() {
        setPresentState((prevState) => !prevState);
    }

    function getTime() {
        return new Date().getTime();
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTime())
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [presentState])

    return (
        <div className="app">
            <h1>Functional Component</h1>
            <button onClick={toggleState} className="button">{presentState ? 'on' : 'off'}</button>
            {
                presentState && <div>{time}</div>
            }
        </div>
    )
}

export default State