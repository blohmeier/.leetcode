"use strict";

function middleNode(head) {
    let A = [head];
    while (A[A.length - 1].next != null)
        A.push(A[A.length - 1].next);
    var listResult = A[Math.trunc(A.length / 2)];
    return listResult;
};
console.log(middleNode([1,2,3,4,5]));
console.log(listResult);