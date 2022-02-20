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
            console.log("start of #1 loop");
            console.log("middle is: " + m);
            console.log("index of middle is less than target, and is: " + nums[m]);
            console.log("left is: " + l);
            console.log("right is: " + r);
            console.log("length is: " + nums.length);
        } else if (nums[m] > target) { // #2
            r = m - 1;
            console.log("start of #2 loop");
            console.log("middle is: " + m);
            console.log("index of middle is greater than target, and is: " + nums[m]);
            console.log("left is: " + l);
            console.log("right is: " + r);
            console.log("length is: " + nums.length);
        } else { // #3
            return m;
        }
    }
    return -1; // #4
};

console.log(search([-1,0,3,5,9,12],9));
console.log(search([-1,0,3,5,9,12],2));