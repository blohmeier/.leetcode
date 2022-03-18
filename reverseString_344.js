/*344. Reverse String
Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:
    1 <= s.length <= 105
s[i] is a printable ascii character.*/


//A. Three ways. All work. Resource: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

//#1A
/*function reverseString(s) {
    return s.toString().split("").reverse().join("");
}
console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));*/

//#2A
/*function reverseString(s) {
    var newString = "";
    for (var i = s.length - 1; i >= 0; i--) {
        newString += s[i];
    }
    return newString;
}
console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));*/

//#3A
/*function reverseString(s) {
    if (s === "") {
        return "";
    } else {
        return reverseString(s.toString().substring(1)) + s.toString().charAt(0);
    }
}
console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));*/


//B. Two more ways

//#1B - 2 pointer technique with iteration
//Time complexity: O(N)
//Space complexity: O(1)
function reverseString(s) {
    for (let [a, b] = [0, s.length - 1]; a < b; a++, b--) {
        [s[a], s[b]] = [s[b], s[a]]
    }
    return s;
};
console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));

//#2B - 2 pointer technique with recursion
//Time complexity: O(N)
//Space complexity: O(N)
function reverseString (s) {
    reverse(0, s.length - 1);
    function reverse(i, j, k = 0) {
        if (i >= j) return;
        console.log("array at " + i + j + " is: " + s[i],s[j]);
        [s[i], s[j]] = [s[j], s[i]];
        reverse(i + 1, j - 1);
        console.log("array at i: " + i + " and j: " + j + " is now: " + s[j],s[i]);
        console.log(k);
        k++;
    }
};
console.log(reverseString('hello'));
console.log(reverseString("Hannah"));