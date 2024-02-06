import { hashUserPassword } from "../../helpers/bcrypt.js";
import { User } from "../../models/User.js";

// Amitoz 30/01/24
// data = {token:'toekn', and paramaeter you want update the params need be like the schema!!!!!}
// use this func to update user , user password or... username......
export const updateUserById = async (data) => {
  const { userId, password, userName } = data;

  const hashPassword = hashUserPassword(password);

  try {
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return { err: true, msg: "User not found" };
    }

    // Update fields if they exist in the data object
    if (password) {
      user.password = hashPassword;
      
    }

    if (userName) {
      user.userName = userName;
    }

    // Save the updated user to the database
    await user.save();

    return {
      err: false,
      msg: "User data updated successfully",
    };
  } catch (error) {
    return { err: true, msg: error.message };
  }
};
