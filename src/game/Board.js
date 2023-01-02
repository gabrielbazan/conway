import Cell from "./Cell";

const Board = ({ state }) => {
  return (
    <div className="board">
      {state.map((row, i) => [
        ...row.map((cellState, j) => (
          <Cell key={`${i}${j}`} isAlive={cellState} />
        )),
        <br key={`${i}`} />,
      ])}
    </div>
  );
};

export default Board;
