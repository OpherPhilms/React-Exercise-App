import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';

function RunningExercise({ name }) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);

        }
        return () => clearInterval(intervalId);

    }, [isRunning]);

    function msToTime(duration) {
        let milliseconds = Math.floor((duration % 1000) / 10),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60);

        return minutes.toString().padStart(2, "0") + ":" +
            seconds.toString().padStart(2, "0") + ":" +
            milliseconds.toString().padStart(3, "0");
    }

    const recordLap = () => {
        setLaps([...laps, time]);
    }
    //in this return I tried to use some of this https://stackoverflow.com/questions/73198406/how-to-create-a-stopwatch-lap-time-function-in-javascript
    return (
        <div>
            <h2>{name}</h2>
            <p>Time: {msToTime(time)}</p>
            <button on onClick={() => setIsRunning(true)}>Start</button>
            <button on onClick={() => setIsRunning(false)}>Stop</button>
            <button on onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
            <button on onClick={() => setLaps(prevLaps => [...prevLaps, time])} disabled={!isRunning}>Lap</button>
            <h3>Lap Times:</h3>
            {laps.map((lap, index) => (
                <li key={index}>Lap {index + 1}: {msToTime(lap)}</li>
            ))}
        </div>
    )
}

export default RunningExercise;