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
/*Description: Just a binary trick. Use two rules:
RULE 1: If 2^n = 1{000...0 - n times}, is binary. EXAMPLES:
2^2 = 4 (decimial) = 100 binary - two zeros.
2^5 = 32 (decimial) = 100000 binary - five zeros.
RULE 2: 2^n - 1 = {111...1 - n times}
2^3 - 1 = 8 - 1 = 7 (decimial) = 111 = three ones.
2^5 - 1 = 32 - 1 = 31 (decimial) = 11111 = five ones.

Based on these two rules, if n is power of two (2^n) if we apply bitwise AND all corresponding bits will be different and we'll receive zero.
EXAMPLES:
1) n = 2^5
32 & (32 - 1) = 32 & 31:
-- 100000
--- 11111
--- 00000 == 0

2) n = 2^3
8 & (8 - 1) = 8 & 7:
-- 1000
--- 111
--- 000 == 0

3) 25?
25 & (25 - 1) = 25 & 24:
-- 11001
-- 11000
-- 11000 != 0
 */
let isPowerOfTwo = n => n > 0 ? !(n & n-1) : false;
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));