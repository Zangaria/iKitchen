import { authMiddleware } from "./middleware/authMiddleware.js"
import { Login } from "./services/users/Login.js"
import { Register } from "./services/users/Register.js"
import { activeUser } from "./services/users/activeUser.js"



export const services= (app)=>{
    // Amitoz 27/01/24    
    app.post('/register',Register)
    app.post('/login',Login)
    app.get('/check',authMiddleware,activeUser)
    app.get('/activeUser',activeUser)
    // END

    
    
    
}