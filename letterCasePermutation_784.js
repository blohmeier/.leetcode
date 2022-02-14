/*
784. Letter Case Permutation
Medium

Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
Return a list of all possible strings we could create. Return the output in any order.

Example 1:
Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]

Example 2:
Input: s = "3z4"
Output: ["3z4","3Z4"]

Constraints:
1 <= s.length <= 12
s consists of lowercase English letters, uppercase English letters, and digits.
 */
//DP, Backtracking both solution | Easy to Unders...

//Cleaned up:
var letterCasePermutation = function(S) {
    let out = []
    for(let i of S){
        if(out.length == 0){
            if(isAlpha(i)){
                out.push(i.toUpperCase());
                out.push(i.toLowerCase());
            }else{
                out.push(i)
            }
        }else{
            if(isAlpha(i)){
                let up = i.toUpperCase()
                let low = i.toLowerCase()
                out = attach(out, up).concat(attach(out, low));
            }else{
                out = attach(out, i);
            }
        }
    }

    return out;

};

function attach(out, ch){
    let newOut = out.slice();
    for(let i = 0; i<out.length; i++){
        newOut[i] += ch;
    }
    return newOut
}

function isAlpha(ch){
    return /[a-zA-Z]/i.test(ch)
}
console.log(letterCasePermutation("a1b2"));
console.log(letterCasePermutation("3z4"));