"use strict";
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