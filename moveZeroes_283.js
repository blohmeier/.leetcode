// // 283. Move Zeroes
// Effort 1: 124ms
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
// //Second Effort: 83ms.
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