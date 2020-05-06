const testCase = require('../../utils/jsTestCase');

// https://app.codesignal.com/challenge/p4qArskGsNtf6ecdP

/*You are supposed to label a bunch of boxes with numbers from 0 to n, 
and all the labels are stored in the array arr. 
Unfortunately one of the labels is missing. Your task is to find it.*/

function missingNumber(arr) {
  let i = 0;
  while (arr.includes(i)) {
    i++;
  }
  return i;
}

const tc = testCase(missingNumber);

tc([3, 1, 0], 2, 'simple test');
tc([0], 1, 'single item');
tc([2, 1], 0, 'missing first');
tc([1, 0], 2, 'missing last');
tc([3, 1, 2], 0, 'missing first, 3 items');
tc([5, 2, 1, 6, 3, 0], 4, 'more items');
tc(
  [
    44,
    26,
    34,
    25,
    23,
    42,
    0,
    43,
    38,
    14,
    47,
    19,
    49,
    6,
    16,
    41,
    24,
    35,
    10,
    4,
    32,
    5,
    8,
    15,
    31,
    3,
    46,
    22,
    2,
    30,
    28,
    37,
    1,
    21,
    39,
    45,
    9,
    48,
    36,
    17,
    7,
    27,
    18,
    29,
    13,
    40,
    11,
    20,
    12,
  ],
  33,
  'loooooong list'
);
