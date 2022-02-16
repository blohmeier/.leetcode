/*
198. House Robber
Medium

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 400*/
//Effort 1
//variable p records previous 2 max values: p[1] is the previous one and p[0] is the one before previous one. p is initialized as [0,0]. variable n is the value at each position.
var rob = function(nums) {
    return nums.reduce(function(p, n) {
        return [p[1], Math.max(p[0] + n, p[1])];
    }, [0,0])[1];
}
//Second effort
var rob = function(nums) {
    /*
    Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for House Robber.
    Memory Usage: 33.8 MB, less than 25.89% of JavaScript online submissions for House Robber.

    O(n) time, O(1) space

	- Bottom up strategy
	- Iterative
	- Memoization

	Trick: At index [i], you only need to know the maximum profit at [i - 1] and [i - 2]. This is a slight variation on fibonacci.
    */

    // Edge case: If the length is 1, return the element at the first index
    if (nums.length === 1) return nums[0];

// Edge case: If the length is 2, return the greater of the two values
    if (nums.length === 2) return Math.max(nums[0], nums[1]);


// -------------------------------------------------------------------

// Example 1: nums = [1, 2, 3, 1, 2]

    let maxAtTwoBefore = nums[0]; // 1

//        2                      1         2
    let maxAtOneBefore = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {

// interation 1

        //         4                  nums[2] = 3 + 1 = 4              2
        const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

        maxAtTwoBefore = maxAtOneBefore; //  2
        maxAtOneBefore = maxAtCurrent;   //  4

        // interation 2

        //            4                  nums[3] = 1 + 2 = 3              4
        // const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

        // maxAtTwoBefore = maxAtOneBefore;   4
        // maxAtOneBefore = maxAtCurrent;   3

        // interation 3

        //            4                  nums[4] = 2 + 4 = 6              3
        // const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

        // maxAtTwoBefore = maxAtOneBefore;   3
        // maxAtOneBefore = maxAtCurrent;   6
    }

    // ------------------------------------------


// Example 2: nums = [1, 3, 1, 3, 1]


// let maxAtTwoBefore = nums[0]; 1

//         3                    1         3
// let maxAtOneBefore = Math.max(nums[0], nums[1]);

// for (let i = 2; i < nums.length; i++) {
    // interation 1

    //            3                  nums[2] = 1 + 1 = 2              3
    // const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

    // maxAtTwoBefore = maxAtOneBefore;  3
    // maxAtOneBefore = maxAtCurrent;   3

    // interation 2

    //            6                  nums[3] = 3 + 3 = 6              3
    // const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

    // maxAtTwoBefore = maxAtOneBefore;   3
    // maxAtOneBefore = maxAtCurrent;   6

    // interation 3

    //            6                  nums[4] = 1 + 3 = 4              6
    // const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

    // maxAtTwoBefore = maxAtOneBefore;  6
    // maxAtOneBefore = maxAtCurrent;  6
// }

    return maxAtOneBefore;
};
console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));

