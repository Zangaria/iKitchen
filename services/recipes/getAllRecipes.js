import { getRecipes } from "../../controllers/recipes/getRecipes.js";

export const getAllRecipes = async (req, res) => {
  return res.json(await getRecipes());
};
