import "./Cell.css";

const Cell = ({ isAlive, i, j, toggleCell }) => {
  return <div className={`cell ${isAlive ? "alive" : "dead"}`} onClick={() => { toggleCell(i, j) }}></div>;
};

export default Cell;
