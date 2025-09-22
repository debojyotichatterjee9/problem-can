/*
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
*/

const arr1 = ["flower","flow","flight"];
const arr2 = ["dog","racecar","car"];

function longestCommonPrefix_1(strs) {
    if (strs.length === 0) return "";
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
}


const longestCommonPrefix_2 = strs => {
    if (!strs.length) return "";
    return strs.reduce((prefix, str) => {
        while (str.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
        return prefix;
    }, strs[0]);
};


console.log(longestCommonPrefix_1(arr1));
console.log(longestCommonPrefix_1(arr2));

console.log(longestCommonPrefix_2(arr1));
console.log(longestCommonPrefix_2(arr2));