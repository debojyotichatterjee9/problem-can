"""
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
"""

def isPalindrome_1(x):
	if x < 0:
		return false
	reverse_num = 0
	num = x
	while num:
		reverse_num = reverse_num * 10 + num % 10
		num //= 10
	return reverse_num == x


def isPalindrome_2(x):
    return str(x) == str(x)[::-1]

print(isPalindrome_1(123))
print(isPalindrome_2(123))

print(isPalindrome_1(112211))
print(isPalindrome_2(112211))

print(isPalindrome_1(112232211))
print(isPalindrome_2(112232211))