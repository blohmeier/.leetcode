//77. Combinations
/*Medium. Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
You may return the answer in any order.

Example 1:
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

Example 2:
Input: n = 1, k = 1
Output: [[1]]

Constraints:
1 <= n <= 20
1 <= k <= n
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let out = comb(k, n);
    //console.log(out);
    return out;
};
function comb(max, n, out = [], curr = [], index = 1){
    if(curr.length===max) {
        out.push(curr);
        return [];
    } else {
        while(index<=n){
            comb(max, n, out, [...curr, index], ++index);
        }
        return out;
    }
}
console.log(combine(4,2));