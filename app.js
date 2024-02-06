import express from "express";
import dotenv from "dotenv";
import "./configDB/connectToMongoDB.js";
import cors from "cors";
import { services } from "./services.js";
import { connectToMongoDB } from "./configDB/connectToMongoDB.js";
import { addWeb } from "./controllers/webSite/add.js";
import { addRecipe } from "./controllers/index.js";
const app = express();
app.use(express.json());
dotenv.config();

connectToMongoDB();
const data = {
  userId: "65bfcb4bb9955df84b93e49b",
  recipeName: "test recipe",
  themeIMG: "oijohrhbri",
  tags: ["test 1", "test 2"],
  body: [{ sInstruct: ["step 1", "step 2"] }],
};
const response = await addRecipe(data);
console.log(response);
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "*",
  })
);
services(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

app.all("/*", (req, res) => {
  res.json({ msg: "service is up", method: req.method });
});
