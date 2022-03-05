//35. Search Insert Position
/*Given a sorted array of distinct integers (nums) and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Constraints:
1. 1 <= nums.length <= 10^4
2. -10^4 <= nums[i] AND target <= 10^4
3. nums contains distinct values sorted in ascending order.*/

//Effort 1:
/*function searchInsert(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};
function binarySearch(array, target, start, end) {
    if (start > end) return start;
    const midPoint = Math.floor((start + end)/2);
    // found target
    if (array[midPoint] === target) return midPoint;
    // search the left side
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
    // search the right side
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}*/
//Effort 2: Effort 1 simplified similar to 704. Binary Search
function searchInsert(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};
function binarySearch(array, target, l, r) {
    if (l > r) return l;
    let m = Math.floor((l + r)/2);
    if (array[m] === target) return m; //found target
    if (array[m] > target) return binarySearch(array, target, l, m - 1); //search left side
    if (array[m] < target) return binarySearch(array, target, m + 1, r); //search right side
}
console.log(searchInsert([1,3,5,6],5)); //2
console.log(searchInsert([1,3,5,6],2)); //1
console.log(searchInsert([1,3,5,6],7)); //4
console.log(searchInsert([1,3,5,6,10,37,51,68],7)); //4