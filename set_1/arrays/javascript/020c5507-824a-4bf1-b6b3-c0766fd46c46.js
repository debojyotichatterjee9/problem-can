// Solution 1:

const validateInput = (input) => {
    const validInputs = ["(", ")", "{", "}", "[", "]"];
    return input.every(elem => validInputs.includes(elem))
};

const checkParenthesis = val => {
    let valArr = Array.from(val);
    let result, poppedArr = [];
    if (!validateInput(valArr)) {
        return ("Input Validation Error!")
    }
    valArr.forEach((elem, index) => {

        if (elem === "(") {
            let closingIndex = val.indexOf(")")
            if (closingIndex >= 0) {
                poppedArr.push(valArr[closingIndex]);
                valArr.splice(closingIndex, 1);
            }
            else {
                result = false;
            }
        }
        if (elem === "{") {
            let closingIndex = val.indexOf("}")
            if (closingIndex >= 0) {
                poppedArr.push(valArr[closingIndex]);
                valArr.splice(closingIndex, 1);
            }
            else {
                result = false;
            }
        }
        if (elem === "[") {
            let closingIndex = val.indexOf("]")
            if (closingIndex >= 0) {
                poppedArr.push(valArr[closingIndex]);
                valArr.splice(closingIndex, 1);
            }
            else {
                result = false;
            }
        }
    });
    valArr.length === poppedArr.length ? result = "The parentheses are balanced." : result = "The parentheses are not balanced.";
    return result;
}
const [input1, input2, input3] = ["{[({})]}", "{[({})}", "{[({}M)]}"]
const resp1 = checkParenthesis(input1);
console.log(`The first input is --> ${input1}`);
console.log(resp1);
const resp2 = checkParenthesis(input2);
console.log(`The second input is --> ${input2}`);
console.log(resp2);
const resp3 = checkParenthesis(input3);
console.log(`The third input is --> ${input3}`);
console.log(resp3);