# Problem Can

### 1. RUNNING_SUM_OF_1D_ARRAY
Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.

Return the running sum of `nums`.

Example:
```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```
Constraints:

* 1 <= nums.length <= 1000
* -10^6 <= nums[i] <= 10^6

### 2. NUMBER_OF_STEPS_TO_REDUCE_A_NUMBER_TO_ZERO
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example:
```
Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.
```
### 3. ISOMORPHIC_STRINGS

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example:

```
Input: s = "egg", t = "add"
Output: true

Input: s = "foo", t = "bar"
Output: false

Input: s = "paper", t = "title"
Output: true
```

### 4. COMMON_ELEMENTS_IN_ARRAY

Given two arrays arr1 and arr2, determine if they are have any common elements.


Example:

```
Input: arr1 = ["a", "b", "c", "d"]; arr2 = ["x", "y", "z", "p"];
Output: false

Input: arr1 = ["a", "b", "c", "d"]; arr2 = ["x", "y", "z", "a"];
Output: true

```
### 5. STRING_SUBSEQUENCE
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

```
Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

Example 3:
Input: s = "aaaaaa", t = "bbaaaa"
Output: false
```

### 99. LINKED_LIST_IMPLEMENTATION
### 99. BINARY_TREE_IMPLEMENTATION
### 99. GRAPH_IMPLEMENTATION