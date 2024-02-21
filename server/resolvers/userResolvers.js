const User = require('../models/user')

const userResolvers = {
    Query: {
      users: async () => {
        return await User.find();
      },
      user: async (_, { id }) => {
        return await User.findById(id);
      },
    },

    Mutation: {
      // Résolveur pour ajouter un nouvel utilisateur
      addUser: async (_, { username, email, password }) => {
        const newUser = new User({ username, email, password });
        await newUser.save();
        return newUser;
      },
      
    },
   
  };
  
  module.exports = userResolvers;