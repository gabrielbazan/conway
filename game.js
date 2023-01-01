
// directions of a cell's neighbours (height, width)
const DIRECTIONS = [
    [-1, -1],  // upper-left
    [-1, 0],  // up
    [-1, 1],  // upper-right
    [0, -1],  // left
    [0, 1],  // right
    [1, -1],  // lower-left
    [1, 0],  // down
    [1, 1],  // lower-right
];


class Game {

    #state;

    constructor(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    evolve() {
        let newState = [];

        const height = this.state.length;

        for (let row = 0; row < height; row++) {
            let newRow = [];

            const width = this.state[row].length;

            for (let col = 0; col < width; col++) {
                const isAlive = this.state[row][col];
                
                const aliveNeighboursCount = this.countAliveNeighbours(height, width, row, col);

                const newCellState = this.computeNewCellState(isAlive, aliveNeighboursCount);

                newRow.push(newCellState);
            }

            newState.push(newRow);
        }

        this.state = newState;
    }

    computeNewCellState(isAlive, aliveNeighboursCount) {
        const survives = isAlive && (aliveNeighboursCount == 2 || aliveNeighboursCount == 3);
        const becomesAlive = !isAlive && aliveNeighboursCount == 3;
        return survives || becomesAlive;
    }

    countAliveNeighbours(height, width, row, col) {
        let aliveNeighboursCount = 0;

        for (const direction of DIRECTIONS) {
            const [directionRow, directionCol] = direction;

            const neighbourRow = row + directionRow;
            const neighbourCol = col + directionCol;

            if (neighbourRow >= 0 && neighbourRow < height && neighbourCol >= 0 && neighbourCol < width) {
                const isAlive = this.state[neighbourRow][neighbourCol];

                if (isAlive) {
                    aliveNeighboursCount++;
                }
            }
        }

        return aliveNeighboursCount;
    }

}


class Grid {
    constructor(container) {
        this.container = container;
    }

    show(state) {
        const children = this.createChildren(state);
        this.container.replaceChildren(... children);
    }

    createChildren(state) {
        let children = [];

        for (let row = 0; row < state.length; row++) {
            for (let col = 0; col < state[row].length; col++) {
                const isAlive = state[row][col];
                children.push(this.createCellElement(isAlive));
            }

            children.push(this.createNewLineElement());
        }

        return children;
    }

    createCellElement(isAlive) {
        const cellElement = document.createElement("div");
        const cellClass = isAlive ? "alive": "dead";
        cellElement.classList.add("cell", cellClass);
        return cellElement;
    }

    createNewLineElement() {
        const element = document.createElement("span");
        element.innerHTML = "<br/>";
        return element;
    }
}


const timer = ms => new Promise(res => setTimeout(res, ms))


async function main () {
    const container = document.getElementById("container");
    
    let seed = [
        [false, true, false, false, false, true, false, ],
        [false, false, true, true, true, false, false, ],
        [false, false, true, true, true, false, true, ],
        [false, false, true, true, true, true, false, ],
        [true, false, false, false, false, false, true, ],
    ];

    const game = new Game(seed);
    const grid = new Grid(container);

    grid.show(game.getState())

    while (true) {
        game.evolve()
        grid.show(game.getState())
        await timer(1000);
    }

}


window.onload = main;
