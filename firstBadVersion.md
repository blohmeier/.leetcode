# Leetcode Practice 6 Feb

## 278. First Bad Version
- You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
 

Constraints:

1 <= bad <= n <= 231 - 1


### Solution (JavaScript)

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
    };
};

 Simple Function Drills

1. Make a function called returnTwo() that returns the number 2 when called

   Test this function with `console.log(returnTwo())`

1. Make a function called sayHowdy() which console.logs the string “Howdy!”

   Test this function by directly calling `sayHowdy()`

   Remember this function does not need a defined return value


- Write a `divide(numerator, denominator)` function that returns a divided by b

- Write a `remainder(number, divisor)` function that returns the remainder left
  over when dividing `number` by the `divisor`

- Write the function `square(a)` that takes in a number and returns the number
  multiplied by itself.

1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"

    - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"
    - Create a function `returnMessage()` that takes in a function and returns the call to the function
    - Experiement passing in different functions.
