import { useState, useEffect } from "react";
import conway from "./conway";
import TimeIndicator from "./TimeIndicator";
import EnabledButton from "./EnabledButton";
import Board from "./Board";

const SEED = [
  [false, true, false, false, false, true, false],
  [false, false, true, true, true, false, false],
  [false, false, true, true, true, false, true],
  [false, false, true, true, true, true, false],
  [true, false, false, false, false, false, true],
];

const Game = () => {
  const [enabled, setEnabled] = useState(false);

  const [time, setTime] = useState(0);
  const [state, setState] = useState(SEED);

  useEffect(() => {
    if (enabled) {
      const interval = setInterval(() => setTime(time + 1), 100);

      setState((state) => conway(state));

      return () => clearInterval(interval);
    }
  }, [time, enabled]);

  return (
    <div>
      <EnabledButton enabled={enabled} setEnabled={setEnabled} />
      <TimeIndicator time={time} />
      <Board state={state} />
    </div>
  );
};

export default Game;
