// Solution 1:
function findNumberOfTriangles(arr) {
    let arrLength = arr.length;
    let count = 0;
    let resultantArr = [];

    for (let i = 0; i < arrLength; i++) {
        for (let j = i + 1; j < arrLength; j++) {

            for (let k = j + 1; k < arrLength; k++) {

                if (arr[i] + arr[j] > arr[k]) {
                    resultantArr.push([arr[i], arr[j], arr[k]]);
                    count++;
                }
                if (arr[i] + arr[k] > arr[j]) {
                    resultantArr.push([arr[i], arr[k], arr[j]]);
                    count++;
                }
                if (arr[k] + arr[j] > arr[i]) {
                    resultantArr.push([arr[k], arr[j], arr[i]]);
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

let arr1 = [4, 6, 3, 7];
resp1 = findNumberOfTriangles(arr1);
console.log(`The number of possible traingles are --> ${resp1.count}`);
console.log("The possible valid traingles are -->",resp1.resultantArr);
