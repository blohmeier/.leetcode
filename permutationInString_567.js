//567. Permutation in String
/*Medium
Given two strings s1 and s2, return true if s2 contains a permutation of s1, else return false.
IOW, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Constraints:
1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/

function checkInclusion (s1, s2) {
    // in order to consider a string "x" a permutation of string "y" they must meet 2 metrics:
    //    1) they must have the same length.
    //    2) each character present must have the same amount of occurrences (or "frequency") in both strings.

    // stores the required amount of occurrences for each character to consider any substring a permutation of s1
    // this dictionary will have at most 26 elements, one entry for each alphabet letter.
    const expectedFrequencies = {};
    for (let i = 0; i < s1.length; i++) {
        expectedFrequencies[s1[i]] = (expectedFrequencies[s1[i]] || 0) + 1;
    }

    // stores the current amount of occurrences of each character while iterating
    const curFrequencies = {};

    // remaining amount of unique characters that are yet to meet the required amount of occurrences
    // defined in expectedFrequencies.
    let remainingChars = Object.keys(expectedFrequencies).length;

    // place our right pointer at the first position, and "lag" or delay our left pointer by "length of s1" slots.
    let l = 0 - (s1.length - 1);
    let r = 0;

    // O(n) time complexity
    while (r < s2.length) {
        // check if it's one of our needed characters
        if (s2[r] in expectedFrequencies) {
            // increase our current frequency for this character
            curFrequencies[s2[r]] = (curFrequencies[s2[r]] || 0) + 1;

            // check if we have arrived to our desired frequency, if so, reduce by 1 the remaining characters counter.
            if (curFrequencies[s2[r]] === expectedFrequencies[s2[r]]) {
                remainingChars--;

                // check there are no more remaining characters, if so, they have all reached the expected frequency
                if (remainingChars === 0) { return true; }
            }
        }

        // index position stored in l variable contains the first element of the current substring.
        // at this point, it's about to fall behind in the next iteration.
        // we need to update our state to keep up with this upcoming change.
        // first, make sure it's a character that we care about (of course present in s1)
        if (curFrequencies[s2[l]] > 0) {
            // check if the frequency for this character had previously reached our target.
            // if it did, we need to undo the remainingChars-- operation.
            if (curFrequencies[s2[l]] === expectedFrequencies[s2[l]]) {
                // it's now time to mark this character as 'missing' again...
                remainingChars++;
            }

            // make sure to decrement the frequency of the left character
            // once the sliding window moves to the right, it will be long gone
            curFrequencies[s2[l]]--;
        }

        // advance our sliding window
        l++;
        r++;
    }

    return false;
};
console.log(checkInclusion("ab","eidbaooo"));
console.log(checkInclusion("ab","eidboaoo"));
// above, without comments:
function checkInclusion (s1, s2) {
    const expectedFrequencies = {};
    for (let i = 0; i < s1.length; i++) {
        expectedFrequencies[s1[i]] = (expectedFrequencies[s1[i]] || 0) + 1;
    }

    const curFrequencies = {};
    let remainingChars = Object.keys(expectedFrequencies).length;
    let l = 0 - (s1.length - 1);
    let r = 0;
    while (r < s2.length) {
        if (s2[r] in expectedFrequencies) {
            curFrequencies[s2[r]] = (curFrequencies[s2[r]] || 0) + 1;
            if (curFrequencies[s2[r]] === expectedFrequencies[s2[r]]) {
                remainingChars--;
                if (remainingChars === 0) { return true; }
            }
        }
        if (curFrequencies[s2[l]] > 0) {
            if (curFrequencies[s2[l]] === expectedFrequencies[s2[l]]) {
                remainingChars++;
            }
            curFrequencies[s2[l]]--;
        }
        l++;
        r++;
    }
    return false;
};