/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1,
            right = n,
            middle;
        while (left < right) {
            //middle = Math.floor((left + right)/2);
            middle = ~~((left + right)/2);
            if (isBadVersion(middle)) right = middle;
            else left = middle + 1
        };
        return left;
    };
};
console.log(function(5));