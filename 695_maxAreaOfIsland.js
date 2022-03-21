//695. Max Area of Island
/* Medium. You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical). Assume all four grid edges are surrounded by water.
The island area is the number of cells with a value 1. Return the maximum area of an island in grid. If there is no island, return 0.

Example 1:
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:
Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.
 */
//Ex. 1:
/*
var maxAreaOfIsland = function(grid) {
    let ans = 0, n = grid.length, m = grid[0].length
    const trav = (i, j) => {
        if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0
        grid[i][j] = 0
        return 1 + trav(i-1, j) + trav(i, j-1) + trav(i+1, j) + trav(i, j+1)
    }
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            if (grid[i][j]) ans = Math.max(ans, trav(i, j))
    return ans
};*/
