/*
56. Merge Intervals
Medium

Given an array of intervals where intervals[i] = [start_sub_i, end_sub_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= start_sub_i <= end_sub_i <= 104
 */
//Effort 1
/*var merge = function(intervals) {
    if(!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for(let [start, end] of intervals) {
        if(start <= result[result.length - 1][1]) {
            const [startPrev, endPrev] = result.pop();
            result.push([startPrev, Math.max(end, endPrev)]);
        } else result.push([start, end]);
    }
    return result;
};*/
//Effort 2
var merge = function (intervals) {
    intervals.sort(([a], [c]) => a - c);

    let i = 1;

    while (i < intervals.length) {
        const [a, b] = intervals[i - 1];
        const [c, d] = intervals[i];

        if (b >= c) intervals.splice(i - 1, 2, [a, Math.max(b, d)]);
        else i++;
    }

    return intervals;
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));