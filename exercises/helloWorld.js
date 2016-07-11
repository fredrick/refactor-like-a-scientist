'use strict';

const science = require('scientist/console');

const helloWorldConcat = (name) => {
  return 'Hello world, ' + name;
};

const helloWorldJoin = (name) => {
  return ['Hello world, '].join('');
};

const helloWorld = (name) => {
  return science('helloWorld', (experiment) => {
    experiment.use(() => helloWorldConcat(name));
    experiment.try(() => helloWorldJoin(name));
  });
};

module.exports = helloWorld;
