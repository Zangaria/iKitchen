import { addUser } from "../../controllers/users/addUser.js";
import { SendEmail } from "../../helpers/SendEmail.js";

export const Register = async (req,res) => {
   const response =  await addUser(req.body);

   if (!response?.err)
   {
      const emailRes = {email:req.body.email,subject:`Wellcome ${req.body.userName}`,text:`Enter this link to Active Your User: ${response}`}
      const send = await SendEmail(emailRes);
      if (send?.err)
      return res.status(400).json(send)
      else
      return res.status(200).json({msg:"user created, send to email link to active your user"})

   }
   else 
   return res.status(401).json(response)
   return res.json(response)
    
    
}