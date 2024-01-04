const { HelloTestLoader } = require('../graphql/helloTest/hello_test.loader');

module.exports = {
  loaders: () => {
    return {
      HelloTestLoader: HelloTestLoader(),
    };
  },
};
