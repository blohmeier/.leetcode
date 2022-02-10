`use strict`;
//Attempt 1 - not working
// var removeNthFromEnd = function(head, n) {
//     let dummy = new ListNode(0);
//     dummy.next = head;
//     let first = dummy;
//     let second = dummy;
//     // Advances first pointer so that the gap between first and second is n nodes apart
//     for (int i = 1; i <= n + 1; i++) {
//         first = first.next;
//     }
//     // Move first to the end, maintaining the gap
//     while (first != null) {
//         first = first.next;
//         second = second.next;
//     }
//     second.next = second.next.next;
//     return dummy.next;
// };
// Attempt 2:
var removeNthFromEnd = function(head, n) {
    let fast = head,
        slow = head
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if (!fast) {
        return head.next;
    }
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};
console.log(removeNthFromEnd([1,2,3,4,5],2));