#189. Rotate Array
*Medium*

Given an array, rotate the array to the right by k steps, where k is non-negative.

##Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

##Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]

Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 
Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105

#Solutions
Approach 1: Brute Force
The simplest approach is to rotate all the elements of the array in kk steps by rotating the elements by 1 unit in each step.
class Solution {
  public void rotate(int[] nums, int k) {
    // speed up the rotation
    k %= nums.length;
    int temp, previous;
    for (int i = 0; i < k; i++) {
      previous = nums[nums.length - 1];
      for (int j = 0; j < nums.length; j++) {
        temp = nums[j];
        nums[j] = previous;
        previous = temp;
      }
    }
  }
}
Complexity Analysis

Time complexity: \mathcal{O}(n \times k)O(n×k). All the numbers are shifted by one step(\mathcal{O}(n)O(n)) k times.

Space complexity: \mathcal{O}(1)O(1). No extra space is used.

Approach 2: Using Extra Array
Algorithm

We use an extra array in which we place every element of the array at its correct position i.e. the number at index ii in the original array is placed at the index (i + k) \% \text{ length of array}(i+k)% length of array. Then, we copy the new array to the original one.

class Solution {
  public void rotate(int[] nums, int k) {
    int[] a = new int[nums.length];
    for (int i = 0; i < nums.length; i++) {
      a[(i + k) % nums.length] = nums[i];
    }
    for (int i = 0; i < nums.length; i++) {
      nums[i] = a[i];
    }
  }
}

Complexity Analysis

Time complexity: \mathcal{O}(n)O(n). One pass is used to put the numbers in the new array. And another pass to copy the new array to the original one.

Space complexity: \mathcal{O}(n)O(n). Another array of the same size is used.
