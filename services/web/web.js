import { addWeb,getWebByCode } from "../../controllers/index.js";

export const addToWeb  = async (req, res) => {
  
  return res.json(await addWeb(req.body));

};

export const getDataWeb = async (req, res) => {
  
  return res.json(await getWebByCode(req.query.code));

};
