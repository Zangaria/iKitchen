import { addRecipe } from "../../controllers/index.js";

// Eliran 06/02/24
//input req.user req.recipe
export const addRecipe = async (req, res) => {
  const data = ({
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
  } = req.user || req.recipe);

  const res = await addRecipe(data);

  if (!res?.err) {
    return res
      .status(201)
      .json({ msg: "the recipe has been created successfully." });
  } else {
    return res.status(401).json(res);
  }
};
