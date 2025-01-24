/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const arrLen = arr.length;
    for(i=0; i < arrLen; i++ ) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};