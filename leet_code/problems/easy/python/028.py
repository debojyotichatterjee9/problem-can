'''
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
'''

class Solution:
	# Solution 1
	def findNeedle1(self, haystack, needle):
		if(len(needle) > len(haystack)):
			return -1
		for i in range(len(haystack) - len(needle) + 1):
			for j in range(len(needle)):
				if(haystack[i + j] != needle[j]):
					break
			else:
				return i
		return -1
	# Solution 2
	def findNeedle2(self, haystack, needle):
		return haystack.find(needle)
		
		
haystack = 'leetcode'
needle = 'etco'

solObj = Solution()
resp1 = solObj.findNeedle1(haystack, needle)
resp2 = solObj.findNeedle2(haystack, needle)
print(resp1)
print(resp2)