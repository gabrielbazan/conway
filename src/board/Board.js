import Cell from "./Cell";

const Board = ({ state }) => {
  return (
    <div className="board">
      {state.map((row) => [
        ...row.map((cellState) => <Cell isAlive={cellState} />),
        <br />,
      ])}
    </div>
  );
};

export default Board;
