const { gql } = require('apollo-server-express');

const helloTestTypeDef = gql`
  type Query {
    HelloTest: String
  }

  type Mutation {
    MutationForTesting: String
  }
`;

module.exports = helloTestTypeDef;
