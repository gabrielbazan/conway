export const SEED = [
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, true, false, false, false, true, false, false],
  [false, false, false, false, true, true, true, false, false, false],
  [false, false, false, false, true, true, true, false, true, false],
  [false, false, false, false, true, true, true, true, false, false],
  [false, false, true, false, false, false, false, false, true, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
];

export const resizeState = (currentState, height, width) => {
  let resizedState = Array(height)
    .fill()
    .map(() => Array(width).fill(false));

  for (let i = 0; i < height; i++) {
    const row = currentState[i];

    if (row) {
      const currentWidth = row.length;

      for (let j = 0; j < width; j++) {
        resizedState[i][j] = j < currentWidth ? currentState[i][j] : false;
      }
    }
  }

  return resizedState;
};
