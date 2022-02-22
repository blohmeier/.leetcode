/*98. Validate Binary Search Tree
Medium

Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

Constraints:
The number of nodes in the tree is in the range [1, 104].
-2^31 <= Node.val <= 2^31 - 1
 */
//#1: Works for first example not second - both examples working in Leetcode.
/*var isValidBST = function(root, min=null, max=null) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};
console.log(isValidBST([2,1,3])); //true
console.log(isValidBST([5,1,4,null,null,3,6])); //false*/
//#2: Works for first example not second - both examples working in Leetcode.
var isValidBST = function(root) {

    function inOrder(node) {
        if(!node) return [];
        return [...inOrder(node.left), node.val, ...inOrder(node.right)]
    }

    const sortedArr = inOrder(root);

    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i+1] <= sortedArr[i]) return false;
    }
    return true;
};
console.log(isValidBST([2,1,3])); //true
console.log(isValidBST([5,1,4,null,null,3,6])); //false
