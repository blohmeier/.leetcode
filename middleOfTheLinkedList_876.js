`use strict`;
/*876. Middle of the Linked List
Easy
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

Constraints:
The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
*/
//Attempt 1
// function middleNode(head) {
//     let A = [head];
//     while (A[A.length - 1].next != null)
//         A.push(A[A.length - 1].next);
//     return A[Math.trunc(A.length / 2)];
// };
//Attempt 2
var middleNode = function(head) {
    let fast = slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
/*EXAMPLE 1 EXPLAINED:
middleNode([1,2,3,4,5]);
Fast pointer (f) takes two steps for every one from slow (s). s will be at middle when f is at end.
State 0:            1:s,f-> 2  ->  3  ->  4-> 5
State 1 (1st loop): 1    -> 2:s->  3:f->  4-> 5
State 2 (2nd loop): 1    -> 2  ->  3:s->  4-> 5:f
*/