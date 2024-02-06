import { addIngrediant } from "../../controllers/index.js";
// Eliran 06/02/24
// Add Ingredient Service

export const addIngredient = async (req, res) => {
  if (!req.body?.name || !req.body?.category || req.body.info.length() == 0)
    return res.status(400).json({ msg: "params missing" });

  const name = req.body.name;
  const category = req.body.category;
  const info = req.body.info;
  const ingredMeasure = req.body?.ingredMeasure;
  const ingredScaleToGr = req.body?.ingredScaleToGr;
  const allergens = req.body?.allergens;
  const ingredCarbs = req.body?.ingredCarbs;
  const ingredProt = req.body?.ingredProt;
  const ingredSugar = req.body?.ingredSugar;
  const ingredFat = req.body?.ingredFat;
  const ingredSodium = req.body?.ingredSodium;
  const cUser = req?.userId;

  const data = {
    name,
    category,
    info,
    ingredMeasure,
    ingredScaleToGr,
    allergens,
    ingredCarbs,
    ingredProt,
    ingredSugar,
    ingredFat,
    ingredSodium,
    cUser,
  };

  const res = await addIngrediant(data);

  if (!res?.err) {
    return res.status(201).json({
      msg: "the ingredient was created successfully",
    });
  } else {
    return res.status(400).json(res);
  }
};
