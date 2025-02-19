//This section I ended up using the skeletons of code displayed in two Stack Overflow chat boards, these are the links: https://stackoverflow.com/questions/11929925/add-padding-0-before-single-character-in-javascript-clock , //https://stackoverflow.com/questions/55110835/how-do-i-add-a-0-to-my-minutes-and-seconds
//I used a lot of reference from the Week 6 Powerpoint
import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';

function DurationExercise({ name }) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);

        }
        return () => clearInterval(intervalId);

    }, [isRunning]);

    //this bit is a combo of two Stack Overflow answers, nothing super verbatum but worth crediting: https://stackoverflow.com/questions/11929925/add-padding-0-before-single-character-in-javascript-clock
    //https://stackoverflow.com/questions/55110835/how-do-i-add-a-0-to-my-minutes-and-seconds
    function msToTime(duration) {
        let milliseconds = Math.floor((duration % 1000) / 10),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60);

        return minutes.toString().padStart(2, "0") + ":" +
            seconds.toString().padStart(2, "0") + ":" +
            milliseconds.toString().padStart(3, "0");
    }


    return (
        <div>
            <h2>{name}</h2>
            <p>Time: {msToTime(time)}</p>
            <button on onClick={() => setIsRunning(true)}>Start</button>
            <button on onClick={() => setIsRunning(false)}>Stop</button>
            <button on onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
        </div>
    )
}

export default DurationExercise;