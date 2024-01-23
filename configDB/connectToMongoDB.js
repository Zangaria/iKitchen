import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USER = process.env.MONGOUSER;
const PASS = process.env.MONGOPASSWORD;

mongoose.set('strictQuery', true);
mongoose.connect(
  `mongodb+srv://${USER}:${PASS}@zangaria.gfmd0on.mongodb.net/iKitchen`
);
