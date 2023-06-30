// Solution 1:
function findNumberOfTriangles(arr) {
    let arrLength = arr.length;
    let count = 0;
    let resultantArr = [];

    for (let i = 0; i < arrLength; i++) {
        for (let j = i + 1; j < arrLength; j++) {

            for (let k = j + 1; k < arrLength; k++) {

                if (arr[i] + arr[j] > arr[k] && arr[i] + arr[k] > arr[j] && [arr[k], arr[j], arr[i]]) {
                    resultantArr.push([arr[i], arr[j], arr[k]]);
                    count++;
                }
            }
        }
    }
    return ({
        resultantArr,
        count
    });
}

let arr1 = [96, 87, 15, 73, 16, 78, 35, 81, 45, 37];
resp1 = findNumberOfTriangles(arr1);
console.log(`The number of possible traingles are --> ${resp1.count}`);
console.log("The possible valid traingles are -->", resp1.resultantArr);

// Solution 2:
// TODO: This solution is not working as expected
const arraySorter = arr => arr.sort((elem1, elem2) => elem1 - elem2)

const findNumberOfTriangles2 = arr => {
    let arrayLength = arr.length;
    // Sort the array elements in non-decreasing order
    let sortedArray = arraySorter(arr);
    console.log(sortedArray);

    // Initialize count of triangles
    let count = 0;

    for (let i = 0; i < arrayLength - 2; i++) {
        let k = i + 2;
        for (let j = i + 1; j < arrayLength; j++) {
            while (k < arrayLength && sortedArray[i] + sortedArray[j] > sortedArray[k])
                k++;

            if (k > j)
                count += k - j - 1;
        }
    }
    return count;
}

const arr2 = [96, 87, 15, 73, 16, 78, 35, 81, 45, 37];
const resp2 = findNumberOfTriangles2(arr2);
console.log(`The number of possible triangles --> ${resp2}`);