// This is the input:
const input = [10, 4, 3, 50, 23, 90]

// Solution 1:
const arr = input;
const sortedArr = arr.sort((elem1, elem2) => {
    return elem1 - elem2
});

console.log(sortedArr.splice(sortedArr.length - 3, 3))

// Solution 2:
