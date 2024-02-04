//import { activeUserById } from "../../controllers/users/activeUserByID.js";
import { activeUserById } from "../../controllers/index.js";

// Active User By ID (MongoID)
// Amitoz 27/01/24
// Wating... After Active Need Run func To Login And Catch The Token And Return in this Servies...

export const activeUser = async (req, res) => {
  const { userid } = req.query;
  const response = await activeUserById(userid);
  return res.json(response)
  if (!response?.err) {
    return res.status(200).json({ msg: "User Is Active NOW" });
  } else return res.status(401).json(response);
};
