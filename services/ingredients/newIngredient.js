import { addIngrediant } from "../../controllers/index.js";
// Eliran 06/02/24
// Add Ingredient Service
// 13/02/24
// remove cuser and cdate from data

export const newIngredient = async (req, res) => {
  if (
    !req.body?.ingredName ||
    !req.body?.category ||
    req.body?.info.length() == 0
  )
    return res.status(400).json({ msg: "params missing" });

  const data = ({
    ingredName,
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
  } = req.body);

  const response = await addIngrediant(data);

  if (!response?.err) {
    return response.status(201).json({
      msg: "the ingredient was created successfully",
    });
  } else {
    return res.status(400).json(response);
  }
};
