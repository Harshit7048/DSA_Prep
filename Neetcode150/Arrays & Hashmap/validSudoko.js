console.log(
  "we are gonna set up a code to identify if the given suduko is valid or not",
);

function isValidSudoko(suduko) {
  let box = {};
  let row = {};
  let column = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = suduko[i][j];
      const boxId = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (value !== ".") {
        if (
          row[`${i}-${value}`] ||
          column[`${j}-${value}`] ||
          box[`${boxId}-${value}`]
        ) {
          return false;
        }
        row[`${i}-${value}`] = true;
        column[`${j}-${value}`] = true;
        box[`${boxId}-${value}`] = true;
      }
    }
  }
  return true;
}

// So a note on this question this was a very real case scenario question, where in a sudoko like structure we have to check if the a person already exist ,

// so here first we will set up row , column , box then will loop for values and then set up a value then made a boxId , then go for condition which is if value at a box is already there or in the row or in the column we will return false

const board = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoko(board));

const board2 = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoko(board2));
