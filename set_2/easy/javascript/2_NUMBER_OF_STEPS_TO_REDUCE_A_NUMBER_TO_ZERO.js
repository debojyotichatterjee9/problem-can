/**
 * @param {number} num
 * @return {number}
 */
const isEven = val => {
    return val % 2 === 0 ? true : false
}
var numberOfSteps = function (num) {
    let count = 0;
    while (num != 0) {
        if (isEven(num)) {
            num = num / 2;
        }
        else {
            num -= 1
        }
        count++
    }
    return Number(count)
};
