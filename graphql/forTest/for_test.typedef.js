const { gql } = require('apollo-server-express');

const forTestTypeDef = gql`
  type ForTest {
    _id: ID
    greeting: HelloTest
  }

  type Query {
    GetAllForTest: [ForTest]
  }
`;

module.exports = forTestTypeDef;
