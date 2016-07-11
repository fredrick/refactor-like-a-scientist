'use strict';

const sum = (arr) => {
  let sum = 0;
  for (var i of arr) {
    sum += i;
  }
  return sum;
};

module.exports = sum;
