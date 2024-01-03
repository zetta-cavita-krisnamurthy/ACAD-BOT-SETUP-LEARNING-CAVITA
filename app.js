'use strict';

require('dotenv').config();
require('./utils/database');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { typeDefs, resolvers } = require('./graphql');

const app = express();

// Create an ApolloServer instance without middleware
const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: ({ req }) => ({
    // Your context configuration, loaders, etc.
  }),
});

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
