/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

// Solution 1
const findPos1 = (input,target) => {
	for(let i = 0; i < input.length; i++) {
		if(input[i] > target || input[i] === target) {
			return i;
		}
		if(input[i] < target && input[i + 1] > target) {
		  return i + 1;
		}
		if(input[i] === input[input.length - 1]) {
		  return i + 1;
		}
	}
}

const input = [1,3,5,6];
const target = 9;
resp = findPos1(input, target);
console.log(resp1);


// Solution 2
function findPos2(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // When the loop ends, left is the insertion point
    return left;
}
const input = [1,3,5,7,9,11,13,15,17,19];
const target = 4;
resp = findPos2(input, target);
console.log(resp1);