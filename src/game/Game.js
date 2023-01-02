import { useState, useEffect } from "react";
import conway from "./conway";
import Controls from "./Controls";
import Board from "./Board";
import { SEED } from "./settings";

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
      <Controls enabled={enabled} setEnabled={setEnabled} time={time} />
      <Board state={state} />
    </div>
  );
};

export default Game;
