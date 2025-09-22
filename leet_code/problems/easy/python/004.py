"""
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
```
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```
"""

list1 = ["flower","flow","flight"];
list2 = ["dog","racecar","car"]

def longestCommonPrefix_1(strs):
    if not strs:
        return ""
    prefix = ""
    for i in range(len(strs[0])):
        char = strs[0][i]
        for s in strs[1:]:
            if i >= len(s) or s[i] != char:
                return prefix
        prefix += char
    return prefix



def longestCommonPrefix_2(strs):
    if not strs:
        return ""
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix



print(longestCommonPrefix_1(list1));
print(longestCommonPrefix_1(list2));

print(longestCommonPrefix_2(list1));
print(longestCommonPrefix_2(list2));
