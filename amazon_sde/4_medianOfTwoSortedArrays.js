/*
4. Median of Two Sorted Arrays
Hard
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106*/
//First solution - works in browser, no result here.
/*var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
    let x = nums1.length
    let y = nums2.length
    let low = 0, high = x
    while(low <= high) {
        const partitionX = (high + low) >> 1
        const partitionY = ((x + y + 1) >> 1) - partitionX

        const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
        const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]

        const minX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
        const minY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY ]

        if(maxX <= minY && maxY <= minX) {
            const lowMax = Math.max(maxX, maxY)
            if( (x + y) % 2 == 1)
                return lowMax
            return (lowMax + Math.min(minX, minY)) / 2
        } else if(maxX < minY) {
            low = partitionX + 1
        } else
            high = partitionX - 1
    }
};*/
//Second solution
var findMedianSortedArrays = function(nums1, nums2) {
    //find the smallest length array
    const len1 = nums1.length;
    const len2 = nums2.length;

    //swap if len1>len2
    if(len1 > len2) return findMedianSortedArrays(nums2, nums1);

    //find high and low
    let lo = 0;
    let hi = len1;

    while(lo <= hi) {

        //find cut1 and cut2
        let cut1 = Math.floor((lo+hi)/2);
        let cut2 = Math.floor((len1+len2)/2) - cut1;

        //find l1 , l2, r1, r2
        let l1 = (cut1 === 0 ? Number.NEGATIVE_INFINITY : nums1[cut1-1]);
        let l2 = (cut2 === 0 ? Number.NEGATIVE_INFINITY : nums2[cut2-1]);
        let r1 = (cut1 === len1 ? Number.MAX_VALUE : nums1[cut1]);
        let r2 = (cut2 === len2 ? Number.MAX_VALUE : nums2[cut2]);

        //loop again if l1>r2 || l2>r1
        if(l1>r2) hi = cut1-1;
        else if(l2>r1) lo = cut1+1;
        else {

            //return median for even and odd
            if((len1+len2)%2 === 0) return (Math.max(l1,l2) + Math.min(r1,r2))/2
            else return (Math.min(r1,r2))
        }
    }
    return -1;

};
console.log(findMedianSortedArrays([1,3],2));