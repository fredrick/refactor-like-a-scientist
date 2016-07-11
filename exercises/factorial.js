'use strict';

const science = require('scientist/console');

const interative = (num) => {
  let result = 1;
  if (num === 0) {
    return 1;
  } else {
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
};

const recursive = (num) => {
  if (num === 0) {
    return 1;
  } else {
    return num;
  }
};

const factorial = (num) => {
  return science('factorial', (experiment) => {
    experiment.use(() => interative(num));
    experiment.try(() => recursive(num));
  });
};

module.exports = factorial;
