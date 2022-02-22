"use strict";
/*
557. Reverse Words in a String III
Easy
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD"

Constraints:
1 <= s.length <= 5 * 10^4
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
 */

//First attempt
function reverseWords(s) {
    let res = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            res += word + c;
            word = '';
            console.log("white space ...");
            console.log("word is: " + word);
            console.log("c is: " + c);
            console.log("res is: " + res + "\n\n");
        } else {
            word = c + word;
            console.log("non-whitespace ...");
            console.log("c is: " + c);
            console.log("word is : " + word + "\n\n");
        }
    }
    return res + word;
};
console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));

//Second attempt (NOT working)
/*
function reverseWords (s) {
    reverse(0, s.length - 1);
    function reverse(i, j) {
        if (i >= j) return;
        [s[i], s[j]] = [s[j], s[i]];
        reverse(i + 1, j - 1);
    }
};
console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));*/
