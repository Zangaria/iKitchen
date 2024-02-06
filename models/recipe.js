import mongoose from "mongoose";
// eliran 30/01/24
const recipeSchema = new mongoose.Schema({
  name: String,
  //מפתח של יצירה מטבלת עדכונים
  creationID: mongoose.Schema.Types.ObjectId,
  cDate: Date,
  cUser: mongoose.Schema.Types.ObjectId,
  //מערך למפתחות של עדכונים מטבלת עדכונים
  updateLog: [mongoose.Schema.Types.ObjectId],
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
  adjustable: {
    type: Boolean,
    default: false,
  },
  intro: [String],
  body: [
    //אובייקט של שלב במתכון
    {
      sName: String,
      //מפתח של מצרך מטבלת מצרכים
      sIngred: [mongoose.Schema.Types.ObjectId],
      sIngredQt: [Number],
      sIngredMsr: [String],
      // מפתח של מצרך מטבלת מצרכים
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
