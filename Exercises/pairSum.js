// Pair Sum

/*
Given an array of integers and a reference value,
find the number of distinct pairs for which it's sum is the reference value.

The pairs (x,y) and (x', y'), where x <= y and x' <= y' are considered distincts 
if (x,y) is different than (x', y').

As an example, ordering the pairs (3,2) and (2,3) the result is the same.
So the pairs are not distincts, while the pairs (2,3) and (2,4) are.

Given the array [5, 7, 9, 13, 11, 6, 6, 3, 5] and the reference value 12, 
the pairs (5, 7), (6, 6), (9, 3) e (7, 5), when summed result in 12, but 
there are only 3 distinct pairs: (5, 7), (3, 9) e (6, 6).

Find the total of distinct pairs (x, y) obtained from an array where it's sum is the reference value.

Input: 
- arr: an integers array
- k: a reference value

The first line of the input is the array length (arr.length)
The next few lines are an element of the array each (arr[i])
The last line is the reference value (k)

Example

For this given input:
7
6
6
3
9
3
5
1
12

The expected output is:
2
*/

function processItems({ items, reference }) {
  let result = 0
  const matches = new Set()
  for (let item of items) {
    if (items.includes(reference - item) && !matches.has(item)) {
      result += item === reference - item ? 1 : 0.5
      matches.add(item)
    }
  }
  return result
}

export default input => {
  const items = input
    .trim()
    .split('\n')
    .map(a => +a)
  const reference = items.pop()
  return '' + processItems({ items: items.slice(1), reference })
}

export const testParams = [[[`7\n6\n6\n3\n9\n3\n5\n1\n12`], `2`, 'test 1']]
