const EnabledButton = ({ enabled, setEnabled }) => (
  <button onClick={() => setEnabled((enabled) => !enabled)}>
    {enabled ? "Start" : "Stop"}
  </button>
);

export default EnabledButton;
