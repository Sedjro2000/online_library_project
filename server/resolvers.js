import { Book, User, Borrow } from './models'; 

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find();
    },
    book: async (_, { id }) => {
      return await Book.findById(id);
    },
    users: async () => {
      return await User.find();
    },
    user: async (_, { id }) => {
      return await User.findById(id);
    },
    borrows: async () => {
      return await Borrow.find();
    },
    borrow: async (_, { id }) => {
      return await Borrow.findById(id);
    },
  },
  Book: {
    author: async (book) => {
      return await User.findById(book.author);
    },
  },
  Borrow: {
    user: async (borrow) => {
      return await User.findById(borrow.user);
    },
    book: async (borrow) => {
      return await Book.findById(borrow.book);
    },
  },
};

export default resolvers;
