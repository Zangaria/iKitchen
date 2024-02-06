import { DocUpdate, Ingredient, User, recipe } from "../../models/index.js";
import { getIsraelDateTime } from "../../helpers/getdate.js";

//Eliran 06/02/24
//Recording an update of a new item in the updates table
export const updateDoc = async (data) => {
  if (
    !data?.docType ||
    !data?.userID ||
    !data?.docID ||
    data.editLog.length() == 0
  ) {
    return {
      code: 106,
      err: true,
      msg: "unrecorded update, missing parameters",
    };
  }
  data.uDate = new Date(getIsraelDateTime());
  try {
    //checking if the creation of the doc has already been recorded
    const existingDoc = await DocUpdate.findOne({
      docRef: "creation",
      docID: data.DocID,
    });
    if (!existingDoc) {
      //if the creation of the document has never been recorded
      if (data.docType === "user") {
        const userDoc = await User.findById({
          id: data.docID,
        });
        if (userDoc) {
          const uCreationDoc = new DocUpdate({
            docRef: "creation",
            docType: "user",
            uDate: userDoc.cDate,
            docID: data.docID,
            editNote: `creation record recovered by updateDoc controller on ${data.uDate}`,
          });
          await uCreationDoc.save();
        } else {
          return {
            code: 104,
            err: true,
            msg: "user not found",
          };
        }
      } else if (data.docType === "ingredient") {
        const ingredientDoc = await Ingredient.findById({
          id: data.docID,
        });
        if (ingredientDoc) {
          const iCreationDoc = new DocUpdate({
            docRef: "creation",
            docType: "ingredient",
            uDate: ingredientDoc.cDate,
            userID: ingredientDoc.cUser,
            docID: data.docID,
            editNote: `creation record recovered by updateDoc controller on ${data.uDate}`,
          });
          await iCreationDoc.save();
        } else {
          return {
            code: 104,
            err: true,
            msg: "ingredient not found",
          };
        }
      } else if (data.docType === "recipe") {
        const recipeDoc = await recipe.findById({
          id: data.docID,
        });
        if (recipeDoc) {
          const rCreationDoc = new DocUpdate({
            docRef: "creation",
            docType: "recipe",
            uDate: recipeDoc.cDate,
            userID: recipeDoc.cUser,
            docID: data.docID,
            editNote: `creation record recovered by updateDoc controller on ${data.uDate}`,
          });
          await rCreationDoc.save();
        } else {
          return {
            code: 104,
            err: true,
            msg: "recipe not found",
          };
        }
      }
    }

    data.docRef = "update";

    const updateRecord = new DocUpdate(data);
    const res = await updateRecord.save();

    return {
      err: false,
      msg: `update ${res?._id.toString()} has been recorded successfully.`,
    };
  } catch (err) {
    return { err: true, msg: err.message };
  }
};
