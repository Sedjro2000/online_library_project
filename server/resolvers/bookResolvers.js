const Book = require('../models/book');

const bookResolvers = {
    Query: {
      books: async () => {
        return await Book.find();
      },
      book: async (_, { id }) => {
        return await Book.findById(id);
      },
    },
    
  };
  
  module.exports = bookResolvers;