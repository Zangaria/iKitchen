import mongoose from "mongoose";
// eliran 30/01/24
const recipeSchema = new mongoose.Schema({
  recipeName: String,
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
      sIngred: [String],
      sIngredQt: [Number],
      sIngredMsr: [String],
      // מפתח של מצרך מטבלת מצרכים
      sAltIngred: [String],
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
  userId: mongoose.Schema.Types.ObjectId,
});

export const recipe = mongoose.model("recipes", recipeSchema);
