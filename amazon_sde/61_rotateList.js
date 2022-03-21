/*
61. Rotate List
Medium
Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:
Input: head = [0,1,2], k = 4
Output: [2,0,1]

Constraints:
The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109
 */
//First effort - works but functions aren't allowed.
/*
var rotateRight = function(head, k) {
    for (let i = 1; i <= k; i++) {
        console.log(head);
        //const headConstant = head;
        let placeHolder = head.pop();
        console.log(placeHolder);
        head.unshift(placeHolder);
    }
    return head;
};
//console.log(rotateRight([1,2,3,4,5],2)); //[4,5,1,2,3]
//console.log(rotateRight([0,1,2],4)) //[2,0,1]
*/

//Second effort - works in Leetcode, not in IntelliJ?
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }
var rotateRight = function(head, k) {
    let arr = [];

    // Storing list nodes in array
    for (let i = head; i !== null; i = i.next) arr.push(i);

    let rot = k % arr.length;

    // Checking requirement of rotation
    if (rot === 0 || head === null) return head;

    let len = arr.length - 1;
    // algo to rotate list
    rot = len - rot;
    arr[rot].next = null;
    arr[len].next = arr[0];

    // returning head of rotated list
    return arr[rot + 1];
};
console.log(rotateRight([1,2,3,4,5],2)); //[4,5,1,2,3]
console.log(rotateRight([0,1,2],4)) //[2,0,1]

//Third Effort -???
/*const rotateRight = (head, k) =>  {
    if (k === 0 || !head) return head;
    let l = 0, count = 0;
    let left = null, end = null, index = head;
    while (index) {
        count++;
        if (count - l > k) {
            l++;
            left = left ? left.next : head;
        }
        end = index;
        index = index.next;
    }

    if (!left) {
        k = k % count;
        return rotateRight(head, k);
    }
    else {
        let newHead = left.next;
        left.next = null;
        end.next = head;
        return newHead;
    }
}*/
// console.log(rotateRight([1,2,3,4,5],2)); //[4,5,1,2,3]
// console.log(rotateRight([0,1,2],4)) //[2,0,1]