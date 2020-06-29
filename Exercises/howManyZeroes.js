// How Many Zeroes

/*
Given an input composed of 2 numbers,
count how many zeroes exist between those numbers (inclusively)

You must count each zero in each number between the inputs.
The inputs are always positive between 0 and 999 
and the first one is always lower than the second one.

The first line of the file is the number of tuples to process
and each following line is a tuple (one per line)

As the example that follows:
Input: 
4
7 28
98 111
63 69
199 201
Expected Output:
2
12
0
3
*/

const cache = {
  highest: -1,
  [-1]: 0,
}

const zerosInN = n => `${n}`.split('').filter(e => e === '0').length

const zerosFrom0ToN = n => {
  let i = cache.highest + 1
  while (i <= n) {
    cache[i] = zerosInN(i) + cache[i - 1]
    i++
  }
  if (n > cache.highest) {
    cache.highest = n
  }
  return cache[n]
}

const processItem = ({ start, end }) => zerosFrom0ToN(end) - zerosFrom0ToN(start) + zerosInN(start)

const groupCases = (lines, items = []) => {
  if (!lines.length) return cases
  const itemsNumber = +lines[0]
  items.push(
    ...lines.slice(1, 1 + itemsNumber).map(l => {
      const [start, end] = l.split(' ').map(n => +n)
      return { start, end }
    })
  )
  return items
}

export default input => groupCases(input.trim().split('\n')).map(processItem).join('\n')

export const testParams = [[[`4\n7 28\n98 111\n63 69\n199 201`], `2\n12\n0\n3`, 'test 1']]
