import { recipe } from "../../models/recipe.js";
import { createDoc } from "../docUpdates/createDoc.js";

// Eliran 06/02/24
// adding the create record functionality

// Eliran 04/02/24
// data = {token:'toekn', and paramaeter you want update the params need be like the schema!!!!!}
// use this func to update user , user password or... username......
export const addRecipe = async (data) => {
  if (!data?.userId) {
    return {
      code: 103,
      err: true,
      msg: "Unautherized, please log in.",
    };
  }
  if (
    !data?.recipeName ||
    !data?.themeIMG ||
    data.tags.length == 0 ||
    data.body.length == 0
  ) {
    return {
      code: 106,
      err: true,
      msg: "one or more parameters is missing.",
    };
  }
  try {
    // //create a new recipe
    const newRecipe = new recipe(data);
    const res = await newRecipe.save();

    const docRef = "creation";
    const docType = "recipe";
    const userId = data.userId;
    const docId = res?._id;
    const recordCreation = { docRef, docType, userId, docId };
    const recordRes = await createDoc(recordCreation);
    if (recordRes?.err) {
      console.log(recordRes.msg);
    }
    return res?._id.toString();
  } catch (error) {
    return { err: true, msg: error.message };
  }
};
