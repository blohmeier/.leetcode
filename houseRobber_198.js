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
};
console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));

