const { gql } = require('apollo-server-express');
const { merge } = require('lodash');
const helos = require('./helloTest');

const typeDef = gql`
  type Query
  type Mutation
`;

const typeDefs = [typeDef, helos.typeDef];

let resolvers = {};

resolvers = merge(resolvers, helos.resolvers);

module.exports = {
  typeDefs,
  resolvers,
};
