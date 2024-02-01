import { authMiddleware } from "./middleware/authMiddleware.js"
import { ForgotPassword } from "./services/users/ForgotPassword.js"
import { Login } from "./services/users/Login.js"
import { Register } from "./services/users/Register.js"
import { activeUser } from "./services/users/activeUser.js"
import { updateUser } from "./services/users/updateUser.js"



export const services= (app)=>{
    // Amitoz 27/01/24    
    app.post('/user/register',Register)
    app.post('/user/login',Login)
    app.get('/user/check',authMiddleware,activeUser)
    app.get('/user/activeUser',activeUser)
    app.post('/user/ForgotPassword',ForgotPassword) // 30/01/24
    app.post('/user/updateUser',authMiddleware,updateUser)
    
    // END

    
    
    
}