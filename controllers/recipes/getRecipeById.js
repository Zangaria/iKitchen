import { recipe } from "../../models/recipe.js";

export const recipeById = async (id) => {
  try {
    const recipeFound = await recipe.findById(id);
    if (recipeFound) {
      return { err: false, code: 100, recipeFound };
    } else {
      return { err: true, code: 104, msg: "recipe not found" };
    }
  } catch (err) {
    return { err: true, msg: "something went wrong" };
  }
};
