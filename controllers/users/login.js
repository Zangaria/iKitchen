import { User } from "../../models/user.js";
import { generateToken } from "../jwt/generate.js";

export const loginUser = async (data) => {
  try {
    
    const { email, password } = data;

    // Find the user with the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return { err: true, msg: "User not found" };
    }

    // Check the password (replace this with your actual password validation logic)
    if (user.password !== password) {
      return { err: true, msg: "Invalid password" };
    }

    // Check if the user is active
    if (!user.active) {
      return {
        err: true,
        msg: "User is not active. Please activate your account.",
      };
    }

        // Generate a token for the authenticated user
        const token = generateToken(user);

    return { err: false, msg: "Login successful", token };
  } catch (error) {
    return { err: true, msg: error.message };
  }
};
