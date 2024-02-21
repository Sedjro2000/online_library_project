const bookResolvers = require('./bookResolvers');
const userResolvers = require('./userResolvers');
const borrowResolvers = require('./borrowResolvers');

const resolvers = {
  Query: {
    ...bookResolvers.Query,
    ...userResolvers.Query,
    ...borrowResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
  
};

module.exports = resolvers;
