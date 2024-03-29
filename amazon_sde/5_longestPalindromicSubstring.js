/*5. Longest Palindromic Substring
Medium

Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
*/
//Solution 1:
// function longestPalindrome(s) {
//     // ll: Left index of the longest palindrome.
//     // rr: Right index of the longest palindrome.
//     let ll = 0, rr = 0;
//
//     // Iterate all palindromes with center indices
//     // [..., i, ...] or [... i, i+1, ...]
//     for (let i = 0; i < s.length; i++) {
//         for (let j of [i, i+1]) {
//             for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
//
//                 // Found a new palindrome [l, ..., i, j, ..., r]
//                 // Update the ll, rr if the newly found palindrome is longer than the
//                 // existing one.
//                 [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];
//         }
//     }
//     return s.substring(ll, rr+1);
// }
//Solution 1 without comment:
function longestPalindrome(s) {
    let ll = 0, rr = 0;

    for (let i = 0; i < s.length; i++)
        for (let j of [i, i+1])
            for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
                [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];

    return s.substring(ll, rr+1);
}
console.log(longestPalindrome("babad"));