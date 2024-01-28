import express from 'express';
import dotenv from 'dotenv';
import './configDB/connectToMongoDB.js';
import cors from 'cors';
import { services } from './services.js';
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: '*',
  })
);


services(app);





app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

app.get('/*', (req, res) => {
  res.json({ msg: 'service is up', Approved: true });
});
