import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import resolvers from './resolvers.js'

dotenv.config();

const app = express();

// Lecture du fichier schema.graphql
const schema = fs.readFileSync(path.join(__dirname, 'graphql/schema.graphql'), 'utf8');

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données :'));
db.once('open', () => {
  console.log('Connecté à la base de données MongoDB');
});

const server = new ApolloServer({ 
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app });

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${PORT}`);
  console.log(`GraphQL Playground disponible sur http://localhost:${PORT}/graphql`);
});
