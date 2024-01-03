async function HelloTest(parent, context) {
  return 'Generating greeting with "Hello!"';
}

async function MutationForTesting(parent, context) {
  return 'This is the mutation for testing';
}

module.exports = {
  Query: {
    HelloTest,
  },
  Mutation: {
    MutationForTesting,
  },
};
