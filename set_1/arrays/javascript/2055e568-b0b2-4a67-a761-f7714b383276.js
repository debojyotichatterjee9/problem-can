const arr = [2, 3, 2, 4, 4, 3, 7, 1, 9, 1, 7, 23];

// Solution 1:
const findSingleOccuringElem1 = (arr) => {
    const arrayLength = arr.length;
    let count;
    let singleOccuringElems = []
    for (let i = 0; i < arrayLength; i++) {
        count = 0;
        for (let j = 0; j < arrayLength; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count === 1) {
            singleOccuringElems.push(arr[i]);
        }
    }
    return singleOccuringElems.length > 0 ? singleOccuringElems : "None";
}
const resp1 = findSingleOccuringElem1(arr);
console.log(`The element(s) which occurs only once --> ${resp1}`);