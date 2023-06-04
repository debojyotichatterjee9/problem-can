// Solution 1:

const validateInput = (input) =>{
    const validInputs = ["(", ")", "{", "}", "[", "]"];
  return input.every(elem =>validInputs.includes(elem))
};

const checkParenthesis = val => {
    let valArr = Array.from(val);
    let result, poppedArr = [];
    if(!validateInput(valArr)) {
      return("Input Validation Error!")
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
    valArr.length === poppedArr.length ? result = "The parentheses are balanced." : result = "The parentheses are not balanced."
    return result
}

const resp1 = checkParenthesis("{[({})]}");
console.log(resp1);
const resp2 = checkParenthesis("{[({})}");
console.log(resp2);
const resp3 = checkParenthesis("{[({}M)]}");
console.log(resp3);