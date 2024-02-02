import mongoose from "mongoose";
// eliran 30/01/24
const ingredientSchema = new mongoose.Schema({
  name: String,
  category: {
    type: String,
    required: true,
    match: [
      "Flours",
      "Grains",
      "Nuts",
      "Fruits&Vegtables",
      "Herbs&Spices",
      "Fats",
      "Meats",
      "Dairy",
      "Vegan",
      "Preserves",
      "Other",
    ],
  },
  info: [String],
  ingredMeasure: [String],
  ingredScaleToGr: [Number],
  allergens: [String],
  indgredCarbs: [Number],
  indgredProt: [Number],
  indgredSugar: [Number],
  ingredFat: [Number],
  indgredSodium: [Number],
});

export const Ingredient = mongoose.model("ingredients", ingredientSchema);
