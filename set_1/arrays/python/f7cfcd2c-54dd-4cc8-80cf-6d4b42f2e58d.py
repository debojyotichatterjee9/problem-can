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


# Solution 2:

def even_odd_rearranger2(arr):
    arr_len = len(arr)
    i=-1
    j=0
    while j != arr_len:
        if arr[j] % 2 == 0:
            i += 1
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        j += 1
    return arr
    
arr2 = [8, 10, 23, 25, 28, 29, 31, 36, 44, 48]
print(f"The input array --> {arr2}")
res2 = even_odd_rearranger2(arr2)
print(f"The array after even-odd re-arrangement --> {res2}")
