import Cell from "./Cell";

const Board = ({ state, toggleCell }) => {
  return (
    <div className="board">
      {state.map((row, i) => [
        ...row.map((cellState, j) => (
          <Cell key={`${i}${j}`} isAlive={cellState} i={i} j={j} toggleCell={toggleCell} />
        )),
        <br key={`${i}`} />,
      ])}
    </div>
  );
};

export default Board;
