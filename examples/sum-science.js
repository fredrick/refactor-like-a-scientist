'use strict';

const science = require('scientist/console');

const iterative = (arr) => {
  let sum = 0;
  for (var i of arr) {
    sum += i;
  }
  return sum;
};

const functional = (arr) => {
  return arr.reduce((a, b) => { return a + b });
};

const sum = (arr) => {
  return science('sum', (experiment) => {
    experiment.use(() => iterative(arr));
    experiment.try(() => functional(arr));
  });
};

module.exports = sum;
