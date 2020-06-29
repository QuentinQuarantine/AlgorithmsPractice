// https://app.codesignal.com/challenge/nHiWHspMRaJTtn9W3

/*
You have two arrays of strings, words and parts. Return an array that contains the strings from words, 
modified so that any occurrences of the substrings from parts are surrounded by square brackets [], 
following these guidelines:

If several parts substrings occur in one string in words, choose the longest one. 
If there is still more than one such part, then choose the one that appears first in the string.

Example

For words = ["Apple", "Melon", "Orange", "Watermelon"] and parts = ["a", "mel", "lon", "el", "An"], the output should be
findSubstrings(words, parts) = ["Apple", "Me[lon]", "Or[a]nge", "Water[mel]on"].

While "Watermelon" contains three substrings from the parts array, "a", "mel", and "lon", "mel" is the longest substring that appears first in the string.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string words

An array of strings consisting only of uppercase and lowercase English letters.

Guaranteed constraints:
0 ≤ words.length ≤ 104,
1 ≤ words[i].length ≤ 30.

[input] array.string parts

An array of strings consisting only of uppercase and lower English letters. Each string is no more than 5 characters in length.

Guaranteed constraints:
0 ≤ parts.length ≤ 105,
1 ≤ parts[i].length ≤ 5,
parts[i] ≠ parts[j].

[output] array.string
*/

function findSubstrings__PerformanceProblems(words, parts) {
  parts = parts.sort((a, b) => b.length - a.length)
  return words.map(word => {
    const [len, indx] = parts.reduce(
      ([bestMatchlen, bestMatchidx], part) => {
        const plen = part.length
        if (plen < bestMatchlen) {
          return [bestMatchlen, bestMatchidx]
        }
        const idx = word.indexOf(part)
        if (idx > -1 && (plen > bestMatchlen || idx < bestMatchidx)) {
          return [plen, idx]
        }
        return [bestMatchlen, bestMatchidx]
      },
      [0, 0]
    )
    return len > 0
      ? `${word.slice(0, indx)}[${word.slice(indx, indx + len)}]${word.slice(indx + len)}`
      : word
  })
}

// by using set.has we fixed the performance issues, but the code is a bit less readable/maintainable :(

export default function findSubstrings(words, parts) {
  const partsSet = {}
  for (let p of parts) {
    if (!partsSet[p.length]) {
      partsSet[p.length] = new Set()
    }
    partsSet[p.length].add(p)
  }
  const keys = Object.keys(partsSet).sort((b, a) => a - b)
  const results = []
  for (let word of words) {
    let [len, indx] = [0, 0]
    for (let j = 0; j < keys.length; j++) {
      const plen = parseInt(keys[j])
      if (plen < len) {
        break
      }
      for (let i = 0; !len && i + plen <= word.length; i++) {
        const wi = word.slice(i, i + plen)
        if (partsSet[plen].has(wi)) {
          len = plen
          indx = i
        }
      }
    }
    if (len > 0) {
      word = word.split('')
      word.splice(indx + len, 0, ']')
      word.splice(indx, 0, '[')
      results.push(word.join(''))
    } else {
      results.push(word)
    }
  }
  return results
}

export const testParams = [
  [
    [
      ['Apple', 'Melon', 'Orange', 'Watermelon'],
      ['a', 'mel', 'lon', 'el', 'An'],
    ],
    ['Apple', 'Me[lon]', 'Or[a]nge', 'Water[mel]on'],
    'test1',
  ],
  [
    [
      ['Aaaaaaaaa', 'bcdEFGh'],
      ['aaaaa', 'Aaaa', 'E', 'z', 'Zzzzz'],
    ],
    ['A[aaaaa]aaa', 'bcd[E]FGh'],
    'test2',
  ],
  [[[], ['aaaaa', 'Aaaa', 'E', 'z', 'Zzzzz', 'a', 'mel', 'lon', 'el', 'An']], [], 'test3'],
  [
    [['Aaaaaaaaa', 'bcdEFGh', 'Apple', 'Melon', 'Orange', 'Watermelon'], []],
    ['Aaaaaaaaa', 'bcdEFGh', 'Apple', 'Melon', 'Orange', 'Watermelon'],
    'test4',
  ],
  [
    [
      [
        'neuroses',
        'myopic',
        'sufficient',
        'televise',
        'coccidiosis',
        'gules',
        'during',
        'construe',
        'establish',
        'ethyl',
      ],
      [
        'aaaaa',
        'Aaaa',
        'E',
        'z',
        'Zzzzz',
        'a',
        'mel',
        'lon',
        'el',
        'An',
        'ise',
        'd',
        'g',
        'wnoVV',
        'i',
        'IUMc',
        'P',
        'KQ',
        'QfRz',
        'Xyj',
        'yiHS',
      ],
    ],
    [
      'neuroses',
      'myop[i]c',
      'suff[i]cient',
      'telev[ise]',
      'cocc[i]diosis',
      '[g]ules',
      '[d]uring',
      'construe',
      'est[a]blish',
      'ethyl',
    ],
    'test5',
  ],
  [[['abc'], ['abc']], ['[abc]'], 'test6'],
  [[['abc'], ['ABC']], ['abc'], 'test7'],
  [[['a', 'b'], ['b']], ['a', '[b]'], 'test8'],
  [
    [
      [
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaac',
      ],
      [
        'aaaaa',
        'bbbbb',
        'a',
        'aa',
        'aaaa',
        'AAAAA',
        'aaa',
        'aba',
        'aaaab',
        'c',
        'bbbb',
        'd',
        'g',
        'ccccc',
        'B',
        'C',
        'P',
        'D',
      ],
    ],
    [
      '[aaaaa]aaaaaaaaaaaaaaaaaaaaaaaab',
      '[aaaaa]aaaaaaaaaaaaaaaaaaaaaaaab',
      '[aaaaa]aaaaaaaaaaaaaaaaaaaaaaaab',
      '[aaaaa]aaaaaaaaaaaaaaaaaaaaaaaab',
      '[aaaaa]aaaaaaaaaaaaaaaaaaaaaaaab',
      '[aaaaa]aaaaaaaaaaaaaaaaaaaaaaaa',
      '[aaaaa]aaaaaaaaaaaaaaaaaaaaaaaa',
      '[aaaaa]aaaaaaaaaaaaaaaaaaaaaaaaa',
      '[aaaaa]aaaaaaaaaaaaaaaaaaaaaaaaa',
      '[aaaaa]aaaaaaaaaaaaaaaaaaaaaaaac',
    ],
    'test9',
  ],
]
