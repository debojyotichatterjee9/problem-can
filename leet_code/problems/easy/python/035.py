"""
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
"""

from typing import List
import bisect


class Solution:
    def findPos1(self, nums: List[int], target: int) -> int:
        for i in range(len(nums)):
            if nums[i] >= target:
                return i
            if i + 1 < len(nums) and nums[i] < target < nums[i + 1]:
                return i + 1
        return len(nums)

    def findPos2(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return left

    def findPos3(self, nums: List[int], target: int) -> int:
        return bisect.bisect_left(nums, target)


nums = [1, 3, 5, 6]
target = 4
solObj = Solution()
resp = solObj.findPos1(nums, target)
print(resp)
