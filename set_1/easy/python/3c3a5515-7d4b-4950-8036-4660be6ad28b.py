
# Solution 1:
def print_largest_three(list):
    list.sort()
    list_len = len(list)
    return list[list_len-3:list_len]

list1 = [ 11, 65, 193, 36, 209, 664, 32 ];
res1 = print_largest_three(list1)
print(res1)

# Solution 2:
