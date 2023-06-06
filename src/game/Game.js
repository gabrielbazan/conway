import { useState, useEffect } from "react";
import conway from "./conway";
import Controls from "./controls/Controls";
import Board from "./Board";
import { SEED, resizeState } from "./seed";

const Game = () => {
  const [state, setState] = useState(SEED);

  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);

  const [enabled, setEnabled] = useState(false);

  const [time, setTime] = useState(0);

  useEffect(() => {
    setState((state) => resizeState(state, height, width));
  }, [width, height]);

  useEffect(() => {
    if (enabled) {
      const interval = setInterval(() => setTime(time + 1), 100);

      setState((state) => conway(state));

      return () => clearInterval(interval);
    }
  }, [time, enabled]);

  const toggleCell = (i, j) => {
    setState(
      (state) => {
        let copy = state.map(function (arr) {
          return arr.slice();
        });
        copy[i][j] = !copy[i][j];
        return copy;
      }
    )
  }

  return (
    <div>
      <Controls
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
        enabled={enabled}
        setEnabled={setEnabled}
        time={time}
      />
      <Board state={state} toggleCell={toggleCell} />
    </div>
  );
};

export default Game;
