# Solution 1:
def remove_dupes(arr):
    return list(set(arr))

def find_n_largest(arr, n):
    unique_arr = remove_dupes(arr)
    unique_arr.sort()
    unique_arr_len = len(unique_arr)
    print(f"Unique sorted array --> {unique_arr}")
    
    return unique_arr[unique_arr_len-1] if n==1 else unique_arr[unique_arr_len-n]

arr1 = [407, 248, 169, 232, 371, 470, 86, 209, 465, 193]
n=5
print(f"the input array --> {arr1}")
res1 = find_n_largest(arr1, n)
print(f"The {n}th largest number is --> {res1}")
