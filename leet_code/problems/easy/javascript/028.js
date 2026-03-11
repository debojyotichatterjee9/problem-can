/*
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

*/

// Solution 1
const findNeedle1 = (haystack, needle) => {
	if (needle.length > haystack.length)
	return -1;
	
	for(let i = 0; i < haystack.length - needle.length; i++) {
		let found = true;
		for(let j = 0; j < needle.length; j++) {
			if(haystack[i + j] !== needle[j]) {
				found = false;
				break;
			}
		}
		if(found) {
			return i;
		}
	}
	return -1;
}

const haystack1 = 'sadbutsad';
const needle1 = 'sad';
const resp1 = findNeedle1(haystack1, needle1);
console.log(resp1);


// Solution 2
const findNeedle2 = (haystack, needle) => {
	return haystack.indexOf(needle);
}

const haystack2 = 'leetcode';
const needle2 = 'etco';
const resp2 = findNeedle2(haystack2, needle2);
console.log(resp2);



// Advanced Solution (KMP Algorithm) - For Reference

function findNeedleKMP(haystack, needle) {
    if (needle.length === 0) return 0;
    
    // Build LPS (Longest Proper Prefix which is also Suffix) array
    const lps = new Array(needle.length).fill(0);
    let len = 0;
    let i = 1;
    
    while (i < needle.length) {
        if (needle[i] === needle[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    
    // Search using LPS
    let j = 0; // index for needle
    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) {
            j = lps[j - 1];
        }
        if (haystack[i] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i - needle.length + 1;
        }
    }    
    return -1;
}