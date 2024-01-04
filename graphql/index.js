const { gql } = require('apollo-server-express');
const { merge } = require('lodash');
const helos = require('./helloTest');
const forTest = require('./forTest');

const typeDef = gql`
  type Query
  type Mutation
`;

const typeDefs = [typeDef, helos.typeDef, forTest.typeDef];

let resolvers = {};

resolvers = merge(resolvers, helos.resolvers, forTest.resolvers);

module.exports = {
  typeDefs,
  resolvers,
};
