# Solution 1:

def even_odd_rearranger(arr):
    arr_len = len(arr)
    temp_arr = arr_len*[None]
    index = 0
    
    for i in range(arr_len):
        if(arr[i]%2 ==0):
            temp_arr[index] = arr[i]
            index += 1
            
    for i in range(arr_len):
        if(arr[i]%2 != 0):
            temp_arr[index] = arr[i]
            index += 1
    return temp_arr

arr1 = [8, 10, 11, 17, 29, 31, 32, 35, 38, 43]
print(f"The input array --> {arr1}")
res1 = even_odd_rearranger(arr1)
print(f"The array after even-odd re-arrangement --> {res1}")
