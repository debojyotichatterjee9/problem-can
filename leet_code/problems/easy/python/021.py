'''
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

```
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false
```
'''
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val  # Data stored in the node
        self.next = next # Reference to the next node

def array_to_list(arr):
    dummy = ListNode(0)
    cur = dummy
    for v in arr:
        cur.next = ListNode(v)
        cur = cur.next
    return dummy.next

def list_to_array(head):
    out = []
    cur = head
    while cur:
        out.append(cur.val)
        cur = cur.next
    return out
            
def mergeTwoLists(list1, list2):
    dummy = ListNode(0)
    current = dummy
    
    while list1 and list2:
        if list1.val < list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        
        current = current.next
        
    current.next = list1 if list1 else list2
    return dummy.next

list1 = array_to_list([1, 2, 4]);
list2 = array_to_list([1, 3, 4]);
res1 = mergeTwoLists(list1, list2);
print(res1);
print(list_to_array(res1));