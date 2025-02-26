import './App.css';
import react from 'react';
import { useState } from 'react';
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from './components/RunningExercise';

function App() {
  const [selectedButton, setSelectedButton] = useState(null);
  let defaultReturn = (
    <div>
      <h1>Exercise Tracker!</h1>
      <p>Select an exercise:</p>
      <button onClick={() => setSelectedButton("Running")}>Running</button>
      <br></br>
      <button onClick={() => setSelectedButton("Pushups")}>Pushups</button>
      <br></br>
      <button onClick={() => setSelectedButton("Cycling")}>Cycling</button>
      <br></br>
      <button onClick={() => setSelectedButton("Sit ups")}>Sit ups</button>
      <br></br>
      <button onClick={() => setSelectedButton("Planking")}>Planking</button>


    </div>
  );
  if (selectedButton === "Pushups" || selectedButton === "Sit ups") {
    defaultReturn = <RepetitionExercise name={selectedButton}></RepetitionExercise>;

  } else if (selectedButton) {
    defaultReturn = <RunningExercise name={selectedButton}></RunningExercise>;

  }

  return defaultReturn;
}

export default App;
