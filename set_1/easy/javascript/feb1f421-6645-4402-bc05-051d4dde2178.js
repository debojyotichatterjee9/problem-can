// Solution 1:
const removeDupes = arr => {
    let tempArr = [];
    arr.forEach(element => {
        if (!tempArr.includes(element)) {
            tempArr.push(element)
        }
    });
    return tempArr;
}

const findNLargest = (arr, n) => {
    let uniqueArr = removeDupes(arr)
    let sortedArr = uniqueArr.sort((el1, el2) => {
        return el1 - el2
    });
    console.log(`Sorted unique array --> [${sortedArr}]`)
    let sortedArrLen = sortedArr.length
    return n === 1 ? sortedArr[sortedArrLen - 1] : sortedArr[sortedArrLen - n]

}

const arr1 = [407, 248, 169, 232, 371, 470, 86, 209, 465, 193]
console.log(`The input array --> [${arr1}]`);
const res1 = findNLargest(arr1,3);
console.log(res1);