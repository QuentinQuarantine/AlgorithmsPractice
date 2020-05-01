"""
https://app.codesignal.com/challenge/XsSLjHmsgGXvKcfmK

Reverse the order of words in a given string sentence. You can assume that sentence does not have any leading, trailing or repeating spaces.

Example

For sentence = "Man bites dog", the output should be
reverseSentence(sentence) = "dog bites Man".

Input/Output

    [execution time limit] 4 seconds (py3)

    [input] string sentence

    A string consisting of letters and spaces.

    Guaranteed constraints:
    1 ≤ sentence.length ≤ 2 · 104.

    [output] string
"""

def reverseSentence(sentence):
    words = sentence.split(" ")
    reverseWords = ""
    length = len(words)
    for i in range(length):
        reverseWords += words[length - i - 1] + " "
    return reverseWords[:-1]

# UNIT TESTS
def testCase(fn):
    def tryCase(params, expected, name):
        result = fn(params)
        assert result == expected, "%s: params: %s; expected: %s; result: %s" % (name, params, expected, result)
    return tryCase

tc = testCase(reverseSentence)

tc("man dog", "dog man", "teste 1")