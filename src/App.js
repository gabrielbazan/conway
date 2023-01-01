import "./App.css";
import Board from "./board/Board";
import { useState, useEffect } from "react";
import conway from "./conway";

const SEED = [
  [false, true, false, false, false, true, false],
  [false, false, true, true, true, false, false],
  [false, false, true, true, true, false, true],
  [false, false, true, true, true, true, false],
  [true, false, false, false, false, false, true],
];

function App() {
  const [time, setTime] = useState(0);
  const [state, setState] = useState(SEED);

  useEffect(() => {
    const interval = setInterval(() => setTime(time + 1), 100);

    setState((state) => conway(state));

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
      <h1>Conway's game of life</h1>
      <p>Time: {time}</p>
      <Board state={state} />
    </div>
  );
}

export default App;
