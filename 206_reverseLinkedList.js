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
//Effort 1 - iterative: "Easy [C++/Java/Python/JavaScript] Explained+Animated" - leetcode: works. Intellij: doesn't.
/*function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function reverseList (head) {
    let [prev, cur] = [null, head]
    while(cur) {
        [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    return prev
}*/
//Effort 2 - recursive: "Javascript Iterative and Recursive Solution" - leetcode: works. Intellij: doesn't.
function reverseList (head) {
    if (head == null || head.next == null){
        return head;
    }
    let reversedListHead = reverseList(head.next)
    head.next.next = head;
    head.next = null;
    return reversedListHead
}
console.log(reverseList([1,2,3,4,5]));
