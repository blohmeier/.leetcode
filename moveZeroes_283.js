// 283. Move Zeroes
/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
1. 1 <= nums.length <= 10^4
2. -2^31 <= nums[i] <= 2^31 - 1

Follow up: Could you minimize the total number of operations done?*/

//Effort 1: 124ms
/*function moveZeroes(nums) {
    var pos = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos++] = nums[i];
        }
    }
    for (i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}*/

// Effort: 83ms.
function moveZeroes(nums) {
    let pointer = 0
    for (let i in nums){
        console.log("before if, pointer = " + pointer);
        console.log("before if, nums[i] = " + nums[i]);
        console.log("before if, i = " + i);

        if (nums[i] !== 0){
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]] // if nums at this index of for loop !==0, swap the number at this index with the number at the next index.
            pointer++
            console.log("after if, pointer = " + pointer);
            console.log("after if, nums[i] = " + nums[i]);
            console.log("after if, nums[pointer] = " + nums[pointer]);
            console.log("after if, i = " + i);
        }
        console.log(nums);
    }
    return nums
}
console.log(moveZeroes([0,1,0,3,12]));
//Solution 3: 94ms.
// function moveZeroes_283(nums) {
//     let count=0;
//     for(let i=0;i<nums.length;i++){
//         if(count===nums.length){
//             break
//         }
//         count++
//         if(nums[i]===0){
//             nums.splice(nums.length,0,nums.splice(i,1)[0])
//             i--
//         }
//
//     }
//     return nums
// }
// console.log(moveZeroes([0,1,0,3,12]));