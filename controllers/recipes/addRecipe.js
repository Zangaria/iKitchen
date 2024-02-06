import { recipe } from "../../models/index.js";
import { createDoc } from "../docUpdates/createDoc.js";

// Eliran 06/02/24
// adding the create record functionality

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

    const docRef = "creation";
    const docType = "recipe";
    const userID = data.cUser;
    const docID = res?._id;
    const recordCreation = { docRef, docType, uDate, userID, docID };
    const recordRes = await createDoc(recordCreation);
    if (recordRes?.err) {
      console.log(recordRes.msg);
    }
    return res?._id.toString();
  } catch (error) {
    return { err: true, msg: error.message };
  }
};
