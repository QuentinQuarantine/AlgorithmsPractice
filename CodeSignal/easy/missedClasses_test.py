import unittest
from CodeSignal.easy.missedClasses import testParams, missedClasses


class TestSum(unittest.TestCase):

    def test_missed_classes(self):
        for [input, output, name] in testParams:
            self.assertEqual(missedClasses(*input), output, name)
