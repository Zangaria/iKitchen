import { User } from "../../models/index.js";
import { updateDoc } from "../../controllers/index.js";
// Amitoz 30/01/24
// data = {token:'toekn', and paramaeter you want update the params need be like the schema!!!!!}
// use this func to update user , user password or... username......
export const updateUserById = async (data) => {
  const { userId, password, userName } = data;

  try {
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return { err: true, msg: "User not found" };
    }
    const editLog = [];

    // Update fields if they exist in the data object
    if (password) {
      user.password = password;
      editLog.push("changed password");
    }

    if (userName) {
      editLog.push(`changed name from ${user.userName} to ${userName}`);
      user.userName = userName;
    }
    editLog.push("end of log");

    // Save the updated user to the database
    await user.save();
    //Eliran 06/02/24
    //recording the update in the updates table
    const docType = "user";
    const docID = userId;
    const res = await updateDoc({ docType, docID, userId, editLog });
    if (res?.err) {
      console.log(res?.msg);
    }

    return {
      err: false,
      msg: "User data updated successfully",
    };
  } catch (error) {
    return { err: true, msg: error.message };
  }
};
