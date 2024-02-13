import mongoose from "mongoose";
// eliran 30/01/24
const ingredientSchema = new mongoose.Schema({
  ingredName: String,
  category: {
    type: String,
    require: true,
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
  ingredCals: Number,
  ingredCarbs: Number,
  ingredProt: Number,
  ingredSugar: Number,
  ingredFat: Number,
  ingredSodium: Number,
});

export const Ingredient = mongoose.model("ingredients", ingredientSchema);
