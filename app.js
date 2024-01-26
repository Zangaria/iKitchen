import express from 'express';
import dotenv from 'dotenv';
import './configDB/connectToMongoDB.js';
import cors from 'cors';
import { services } from './services.js';

const app = express();
app.use(express.json());
dotenv.config();

app.use(
  cors({
    origin: '*',
  })
);
// Test 260124

const port = process.env.PORT || 3005;

services(app);

app.get('/*', (req, res) => {
  res.json({ msg: 'service is up', Approved: true });
});
