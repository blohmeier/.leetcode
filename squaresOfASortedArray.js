//Solution 1
// function sortedSquares(nums) {
//     let result = [],
//         l = 0,
//         r = nums.length - 1,
//         p = r;
//     while (l <= r) {
//         if (nums[l] ** 2 > nums[r] ** 2) {
//             result[p--] = nums[l++] ** 2;
//         } else {
//             result[p--] = nums[r--] ** 2;
//         }
//     }
//     return result;
// };
//Solution 2
function sortedSquares(nums) {
    let length = nums.length,
        result = [length],
        leftPointer = 0,
        rightPointer = length - 1;
    for (i = length - 1; i >= 0; i--) {
        let square;
        if (Math.abs(nums[leftPointer]) < Math.abs(nums[rightPointer])) {
            square = nums[rightPointer];
            rightPointer--;
        } else {
            square = nums[leftPointer];
            leftPointer++;
        }
        result[i] = square * square;
    }
    return result;
    // Time: O(n)
    // Space: O(n)
}
console.log(sortedSquares([-4,-1,0,3,10])); //[0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); //[4,9,9,49,121]