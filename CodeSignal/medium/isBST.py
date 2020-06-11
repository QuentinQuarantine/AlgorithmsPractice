# https://app.codesignal.com/challenge/Ki75RvRmckcnTrihG

"""
A tree is considered a binary search tree (BST) if for each of 
its nodes the following is true:

1. The left subtree of a node contains only nodes with keys less 
than the node's key.
2. The right subtree of a node contains only nodes with keys greater 
than the node's key.
3. Both the left and the right subtrees must also be binary search trees.

An empty tree (has no nodes) is also considered to be BST.

Given a binary tree, determine whether it is a BST or not.
"""


def isBST(t, left_limit=-float('inf'), right_limit=float('inf')):
    isBSTRight = True
    isBSTLeft = True
    if t:
        if t.right:
            isBSTRight = t.right.value < right_limit and t.right.value > max(
                [left_limit, t.value]) and isBST(t.right, max([left_limit, t.value]), right_limit)
        if t.left:
            isBSTLeft = t.left.value > left_limit and t.left.value < min(
                [right_limit, t.value]) and isBST(t.left, left_limit, min([t.value, right_limit]))
    return isBSTLeft and isBSTRight


testParams = [
    [{"value": -1,
      "left": {
          "value": -2,
          "left": None,
          "right": None
      },
      "right": {
          "value": -3,
          "left": None,
          "right": None
      }
      }, False, 'test1'],
    [{
        "value": 1,
        "left": {
            "value": 0,
            "left": None,
            "right": None
        },
        "right": {
            "value": 2,
            "left": None,
            "right": None
        }
    }, True, 'test2'],
    [{
        "value": 5,
        "left": {
            "value": 2,
            "left": {
                "value": 1,
                "left": None,
                "right": None
            },
            "right": {
                "value": 6,
                "left": None,
                "right": None
            }
        },
        "right": {
            "value": 7,
            "left": None,
            "right": None
        }
    }, False, 'test3'],
    [None, True, 'test4'],
    [{
        "value": 42,
        "left": None,
        "right": None
    }, True, 'test5'],
    [{
        "value": 8,
        "left": {
            "value": 8,
            "left": None,
            "right": None
        },
        "right": {
            "value": 8,
            "left": None,
            "right": None
        }
    }, False, 'test6'],
    [{
        "value": 1000,
        "left": {
            "value": 20,
            "left": {
                "value": -1000000000,
                "left": None,
                "right": {
                    "value": 1,
                    "left": None,
                    "right": {
                        "value": 2,
                        "left": None,
                        "right": None
                    }
                }
            },
            "right": {
                "value": 400,
                "left": None,
                "right": None
            }
        },
        "right": {
            "value": 3000,
            "left": None,
            "right": {
                "value": 1000000000,
                "left": {
                    "value": 3002,
                    "left": {
                        "value": 3001,
                        "left": None,
                        "right": None
                    },
                    "right": None
                },
                "right": None
            }
        }
    }, True, 'test7']
]
