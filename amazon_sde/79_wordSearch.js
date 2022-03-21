/*
79. Word Search
Medium

Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

Constraints:
m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 */
/* Description for first effort below:
Since it's obvious that there will be a lot of repetitive work, such as checking up, down, left, right for lots of characters, we can use recusion to simplify our code.
Our base case will need to check:

are we getting out of boundary? if yes, get out.
are we getting a wrong character? If yes, get out.
did we find every character from the work? If yes, great, we have found this word.
Otherwise keep exploring characters for all directions.
 */
var exist = function(board, word) {
    let result = false;
    var check = function(r, c, i) {
        if (!result) {
            if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return; // out of boundary
            if (board[r][c] != word[i]) return; // wrong character
            if (i == word.length - 1) { // got to the end means we found a correct path
                result = true;
                return;
            }
            board[r][c] = null; // mark our path so we dont go back and forth
            // try all directions
            check(r+1,c,i+1)
            check(r-1,c,i+1)
            check(r,c+1,i+1)
            check(r,c-1,i+1)
            board[r][c] = word[i] // reset our board , very important
        }
    }

    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[0].length;j++) {
            if (board[i][j] == word[0]) {
                check(i, j, 0)
                if (result) return result;
            }
        }
    }
    return result;
};
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE"));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB"));