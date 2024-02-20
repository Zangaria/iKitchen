import mongoose from "mongoose";
// eliran 02/02/24
const docUpdateSchema = new mongoose.Schema({
  docRef: {
    type: String,
    require: true,
  },
  docType: {
    type: String,
    require: true,
  },
  uDate: Date,
  //זיהוי המשתמש המעדכן
  userId: mongoose.Schema.Types.ObjectId,
  //זיהוי הרשומה שעודכנה
  docId: mongoose.Schema.Types.ObjectId,
  editLog: [String],
  editNote: String,
});

export const DocUpdate = mongoose.model("docupdates", docUpdateSchema);
