import mongoose from 'mongoose';
// Amitoz 27/01/24
// Wating to Cahnges....
const userSchema = new mongoose.Schema({
  userName: String,
  //Eliran 06/02/24
  //1- Admin 2- Moderator 3- Member
  role: {
    type: Number,
    match: [1, 2, 3],
    default: 1,
  },
  password: String,
  loginLog: [Date],
  email: {
    type: String,
    //    unique: true,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  preferences: {
    theme: String,
    language: String,
    notifications: Boolean,
    // Add more preferences as needed
  },
  myRecipes: [String],
  Invalidpassword: Boolean,
  uDate: Date,
  active: Boolean,
  // adding creation date and user
  cDate: Date,
});

export const User = mongoose.model(
  'users',
  userSchema
);
