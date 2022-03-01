//784. Letter Case Permutation
/* Medium. Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
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

//Effort 1: DP, Backtracking both solution | Easy to Unders... | working
var letterCasePermutation = function(S) {
    return permut(S, 0);
};


function permut(str, pos, out = [], curr= ""){
    if(pos===str.length || curr.length===str.length){
        out.push(curr);
    }
    else{
        if(isAlpha(str[pos])){
            let up = curr + str[pos].toUpperCase();
            let low = curr + str[pos].toLowerCase();
            permut(str, pos+1, out, up);
            permut(str, pos+1, out, low);
        }
        else{
            permut(str, pos+1, out, curr + str[pos]);
        }

    }
    return out;
}

function isAlpha(ch){
    return /[a-zA-Z]/i.test(ch)
}


// #2: DP solution
// var letterCasePermutation = function(S) {
//     return permut(S);
// };
//
//
// function permut(str, out = []){
//     str = str.split("");
//     let till = ""
//     for(let i of str){
//         if(out.length===0){
//             if(isAlpha(i)){
//                 out.push(i.toUpperCase());
//                 out.push(i.toLowerCase());
//             }
//             else{
//                 out.push(i);
//             }
//         }
//         else{
//             let alpha = isAlpha(i);
//             if(alpha){
//                 let up = i.toUpperCase()
//                 let low = i.toLowerCase()
//                 out = attach(out, up).concat(attach(out, low));
//                 out.push(till + up);
//                 out.push(till + low);
//             }
//             else{
//                 out = attach(out, i);
//                 out.push(till + i);
//             }
//
//         }
//         till += i;
//     }
//     let set = new Set(out);
//     return Array.from(set);
// }
//
// function attach(out, ch){
//     let newOut = [...out];
//     for(let i = 0; i<out.length; i++){
//         newOut[i] += ch;
//     }
//     return newOut
// }
//
// function isAlpha(ch){
//     return /[a-zA-Z]/i.test(ch)
// }
//Cleaned up:
/*var letterCasePermutation = function(S) {
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
}*/
console.log(letterCasePermutation("a1b2"));
console.log(letterCasePermutation("3z4"));