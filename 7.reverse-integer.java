/*
 * @lc app=leetcode id=7 lang=java
 *
 * [7] Reverse Integer
 * reference: page 67 of 535, "Elements-of-Programming"


// @lc code=start 

class Solution {
    public static int reverse(int x) {
        int result = 0;
        int xRemaining = Math.abs(x);
        //while (xRemaining != 0) {
        result = result * 10 + xRemaining % 10;
        xRemaining /= 10;
        }
        return x < 0 ? -result : result; 
    }
}

*/

// "Familiar with Java Standard Library" solution:
String reversed = new StringBuilder().append(Math.abs(x)).reverse().toString();
try {
    return (x < 0) ? Integer.parseInt(reversed) * -1 : Integer.parseInt(reversed);
} catch (NumberFormatException e) {
    return 0;
}

//Brute force??:
/*
class Solution {
    public static void main(String args[]) {
		int x = 0; //= 123;
		String strx = String.valueOf(x);
		String revStrx = "";
		System.out.println("Int as string is: "+strx);
		for (int i = strx.length() - 1; i >= 0; i--){
			revStrx += strx.charAt(i);
			}
	        System.out.println("Reversed string is:");
	        System.out.println(revStrx);
	}
}
*/
// @lc code=end