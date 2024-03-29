/*
36. Valid Sudoku
Medium

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1:
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Constraints:
board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let row = new Set(),
            col = new Set(),
            box = new Set();

        for (let j = 0; j < 9; j++) {
            let _row = board[i][j];
            let _col = board[j][i];
            let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]

            if (_row != '.') {
                if (row.has(_row)) return false;
                row.add(_row);
            }
            if (_col != '.') {
                if (col.has(_col)) return false;
                col.add(_col);
            }

            if (_box != '.') {
                if (box.has(_box)) return false;
                box.add(_box);
            }
        }
    }
    return true
};
console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));
/*/!*
Detailed answer:
Thinking
Basically we need to check three things:

Are there duplicates in each row? If yes, return false
Are there duplicates in each column? If yes, return false
Are there duplicates in each 3x3 box? If yes, return false

if everything passes, return true at the end.

When dealing with checking for duplicates, we use a Hash Set.

Representations
Let's deal with rows and columns first because it's easier to tackle:

for (let i = 0; i < 9; i++) {
	let row = new Set(); /!* row Set *!/
    let col = new Set(); /!* column Set *!/
    for(let j = 0; j < 9; j++) {
        board[i][j] /!* iterating row by row *!/
        board[j][i] /!* iterating column by column *!/
    }
}
So as we go through each row/column we add unseen number to the row/column Set accordingly. If Set has seen it, we return false.
/!* example *!/
if (item != '.') {
    if (row.has(item)) return false;
    row.add(item);
}

Now let's ace the 3x3 box iterating inside the same loop:
This is a illustration of a sudoku in nine 3x3 boxes with each cell represented by a two-digit number ij (i means row index and j means column index).

00 01 02 | 03 04 05 | 06 07 08
10 11 12 | 13 14 15 | 16 17 18  // i = 0, 1, 2
20 21 22 | 23 24 25 | 26 27 28
------------------------------
30 31 32 | 33 34 35 | 36 37 38
40 41 42 | 43 44 45 | 46 47 48  // i = 3, 4, 5
50 51 52 | 53 54 55 | 56 57 58
------------------------------
60 61 62 | 63 64 65 | 66 67 68
70 71 72 | 73 74 75 | 76 77 78  // i = 6, 7, 8
80 81 82 | 83 84 85 | 86 87 88

How do we iterate using i, j, and 3(because its 3x3)?
We use / and % to help!

Because we only want to start vertical traversal when horizontal traversal is done.

Use / for vertical traversal because
Math.floor(0 / 3) = 0
Math.floor(1 / 3) = 0
Math.floor(2 / 3) = 0

Use % for horizontal traversal because
0 % 3 = 0
1 % 3 = 1
2 % 3 = 2

We can represent the 3x3 box as:
for (let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
        board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * i%3 + j%3]
    }
}*/