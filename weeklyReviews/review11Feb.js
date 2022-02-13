// //output the first 50 prime numbers
// function primeFinder (n) {
//     if (n === 1) {
//         return true;
//     } else if (n === 0) {
//         return false;
//     } else {
//         for (let x = 2; x < n; x++) {
//             if (n % x === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// function primeGenerator () {
//     for (let i = 1, k = 1; k <=50; i++) {
//         if (primeFinder(i)) {
//             console.log("prime number " + k + " is " + i)
//             k++;
//         }
//     }
// }
// primeGenerator ();

//output the first 50 numbers in the fibonacci sequence
function first50fib() {
    let num1, num2, nextFib;
    for (i)
}
// /*704. Binary Search: Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.*/
// function binarySearch(nums, target) {
//     let lp = 0;
//     let rp = nums.length - 1;
//     while (lp <= rp) {
//         let middle = Math.floor((lp + rp)/2);
//         if (nums[middle] < target) {
//             lp = middle + 1;
//         } else if (nums[middle] > target) {
//             rp = middle - 1;
//         } else {
//             return middle
//         }
//
//     }
//     return -1;
// }
// console.log(binarySearch([-1,0,3,5,9,12], 9));
// console.log(binarySearch([-1,0,3,5,9,12], 2));
