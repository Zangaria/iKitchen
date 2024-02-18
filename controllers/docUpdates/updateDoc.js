import { getIsraelDateTime } from "../../helpers/getdate.js";
import { DocUpdate } from "../../models/docUpdate.js";

//Eliran 06/02/24
//Recording an update of a new item in the updates table
export const updateDoc = async (data) => {
  if (
    !data?.docType ||
    !data?.userId ||
    !data?.docId ||
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
