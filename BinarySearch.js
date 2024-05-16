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