/**
 * @param {strsElemIndxng} s
 * @param {strsElemIndxng} t
 * @return {boolean}
 */

var sElemIndxsSubsequence = function(s, t) {
    let sElemIndx = 0;
    let tElemIndx = 0;
    while (sElemIndx < s.length) {
        if(tElemIndx === t.length) {
            return false;
        }
        if(s[sElemIndx] === t[tElemIndx]) {
            sElemIndx++;
        }
        tElemIndx++;
    };
    return true;
};

const result = sElemIndxsSubsequence("aaaaaa", "bbaaaa");
console.log(result);
