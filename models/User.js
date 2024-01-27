import mongoose from "mongoose";
// Amitoz 27/01/24
// Wating to Cahnges....
const UserSchema = new mongoose.Schema({
    userName: String,
    password: String,
    loginLog: [Date],
    email: {
        type: String,
    //    unique: true,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
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
    active: Boolean
});

export const User = mongoose.model("Users", UserSchema);
