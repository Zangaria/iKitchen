import mongoose from "mongoose";
// eliran 02/02/24
const creationSchema = new mongoose.Schema({
  docType:{
    type:String,
    match:["user","recipe","ingrediant"]
  },
  creationDate:Date,
  //זיהוי המשתמש היוצר
  userID:mongoose.Schema.Types.ObjectId,
  //זיהוי הרשומה שנוצרה
  docID:mongoose.Schema.Types.ObjectId,

});

export const Creation = mongoose.model("updates", creationSchema);
