//116. Populating Next Right Pointers in Each Node
/*Medium. You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
    struct Node {
    int val;
    Node *left;
    Node *right;
    Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL.

Example 1:
Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

Example 2:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 212 - 1].
-1000 <= Node.val <= 1000

Follow-up:
You may only use constant extra space.
The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.
*/

//Solution 1:
/*Definition for a Node.
 function Node(val, left, right, next) {
     this.val = val === undefined ? null : val;
     this.left = left === undefined ? null : left;
     this.right = right === undefined ? null : right;
     this.next = next === undefined ? null : next;
 }
/!**
 * @param {Node} root
 * @return {Node}
 *!/
var connect = function(root) {
    if (root == null || root.left == null) return root;
    root.left.next = root.right;
    root.right.next = root.next ? root.next.left : null;
    connect(root.left);
    connect(root.right);
    return root;
}*/

//Solution 2 - working in leetcode, but output here from Example 1 doesn't match:
/*var connect = function(root) {
    let ptr = root;
    while(root && root.left){
        let temp = root;
        while(temp) {
            temp.left.next = temp.right;
            temp.right.next = temp.next ? temp.next.left : null;
            temp = temp.next;
        }
        root = root.left;
    }
    return ptr;
}*/

console.log(connect([1,2,3,4,5,6,7])); //[1,#,2,3,#,4,5,6,7,#]
console.log(connect([])); //[]