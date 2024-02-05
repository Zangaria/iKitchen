import { authMiddleware } from "./middleware/authMiddleware.js";

export const services = (app) => {
  // Amitoz 27/01/24
  app.post("/user/register", Register);
  app.post("/user/login", Login);
  app.get("/user/check", authMiddleware, activeUser);
  app.get("/user/activeUser", activeUser);
  app.post("/user/ForgotPassword", ForgotPassword); // 30/01/24
  app.patch("/user/updateUser", authMiddleware, updateUser);
  app.get("/web",getDataWeb)
  app.post("/web",addToWeb)
  // END
  //Eliran 05/02/24

};
