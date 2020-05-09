// https://app.codesignal.com/challenge/9f8eBGpmyCF4KC42h

/* 
The wicked witch has captured the prince and imprisoned him in the bottom-right corner of a dungeon! 
The dungeon consists of m × n rooms laid out in a 2D grid. 
The knight is initially positioned in the top-left room of the dungeon, 
and she must fight her way through the dungeon to rescue the prince. 
The knight has an initial health level represented by a positive integer. 
If at any point her health level drops to 0 or below, she dies immediately.

Some of the rooms in the dungeon are guarded by goblins, and the knight loses health upon entering these rooms. 
These rooms are represented by cells that contain negative integers. 
Other rooms are either empty, represented by cells that contain 0s, 
or they contain magic potions that increase the knight's health, 
represented by cells that contain positive integers. 
In order to reach the prince as quickly as possible, the knight decides to move only right or down for each step.

Write a function to determine the knight's minimum initial health so that she is able to rescue the prince.
*/

function maxDamageCourse(steps, dungeon) {
  let maxDamage = 0;
  let total = 0;
  for (let step of steps) {
    total += dungeon[step[0]][step[1]];
    if (total < maxDamage) {
      maxDamage = total;
    }
  }
  return -maxDamage + 1;
}

function dungeonGame(dungeon) {
  const result = iterate(dungeon);
  return result.maxDamage;
}

function iterate(dungeon) {
  if (dungeon.length === 1) {
    let steps = [];
    for (let j = 0; j < dungeon[0].length; j++) {
      steps.push([0, j]);
    }
    let maxDamage = maxDamageCourse(steps, dungeon);
    return { steps, maxDamage };
  }
  if (dungeon[0].length === 1) {
    let steps = [];
    for (let i = 0; i < dungeon.length; i++) {
      steps.push([i, 0]);
    }
    let maxDamage = maxDamageCourse(steps, dungeon);
    return { steps, maxDamage };
  }
  const dungeonSemColunaDaEsquerda = dungeon.map((line) => {
    const [_, ...linhaSemPrimeiraColuna] = line;
    return linhaSemPrimeiraColuna;
  });
  let andandoDireita = iterate(dungeonSemColunaDaEsquerda);
  andandoDireita.steps = [
    [0, 0],
    ...andandoDireita.steps.map((step) => [step[0], step[1] + 1]),
  ];
  andandoDireita.maxDamage = maxDamageCourse(andandoDireita.steps, dungeon);
  const [_, ...dungeonSemPrimeiraLinha] = dungeon;
  let andandoBaixo = iterate(dungeonSemPrimeiraLinha);
  andandoBaixo.steps = [
    [0, 0],
    ...andandoBaixo.steps.map((step) => [step[0] + 1, step[1]]),
  ];
  andandoBaixo.maxDamage = maxDamageCourse(andandoBaixo.steps, dungeon);
  if (andandoBaixo.maxDamage < andandoDireita.maxDamage) {
    return andandoBaixo;
  } else {
    return andandoDireita;
  }
}

export default dungeonGame;

export const testParams = [
  [
    [
      [
        [-2, -3, 4],
        [-6, -15, 0],
        [10, 25, -6],
      ],
    ],
    8,
    'test1',
  ],
  [[[[0]]], 1, 'test2'],
  [
    [
      [
        [1, -2, 3],
        [2, -2, -2],
      ],
    ],
    2,
    'test3',
  ],
  [
    [
      [
        [0, -51, -51, 51],
        [-50, -1000, -1000, -51],
        [-150, -1000, -1000, 51],
        [1000, -100, -100, 0],
      ],
    ],
    103,
    'test4',
  ],
  [
    [
      [
        [10, 4, -48, -8, -87, 9],
        [49, -100, 6, -15, 41, -99],
        [-76, -45, -26, 50, 46, 14],
        [-81, -92, 46, -62, -26, 1],
        [-44, 19, 26, -98, -49, -72],
      ],
    ],
    44,
    'test5',
  ],
  [
    [
      [
        [0, -74, -47, -20, -23, -39, -48],
        [37, -30, 37, -65, -82, 28, -27],
        [-76, -33, 7, 42, 3, 49, -93],
        [37, -41, 35, -16, -96, -56, 38],
        [-52, 19, -37, 14, -65, -42, 9],
        [5, -26, -30, -65, 11, 5, 16],
        [-60, 9, 36, -36, 41, -47, -86],
        [-22, 19, -5, -41, -8, -96, -95],
      ],
    ],
    30,
    'test6',
  ],
  [
    [
      [
        [3],
        [49],
        [38],
        [30],
        [-93],
        [-99],
        [13],
        [10],
        [6],
        [-77],
        [-83],
        [-76],
        [24],
        [-40],
        [-73],
      ],
    ],
    369,
    'test7',
  ],
  [
    [
      [
        [
          5,
          23,
          -48,
          -21,
          -72,
          -62,
          -19,
          -55,
          -3,
          -93,
          -84,
          14,
          -34,
          46,
          -82,
          -46,
          39,
          26,
          47,
          -71,
          -46,
          -3,
          -59,
          -93,
          -13,
          -72,
          19,
          -43,
          -51,
          -2,
          -6,
          -53,
          12,
          -40,
          15,
          -94,
          37,
          -3,
          -32,
          -97,
        ],
      ],
    ],
    1115,
    'test8',
  ],
];
