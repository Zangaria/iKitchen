import mongoose from "mongoose";
// eliran 02/02/24
const docUpdateSchema = new mongoose.Schema({
  docRef: {
    type: String,
    match: ["creation", "update"],
    require: true,
  },
  docType: {
    type: String,
    match: ["user", "recipe", "ingredient"],
    require: true,
  },
  uDate: Date,
  //זיהוי המשתמש המעדכן
  userID: mongoose.Schema.Types.ObjectId,
  //זיהוי הרשומה שעודכנה
  docID: mongoose.Schema.Types.ObjectId,
  editLog: [String],
  editNote: String,
});

export const DocUpdate = mongoose.model("docupdates", docUpdateSchema);
