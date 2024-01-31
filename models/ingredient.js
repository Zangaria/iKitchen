import mongoose from "mongoose";
// Amitoz 27/01/24
// Wating to Cahnges....
const ingredientSchema = new mongoose.Schema({
    name: String,
    category: {
        type:String,
        required:true,
        match:["Flours","Grains","Nuts","Fruits&Vegtables","Herbs&Spices","Fats","Meats","Dairy","Vegan"]
    },
   
});

export const Ingredient = mongoose.model("ingredients", ingredientSchema);
