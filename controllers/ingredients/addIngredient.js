import { getIsraelDateTime } from "../../helpers/getdate.js";
import { Ingredient } from "../../models/index.js";
import { createDoc } from "../docUpdates/createDoc.js";

// Eliran 02/02/24
// data = {token:'toekn', and paramaeter you want update the params need be like the schema!!!!!}
// use this func to update user , user password or... username......
export const addIngrediant = async (data) => {
  if (!data?.name || !data?.category || !data?.cUser || data.info.length == 0) {
    return {
      code: 106,
      err: true,
      msg: "the parameters name & category & cUser & info are required.",
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
      newIngredient.cDate = getIsraelDateTime();
      const res = await newIngredient.save();
      //record the creation on the updates table
      const docRef = "creation";
      const docType = "ingredient";
      const userID = data.cUser;
      const docID = response;
      const recordCreation = { docRef, docType, uDate, userID, docID };
      const recordRes = await createDoc(recordCreation);
      if (recordRes?.err) {
        console.log(recordRes.msg);
      }
      return res?._id.toString();
    }
  } catch (error) {
    return { err: true, msg: error.message };
  }
};
