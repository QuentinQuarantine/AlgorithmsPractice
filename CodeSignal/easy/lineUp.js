// https://app.codesignal.com/challenge/niL5z2ZY5DPuHGiro

/* To prepare his students for an upcoming game, 
the sports coach decides to try some new training drills. 
To begin with, he lines them up and starts with the following warm-up exercise: 
when the coach says 'L', he instructs the students to turn to the left. 
Alternatively, when he says 'R', they should turn to the right. 
Finally, when the coach says 'A', the students should turn around.

Unfortunately some students (not all of them, but at least one) can't tell left from right, 
meaning they always turn right when they hear 'L' and left when they hear 'R'. 
The coach wants to know how many times the students end up facing the same direction.

Given the list of commands the coach has given, 
count the number of such commands after which the students will be facing the same direction. */

function lineUp(commands) {
  let positionUsersWhoKnow = 0;
  let positionUsersWhoDontKnow = 0;
  let result = 0;
  commands.split('').forEach((c) => {
    positionUsersWhoKnow =
      (positionUsersWhoKnow + 4 + (c === 'L' ? 1 : c === 'R' ? -1 : 0)) % 4;
    positionUsersWhoDontKnow =
      (positionUsersWhoDontKnow + 4 + (c === 'L' ? -1 : c === 'R' ? 1 : 0)) % 4;
    positionUsersWhoKnow === positionUsersWhoDontKnow && result++;
  });
  return result;
}

export default lineUp;

export const testParams = [
  [['LLARL'], 3, 'test 1'],
  [['RLR'], 1, 'test 2'],
  [[''], 0, 'test 3'],
  [['L'], 0, 'test 4'],
  [['A'], 1, 'test 5'],
  [['AAAAAAAAAAAAAAA'], 15, 'test 6'],
  [['RRRRRRRRRRLLLLLLLLLRRRRLLLLLLLLLL'], 16, 'test 7'],
  [['AALAAALARAR'], 5, 'test 8'],
];
