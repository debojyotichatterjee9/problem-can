"""
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

```
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false
```
"""

def isValid_1(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    
    return not stack


def isValid_2(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    return not any(
        char in mapping and (not stack or stack.pop() != mapping[char])
        or char not in mapping and stack.append(char)
        for char in s
    ) and not stack


def isValid_3(s):
    while '()' in s or '{}' in s or '[]' in s:
        s = s.replace('()', '').replace('{}', '').replace('[]', '')
    return not s


print(isValid_1('()'));
print(isValid_1('()[]{}'));
print(isValid_1('(]'));
print(isValid_1('([])'));
print(isValid_1('([)]'));

print(isValid_3('()'));
print(isValid_3('()[]{}'));
print(isValid_3('(]'));
print(isValid_3('([])'));
print(isValid_3('([)]'));

print(isValid_2('()'));
print(isValid_2('()[]{}'));
print(isValid_2('(]'));
print(isValid_2('([])'));
print(isValid_2('([)]'));