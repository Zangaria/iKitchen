import { authMiddleware } from "./middleware/authMiddleware.js";
import {
  Register,
  Login,
  newRecipe,
  newIngredient,
  activeUser,
  ForgotPassword,
  updateUser,
  getDataWeb,
  addToWeb,
} from "./services/index.js";

export const services = (app) => {
  // Amitoz 27/01/24
  app.post("/user/register", Register);
  app.post("/user/login", Login);
  app.get("/user/check", authMiddleware, activeUser);
  app.get("/user/activeUser", activeUser);
  app.post("/user/ForgotPassword", ForgotPassword); // 30/01/24
  app.patch("/user/updateUser", authMiddleware, updateUser);
  app.get("/web", getDataWeb);
  app.post("/web", addToWeb);
  // END
  //Eliran 05/02/24
  app.post("/ingredient/add", authMiddleware, newIngredient);
  app.post("/recipe/add", authMiddleware, newRecipe);
};
