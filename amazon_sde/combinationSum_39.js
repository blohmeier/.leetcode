/*
39. Combination Sum
Medium

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Example 1:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:
Input: candidates = [2], target = 1
Output: []

Constraints:
1 <= candidates.length <= 30
1 <= candidates[i] <= 200
All elements of candidates are distinct.
1 <= target <= 500
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    // No candidates, means no results
    if (!candidates) {
        return [];
    }

    // Empty set is the only solution for target 0
    if (target === 0) {
        return [[]];
    }

    // Sort the candidates array as otherwise we could
    // come up with solution [3,2,2] instead of [2,2,3]
    candidates.sort((a,b) => { return a - b});

    // Store all possible combinations in here
    let paths = [];

    // The recursive part.
    // t is what we're looking for. This will become smaller, deeper in to the recursive calls
    // p is where we will record our current path
    // i is the index of the numbers we're considering. Once we get stuck with the 2's
    // we will increase i to try other combinations

    let find = function (t, p, i) {

        // check std out to  get a feel for the order in which we encounter 2,3,6,7
        console.log('considering:', t , p, i);

        if (t === 0) {
            // we found a valid path, so store that in the paths.
            paths.push(p);
            return;
        } else if (t < 0) {
            console.log('Dead path. Will our code actually ever get here?');
            return;
        } else {
            // don't run over the candidates array length
            // && don't try candidates that would bring target below 0
            while (i < candidates.length && t - candidates[i] >= 0) {

                // "Use" candidate[i]: Lower our target, and record the candidate in the path
                // We're cloning the path array, or it will contaminate future paths.
                find(t - candidates[i], [...p, candidates[i]], i)

                // "Lose" candidate[i]:
                // In our main example, we don't hit this path until the path of pure 2's
                // has been tried and found to lead to [2,2,2] with no candidates worth pursuing                 // further, because of the 2nd check of the while loop condition.
                i++;
            }

        }

    }

    // kick off initial case, we're looking for the original target,
    // our current path is empty, and we'll consider all candidates
    find (target, [], 0);

    return paths;
};
console.log(combinationSum([2,3,6,7],7));
console.log(combinationSum([2,3,5],8));