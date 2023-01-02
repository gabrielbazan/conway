import TimeIndicator from "./TimeIndicator";
import EnabledButton from "./EnabledButton";
import NumericInput from "./NumericInput";

const Controls = ({
  width,
  setWidth,
  height,
  setHeight,
  enabled,
  setEnabled,
  time,
}) => (
  <div>
    <NumericInput name="Height" value={height} onSetValue={setHeight} />
    <NumericInput name="Width" value={width} onSetValue={setWidth} />

    <EnabledButton enabled={enabled} setEnabled={setEnabled} />

    <TimeIndicator time={time} />
  </div>
);

export default Controls;
