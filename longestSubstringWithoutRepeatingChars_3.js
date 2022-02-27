/* 3. Longest Substring Without Repeating Characters
Medium
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */

// function lengthOfLongestSubstring (s) {
//     for (let i = 0; i = s.length; i++) {
//         if (s[i] !== s[i+1]) {
//             var result = "" + s[i];
//         }
//     }
//     return result;
// }
//Example 2:
const lengthOfLongestSubstring = s => {
    // track most recent index of each letter
    const map = {};
    // track starting index of the current substring
    var left = 0;

    return s.split('').reduce((max, v, i) => {
        // starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
        left = map[v] >= left ? map[v] + 1 : left;
        // updates last recorded index of letter to the most recent index.
        map[v] = i;

        // indices of current substring is (idx - leftIdx, idx).
        // +1 because if your substring starts and ends at index 0, it still has a length of 1.
        return Math.max(max, i - left + 1);
    }, 0)
}
console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
//Example 3:
/*function lengthOfLongestSubstring(s) {
    let seen = new Set();
    let longest = 0;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
        while (seen.has(s[r])) {
            seen.delete(s[l]);
            l++;
        }
        seen.add(s[r]);
        longest = Math.max(longest, r - l + 1);
    }
    return longest;
}*/
