module.exports = function testCase(fn) {
  return function (params, expected, name = 'unnamed') {
    const response = fn(params);
    if (response === expected) {
      console.log(
        `${name}: running params ${params}, got expected response ${expected}`
      );
    } else {
      console.error(
        `ERROR - 🚨🚨🚨🚨 - ${name}: running params ${params}, expected ${expected} but got ${response}`
      );
    }
  };
};
