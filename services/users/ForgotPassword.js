import { forgotPass } from "../../controllers";



export const ForgotPassword = async (req,res) => {
    
    const response = await forgotPass(req.body);
    return res.json(response)
   if (!response?.err)
   {
      return res.status(200).json({msg:"User Is Active NOW"})
   }
   else 
   return res.status(401).json(response)
}