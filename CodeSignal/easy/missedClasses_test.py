import unittest
from CodeSignal.easy.missedClasses import testParams, missedClasses


class TestSum(unittest.TestCase):

    def test_reverse_sentence(self):
        for [input, output, name] in testParams:
            self.assertEqual(missedClasses(*input), output, name)
