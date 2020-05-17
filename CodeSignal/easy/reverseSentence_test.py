import unittest
from CodeSignal.easy.reverseSentence import testParams, reverseSentence

class TestSum(unittest.TestCase):

    def test_reverse_sentence(self):
        for [input,output, name] in testParams:
          self.assertEqual(reverseSentence(input), output, name)
