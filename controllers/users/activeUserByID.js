import { getIsraelDateTime } from "../../helpers/getdate.js";
import { User } from "../../models/User.js";
import { generateToken } from "../jwt/generate.js";

export const activeUserById = async (userId) => {
  try {
    // Find the user by ID
    const user = await User.findById(userId);

    // Check if the user exists
    if (user) {
      const currentTime = new Date(getIsraelDateTime());
      const userUpdateTime = new Date(user.uDate); // Convert to Date object

      // Check if both currentTime and userUpdateTime are valid dates before proceeding
      if (!isNaN(currentTime.getTime()) && !isNaN(userUpdateTime.getTime())) {
        // Calculate the time difference in minutes
        const timeDifference = Math.floor(
          (currentTime - userUpdateTime) / (60 * 1000)
        );
        console.log("Current Time:", currentTime);
        console.log("User Update Time:", userUpdateTime);

        // Check if the user is within the 5-minute window and is not already active
        if (timeDifference <= 5 && !user.active) {
          // Activate the user
          user.active = true;
          await user.save();
          const token = generateToken(user);
          return { success: true, msg: "User activated successfully." , token:token };
        } else if (timeDifference > 5 && !user.active) {
          // Delete the expired user
          await User.findByIdAndDelete(userId);
          return {
            err: true,
            msg: "User link expired. The user has been deleted.",
          };
        } else {
          // User not found or already active, show expired message
          return { err: true, msg: "User link expired." };
        }
      } else {
        // Invalid date(s)
        return { err: true, msg: "Invalid date(s)." };
      }
    } else {
      // User not found, show expired message
      return { err: true, msg: "User link expired." };
    }
  } catch (error) {
    return { err: true, msg: error };
  }
};
