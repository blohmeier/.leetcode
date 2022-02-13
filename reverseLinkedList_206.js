/*
206. Reverse Linked List
Easy

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []


Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
*/
//Effort 1 - iterative: "Easy [C++/Java/Python/JavaScript] Explained+Animated"
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList (head) {
    let [prev, cur] = [null, head]
    while(cur) {
        [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    return prev
}
console.log(reverseList([1,2,3,4,5]));
//Effort 2 - recursive: "Javascript Iterative and Recursive Solution"

