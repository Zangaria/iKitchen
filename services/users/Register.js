import { addUser } from "../../controllers/users/addUser.js";
import { SendEmail } from "../../helpers/SendEmail.js";


// Amitoz 27/01/24
// Register
export const Register = async (req,res) => {
   const response =  await addUser(req.body); // This Response Have the ID of the user that created
   
   if (!response?.err)
   {
      const emailRes = {email:req.body.email,subject:`Wellcome ${req.body.userName}`,text:`Enter this link to Active Your User:  https://api-ikitchen.amio.co.il/activeUser?userid=${response}`}
      const send = await SendEmail(emailRes);
      if (send?.err)
      return res.status(400).json(send)
      else
      return res.status(200).json({msg:"user created, send to email link to active your user",code:100})
   }
   else 
   return res.status(401).json(response)
   return res.json(response)
    
    
}