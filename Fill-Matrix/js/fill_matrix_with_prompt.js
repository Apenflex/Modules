const width = +prompt('Enter width').replace(/\D/g, '').trim();
const height = +prompt("Enter height").replace(/\D/g, "").trim();

// console.log(width, height);

function matrix(width, height) {
    let result = new Array(height).fill().map(() => new Array(width).fill(""));
    let counter = 1;
    let startCol = 0;
    let endCol = width - 1;
    let startRow = 0;
    let endRow = height - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return result;
}


console.log(matrix(width, height));

// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]

// ]


