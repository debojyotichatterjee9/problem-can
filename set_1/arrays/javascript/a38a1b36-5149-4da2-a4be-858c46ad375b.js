const arr1 = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];

// Output : [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]

// Solution 1:

const arraySortOnIndex1 = (arr1) => {
    return arr1.map((elem, index) => {
        if (elem !== index) {
            const elemToReplace = arr1.find((elem) => elem === index) || -1;
            return elemToReplace;
        }
    });
};

const resp1 = arraySortOnIndex1(arr1);
console.log(`Re-arranged array --> ${resp1}`);

// Solution 2:

function arraySortOnIndex2(arr1) {
    const arrayLength = arr1.length;
    let i, j, temp;
    for (i = 0; i < arrayLength; i++) {
        for (j = 0; j < arrayLength; j++) {
            if (arr1[j] == i) {
                temp = arr1[j];
                arr1[j] = arr1[i];
                arr1[i] = temp;
                break;
            }
        }
    }
    for (i = 0; i < arrayLength; i++) {
        // If not present
        if (arr1[i] != i) {
            arr1[i] = -1;
        }
    }
    return arr1;
}

const resp2 = arraySortOnIndex2(arr1);
console.log(`Re-arranged array --> ${resp2}`);

// Solution 3:

const arraySortOnIndex3 = (arr) => {
    let arraySet = new Set();
    let arrayLength = arr.length;

    for (let i = 0; i < arrayLength; i++) {
        arraySet.add(arr[i]);
    }

    for (let i = 0; i < arrayLength; i++) {
        arraySet.has(i) ? (arr[i] = i) : (arr[i] = -1);
    }
    return arr;
};

let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
const resp3 = arraySortOnIndex3(arr);
console.log(`Re-arranged array --> ${resp3}`);
