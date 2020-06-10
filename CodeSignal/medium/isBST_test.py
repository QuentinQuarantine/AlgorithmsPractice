import unittest
from CodeSignal.medium.isBST import testParams, isBST


class Tree(object):
    def __init__(self, x):
        self.value = x['value']
        self.left = Tree(x['left']) if x['left'] else None
        self.right = Tree(x['right']) if x['right'] else None


class TestSum(unittest.TestCase):
    def test_is_bst(self):
        for [input, output, name] in testParams:
            tree = Tree(input) if input else None
            self.assertEqual(isBST(tree), output, name)
