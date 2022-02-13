/*
see integerToRoman_12.js
 */
const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}

var romanToInt = function(S) {
    let ans = 0
    for (let i = S.length-1; ~i; i--) {
        let num = roman[S.charAt(i)]
        if (4 * num < ans) ans -= num
        else ans += num
    }
    return ans
};
console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994