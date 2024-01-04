const ForTestModel = require('./for_test.model');

async function GetAllForTest(parent, context) {
  try {
    // await ForTestModel.create({ greeting: '65961573bde50b30efe47749' });
    const allHelloTest = await ForTestModel.find();
    return allHelloTest;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to retrieve data from the database.');
  }
}

async function greeting(parent, args, context) {
  if (parent.greeting) {
    return await context.loaders.HelloTestLoader.load(parent.greeting);
  }
  return null;
}

module.exports = {
  Query: {
    GetAllForTest,
  },
  ForTest: {
    greeting,
  },
};
