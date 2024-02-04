import { Ingredient } from "../../models/index.js";

// Eliran 02/02/24
// data = {token:'toekn', and paramaeter you want update the params need be like the schema!!!!!}
// use this func to update user , user password or... username......
export const addIngrediant = async (data) => {
  if (!data?.name || !data?.category || data.info.length() == 0) {
    return {
      code: 106,
      err: true,
      msg: "the parameters name & category & info are required.",
    };
  }
  try {
    // check if the ingrediant exists
    const existingIngredient = await Ingredient.findOne({
      name: data.name,
    });
    if (existingIngredient)
      //if the ingrediant already exists
      return {
        code: 101,
        err: true,
        msg: "An Ingredient with this name already exists.",
      };
    else {
      //create a new ingrediant
      const newIngredient = new Ingredient(data);
      const res = await newIngredient.save();
      return res?._id.toString();
    }
  } catch (error) {
    return { err: true, msg: error.message };
  }
};
