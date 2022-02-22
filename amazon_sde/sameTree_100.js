/*
100. Same Tree
Easy

Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false

Constraints:
The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
 */
//#1: Works in leetcode, not here.
/*var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
console.log(isSameTree([1,2,3],[1,2,3]));
console.log(isSameTree([1,2],[1,null,2]));
console.log(isSameTree([1,2,1],[1,1,2]));*/
//#2: Works in leetcode and here.
var isSameTree = function(p, q) {
    return JSON.stringify(p)===JSON.stringify(q)
};
console.log(isSameTree([1,2,3],[1,2,3]));
console.log(isSameTree([1,2],[1,null,2]));
console.log(isSameTree([1,2,1],[1,1,2]));