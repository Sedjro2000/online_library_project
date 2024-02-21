import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  genre: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const borrowSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  borrowedDate: { type: Date, default: Date.now },
  returnDate: { type: Date },
});

export const Book = mongoose.model('Book', bookSchema);
export const User = mongoose.model('User', userSchema);
export const Borrow = mongoose.model('Borrow', borrowSchema);
