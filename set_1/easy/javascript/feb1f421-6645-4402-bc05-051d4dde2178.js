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
const n = 3
console.log(`The input array --> [${arr1}]`);
const res1 = findNLargest(arr1, n);
console.log(`The ${n}th largest number is --> ${res1}`);


// Solution 2:
const evenOddRearranger2 = arr => {
    let arrLength = arr.length;
    let [i,j] = [-1,0];
    while (j != arrLength) {
        if (arr[j] % 2 == 0) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        j++;
    }

    return arr
}

const arr2 = [9, 18, 23, 28, 31, 32, 35, 38, 48, 49];
console.log(`The input array --> [${arr2}]`)
const res2 = evenOddRearranger2(arr2);
console.log(`The array after even-odd re-arrangement --> [${res2}]`);