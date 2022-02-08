//Attempt 1 - not working; too slow
// function twoSum (nums, target) {
//     let lo = 0,
//         hi = nums.length - 1; //console.log(nums.length);
//     while (lo < hi) {
//         let sum = nums[lo] + nums[hi]; console.log("lo index is " + nums[lo]); console.log("hi index is " +nums[hi]); console.log("sum is " + sum);
//         if (sum == target) {
//             console.log(lo); console.log(hi);
//             //return (lo + 1, hi + 1);
//         } else if (sum < target) {
//             ++lo; console.log("sum < target, lo value is now: " + nums[lo] + "\n\n");
//         } else {
//             --hi; console.log("sum > target, hi value is now: " + nums[hi] + "\n\n");
//         }
//     }
// };

//Attempt 2 - working
// let twoSum = (nums, target) => {
//     let lo = 0,
//         hi = nums.length - 1
//     while (nums[lo] + nums[hi] !== target) {
//         if (nums[lo] + nums[hi] > target) {
//             hi--
//         } else {
//             lo++
//         }
//     }
//     return [lo+1, hi+1]
// }

//Attempt 3 - working
// var twoSum = function(nums, target) {
//     //nums = nums.sort();
//     let lo = 0, hi = nums.length;
//     while (lo < hi) {
//         if (nums[lo] + nums[hi] == target) {
//             return [lo+1, hi+1]
//         } else if (nums[lo] + nums[hi] < target) {
//             lo++;
//         } else {
//             hi--;
//         }
//     }
// }

//Attempt 4 - actually works for "1. Two Sum."
// function twoSum(nums, target) {
//     for (i = 0; i < nums.length; i++) {
//         for (j = i + 1; j < nums.length; j++) {
//             if (nums[j] == target - nums[i]) {
//                 return [ i, j ];
//             }
//         }
//     }
//     return null;
// }
// //twoSum([2,7,11,15],9);
// twoSum([3,2,4], 6);