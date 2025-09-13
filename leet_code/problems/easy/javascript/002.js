/*
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
*/

function isPalindrome_1(x) {
    if (x < 0) return false;
    let reversed = 0;
    let num = x;
    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversed === x;
}

const isPalindrome_2 = x => x >= 0 && x === Number(x.toString().split('').reverse().join(''));

console.log(isPalindrome_1(123))
console.log(isPalindrome_2(123))
console.log(isPalindrome_1(112211))
console.log(isPalindrome_2(112211))
console.log(isPalindrome_1(112232211))
console.log(isPalindrome_2(112232211))