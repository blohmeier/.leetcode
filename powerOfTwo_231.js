//231. Power of Two
/*Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2x.

Example 1:
Input: n = 1
Output: true
Explanation: 2^0 = 1

Example 2:
Input: n = 16
Output: true
Explanation: 2^4 = 16

Example 3:
Input: n = 3
Output: false

Constraints:
-231 <= n <= 231 - 1
 */
//Effort 1
/*Description: Just a binary trick:

2^n = 1{000...0 - n times}, binary.
2^2 = 4 (decimial) = 100 binary - two zeros.
2^5 = 32 (decimial) = 100000 binary - five zeros.

2^n - 1 = {111...1 - n times}
2^3 - 1 = 8 - 1 = 7 (decimial) = 111 = three ones.
2^5 - 1 = 32 - 1 = 31 (decimial) = 11111 = five ones.

Based on this two rules, if n is power of two (2^n) if we apply bitwise AND all corresponding bits will be different and we'll receive zero, 

 */