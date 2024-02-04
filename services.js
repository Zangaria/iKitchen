import { authMiddleware } from "./middleware/authMiddleware.js";
import {
  Register,
  activeUser,
  Login,
  ForgotPassword,
  updateUser,
} from "./services/index.js";

export const services = (app) => {
  // Amitoz 27/01/24
  app.post("/user/register", Register);
  app.post("/user/login", Login);
  app.get("/user/check", authMiddleware, activeUser);
  app.get("/user/activeUser", activeUser);
  app.post("/user/ForgotPassword", ForgotPassword); // 30/01/24
  app.patch("/user/updateUser", authMiddleware, updateUser);

  // END
};
