import { addWeb } from "../../controllers/webSite/add.js";
import { getWebByCode } from "../../controllers/webSite/getData.js";
c;

export const addToWeb = async (req, res) => {
  return res.json(await addWeb(req.body));
};

export const getDataWeb = async (req, res) => {
  return res.json(await getWebByCode(req.query.code));
};
