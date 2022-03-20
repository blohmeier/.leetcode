//977. Squares of a Sorted Array
/*Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
 */

//Solution 1 - detailed documentation 7Mar
/*function sortedSquares(nums) {
    let result = [], l = 0, r = nums.length - 1, p = r;
    /!*#1: set vars:
        'result' (empty array).
        3 'pointers':
            left (l) = 0.
            right (r) = nums length.
            sorting (p) = starts as equal to r.*!/
    while (l <= r) {
        if (nums[l] ** 2 > nums[r] ** 2) {
            result[p--] = nums[l++] ** 2;
    /!*#2: First sorting step:
        if num[l]^2 > @[r]^2,
            - put square of nums (at index +1 of current 'l') ...
            - in the result matrix at one to the left of the current 'sorting' pointer.*!/
        } else {
            result[p--] = nums[r--] ** 2;
    /!*#3: Second sorting step:
        Otherwise,
            - put square of nums (at index -1 of current 'r') ...
            - in the result matrix at one to the left of the current 'sorting' pointer.*!/
        }
    }
    return result;
}*/

//Solution 2: Solution 1 with additional description and console.logs:
function sortedSquares(nums) {
    let result = [], l = 0, r = nums.length - 1, p = r, i=1;
    while (l <= r) {
        if (nums[l] ** 2 > nums[r] ** 2) {
            console.log("round " + i + ". nums[l]^2 is greater than @r^2 because " + nums[l] ** 2 + " > " +  nums[r] ** 2);
            console.log("p is: " + p);
            console.log("l is: " + l);
            console.log("We will put nums[r]^2 (at index l = " + l + ") in the result array (at index p = " + p + ") and increment l but decrement p.");
            result[p--] = nums[l++] ** 2;
            console.log("l is now: " + l);
            console.log("p is now: " + p);
            console.log(result);
        } else {
            console.log("round " + i + ". nums[l]^2 is less than (OR EQUAL TO) @r^2 because " + nums[l] ** 2 + " < " +  nums[r] ** 2);
            console.log("p is: " + p);
            console.log("r is: " + r);
            console.log(result);
            console.log("We will put nums[r]^2 (at index r = " + r + ") in the result array (at index p = " + p + ") and decrement them both.");
            result[p--] = nums[r--] ** 2;
            console.log("r is now: " + r);
            console.log("p is now: " + p);
            console.log(("result is: ") + (result));
        }
        i++;
    }
    return result;
}

//Solution 3
/*function sortedSquares(nums) {
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
}*/
console.log(sortedSquares([-4,-1,0,3,10])); //[0,1,9,16,100]
/*console.log(sortedSquares([-7,-3,2,3,11])); //[4,9,9,49,121]*/