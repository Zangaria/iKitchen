import { SendEmail } from "../../helpers/SendEmail.js";
import { User } from "../../models/User.js";
import { generateToken } from "../jwt/generate.js";

export const forgotPass = async (data) => {
  try {
    const { email } = data;

    // Find the user with the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return { err: true, msg: "User not found" };
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

    const emailData = {
      email: data.email,
      subject: "Reset Your Password",
      text: `https://app.com/?token=${token}`,
    };
    const send = await SendEmail(emailData);
    if (send?.err) return send;
    return {
      err: false,
      msg: "Link to Reset Your Password Send to YourEmail",
      code: 105,
    };
  } catch (error) {
    return { err: true, msg: error.message };
  }
};
