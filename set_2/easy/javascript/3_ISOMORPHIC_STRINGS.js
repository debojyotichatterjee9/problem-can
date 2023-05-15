/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    // If length of strings are not equal then
    // they are not isomorphic
    if (s.length !== t.length) {
        return false;
    }

    // Map to store the mapping between
    // characters of first string to second
    const map = new Map();

    // Set to store the already mapped
    // character of second string
    const set = new Set();

    for (let i = 0; i < s.length; i++) {

        // Taking ith char from both strings
        char1 = s.charAt(i);
        char2 = t.charAt(i);

        // If char1 has already been mapped
        if (map.has(char1) == true) {

            // Then we have to check that
            // mapped char should be same
            if (map.get(char1) !== char2) {
                return false;
            }
        }

        // If char1 is appearing for the first time
        else {

            // Check in the set that the char2
            // is already there or not
            if (set.has(char2)) {
                return false;
            }

            // If none of above condition is true
            // it means both char1 and char2 are
            // appearing for the first time
            // insert them into the map
            map.set(char1, char2);
            set.add(char2);
        }
    }
    return true;
};

const word1 = "egg";
const word2 = "add";
const result = isIsomorphic(word1, word2);
console.log(result)
