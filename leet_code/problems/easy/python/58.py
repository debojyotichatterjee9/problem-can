"""
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6. 

Constraints:

* 1 <= s.length <= 104
* s consists of only English letters and spaces ' '.
* There will be at least one word in s.
"""


class Solution:
    def lengthOfLastWord1(self, s: str) -> int:
        word_len = 0
        stripped_string = s.strip()
        for i in range(len(stripped_string) - 1, -1, -1):
            if i >= 0 and stripped_string[i] == " ":
                break
            word_len += 1
        return word_len

    def lengthOfLastWord2(self, input: str) -> int:
        i = len(input) - 1
        word_length = 0

        while i >= 0 and input[i] == " ":
            i -= 1

        while i >= 0 and input[i] != " ":
            word_length += 1
            i -= 1
        return word_length

    def lengthOfLastWord3(self, input: str) -> int:
        return len(input.strip().split()[-1])


sol_obj = Solution()
input = "   fly me   to   the moon  "
resp1 = sol_obj.lengthOfLastWord1(input)
resp2 = sol_obj.lengthOfLastWord2(input)
resp3 = sol_obj.lengthOfLastWord3(input)
print(resp1)
print(resp2)
print(resp3)
