`use strict`;
/*876. Middle of the Linked List
Easy

4740

116

Add to List

Share
Given the head of a singly linked list, return the middle node of the linked list.

    If there are two middle nodes, return the second middle node.



    Example 1:

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
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
middleNode([1,2,3,4,5]);