import mongoose from "mongoose";
// eliran 02/02/24
const updateSchema = new mongoose.Schema({
  docType:{
    type:String,
    match:["user","recipe","ingrediant"]
  },
  uDate:Date,
  //זיהוי המשתמש היוצר
  userID:mongoose.Schema.Types.ObjectId,
  //זיהוי הרשומה שנוצרה
  docID:mongoose.Schema.Types.ObjectId,
  editlog:[String],
});

export const Update = mongoose.model("updates", updateSchema);
