//Binary search is a O(log n) solution used when we need to find a target value in an sorted non-decreasing array.

function BinarySearch(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target){
            return mid;
        }

        if(nums[mid] < target){
            left = mid + 1
        } else {
              right = mid - 1  
        }


    }

    return -1

}





//If we want to return the index where target would be if it existed then return left.
function BinarySearch2(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target){
            return mid;
        }

        if(nums[mid] < target){
            left = mid + 1
        } else {
              right = mid - 1  
        }


    }

    return left

}



/*
34. Find First and Last Position of Element in Sorted Array
Medium
Topics
Companies
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const binarySearch = (nums, target, isSearchingLeft) => {
        let left = 0;
        let right = nums.length - 1;
        let idx = -1;
      
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                idx = mid;
                if (isSearchingLeft) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
      
        return idx;
    };
    
    const left = binarySearch(nums, target, true);
    const right = binarySearch(nums, target, false);
    
    return [left, right];    
};



/*33. Search in Rotated Sorted Array
Medium
Topics
Companies
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1


*/




var search = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right= mid - 1;
            }
        }
    }

    return -1;
};