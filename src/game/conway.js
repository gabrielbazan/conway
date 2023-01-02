// directions of a cell's neighbours (height, width)
const DIRECTIONS = [
  [-1, -1], // upper-left
  [-1, 0], // up
  [-1, 1], // upper-right
  [0, -1], // left
  [0, 1], // right
  [1, -1], // lower-left
  [1, 0], // down
  [1, 1], // lower-right
];

function conway(state) {
  let newState = [];

  const height = state.length;

  for (let row = 0; row < height; row++) {
    let newRow = [];

    const width = state[row].length;

    for (let col = 0; col < width; col++) {
      const isAlive = state[row][col];

      const aliveNeighboursCount = countAliveNeighbours(
        state,
        height,
        width,
        row,
        col
      );

      const newCellState = computeNewCellState(isAlive, aliveNeighboursCount);

      newRow.push(newCellState);
    }

    newState.push(newRow);
  }

  return newState;
}

function computeNewCellState(isAlive, aliveNeighboursCount) {
  const survives =
    isAlive && (aliveNeighboursCount === 2 || aliveNeighboursCount === 3);
  const becomesAlive = !isAlive && aliveNeighboursCount === 3;
  return survives || becomesAlive;
}

function countAliveNeighbours(state, height, width, row, col) {
  let aliveNeighboursCount = 0;

  for (const direction of DIRECTIONS) {
    const [directionRow, directionCol] = direction;

    const neighbourRow = wrapCordinate(row + directionRow, height);
    const neighbourCol = wrapCordinate(col + directionCol, width);

    if (
      neighbourRow >= 0 &&
      neighbourRow < height &&
      neighbourCol >= 0 &&
      neighbourCol < width
    ) {
      const isAlive = state[neighbourRow][neighbourCol];

      if (isAlive) {
        aliveNeighboursCount++;
      }
    }
  }

  return aliveNeighboursCount;
}

function wrapCordinate(cordinate, size) {
  if (cordinate === size) {
    cordinate = 0;
  } else if (cordinate === -1) {
    return size - 1;
  }
  return cordinate;
}

export default conway;
