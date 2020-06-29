// Square Root Approximation

/* 
Given a positive number N >= 1, estimate it's square root (X) by applying the following algorithm
0. e = 1e-5 (This is the algorithm precision, the lower the more precise)
1. Have an interval that starts at 0 (S=0) and ends in N (E=N)
2. Take it's mean (M) and if 
  2.0 E-S <= epsillon, M is a good enough approximation
  2.1 M*M > E means that X < M, so apply the same process updating E=M
  2.2 M*M < E means that X > M, so apply the same process updating S=M
*/

const e = 1e-5

const calcMean = ({ S, E }) => S + (E - S) / 2

function processLine(linha, S = 0, E = linha) {
  const M = calcMean({ S, E })
  if (E - S <= e) return M.toFixed(3)
  return M * M > linha ? processLine(linha, S, M) : processLine(linha, M, E)
}

export default function (input) {
  const lines = input.trim().split('\n')
  return lines.map(number => processLine(+number)).join('\n')
}

export const testParams = [
  [
    [`2\n3\n4\n5\n6\n7\n8\n9\n10`],
    `1.414\n1.732\n2.000\n2.236\n2.449\n2.646\n2.828\n3.000\n3.162`,
    'test 1',
  ],
]
