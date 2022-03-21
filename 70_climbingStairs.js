//70. Climbing Stairs
/*You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45
 */

//Effort 1:
/*var climbStairs = function(n){
    // First two pointers store the first two numbers of the Fibonacci sequence
    let prev = 0;
    let curr = 1;
    // Our third pointer is used to store one side while we update the above two pointers.
    let tmp;

    // We use a for loop to iterate from 1 up to our number n with our constraints being: 1 <= n <= 45
    for(let i = 1; i <= n; i++){
        // Store one side (from prev) in third pointer (tmp).
        tmp = prev;
        // Update that side (prev) to be equal to the other pointer (curr) because the next number is equal to the sum of the previous two numbers.
        prev = curr;
        // Next add tmp (which now holds our lower number) to curr (which holds our upper number) to get our next number.
        curr += tmp;
    }
    // Outside of our loop we return curr which stored our cumulative total while we iterated.
    return curr;
}*/


//Effort 2 - 68ms - best approach?:
/*DP - dp[i] represents the total number of different ways to take i steps. So, we want to get dp[n].
dp[n] = dp[n-1] + dp[n-2] because we can either take 1 or 2 steps.
We have two base cases: dp[1] = 1 and dp[2] = 2 because there is one way to take 1 step and there are two ways to take 2 steps (1 step + 1 step OR 2 step)*/
/*var climbStairs = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1, dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
    // T.C: O(N)
    // S.C: O(N)
};*/


//Effort 3 - 78ms:
/*Recursion - climbStairs(n) returns the total number of different ways of taking n steps. Hence, climbStairs(n-1) + climbStairs(n-2) gives the result
since we can either climb 1 or 2 steps. For a more optimised solution, we use an Array to keep track of results that have already been computed.*/
var climbStairs = function(n, memo = new Array()) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (memo[n] !== undefined) {
        return memo[n];
    }
    let res = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    memo[n] = res;
    return res;
    // T.C: O(N)
    // S.C: O(N)
};
//Effort 4
console.log(climbStairs(2)); //2
console.log(climbStairs(3)); //3


