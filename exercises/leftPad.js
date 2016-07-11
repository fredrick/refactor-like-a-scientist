'use strict';

const science = require('scientist/console');
const lp = require('left-pad');

const leftPadWithoutDependency = (str, len, char) => {
  return str;
};

const leftPad = (str, len, char) => {
  return science('leftPad', (experiment) => {
    experiment.use(() => lp(str, len, char));
    experiment.try(() => leftPadWithoutDependency(str, len, char));
  });
};

module.exports = leftPad;
