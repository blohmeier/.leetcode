/* 7. Reverse Integer
 * @lc app=leetcode id=7 lang=java
 *
 * [7] Reverse Integer
 * Solution from reference: page 67 of 535, 
 * "Elements-of-Programming":
 * 
 */
 // @lc code=start
class Solution {
    int x;
    String reversed = new StringBuilder().append(Math.abs(x)).reverse().toString();
    try {
        return (x < 0) ? Integer.parseInt(reversed) * -1 : Integer.parseInt(reversed);
    } catch (NumberFormatException e) {
        return 0;
    }
}


// @lc code=end