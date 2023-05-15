/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns Boolean
 */
const commEleFinder = (arr1, arr2) => {
    for (elem1 of arr1){
      const found = arr2.find(elem2 => elem1 === elem2);
      if(found) {
        return true;
      }
    }
    return false
  }
  
  const arr1 = ["a", "b", "c", "d"];
  const arr2 = ["x", "y", "z", "p"];
  
  const res = commEleFinder(arr1, arr2);
  
  console.log(res);