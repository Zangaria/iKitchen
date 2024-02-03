import { updateUserById } from "../../controllers/users/updateUserById.js";
          
export const updateUser = async (req,res) => {
   const  password  = req.body.password;
   const  userName  = req.body.userName
   const userId = req.user.userId;
   const data = {password,userId,userName}
   
  return res.json(await       updateUserById(data)  )
   
}