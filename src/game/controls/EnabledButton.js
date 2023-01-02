const EnabledButton = ({ enabled, setEnabled }) => (
  <button onClick={() => setEnabled((enabled) => !enabled)}>
    {enabled ? "Stop" : "Start"}
  </button>
);

export default EnabledButton;
