const NumericInput = ({ name, value, onSetValue }) => (
  <div>
    {name}:
    <input
      type="number"
      defaultValue={value}
      onChange={(event) => onSetValue(Number(event.target.value))}
    />
  </div>
);

export default NumericInput;
