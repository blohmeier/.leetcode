function searchInsert(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};
function binarySearch(array, target, start, end) {
    if (start > end) return start;
    const midPoint = Math.floor((start + end)/2);
    // found target
    if (array[midPoint] === target) return midPoint;
    // search the left side
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
    // search the right side
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}
console.log(searchInsert([1,3,5,6],5)); //2
console.log(searchInsert([1,3,5,6],2)); //1
console.log(searchInsert([1,3,5,6],7)); //4
console.log(searchInsert([1,3,5,6,10,37,51,68],7)); //4