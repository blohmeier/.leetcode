//189. Rotate Array
/*Medium. Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


Constraints:
1 <= nums.length <= 10^5
-2^31 <= nums[i] <= 2^31 - 1
0 <= k <= 10^5

Follow up:
Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?*/

//Attempt 1 - works in leetcode, not in IntelliJ:
/*var rotate = function(nums, k) {
    k %= nums.length;

    let reverse = function(i, j){
        while(i < j){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
};*/


// Attempt 2 - works in leetcode but no output in IntelliJ:
/*var rotate = function(nums, k) {

    k = k % nums.length

    var len = nums.length - 1;
    reverse(nums, 0, len - k);
    reverse(nums, len - k + 1 , len);
    reverse(nums, 0 ,len);


    function reverse(arr,l, r){
        while(l <  r){
            [ arr[l], arr[r] ] = [ arr[r] , arr[l] ];
            l++;
            r--
        }
    }
}*/

// Attempt 3 - detailed explain of Attempt 2:
var rotate = function(nums, k) {
    var resultz2 = 0;

    k = k % nums.length
    console.log("k is: " + k);

    var len = nums.length - 1;
    /*var arr = [];*/

    reverse(nums, 0, len - k);
    reverse(nums, len - k + 1 , len);
    reverse(nums, 0 ,len);


    function reverse(arr,l, r){
        while(l <  r){
            [ arr[l], arr[r] ] = [ arr[r] , arr[l] ];
            console.log("l before incrementing is " + l);
            l++;
            console.log("l after  incrementing is " + l);
            console.log("r before decrementing is " + r);
            r--
            console.log("r after decrementing is " + r);
            console.log("array is: " + arr);
        }
        resultz2 = arr;
        console.log("resultz2 within reverse function is: " + resultz2);
        return resultz2;
    }
    console.log("resultz2 outside of reverse function is: " + resultz2);
    return resultz2;
}

console.log(rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2)); // [3,99,-1,-100]
