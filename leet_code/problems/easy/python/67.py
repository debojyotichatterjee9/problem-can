"""
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
"""


class Solution:
    def addBinary1(self, a: str, b: str) -> str:
        result = []
        carry = 0
        i = len(a) - 1
        j = len(b) - 1

        while i >= 0 or j >= 0 or carry:
            digit_a = int(a[i]) if i >= 0 else 0
            digit_b = int(b[j]) if j >= 0 else 0

            total = digit_a + digit_b + carry
            result.append(str(total % 2))
            carry = total // 2

            i -= 1
            j -= 1

        return "".join(
            reversed(result)
        )  # can also use result[::-1] to reverse the string

    def addBinary2(self, a: str, b: str) -> str:
        return bin(int(a, 2) + int(b, 2))[2:]


solObj = Solution()

a = "11"
b = "1"
c = "1010"
d = "1011"

respAB1 = solObj.addBinary1(a, b)
respCD1 = solObj.addBinary1(c, d)
print(respAB1)
print(respCD1)

respAB2 = solObj.addBinary2(a, b)
respCD2 = solObj.addBinary2(c, d)
print(respAB2)
print(respCD2)
