import { newIngredient } from "./ingredients/newIngredient.js";
import { newRecipe } from "./recipes/newRecipe.js";
import { activeUser } from "./users/activeUser.js";
import { ForgotPassword } from "./users/ForgotPassword.js";
import { Login } from "./users/Login.js";
import { Register } from "./users/Register.js";
import { updateUser } from "./users/updateUser.js";
import { addToWeb, getDataWeb } from "./web/web.js";
// user services
export { activeUser, ForgotPassword, Login, Register, updateUser };
//website services
export { addToWeb, getDataWeb };
//ingredient services
export { newIngredient };
//recipe services
export { newRecipe };
