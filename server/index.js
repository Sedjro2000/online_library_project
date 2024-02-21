const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();

const typeDefs = fs.readFileSync(path.join(__dirname, 'graphql', 'schema.graphql'), 'utf-8');
const resolvers = require('./resolvers/index');

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);

  return { server, app };
}

startApolloServer().then(({ server, app }) => {
  const uri = process.env.MONGODB_URI;
  console.log('URL de connexion MongoDB :', uri);

  mongoose.connect(uri);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Erreur de connexion :'));
  db.once('open', () => {
    console.log('Connecté à MongoDB Atlas');
  });
}).catch(error => {
  console.error('Erreur au démarrage du serveur Apollo:', error);
});
