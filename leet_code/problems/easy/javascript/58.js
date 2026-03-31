/*
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
*/
const lengthOfLastWord1 = (input) => {
    let i = input.length - 1;
    let wordLength = 0
    while (i >= 0 && input[i] === " ") {
        i--;
    }
    while (i >= 0 && input[i] !== " ") {
        wordLength++;
        i--;
    }
    return wordLength;
}
const lengthOfLastWord2 = (input) => {
    return input.trim().split(' ').pop().length;
}
const input = "   fly me   to   the moon  ";
resp1 = lengthOfLastWord1(input);
console.log(resp1);
resp2 = lengthOfLastWord2(input);
console.log(resp2);