module.exports = function testCase(fn) {
  return function (params, expected, name = 'unnamed') {
    const response = fn(...params);
    if (JSON.stringify(response) === JSON.stringify(expected)) {
      console.log(
        `${name}: running params ${params}, got expected response ${expected}`
      );
    } else {
      throw new Error(
        `ERROR - 🚨🚨🚨🚨 - ${name}: running params ${params}, expected ${expected} but got ${response}`
      );
    }
  };
};
