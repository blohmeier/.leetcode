//167. Two Sum II - Input Array Is Sorted
/*Medium. Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. So index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. So index1 = 1, index2 = 3. We return [1, 3].

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. So index1 = 1, index2 = 2. We return [1, 2].

Constraints:
1. 2 <= numbers.length <= 3 * 10^4
2. -1000 <= numbers[i] <= 1000
3. numbers is sorted in non-decreasing order.
4. -1000 <= target <= 1000
5. The tests are generated such that there is exactly one solution.*/

//Effort 1
/*let twoSum = (nums, target) => {
    let lo = 0,
        hi = nums.length - 1
    while (nums[lo] + nums[hi] !== target) {
        if (nums[lo] + nums[hi] > target) {
            hi--
        } else {
            lo++
        }
    }
    return [lo+1, hi+1]
}
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1,0], -1));*/

//Effort 2
var twoSum = function(nums, target) {
    //nums = nums.sort();
    let lo = 0, hi = nums.length;
    while (lo < hi) {
        if (nums[lo] + nums[hi] == target) {
            return [lo+1, hi+1]
        } else if (nums[lo] + nums[hi] < target) {
            lo++;
        } else {
            hi--;
        }
    }
}
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1,0], -1));