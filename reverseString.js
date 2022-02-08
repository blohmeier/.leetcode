//Three ways. None work. Resource: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// //#1
// function reverseString(s) {
//     return s.split("").reverse().join("");
// }

// //#2
// function reverseString(s) {
//     var newString = "";
//     for (var i = s.length - 1; i >= 0; i--) {
//         newString += s[i];
//     }
//     return newString;
// }

//#3
// function reverseString(s) {
//     if (s === "") {
//         return "";
//     } else {
//         return reverseString(s.substr(1)) + s.charAt(0);
//     }
// }

//Two more ways
//#1 - 2 pointer technique with iteration
//Time complexity: O(N)
//Space complexity: O(1)

// function reverseString(s) {
//     for (let [a, b] = [0, s.length - 1]; a < b; a++, b--) {
//         [s[a], s[b]] = [s[b], s[a]]
//     }
// };

//#2 - 2 pointer technique with recursion
//Time complexity: O(N)
//Space complexity: O(N)

function reverseString (s) {
    reverse(0, s.length - 1);
    function reverse(i, j) {
        if (i >= j) return;
        [s[i], s[j]] = [s[j], s[i]];
        reverse(i + 1, j - 1);
    }
};
console.log(reverseString('hello'));
