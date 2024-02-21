const Borrow = require('../models/borrow');

const borrowResolvers = {
  Query: {
    borrows: async () => {
      return await Borrow.find();
    },
    borrow: async (_, { id }) => {
      return await Borrow.findById(id);
    },
  },
  
};

module.exports = borrowResolvers;
