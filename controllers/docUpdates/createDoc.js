import { getIsraelDateTime } from "../../helpers/getdate.js";
import { DocUpdate } from "../../models/docUpdate.js";

//Eliran 06/02/24
//Recording a creation of a new item in the updates table
export const createDoc = async (data) => {
  if (!data?.docType || !data?.docId) {
    return {
      code: 106,
      err: true,
      msg: "unrecorded creation, missing parameters",
    };
  }
  try {
    //checking if the creation of the doc already been recorded
    const existingDoc = await DocUpdate.findOne({
      docRef: "creation",
      docId: data.docId,
    });
    if (existingDoc) {
      //if it has, this will have the controller for updateDoc
      return {
        code: 106,
        err: true,
        msg: "unrecorded creation, the document has already been recorded.",
      };
    } else {
      data.docRef = "creation";
      data.uDate = new Date(getIsraelDateTime());
      const creationRecord = new DocUpdate(data);
      const res = await creationRecord.save();

      return {
        err: false,
        msg: `creation ${res?._id.toString()} has been recorded successfully.`,
      };
    }
  } catch (err) {
    return { err: true, msg: err.message };
  }
};
