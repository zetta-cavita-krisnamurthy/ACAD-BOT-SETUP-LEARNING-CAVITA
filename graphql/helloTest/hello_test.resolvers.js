const { start, trigger } = require('../../cron');

async function HelloTest(parent, context) {
  return 'Generating greeting with "Hello!"';
}

async function MutationForTesting(parent, context) {
  return 'This is the mutation for testing';
}

async function triggerCronJob(parent, { cronName }, context) {
  try {
    const result = await trigger(cronName);
    return `Cron job '${cronName}' triggered successfully. Result: ${result}`;
  } catch (error) {
    console.error(`Error triggering cron job '${cronName}':`, error);
    throw new Error(`Failed to trigger cron job '${cronName}'.`);
  }
}

module.exports = {
  Query: {
    HelloTest,
  },
  Mutation: {
    MutationForTesting,
    triggerCronJob,
  },
};
