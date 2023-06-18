
### 🎯 3c3a5515-7d4b-4950-8036-4660be6ad28b
#### Given an array with all distinct elements, find the largest three elements.

```
Input: arr[] = {10, 4, 3, 50, 23, 90}
Output: 90, 50, 23
```

### 🎯 feb1f421-6645-4402-bc05-051d4dde2178
#### Given an array of integers, our task is to write a program that efficiently finds the nth largest element present in the array. 

```
Input: arr[] = {12, 35, 1, 10, 34, 1}
Input: n = 3
Output: The third largest element is 12.
Explanation: The largest element of the 
array is 35 and the second 
largest element is 34 and the third largest is 12
```
### 🎯 d884d311-a562-4321-8e4f-1bf6bde749c5
#### Given a sorted array of positive integers, rearrange the array alternately i.e first element should be a maximum value, at second position minimum value, at third position second max, at fourth position second min, and so on. Rearrange an array in maximum minimum form using Two Pointer Technique.

```
Input: arr[] = {1, 2, 3, 4, 5, 6, 7} 
Output: arr[] = {7, 1, 6, 2, 5, 3, 4}

Input: arr[] = {1, 2, 3, 4, 5, 6} 
Output: arr[] = {6, 1, 5, 2, 4, 3} 
```
### 🎯 f7cfcd2c-54dd-4cc8-80cf-6d4b42f2e58d
#### Given an array arr[] of integers, segregate even and odd numbers in the array. Such that all the even numbers should be present first, and then the odd numbers.

```
Input: arr[] = [1, 9, 5, 3, 2, 6, 7, 11]
Output: [2, 6, 5, 3, 1, 9, 7, 11]

Input: arr[] = [1, 3, 2, 4, 7, 6, 9, 10]
Output:  [2, 4, 6, 10, 7, 1, 9, 3]
```

### 🎯 9a61c304-d6f7-40cb-a057-1aa93c25c865
#### Given an array arr[] of size N, the task is to rotate the array by d position to the left.

```
Input:  arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
Output: 3, 4, 5, 6, 7, 1, 2
Explanation: If the array is rotated by 1 position to the left, 
it becomes {2, 3, 4, 5, 6, 7, 1}.
When it is rotated further by 1 position,
it becomes: {3, 4, 5, 6, 7, 1, 2}

Input: arr[] = {1, 6, 7, 8}, d = 3
Output: 8, 1, 6, 7
```

### 🎯 020c5507-824a-4bf1-b6b3-c0766fd46c46
#### Write a function which takes only parentheses (curly {}, square [], or round ()). It should check that all parentheses in provided string is balanced or not. Simply it should check if there's an opening parentheses then it should have closing parentheses.

```
Input: string_val1 = "{[({})]}"
First output: The parentheses are balanced.
Input: string_val2 = "{[({})}"
Second output: The parentheses are not balanced.
Input: string_val3 = "{[({}M)]}"
Second output: Input Validation Error!
```

### 🎯 7ded2b05-0eee-4b97-b978-4cdf8d9bf695
#### Given an unsorted array of integers, sort the array into a wave array. An array arr[0..n-1] is sorted in wave form if: arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] ... and so on.

```
Input:  arr[] = {10, 5, 6, 3, 2, 20, 100, 80}
Output: arr[] = {10, 5, 6, 2, 20, 3, 100, 80} 
Input: arr[] = {20, 10, 8, 6, 4, 2}
Output: arr[] = {20, 8, 10, 4, 6, 2}
```

### 🎯 d03b9402-989a-4934-9b9f-c8f2bb839f4e
#### Given an unsorted array of positive integers, find the number of triangles that can be formed with three different array elements as three sides of triangles. For a triangle to be possible from 3 values, the sum of any of the two values (or sides) must be greater than the third value (or third side). 

```
Input:  arr[] = [4, 6, 3, 7]
Output: arr[] = [[3, 4, 6], [4, 6, 7], [3, 6, 7]] 
Input: arr[] = [10, 21, 22, 100, 101, 200, 300]
Output: arr[] = [[10, 21, 22], [21, 100, 101], [22, 100, 101], 
[10, 100, 101], [100, 101, 200], [101, 200, 300]]
```