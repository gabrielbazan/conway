import TimeIndicator from "./TimeIndicator";
import EnabledButton from "./EnabledButton";

const Controls = ({ enabled, setEnabled, time }) => (
  <div>
    <EnabledButton enabled={enabled} setEnabled={setEnabled} />
    <TimeIndicator time={time} />
  </div>
);

export default Controls;
