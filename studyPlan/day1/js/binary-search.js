/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2); // middle of l and r
        if (nums[m] < target) { // #1
            l = m + 1;
        } else if (nums[m] > target) { // #2
            r = m - 1;
        } else { // #3
            return m;
        }
    }
    return -1; // #4
};

console.log(search([-1,0,3,5,9,12],9));