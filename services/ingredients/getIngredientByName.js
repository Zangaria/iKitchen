import { getIngredient } from "../../controllers/ingredients/getIngredient.js";

export const getIngredientByName = async (req, res) => {

    
   return res.json(await getIngredient(req.qurey.ingredName)) 
};
