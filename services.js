import { Register } from "./services/users/Register.js"
import { activeUser } from "./services/users/activeUser.js"



export const services= (app)=>{
    // Amitoz 27/01/24    
    app.post('/register',Register)
    app.get('/activeUser',activeUser)
    // END

    
    
    
}