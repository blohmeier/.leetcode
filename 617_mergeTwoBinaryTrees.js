//617. Merge Two Binary Trees
/* You are given two binary trees root1 and root2. Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree.
The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
Return the merged tree.
Note: The merging process must start from the root nodes of both trees.

Example 1:
Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
Output: [3,4,5,5,4,null,7]

Example 2:
Input: root1 = [1], root2 = [1,2]
Output: [2,2]

Constraints:
The number of nodes in both trees is in the range [0, 2000].
-104 <= Node.val <= 104
*/

//Ex. 1: Solution 1 - not working
/*function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

@param {TreeNode} root1
@param {TreeNode} root2
@return {TreeNode}

function mergeTrees (root1, root2) {
    if (!root1 && !root2) return null;
    const root = new TreeNode(((root1 || 0).val || 0) + ((root2 || 0).val || 0));
    root.left = mergeTrees(root1 && root1.left, root2 && root2.left);
    root.right = mergeTrees(root1 && root1.right, root2 && root2.right);
    return root;
}*/

// Ex. 2: Solution 2 - working in leetcode, but output doesn't match solution.
/*// using t1 as storage and adding values of t2
var mergeTrees = function(t1, t2) {
    // if t1 is empty return t2 (means append t2 in t1)
    if(!t1) return t2;

    // if t2 is empty return t1 (means append t1 in t1)
    if(!t2) return t1;

    // if both node has value, add them and assign into t1
    if(t1 && t2) t1.val = t1.val + t2.val;

    // visit left branch
    t1.left = mergeTrees(t1.left, t2.left);

    // visit right branch
    t1.right = mergeTrees(t1.right, t2.right);

    // all recursion is done, return t1
    return t1;
}*/

// Ex. 3: Solution 2 simplified
/*var mergeTrees = function(t1, t2) {
    if(!t1) return t2;
    if(!t2) return t1;
    if(t1 && t2) t1.val = t1.val + t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};*/
console.log(mergeTrees([1,3,2,5], [2,1,3,null,4,null,7])); // [3,4,5,5,4,null,7]
console.log(mergeTrees([1], [1,2])); // [2,2]