# Solution 1:
def validate_input(arr):
    valid_inputs = ["(", ")", "{", "}", "[", "]"]
    return all(elem in valid_inputs  for elem in arr)
def check_parenthesis(val):
    val_arr = []
    val_arr[:0] = val
    result, popped_arr = None, [];
    if(not validate_input(val_arr)):
        return ("Input Validation Error!")
    for i, elem in enumerate(val_arr):
        if(elem == "("):
            closing_index = val_arr.index(")") if "(" in val_arr else -1
            if closing_index >=0:
                popped_arr.append(val_arr[closing_index])
                del val_arr[closing_index]
            else:
                result = False
        if(elem == "{"):
            closing_index = val_arr.index("}") if "{" in val_arr else -1
            if closing_index >=0:
                popped_arr.append(val_arr[closing_index])
                del val_arr[closing_index]
            else:
                result = False
        if(elem == "["):
            closing_index = val_arr.index("]") if "]" in val_arr else -1
            if closing_index >=0:
                popped_arr.append(val_arr[closing_index])
                del val_arr[closing_index]
            else:
                result = False
    result = "The parenthesis are balanced." if len(val_arr) == len(popped_arr) else "The parenthesis are not balanced"
    return result
    

input1, input2, input3 = "{[({})]}", "{[({})}", "{[({}M)]}"
resp1 = check_parenthesis(input1)
print(f"The first input is --> {input1}")
print(resp1)
resp2 = check_parenthesis(input2)
print(f"The second input is --> {input2}")
print(resp2)
resp3 = check_parenthesis(input3)
print(f"The third input is --> {input3}")
print(resp3)

