const testCase = require('../../utils/jsTestCase');

// https://app.codesignal.com/challenge/p4qArskGsNtf6ecdP

/*You are supposed to label a bunch of boxes with numbers from 0 to n, 
and all the labels are stored in the array arr. 
Unfortunately one of the labels is missing. Your task is to find it.*/

function missingNumber(arr) {
  return arr[0];
}

const tc = testCase(missingNumber);

tc([3, 1, 0], 2, 'test1');
tc([3, 1, 0], 2);
tc([3, 1, 0], 2);
tc([3, 1, 0], 2);
tc([3, 1, 0], 2);
tc([3, 1, 0], 2);
tc([3, 1, 0], 2);
