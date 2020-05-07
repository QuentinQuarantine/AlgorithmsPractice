const testCase = require('../../utils/jsTestCase');

// https://app.codesignal.com/challenge/XFqYfTvSqG6EXAk7M

/*
Imagine a standard chess board with only two white and two black knights placed in their standard starting positions: 
the white knights on b1 and g1; the black knights on b8 and g8.

There are two players: one plays for white, the other for black. 
During each move, the player picks one of his knights and moves it to an unoccupied square according to standard chess rules. 
Thus, a knight on d5 can move to any of the following squares: b6, c7, e7, f6, f4, e3, c3, and b4, 
as long as it is not occupied by either a friendly or an enemy knight.

The players take turns in making moves, starting with the white player. 
Given the configuration p of the knights after an unspecified number of moves, 
determine whose turn it is.

[input] string p
The positions of the four knights, starting with white knights, separated by a semicolon, in the chess notation.

[output] boolean
true if white is to move, false otherwise.

Example

For p = "b1;g1;b8;g8", the output should be
whoseTurn(p) = true.

The configuration corresponds to the initial state of the game. Thus, it's white's turn
*/

const ASCII_BEFORE_A = 'a'.charCodeAt(0) - 1;
const ASCII_BEFORE_1 = '1'.charCodeAt(0) - 1;

const parsePositions = (p) => {
  const positions = p.split(';');
  return positions.map((position) => [
    -ASCII_BEFORE_A + position.charCodeAt(0),
    -ASCII_BEFORE_1 + position.charCodeAt(1),
  ]);
};

const colorOnTheBoard = ([x, y]) => (x + y) % 2;

const areSameColorOnTheBoard = ([p1, p2]) =>
  colorOnTheBoard(p1) === colorOnTheBoard(p2);

function whoseTurn(p) {
  const [w1, w2, b1, b2] = parsePositions(p);
  const isWhitePiecesOverTheSameColor = areSameColorOnTheBoard([w1, w2]);
  const isBlackPiecesOverTheSameColor = areSameColorOnTheBoard([b1, b2]);
  return isBlackPiecesOverTheSameColor === isWhitePiecesOverTheSameColor;
}

const tc = testCase(whoseTurn);

tc('b1;g1;b8;g8', true, 'test1');
tc('c3;g1;b8;g8', false, 'test2');
tc('g1;g2;g3;g4', true, 'test3');
tc('f8;h1;f3;c2', false, 'test4');
tc('a5;d3;c4;h3', false, 'test5');
tc('f8;g1;h2;h5', false, 'test6');
tc('a6;g1;a5;a4', true, 'test7');
tc('g5;h1;a2;h5', false, 'test8');
tc('e1;f7;f8;b4', false, 'test9');
tc('g2;d7;h5;h1', true, 'test10');
