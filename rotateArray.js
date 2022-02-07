// var rotate = function(nums, k) {
//     k %= nums.length;
//
//     let reverse = function(i, j){
//         while(i < j){
//             let temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;
//             i++;
//             j--;
//         }
//     }
//     reverse(0, nums.length - 1);
//     reverse(0, k - 1);
//     reverse(k, nums.length - 1);
// };
//
// console.log(rotate([1,2,3,4,5,6,7], 3));
// Above not working. Attempt 2:
// function rotate(nums, k) {
//     k %= nums.length;
//     let temp,
//         previous;
//     for (i = 0; i < k; i++) {
//         previous = nums[nums.length - 1];
//         for (j = 0; j < nums.length; j++) {
//             temp = nums[j];
//             nums[j] = previous;
//             previous = temp;
//         }
//     }
// }
// console.log(rotate([1,2,3,4,5,6,7], 3)); //
//Above not working. Attempt 3:
// function rotate (nums, k) {
//     return( nums.splice(0,0,...nums.splice(nums.length-k, k)))
// }
// console.log(rotate([1,2,3,4,5,6,7], 3)); //
//console.log(rotate());
//Above not working. Attempt 4:
var rotate = function(nums, k) {

    k = k % nums.length;

    var len = nums.length - 1;
    reverse(nums, 0, len - k);
    reverse(nums, len - k + 1 , `len`);
    reverse(nums, 0 ,`len`);


    function reverse(arr, l, r){
        while(l <  r){
            [ arr[l], arr[r] ] = [ arr[r] , arr[l] ];
            l++;
            r--;
        }
    }
    return rotate;
};
console.log(rotate([1,2,3,4,5,6,7], 3)); //
