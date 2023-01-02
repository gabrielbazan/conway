import "./Cell.css";

const Cell = ({ isAlive }) => {
  return <div className={`cell ${isAlive ? "alive" : "dead"}`}></div>;
};

export default Cell;
