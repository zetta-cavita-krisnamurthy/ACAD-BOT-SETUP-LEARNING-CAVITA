const { gql } = require('apollo-server-express');

const helloTestTypeDef = gql`
  type HelloTest {
    _id: ID
    greeting: String
    createdAt: String
  }

  type Query {
    HelloTest: String
  }

  type Mutation {
    MutationForTesting: String
    triggerCronJob(cronName: String!): String
  }
`;

module.exports = helloTestTypeDef;
