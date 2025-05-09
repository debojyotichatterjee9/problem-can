
### 2620. 🎯 Counter
#### Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

```
Example 1:
Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
```
```
Example 2:
Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
```

### 2704. 🎯 To Be Or Not To Be
#### Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

* ###### toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
* ###### notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 
```
Example 1:
Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
```
```
Example 2:
Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
```
```
Example 3:
Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.
```

### 2665. 🎯 Couner II
#### Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

#### The three functions are:

* ###### increment() increases the current value by 1 and then returns it.
* ###### decrement() reduces the current value by 1 and then returns it.
* ###### reset() sets the current value to init and then returns it.
 
```
Example 1:
Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
```
```
Example 2:
Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
```

##### Constraints:
* `-1000 <= init <= 1000`
* `0 <= calls.length <= 1000`
* `calls[i]`` is one of `increment`, `decrement` and `reset`

### 2635. 🎯 Apply Transform over each Element in Array
#### Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. 
#### The returned array should be created such that returnedArray[i] = fn(arr[i], i).

##### Please solve it without the built-in Array.map method.

```
Example 1:
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
```
```
Example 2:
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
```
```
Example 3:
Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
```

##### Constraints:
* `0 <= arr.length <= 1000`
* `-109 <= arr[i] <= 109`
* `fn` returns an integer.

### 2634. 🎯 Filter Elements from Array
#### Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

##### The fn function takes one or two arguments:

* `arr[i]` - number from the arr
* `i - index of arr[i]`

`filteredArr` should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

##### Please solve it without the built-in Array.filter method.

 
```
Example 1:
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
```
```
Example 2:
Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
```
```
Example 3:
Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
```

##### Constraints:
* `0 <= arr.length <= 1000`
* `-109 <= arr[i] <= 109`

### 2626. 🎯 Array Reduce Transformation
#### Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

##### This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

##### Please solve it without using the built-in Array.reduce method.

 
```
Example 1:
Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
```
```
Example 2:
Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0] * nums[0] = 101
(101) + nums[1] * nums[1] = 105
(105) + nums[2] * nums[2] = 114
(114) + nums[3] * nums[3] = 130
The final answer is 130.
```
```
Example 3:
Input: 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.
```

##### Constraints:
* `0 <= nums.length <= 1000`
* `0 <= nums[i] <= 1000`
* `0 <= init <= 1000`

### 2629. 🎯 Function Composition
#### Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions. 
The function composition of `[f(x), g(x), h(x)] is fn(x) = f(g(h(x)))`.

The function composition of an empty list of functions is the identity `function f(x) = x`.
##### You may assume each function in the array accepts one integer as input and returns one integer as output.
```
Example 1:
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
```
```
Example 2:
Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
```
```
Example 3:
Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
```
##### Constraints:
* `-1000 <= x <= 1000`
* `0 <= functions.length <= 1000`
* all functions accept and return a single integer

### 2666. 🎯 Allow One Function Call
#### Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as `fn`.

Every subsequent time it is called, it should return `undefined`.

```
Example 1:
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
```
```
Example 2:
Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
```

##### Constraints:
* `calls` is a valid JSON array
* `1 <= calls.length <= 10`
* `1 <= calls[i].length <= 100`
* `2 <= JSON.stringify(calls).length <= 1000`

### 2623. 🎯 Memoize
#### Given a function fn, return a memoized version of that function.

##### A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: `sum`, `fib`, and `factorial`.

* `sum` accepts two integers `a` and `b` and returns `a + b`. Assume that if a value has already been cached for the arguments `(b, a)` where `a != b`, it cannot be used for the arguments `(a, b)`. 
* For example, if the arguments are `(3, 2)` and `(2, 3)`, two separate calls should be made.
* `fib` accepts a single integer `n` and returns `1` if `n <= 1` or `fib(n - 1) + fib(n - 2)` otherwise.
* `factorial` accepts a single integer `n` and returns `1` if `n <= 1` or `factorial(n - 1) * n` otherwise.
 
```
Example 1:
Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
Explanation:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2
```
```
Example 2:
Input:
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
Output: [2,6,2,2,6,2]
Explanation:
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // "call" - returns 2.
memoFactorial(3); // "call" - returns 6.
memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// "getCallCount" - total call count: 2
memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// "getCallCount" - total call count: 2
```
```
Example 3:
Input:
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]
Output: [8,1]
Explanation:
fib(5) = 8 // "call"
// "getCallCount" - total call count: 1
```

##### Constraints:
* `0 <= a`, `b <= 105`
* `1 <= n <= 10`
* `1 <= actions.length <= 105`
* `actions.length === values.length`
* `actions[i]` is one of `call` and `getCallCount`
* `fnName` is one of `sum`, `factorial` and `fib`

### 2637. 🎯 Promise Time Limit
### Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

#### The time limited function should follow these rules:

* If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
* If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

 
```
Example:
Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 50
Output: {"rejected":"Time Limit Exceeded","time":50}
Explanation:
const limited = timeLimit(fn, t)
const start = performance.now()
let result;
try {
   const res = await limited(...inputs)
   result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
   result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result) // Output
```
#### The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.
