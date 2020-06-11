import unittest
from CodeSignal.medium.treeLevelSum import testParams, treeLevelSum


class TestSum(unittest.TestCase):
    def test_tree_level_sum(self):
        for [input, output, name] in testParams:
            self.assertEqual(treeLevelSum(*input), output, name)
