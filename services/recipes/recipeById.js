import { recipeById } from "../../controllers/recipes/getRecipeById.js";

export const getRecipeByID = async (req, res) => {
  if (!req?.id) {
    return res.status(403).json({ err: true, msg: "recipe ID is required." });
  } else {
    try {
      return res.status(200).json(await recipeById(req?.id));
    } catch (err) {
      return res.json({ err: true, msg: err });
    }
  }
};
