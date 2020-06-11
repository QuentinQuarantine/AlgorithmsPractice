# https://app.codesignal.com/challenge/MKiw354rr2YAnDdgW

"""
Given a binary tree and a number k, your task is to find the 
sum of tree nodes at level k. The binary tree is represented 
by a string tree with the format: 
(<node-value>(<left subtree>)(<right subtree>)).

Example

For tree = "(0(5(6()())(14()(9()())))(7(1()())(23()())))" and k = 2, the output should be
treeLevelSum(tree, k) = 44.

Explanation: The nodes at level 2 are 6, 14, 1, and 23, so the answer is 6 + 14 + 1 + 23 = 44.
"""


def treeLevelSum(tree, k):
    depth = -1
    sum = 0
    value = ''
    for char in tree:
        if char == '(':
            depth += 1
            if value:
                sum += int(value)
            value = ''
        elif char == ')':
            depth -= 1
        else:
            if depth == k:
                value += char
    return sum


testParams = [
    [["(0(5(6()())(14()(9()())))(7(1()())(23()())))", 2], 44, 'test1'],
    [["(3(3()())(1()()))", 1], 4, 'test2'],
    [["()", 0], 0, 'test3'],
    [["(2()())", 100000], 0, 'test4'],
    [["(0(5(6()())(4()(9()())))(7(1()())(3()())))", 2], 14, 'test5'],
    [["(3()())", 0], 3, 'test6'],
    [["(0(5()())())", 1], 5, 'test7'], ]
