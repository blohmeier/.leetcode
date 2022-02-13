/*
see integerToRoman_12.js
 */
const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

var romanToInt = function(N) {
    let ans = ""
    for (let i = 0; N; i++)
        while (N >= rom[i]) ans += val[i], N -= rom[i]
    return ans
};
console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994