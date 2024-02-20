// Eliran 06/02/24

import { addRecipe } from "../../controllers/recipes/addRecipe.js";

//input req.user req.recipe
export const newRecipe = async (req, res) => {
  const userId = req.user?.userId;
  const {
    recipeName,
    themeIMG,
    coverIMG,
    rImgCap,
    tags,
    prepTime,
    cookTime,
    difficulty,
    adjustable,
    intro,
    body,
    tips,
    closing,
    views,
    saved,
  } = req.body;
  const data = {
    userId,
    recipeName,
    themeIMG,
    coverIMG,
    rImgCap,
    tags,
    prepTime,
    cookTime,
    difficulty,
    adjustable,
    intro,
    body,
    tips,
    closing,
    views,
    saved,
  };

  const response = await addRecipe(data);

  if (!response?.err) {
    return res
      .status(201)
      .json({ msg: "the recipe has been created successfully." });
  } else {
    return res.status(401).json(response);
  }
};
