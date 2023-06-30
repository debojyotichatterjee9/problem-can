
const removeDupes = arr => {
    let tempArr = [];
    arr.forEach(element => {
        if (!tempArr.includes(element)) {
            tempArr.push(element)
        }
    });
    return tempArr;
}

// Solution 1:

const printLargestThree1 = (arr) => {
    const sortedArr = arr.sort((elem1, elem2) => {
        return elem1 - elem2
    });
    return (sortedArr.splice(sortedArr.length - 3, 3));
}
const arr1 = [10, 4, 3, 50, 23, 90];
const res1 = printLargestThree1(arr1);
console.log(res1);


// Solution 2:
// Function to print three largest elements
const printLargestThree2 = (arr) => {
    let first, second, third;
    arr = removeDupes(arr);
    arr_size = arr.length
    // There should be atleast three elements
    if (arr_size < 3) {
        return ("Invalid Input!!!");
    }

    third = first = second = -1;
    for (let i = 0; i < arr_size; i++) {
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        }

        else if (arr[i] > second) {
            third = second;
            second = arr[i];
        }

        else if (arr[i] > third)
            third = arr[i];
    }

    return ([first, second, third])
}

// Driver code
let arr2 = [10, 4, 3, 50, 23, 90, 90, 90, 90, 90, 50, 90];
let n = arr2.length;

const res = printLargestThree2(arr2, n);
console.log(res);