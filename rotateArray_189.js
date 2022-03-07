//189. Rotate Array
/*Medium. Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


Constraints:
1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105

Follow up:
Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 */

// var rotate = function(nums, k) {
//     k %= nums.length;
//
//     let reverse = function(i, j){
//         while(i < j){
//             let temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;
//             i++;
//             j--;
//         }
//     }
//     reverse(0, nums.length - 1);
//     reverse(0, k - 1);
//     reverse(k, nums.length - 1);
// };
//
// console.log(rotate([1,2,3,4,5,6,7], 3));
// Above not working. Attempt 2:
// function rotate(nums, k) {
//     k %= nums.length;
//     let temp,
//         previous;
//     for (i = 0; i < k; i++) {
//         previous = nums[nums.length - 1];
//         for (j = 0; j < nums.length; j++) {
//             temp = nums[j];
//             nums[j] = previous;
//             previous = temp;
//         }
//     }
// }
// console.log(rotate([1,2,3,4,5,6,7], 3)); //
//Above not working. Attempt 3:
// function rotate (nums, k) {
//     return( nums.splice(0,0,...nums.splice(nums.length-k, k)))
// }
// console.log(rotate([1,2,3,4,5,6,7], 3)); //
//console.log(rotate());
//Above not working. Attempt 4:
var rotate = function(nums, k) {

    k = k % nums.length;

    var len = nums.length - 1;
    reverse(nums, 0, len - k);
    reverse(nums, len - k + 1 , `len`);
    reverse(nums, 0 ,`len`);


    function reverse(arr, l, r){
        while(l <  r){
            [ arr[l], arr[r] ] = [ arr[r] , arr[l] ];
            l++;
            r--;
        }
    }
    return rotate;
};
console.log(rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2)); // [3,99,-1,-100]

