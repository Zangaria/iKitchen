import { recipe } from "../../models/recipe.js";

export const getRecipes = async () => {
  try {
    const recipes = await recipe.find({});

    if (recipes.length >= 1) {
      return recipes;
    } else return { err: true, msg: "something went wrong" };
  } catch (err) {
    return { err: true, msg: err };
  }
};
