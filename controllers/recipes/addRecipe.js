import { recipe } from "../../models/index.js";

// Eliran 04/02/24
// data = {token:'toekn', and paramaeter you want update the params need be like the schema!!!!!}
// use this func to update user , user password or... username......
export const addRecipe = async (data) => {
  if (
    !data?.name ||
    !data?.themeIMG ||
    data.tags.length() == 0 ||
    data.body.length() == 0
  ) {
    return {
      code: 106,
      err: true,
      msg: "one or two parameters is missing.",
    };
  }
  try {
    //create a new recipe
    const newRecipe = new recipe(data);
    const res = await newRecipe.save();
    return res?._id.toString();
  } catch (error) {
    return { err: true, msg: error.message };
  }
};
