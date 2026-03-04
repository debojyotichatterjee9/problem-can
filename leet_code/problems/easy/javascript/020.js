/*
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
*/

function isValid_1(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}


const isValid_2 = s => {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (const char of s) {
        if (!map[char]) stack.push(char);
        else if (stack.pop() !== map[char]) return false;
    }
    return !stack.length;
};

console.log(isValid_1('()'));
console.log(isValid_1('()[]{}'));
console.log(isValid_1('(]'));
console.log(isValid_1('([])'));
console.log(isValid_1('([)]'));

console.log(isValid_2('()'));
console.log(isValid_2('()[]{}'));
console.log(isValid_2('(]'));
console.log(isValid_2('([])'));
console.log(isValid_2('([)]'));