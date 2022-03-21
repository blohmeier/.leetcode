//704. Binary Search
/*Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:
1. 1 <= nums.length <= 10^4
2. -10^4 < nums[i], target < 104
3. All the integers in nums are unique.
4. nums is sorted in ascending order.*/

//Effort 1:
/*var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) { //#1: Set l and r nums pointers for 'while'.
        let m = Math.floor((l + r) / 2); //#2: Start m b/t l and r.
        if (nums[m] < target) {
            l = m + 1;  // #3: reset l if nums[m] too low.
        } else if (nums[m] > target) { // #2
            r = m - 1;
        } else { // #3
            return m;
        }
    }
    return -1; // #4
};*/
//Effort 2 - not working:
/*var search = function(nums,target) {
    let i = 0;
    while (nums[i] !== target) {

            var targetIndex = nums[i];
        }
        return targetIndex;
    }

}*/
//Effort 3: re-try of Effort 1:
/*var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let m = Math.floor((r + l)/2);
        if (nums[m] < target) {
            l = m + 1;
        } else if (nums[m] > target) {
            r = m - 1;
        } else { return m }
    } return -1
}*/
//Effort 4: Effort 1 with console output:
/*var search = function(nums, target) {

    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2); // middle of l and r
        if (nums[m] < target) { // #1
            console.log("Loop#1: for nums[m] < target");
            console.log("Old l: " + l);
            console.log("m: " + m);
            console.log("nums[m]: " + nums[m]);
            l = m + 1;
            console.log("New l: " + l);
            console.log("r: " + r);
        } else if (nums[m] > target) { // #2
            console.log("Loop#2: for nums[m] > target");
            console.log("Old r: " + r);
            console.log("m: " + m);
            console.log("nums[m]: " + nums[m]);
            console.log("l: " + l);
            r = m - 1;
            console.log("New r: " + r)
        } else { // #3
            return m;
        }
    }
    return -1; // #4
};*/
console.log(search([-1,0,3,5,9,12],9)); //4
/*console.log(search([-1,0,3,5,9,12],2)); //-1*/
/*console.log(search([-1,0,3,5,9,12],3)); //2*/
