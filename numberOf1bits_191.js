//191. Number of 1 Bits
/*Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Example 1:
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has three '1' bits.

Example 2:
Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has one '1' bit.
Example 3:

Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has thirty one '1' bits.

Constraints:
The input must be a binary string of length 32.
Follow up: If this function is called many times, how would you optimize it?*/
//Effort 1:
var hammingWeight = function(n) {
    let num_of_1s = 0;
    for( let i=0 ; i < 32; i++ ){
        num_of_1s += n & 1;
        n >>= 1;
    }
    return num_of_1s
}
console.log(hammingWeight(00000000000000000000000000001011));