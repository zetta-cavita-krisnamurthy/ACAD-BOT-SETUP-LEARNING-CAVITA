'use strict';

require('dotenv').config();
require('./utils/database');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { typeDefs, resolvers } = require('./graphql');
const cron = require('./cron');
const { loaders } = require('./loaders/index');

const app = express();

// Create an ApolloServer instance without middleware
const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: ({ req }) => ({
    req: req.req,
    loaders: loaders(),
  }),
});

// start CRON JOB 2 second after server started
setTimeout(() => {
  cron.start();
}, 2000);

// Start the server and set up middleware
async function startServer() {
  // Set up middleware after starting the server
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

// Call the function to start the server
startServer();
