//994. Rotting Oranges
/*Medium. You are given an m x n grid where each cell can have one of three values:
0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.*/

// Solution 1 - working
/*/!*
 * @param {number[][]} grid
 * @return {number}
 *!/
var orangesRotting = function (grid) {
    let minute = 0;
    let totalFreshOranges = 0;

    // this stack will contain [x,y] of the rotten oranges
    // and will be used in while loop as a spreading point.
    let rottenOranges = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {

            // count fresh oranges
            if (grid[i][j] === 1) totalFreshOranges++;

            // find rotten oranges and push it into stack, the reason why we need
            // to find rotten oranges first is because it will be used to spread to
            // any other fresh oranges left.
            if (grid[i][j] === 2) rottenOranges.push([i, j]);
        }
    }

    // use for accessing adjacency grids.
    const m = [[0, -1], [0, 1], [-1, 0], [1, 0],];

    // keep spreading if there still fresh oranges left
    // and there still rotten oranges left to be spread
    while (totalFreshOranges && rottenOranges.length) {

        // fresh oranges that are adjacent to the rotten oranges
        //  will be pushed into this and will become rotten oranges!
        let rottingOranges = [];

        while (rottenOranges.length) {
            let [x, y] = rottenOranges.pop();
            for (let i = 0; i < 4; i++) {
                let [x2, y2] = [x + m[i][0], y + m[i][1]];

                // if adjacency grid is fresh orange:
                // make it rotten, decrease total fresh oranges
                // and push it into stack that will be used for
                // next round of spreading.
                if (grid[x2] && grid[x2][y2] === 1) {
                    grid[x2][y2] = 2;
                    totalFreshOranges--;
                    rottingOranges.push([x2, y2]);
                }
            }
        }

        // rotting oranges now became rotten oranges,
        // it will continue to spread until nothing left!
        rottenOranges = rottingOranges;

        minute++;
    }

    // if any fresh oranges left, return -1, otherwise, return minute;
    return totalFreshOranges ? -1 : minute;
}*/

// Ex. 2: Solution 1 with no comments:
/*var orangesRotting = function (grid) {
    let minute = 0;
    let totalFreshOranges = 0;
    let rottenOranges = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) totalFreshOranges++;
            if (grid[i][j] === 2) rottenOranges.push([i, j]);
        }
    }
    const m = [[0, -1], [0, 1], [-1, 0], [1, 0],];
    while (totalFreshOranges && rottenOranges.length) {
        let rottingOranges = [];
        while (rottenOranges.length) {
            let [x, y] = rottenOranges.pop();
            for (let i = 0; i < 4; i++) {
                let [x2, y2] = [x + m[i][0], y + m[i][1]];
                if (grid[x2] && grid[x2][y2] === 1) {
                    grid[x2][y2] = 2;
                    totalFreshOranges--;
                    rottingOranges.push([x2, y2]);
                }
            }
        }
        rottenOranges = rottingOranges;
        minute++;
    }
    return totalFreshOranges ? -1 : minute;
}*/
console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])); //4
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])); //-1
console.log(orangesRotting([[0,2]])); //0