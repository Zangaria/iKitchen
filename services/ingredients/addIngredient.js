import { addIngrediant } from "../../controllers/index.js";
// Eliran 06/02/24
// Add Ingredient Service

export const addIngredient = async (req,res)=>{

    const response=await addIngrediant(req.body);

    if(!response?.err){
        return res.status(201).json({msg: "the ingredient was created successfully"});
    }
    else{
        return res.status(400).json(response);
    }
}