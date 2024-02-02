import mongoose from "mongoose";
// eliran 30/01/24
const recipeSchema = new mongoose.Schema({
  name: String,
  //כאן כנראה שנחליף בטבלת יצירה כללית לשרת
  creation: {
    cDate: {
      type: Date,
      default: Date.now,
    },
    creatorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  //כאן כנראה שנחליף בטבלת עדכונים כללית לשרת
  updateLog: [
    {
      uDate: Date,
      uID: mongoose.Schema.Types.ObjectId,
      content: [String],
    },
  ],
  themeIMG: String,
  coverIMG: String,
  recipeIMG: [String],
  rImgCap: [String],
  tags: [String],
  prepTime: Number,
  cookTime: Number,
  difficulty: {
    type: Number,
    min: 0,
    max: 3,
  },
  adjustable: Boolean,
  intro: [String],
  body: [
    //אובייקט של שלב במתכון
    {
      sName: String,
      sIngred: [mongoose.Schema.Types.ObjectId],
      sIngredQt: [Number],
      sIngredMsr: [String],
      sAltIngred: [mongoose.Schema.Types.ObjectId],
      sIngredIndex: [Number],
      sAltQt: [Number],
      sAltMsr: [String],
      sIMG: [String],
      sImgCap: [String],
      sInstruct: [String],
      sTip: [String],
    },
  ],
  tips: [String],
  closing: [String],
  views: Number,
  saved: Number,
});

export const recipe = mongoose.model("recipes", recipeSchema);
