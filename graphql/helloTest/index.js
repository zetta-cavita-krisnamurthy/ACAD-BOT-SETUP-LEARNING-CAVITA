const typeDef = require('./hello_test.typedef');
const resolvers = require('./hello_test.resolvers');
const HelloTestLoader = require('./hello_test.loader');
const HelloTestModel = require('./hello_test.model');

module.exports = {
  typeDef,
  resolvers,
  HelloTestLoader,
  HelloTestModel,
};
