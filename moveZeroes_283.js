// //Solution 1: "Javascript 124ms"
function moveZeroes_283(nums) {
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
}
// //Solution 2: reply to above. Run time 83ms.
// function moveZeroes_283(nums) {
//     let pointer = 0
//     for (let i in nums){
//         if (nums[i] !== 0){
//             [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
//             pointer++
//         }
//     }
//     return nums
// }
//Solution 3: reply to first above. Run time 94ms.
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
console.log(moveZeroes_283([0,1,0,3,12]));