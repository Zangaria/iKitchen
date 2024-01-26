import { Register } from "./services/users/Register.js"



export const services= (app)=>{

    
    app.post('/register',Register)

    
}