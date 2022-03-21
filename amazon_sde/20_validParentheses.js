/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */
// // Effort 1: JavaScript 48 ms
// var isValid = function(s) {
//     const stack = [];
//
//     for (let i = 0 ; i < s.length ; i++) {
//         let c = s.charAt(i);
//         switch(c) {
//             case '(': stack.push(')');
//                 break;
//             case '[': stack.push(']');
//                 break;
//             case '{': stack.push('}');
//                 break;
//             default:
//                 if (c !== stack.pop()) {
//                     return false;
//                 }
//         }
//     }
//
//     return stack.length === 0;
// };
// /*
// Explanation of above:
// to verify input s = "{[]}":
// Iterate over all input chars.
// IF open bracket, push it to temp array
// - 1. iteration: stack = "}"
// - 2. iteration: stack = "}]"
// ELSE (i.e., closed bracket) use "pop" to get the last element from the stack and check if it is counterpart of current char.
// - 3. iteration: stack = "}" AND "]" (pop()) matches "]" (current char)
// So, build parallel structure which then has to be a mirror of the "other half" of the "pair" they're presented in.
//  */
//Effort 2:
var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        if (map[c]) {
            stack.push(map[c])
        } else if (c !== stack.pop()) {
            return false;
        }
    }

    return !stack.length;
};
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
