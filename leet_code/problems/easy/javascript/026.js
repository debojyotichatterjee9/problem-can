/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

const input1 = [1,1,2];
const input2 = [0,0,1,1,1,2,2,3,3,4];

function removeDuplicates1(nums) {
  if (!Array.isArray(nums)) throw new TypeError('nums must be an array');
  const n = nums.length;
  if (n === 0) return 0;

  let write = 1; // position to write next unique element
  for (let read = 1; read < n; read++) {
    if (nums[read] !== nums[read - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write;
}

const f1input1 = [1,1,2];
const f1input2 = [0,0,1,1,1,2,2,3,3,4];
const resp_1_1 = removeDuplicates1(f1input1);
const resp_1_2 = removeDuplicates1(f1input2);
console.log(resp_1_1);
console.log(resp_1_2);


const removeDuplicates2 = (nums) => {
  if (!Array.isArray(nums)) throw new TypeError('nums must be an array');
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) nums[++i] = nums[j];
  }
  return nums.length ? i + 1 : 0;
};

const f2input1 = [1,1,2];
const f2input2 = [0,0,1,1,1,2,2,3,3,4];
const resp_2_1 = removeDuplicates2(f2input1);
const resp_2_2 = removeDuplicates2(f2input2);
console.log(resp_2_1);
console.log(resp_2_2);
